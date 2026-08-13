/*
 * enoblega.com.ar
 * Terminal engine
 *
 * Handles:
 * - User input
 * - Command execution
 * - History
 * - Tab autocomplete
 * - clear
 * - Prompt rendering
 */

document.addEventListener("DOMContentLoaded", () => {

    const terminalBody = document.querySelector(".terminal-body");

    if (!terminalBody) {
        return;
    }

    let commandHistory = [];
    let historyIndex = -1;

    let currentInput = "";

    const promptSymbol = "$";

    const availableCommands = [
        "help",
        "whoami",
        "skills",
        "experience",
        "projects",
        "project",
        "education",
        "courses",
        "contact",
        "ls",
        "pwd",
        "uname",
        "uptime",
        "sudo",
        "clear",
        "history"
    ];


    /* =====================================================
       INITIAL SCREEN
       ===================================================== */

    function initializeTerminal() {

        terminalBody.innerHTML = "";

        printWelcome();

        createPrompt();

    }


    function printWelcome() {

        const output = document.createElement("div");

        output.className = "terminal-output welcome-output";

        output.innerHTML = `
            <div>Welcome to <strong>enoblega.com.ar</strong></div>
            <div>Personal infrastructure portfolio</div>
            <br>
            <div>Type <span class="highlight">'help'</span> to see available commands.</div>
        `;

        terminalBody.appendChild(output);

        addSpacer();

    }


    /* =====================================================
       PROMPT
       ===================================================== */

    function createPrompt() {

        const line = document.createElement("div");

        line.className = "terminal-input-line";

        line.innerHTML = `
            <span class="prompt">${promptSymbol}</span>
            <input
                type="text"
                class="terminal-input"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                aria-label="Terminal input"
            >
        `;

        terminalBody.appendChild(line);

        const input = line.querySelector(".terminal-input");

        input.focus();

        input.addEventListener("keydown", handleInput);

        scrollToBottom();

    }


    /* =====================================================
       INPUT
       ===================================================== */

    function handleInput(event) {

        const input = event.target;

        switch (event.key) {

            case "Enter":
                event.preventDefault();

                executeInput(input.value.trim());

                break;


            case "ArrowUp":
                event.preventDefault();

                navigateHistory("up", input);

                break;


            case "ArrowDown":
                event.preventDefault();

                navigateHistory("down", input);

                break;


            case "Tab":
                event.preventDefault();

                autocomplete(input);

                break;
        }

    }


    /* =====================================================
       EXECUTE COMMAND
       ===================================================== */

    function executeInput(inputValue) {

        const inputLine = document.querySelector(
            ".terminal-input-line:last-child"
        );

        if (!inputLine) {
            return;
        }


        /* Freeze current input */

        const commandText = inputValue;

        inputLine.innerHTML = `
            <span class="prompt">${promptSymbol}</span>
            <span class="command">${escapeHtml(commandText)}</span>
        `;


        if (!commandText) {

            addSpacer();

            createPrompt();

            return;
        }


        /* Add command to history */

        commandHistory.push(commandText);

        historyIndex = commandHistory.length;


        /* Parse command */

        const parts = commandText.split(/\s+/);

        const commandName = parts[0].toLowerCase();

        const args = parts.slice(1);


        /* Special commands */

        if (commandName === "clear") {

            clearTerminal();

            return;
        }


        if (commandName === "history") {

            printHistory();

            createPrompt();

            return;
        }


        /* Normal command */

        const command = commandRegistry[commandName];


        if (!command) {

            printOutput(
                commandNotFound(commandName)
            );

            createPrompt();

            return;
        }


        try {

            const result = command.execute(args);

            printOutput(result);

        } catch (error) {

            console.error(error);

            printOutput(`
                <div class="error-output">
                    Error executing command.
                </div>
            `);

        }


        createPrompt();

    }


    /* =====================================================
       OUTPUT
       ===================================================== */

    function printOutput(content) {

        if (!content) {
            return;
        }

        const output = document.createElement("div");

        output.className = "terminal-command-output";

        output.innerHTML = content;

        terminalBody.appendChild(output);

        addSpacer();

        scrollToBottom();

    }


    function addSpacer() {

        const spacer = document.createElement("div");

        spacer.className = "terminal-spacer";

        terminalBody.appendChild(spacer);

    }


    /* =====================================================
       CLEAR
       ===================================================== */

    function clearTerminal() {

        terminalBody.innerHTML = "";

        createPrompt();

    }


    /* =====================================================
       HISTORY
       ===================================================== */

    function navigateHistory(direction, input) {

        if (!commandHistory.length) {
            return;
        }


        if (direction === "up") {

            if (historyIndex > 0) {
                historyIndex--;
            }

        } else {

            if (historyIndex < commandHistory.length - 1) {

                historyIndex++;

            } else {

                historyIndex = commandHistory.length;

                input.value = "";

                return;
            }
        }


        input.value = commandHistory[historyIndex] || "";

        moveCursorToEnd(input);

    }


    function printHistory() {

        if (!commandHistory.length) {

            printOutput(`
                <div class="system-output">
                    No commands in history.
                </div>
            `);

            return;
        }


        const historyOutput = commandHistory
            .map((command, index) => `
                <div class="history-line">
                    <span class="history-number">
                        ${index + 1}
                    </span>

                    <span>
                        ${escapeHtml(command)}
                    </span>
                </div>
            `)
            .join("");


        printOutput(`
            <div class="history-output">
                ${historyOutput}
            </div>
        `);

    }


    /* =====================================================
       AUTOCOMPLETE
       ===================================================== */

    function autocomplete(input) {

        const value = input.value.trim().toLowerCase();

        if (!value) {
            return;
        }


        const matches = availableCommands.filter(command =>
            command.startsWith(value)
        );


        if (matches.length === 1) {

            input.value = matches[0] + " ";

            moveCursorToEnd(input);

            return;
        }


        if (matches.length > 1) {

            printOutput(`
                <div class="autocomplete-output">
                    ${matches
                        .map(command => `
                            <span>${escapeHtml(command)}</span>
                        `)
                        .join(" ")}
                </div>
            `);

            createPrompt();

            return;
        }

    }


    /* =====================================================
       FOCUS
       ===================================================== */

    document.addEventListener("click", event => {

        /*
         * Don't steal focus when clicking a link.
         */
        if (event.target.closest("a")) {
            return;
        }

        focusInput();

    });


    function focusInput() {

        const input = document.querySelector(
            ".terminal-input-line:last-child .terminal-input"
        );

        if (input) {
            input.focus();
        }

    }


    /* =====================================================
       CURSOR
       ===================================================== */

    function moveCursorToEnd(input) {

        requestAnimationFrame(() => {

            input.selectionStart = input.value.length;
            input.selectionEnd = input.value.length;

        });

    }
  /* =====================================================
    SCROLL
    ===================================================== */

    function scrollToBottom() {

        terminalBody.scrollTop = terminalBody.scrollHeight;

    }   

    /* =====================================================
       HTML ESCAPE
       ===================================================== */

    function escapeHtml(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }

  
    /* =====================================================
       START
       ===================================================== */

    initializeTerminal();

});
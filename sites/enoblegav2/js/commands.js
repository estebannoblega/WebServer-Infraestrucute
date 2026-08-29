/*
 * enoblega.com.ar
 * Terminal commands
 *
 * This file defines what each terminal command returns.
 * Terminal behavior (input, history, autocomplete, rendering)
 * is handled separately by terminal.js.
 */


/* =========================================================
   Helpers
   ========================================================= */

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function commandBlock(title, content) {
    return `
        <div class="command-section">
            <div class="section-title">${escapeHtml(title)}</div>
            ${content}
        </div>
    `;
}


function listItems(items) {
    return `
        <div class="command-list">
            ${items.map(item => `
                <div class="command-list-item">
                    <span class="list-marker">›</span>
                    <span>${escapeHtml(item)}</span>
                </div>
            `).join("")}
        </div>
    `;
}


/* =========================================================
   HELP
   ========================================================= */

function commandHelp() {
    return `
        <div class="help-command">
            <div class="section-title">Available commands</div>

            <div class="command-list">
                <div class="command-list-item">
                    <span class="command-name">whoami</span>
                    <span>About me</span>
                </div>

                <div class="command-list-item">
                    <span class="command-name">skills</span>
                    <span>Technical skills</span>
                </div>

                <div class="command-list-item">
                    <span class="command-name">experience</span>
                    <span>Work experience</span>
                </div>

                <div class="command-list-item">
                    <span class="command-name">projects</span>
                    <span>Selected projects</span>
                </div>

                <div class="command-list-item">
                    <span class="command-name">project &lt;id&gt;</span>
                    <span>Project details</span>
                </div>

                <div class="command-list-item">
                    <span class="command-name">education</span>
                    <span>Academic background</span>
                </div>

                <div class="command-list-item">
                    <span class="command-name">courses</span>
                    <span>Courses and training</span>
                </div>

                <div class="command-list-item">
                    <span class="command-name">contact</span>
                    <span>Contact information</span>
                </div>

                <div class="command-list-item">
                    <span class="command-name">clear</span>
                    <span>Clear terminal</span>
                </div>
            </div>

            <div class="section-title secondary-title">System commands</div>

            <div class="command-list">
                <div class="command-list-item">
                    <span class="command-name">ls</span>
                    <span>List available sections</span>
                </div>

                <div class="command-list-item">
                    <span class="command-name">pwd</span>
                    <span>Show current directory</span>
                </div>

                <div class="command-list-item">
                    <span class="command-name">uname</span>
                    <span>Show system information</span>
                </div>

                <div class="command-list-item">
                    <span class="command-name">uptime</span>
                    <span>Show system uptime</span>
                </div>

                <div class="command-list-item">
                    <span class="command-name">history</span>
                    <span>Show command history</span>
                </div>
            </div>
        </div>
    `;
}


/* =========================================================
   WHOAMI
   ========================================================= */

function commandWhoami() {
    return `
        <div class="profile-output">

            <div class="profile-name">
                ${escapeHtml(profile.name)}
            </div>

            <div class="profile-title">
                ${escapeHtml(profile.title)}
            </div>

            <div class="profile-role">
                ${escapeHtml(profile.role)}
            </div>

            <div class="profile-location">
                ${escapeHtml(profile.location)}
            </div>

            <div class="output-divider"></div>

            <p>${escapeHtml(profile.summary)}</p>

            <p>${escapeHtml(profile.about)}</p>
        </div>
    `;
}


/* =========================================================
   SKILLS
   ========================================================= */

function commandSkills() {
    let output = "";

    Object.values(skills).forEach(category => {
        output += `
            <div class="skill-category">
                <div class="section-title">
                    ${escapeHtml(category.title)}
                </div>

                ${listItems(category.items)}
            </div>
        `;
    });

    return `
        <div class="skills-output">
            ${output}
        </div>
    `;
}


/* =========================================================
   EXPERIENCE
   ========================================================= */

function commandExperience() {
    return `
        <div class="experience-output">

            ${experience.map(job => `
                <article class="experience-item">

                    <div class="experience-period">
                        ${escapeHtml(job.period)}
                    </div>

                    <div class="experience-role">
                        ${escapeHtml(job.role)}
                    </div>

                    <div class="experience-company">
                        ${escapeHtml(job.company)}
                    </div>

                    <p>
                        ${escapeHtml(job.description)}
                    </p>

                    <div class="subsection-title">
                        Responsibilities
                    </div>

                    ${listItems(job.responsibilities)}

                    <div class="subsection-title">
                        Environment
                    </div>

                    ${listItems(job.environment)}

                </article>
            `).join("")}

        </div>
    `;
}


/* =========================================================
   PROJECTS
   ========================================================= */

function commandProjects() {
    return `
        <div class="projects-output">

            ${projects.map(project => `
                <article class="project-item">

                    <div class="project-id">
                        [${escapeHtml(project.id)}]
                    </div>

                    <div class="project-name">
                        ${escapeHtml(project.name)}
                    </div>

                    <div class="project-technologies">
                        ${project.technologies
                            .map(tech => escapeHtml(tech))
                            .join(" / ")}
                    </div>

                    <p>
                        ${escapeHtml(project.description)}
                    </p>

                    <div class="project-command-hint">
                        Use:
                        <span>project ${escapeHtml(project.id)}</span>
                    </div>

                </article>
            `).join("")}

        </div>
    `;
}


/* =========================================================
   PROJECT DETAIL
   ========================================================= */

function commandProject(id) {
    const normalizedId = String(id).padStart(2, "0");

    const project = projects.find(
        item => item.id === normalizedId
    );

    if (!project) {
        return `
            <div class="error-output">
                Project not found: ${escapeHtml(id)}

                <br><br>

                Available projects:
                <br>
                ${projects.map(item =>
                    `project ${escapeHtml(item.id)}`
                ).join("<br>")}
            </div>
        `;
    }

    let output = `
        <article class="project-detail">

            <div class="project-id">
                [${escapeHtml(project.id)}]
            </div>

            <div class="project-name">
                ${escapeHtml(project.name)}
            </div>

            <div class="project-technologies">
                ${project.technologies
                    .map(tech => escapeHtml(tech))
                    .join(" / ")}
            </div>

            <div class="output-divider"></div>

            <p>
                ${escapeHtml(project.description)}
            </p>
    `;


    /* Project details */

    if (project.details) {
        output += `
            <div class="subsection-title">
                Details
            </div>

            ${listItems(project.details)}
        `;
    }


    /* Project implementations */

    if (project.implementations) {
        output += `
            <div class="subsection-title">
                Implementations
            </div>

            <div class="repository-list">

                ${project.implementations.map(item => `
                    <div class="repository-item">
                        <span class="list-marker">›</span>

                        <span>
                            ${escapeHtml(item.label)}:
                        </span>

                        <a
                            href="${escapeHtml(item.url)}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ${escapeHtml(item.url)}
                        </a>
                    </div>
                `).join("")}

            </div>
        `;
    }


    /* Main repository */

    if (project.repository) {
        output += `
            <div class="subsection-title">
                Repository
            </div>

            <div class="repository-item">
                <span class="list-marker">›</span>

                <a
                    href="${escapeHtml(project.repository.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ${escapeHtml(project.repository.label)}
                </a>
            </div>
        `;
    }


    output += `
        </article>
    `;

    return output;
}


/* =========================================================
   EDUCATION
   ========================================================= */

function commandEducation() {
    return `
        <div class="education-output">

            ${education.map(item => `
                <article class="education-item">

                    <div class="education-period">
                        ${escapeHtml(item.period)}
                    </div>

                    <div class="education-title">
                        ${escapeHtml(item.title)}
                    </div>

                    <div class="education-institution">
                        ${escapeHtml(item.institution)}
                    </div>

                    <div class="education-faculty">
                        ${escapeHtml(item.faculty)}
                    </div>

                </article>
            `).join("")}

        </div>
    `;
}


/* =========================================================
   COURSES
   ========================================================= */

function commandCourses() {
    return `
        <div class="courses-output">

            ${courses.map(course => `
                <article class="course-item">

                    <div class="course-year">
                        ${escapeHtml(course.year)}
                    </div>

                    <div class="course-name">
                        ${escapeHtml(course.name)}
                    </div>

                    <div class="course-institution">
                        ${escapeHtml(course.institution)}
                    </div>

                    ${course.duration ? `
                        <div class="course-duration">
                            Duration: ${escapeHtml(course.duration)}
                        </div>
                    ` : ""}

                    <div class="course-command-hint">
                        ${course.certificate
                            ? "Certificate available"
                            : "Course"}
                    </div>

                </article>
            `).join("")}

            <div class="course-info">
                Use <span>courses --details</span>
                to display certificate information.
            </div>

        </div>
    `;
}


/* =========================================================
   COURSE DETAILS
   ========================================================= */

function commandCoursesDetails() {
    return `
        <div class="course-details-output">

            ${courses.map(course => `
                <article class="course-detail">

                    <div class="course-year">
                        ${escapeHtml(course.year)}
                    </div>

                    <div class="course-name">
                        ${escapeHtml(course.name)}
                    </div>

                    <div class="course-institution">
                        ${escapeHtml(course.institution)}
                    </div>

                    ${course.instructor ? `
                        <div>
                            Instructor:
                            ${escapeHtml(course.instructor)}
                        </div>
                    ` : ""}

                    ${course.duration ? `
                        <div>
                            Duration:
                            ${escapeHtml(course.duration)}
                        </div>
                    ` : ""}

                    ${course.certificateId ? `
                        <div>
                            Certificate ID:
                            ${escapeHtml(course.certificateId)}
                        </div>
                    ` : ""}

                    ${course.verificationUrl ? `
                        <div class="repository-item">
                            <span class="list-marker">›</span>

                            <a
                                href="${escapeHtml(course.verificationUrl)}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Verify certificate
                            </a>
                        </div>
                    ` : ""}

                </article>
            `).join("")}

        </div>
    `;
}


/* =========================================================
   CONTACT
   ========================================================= */

function commandContact() {
    return `
        <div class="contact-output">

            <div class="contact-label">
                Email
            </div>

            <a href="mailto:${escapeHtml(contact.email)}">
                ${escapeHtml(contact.email)}
            </a>

        </div>
    `;
}


/* =========================================================
   LS
   ========================================================= */

function commandLs() {
    return `
        <div class="ls-output">
            <span class="directory">about.txt</span>
            <span class="directory">skills/</span>
            <span class="directory">experience/</span>
            <span class="directory">projects/</span>
            <span class="directory">education/</span>
            <span class="directory">courses/</span>
            <span class="directory">contact.txt</span>
        </div>
    `;
}


/* =========================================================
   PWD
   ========================================================= */

function commandPwd() {
    return `
        <div class="system-output">
            /home/esteban
        </div>
    `;
}


/* =========================================================
   UNAME
   ========================================================= */

function commandUname() {
    return `
        <div class="system-output">
            Linux enoblega 6.x x86_64 GNU/Linux
        </div>
    `;
}


/* =========================================================
   UPTIME
   ========================================================= */

function commandUptime() {
    return `
        <div class="system-output">
            portfolio online · learning infrastructure 24/7
        </div>
    `;
}


/* =========================================================
   SUDO
   ========================================================= */

function commandSudo() {
    return `
        <div class="system-output sudo-output">
            Nice try. 😉
        </div>
    `;
}


/* =========================================================
   UNKNOWN COMMAND
   ========================================================= */

function commandNotFound(command) {
    return `
        <div class="error-output">
            bash: ${escapeHtml(command)}: command not found

            <br><br>

            Type <span>'help'</span> to see available commands.
        </div>
    `;
}


/* =========================================================
   COMMAND REGISTRY
   ========================================================= */

const commandRegistry = {
    help: {
        execute: () => commandHelp()
    },

    whoami: {
        execute: () => commandWhoami()
    },

    skills: {
        execute: () => commandSkills()
    },

    experience: {
        execute: () => commandExperience()
    },

    projects: {
        execute: () => commandProjects()
    },

    project: {
        execute: args => {
            if (!args.length) {
                return commandProjects();
            }

            return commandProject(args[0]);
        }
    },

    education: {
        execute: () => commandEducation()
    },

    courses: {
        execute: args => {
            if (args[0] === "--details") {
                return commandCoursesDetails();
            }

            return commandCourses();
        }
    },

    contact: {
        execute: () => commandContact()
    },

    ls: {
        execute: () => commandLs()
    },

    pwd: {
        execute: () => commandPwd()
    },

    uname: {
        execute: () => commandUname()
    },

    uptime: {
        execute: () => commandUptime()
    },

    sudo: {
        execute: () => commandSudo()
    }
};
/*
 * enoblega.com.ar
 * Landing renderer
 *
 * Builds the traditional landing sections from the data
 * defined in data.js, so the content lives in a single place.
 */

function esc(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   ABOUT
   ========================================================= */

function renderAbout() {
    const body = document.querySelector(".about-body");
    if (!body) {
        return;
    }

    body.innerHTML = `
        <div class="profile-output">
            <div class="profile-name">${esc(profile.name)}</div>
            <div class="profile-title">${esc(profile.title)}</div>
            <div class="profile-role">${esc(profile.role)}</div>
            <div class="profile-location">${esc(profile.location)}</div>
            <div class="output-divider"></div>
            <p>${esc(profile.summary)}</p>
            <p>${esc(profile.about)}</p>
        </div>
    `;
}


/* =========================================================
   SKILLS
   ========================================================= */

function renderSkills() {
    const body = document.querySelector(".skills-body");
    if (!body) {
        return;
    }

    const categories = Object.values(skills)
        .map(category => `
            <div class="skill-category">
                <div class="section-title">${esc(category.title)}</div>
                <div class="command-list">
                    ${category.items.map(item => `
                        <div class="command-list-item">
                            <span class="list-marker">›</span>
                            <span>${esc(item)}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        `)
        .join("");

    body.innerHTML = categories;
}


/* =========================================================
   EXPERIENCE
   ========================================================= */

function renderExperience() {
    const body = document.querySelector(".experience-body");
    if (!body) {
        return;
    }

    body.innerHTML = experience.map(job => `
        <article class="experience-item">
            <div class="experience-period">${esc(job.period)}</div>
            <div class="experience-role">${esc(job.role)}</div>
            <div class="experience-company">${esc(job.company)}</div>
            <p>${esc(job.description)}</p>

            <div class="subsection-title">Responsibilities</div>
            <div class="command-list">
                ${job.responsibilities.map(item => `
                    <div class="command-list-item">
                        <span class="list-marker">›</span>
                        <span>${esc(item)}</span>
                    </div>
                `).join("")}
            </div>

            <div class="subsection-title">Environment</div>
            <div class="experience-env">
                ${job.environment.map(item =>
                    `<span class="experience-env-tag">${esc(item)}</span>`
                ).join("")}
            </div>
        </article>
    `).join("");
}


/* =========================================================
   PROJECTS
   ========================================================= */

function renderProjects() {
    const body = document.querySelector(".projects-body");
    if (!body) {
        return;
    }

    body.innerHTML = projects.map(project => {
        let links = "";

        if (project.repository) {
            links += `
                <a
                    href="${esc(project.repository.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ${esc(project.repository.label)}
                </a>
            `;
        }

        if (project.implementations) {
            links += project.implementations.map(item => `
                <a
                    href="${esc(item.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ${esc(item.label)}
                </a>
            `).join("");
        }

        return `
            <article class="project-item">
                <div class="project-id">[${esc(project.id)}]</div>
                <div class="project-name">${esc(project.name)}</div>
                <div class="project-technologies">
                    ${project.technologies.map(t => esc(t)).join(" / ")}
                </div>
                <p>${esc(project.description)}</p>
                <div class="project-links">${links}</div>
            </article>
        `;
    }).join("");
}


/* =========================================================
   EDUCATION
   ========================================================= */

function renderEducation() {
    const body = document.querySelector(".education-body");
    if (!body) {
        return;
    }

    body.innerHTML = education.map(item => `
        <article class="education-item">
            <div class="education-period">${esc(item.period)}</div>
            <div class="education-title">${esc(item.title)}</div>
            <div class="education-institution">${esc(item.institution)}</div>
            <div class="education-faculty">${esc(item.faculty)}</div>
        </article>
    `).join("");
}


/* =========================================================
   COURSES
   ========================================================= */

function renderCourses() {
    const body = document.querySelector(".courses-body");
    if (!body) {
        return;
    }

    body.innerHTML = courses.map(course => {
        const meta = [
            course.institution,
            course.instructor ? `Instructor: ${course.instructor}` : "",
            course.duration ? `Duración: ${course.duration}` : ""
        ].filter(Boolean).join(" · ");

        const verify = course.verificationUrl
            ? `<a
                  class="course-verify-link"
                  href="${esc(course.verificationUrl)}"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Verificar certificado
              </a>`
            : "";

        return `
            <article class="course-item">
                <div class="course-year">${esc(course.year)}</div>
                <div class="course-name">${esc(course.name)}</div>
                <div class="course-institution">${esc(course.institution)}</div>
                ${meta ? `<div class="course-metadata">${esc(meta)}</div>` : ""}
                ${verify}
            </article>
        `;
    }).join("");
}


/* =========================================================
   CONTACT
   ========================================================= */

function renderContact() {
    const body = document.querySelector(".contact-body");
    if (!body) {
        return;
    }

    const email = contact.email;

    const entries = [
        {
            label: "Email",
            href: `mailto:${esc(email)}`,
            text: email
        },
        {
            label: "GitHub",
            href: "https://github.com/estebannoblega",
            text: "github.com/estebannoblega"
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/estebannoblega",
            text: "linkedin.com/in/estebannoblega"
        }
    ];

    body.innerHTML = `
        <div class="contact-row">
            ${entries.map(entry => `
                <a
                    class="contact-tile"
                    href="${entry.href}"
                    ${/^https?:\/\//.test(entry.href)
                        ? 'target="_blank" rel="noopener noreferrer"'
                        : ""}
                >
                    <span class="contact-tile-label">${esc(entry.label)}</span>
                    <span class="contact-tile-text">${esc(entry.text)}</span>
                </a>
            `).join("")}
        </div>
    `;
}


/* =========================================================
   NAVBAR (mobile toggle)
   ========================================================= */

function initNavbar() {
    const toggle = document.querySelector(".navbar-toggle");
    const links = document.querySelector("#navbar-links");

    if (!toggle || !links) {
        return;
    }

    toggle.addEventListener("click", () => {
        const open = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute(
            "aria-label",
            open ? "Cerrar menú de navegación" : "Abrir menú de navegación"
        );
    });

    links.addEventListener("click", event => {
        if (event.target.closest("a")) {
            links.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        }
    });
}


/* =========================================================
   INIT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderEducation();
    renderCourses();
    renderContact();
    initNavbar();

    const year = document.querySelector("#year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }
});

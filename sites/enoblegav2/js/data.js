/*
 * enoblega.com.ar
 * Portfolio content
 *
 * This file contains content only.
 * Terminal behavior is handled separately by terminal.js / commands.js.
 */

const profile = {
    username: "esteban_noblega",
    name: "Esteban Leonel Nóblega Caro",
    title: "Ingeniero en Computación",
    role: "Infrastructure Engineer · Linux SysAdmin · NOC",
    location: "San Miguel de Tucumán, Argentina",
    email: "contacto@enoblega.com.ar",

    summary:
        "Ingeniero en Computación orientado a redes e infraestructura, con experiencia en operación de redes ISP, datacenter, sistemas, virtualización y troubleshooting de infraestructura crítica.",

    about:
        "Actualmente estoy a cargo del área de sistemas de un ISP local, donde trabajo con redes, infraestructura, monitoreo, gestión de recursos, decisiones tecnológicas y coordinación de equipos de trabajo.",

    focus: [
        "Networking",
        "Infraestructura ISP",
        "Administración de sistemas",
        "Datacenter y virtualización",
        "Monitoreo",
        "Infraestructura"
    ]
};


const skills = {
    networking: {
        title: "Routing",
        items: [
            "BGP",
            "OSPF",
            "IPv4",
            "Rutas estáticas",
            "Policy Routing",
            "Filtrado de rutas"
        ]
    },

    switching: {
        title: "Switching",
        items: [
            "VLAN",
            "Trunking",
            "LACP",
            "STP / RSTP",
            "LLDP",
            "MTU / Jumbo Frames"
        ]
    },

    networkServices: {
        title: "Servicios de red",
        items: [
            "NAT",
            "Port Forwarding",
            "DHCP",
            "DNS",
            "VPN",
            "Firewall",
            "PPPoE",
            "Hotspot / Portal cautivo"
        ]
    },

    trafficManagement: {
        title: "QoS / Gestión de tráfico",
        items: [
            "Colas",
            "Queue Tree",
            "Simple Queues",
            "Traffic Shaping",
            "Gestión de ancho de banda"
        ]
    },

    ispAccess: {
        title: "ISP / Acceso",
        items: [
            "FTTH",
            "GPON",
            "EPON",
            "OLT / ONU",
            "CGNAT"
        ]
    },

    troubleshooting: {
        title: "Troubleshooting",
        items: [
            "LAN / WAN",
            "Routing",
            "Switching",
            "FTTH"
        ]
    },

    operatingSystems: {
        title: "Sistemas operativos",
        items: [
            "Linux",
            "Windows"
        ]
    },

    systemAdministration: {
        title: "Administración de sistemas",
        items: [
            "SSH",
            "Bash",
            "Hardening de servidores",
            "Gestión de usuarios",
            "Gestión de paquetes",
            "Gestión de servicios",
            "Gestión de logs"
        ]
    },

    containers: {
        title: "Contenedores",
        items: [
            "Docker",
            "Docker Compose"
        ]
    },

    webServices: {
        title: "Servicios web",
        items: [
            "NGINX",
            "Apache"
        ]
    },

    systemNetworkServices: {
        title: "Servicios de red",
        items: [
            "DNS",
            "Postfix",
            "Dovecot"
        ]
    },

    virtualizationStorage: {
        title: "Virtualización y almacenamiento",
        items: [
            "Proxmox",
            "Ceph",
            "NFS",
            "iSCSI",
            "SAN / NAS"
        ]
    },

    monitoring: {
        title: "Plataformas de monitoreo",
        items: [
            "Zabbix",
            "Grafana",
            "Cacti"
        ]
    },

    logManagement: {
        title: "Gestión de logs",
        items: [
            "ELK / Elasticsearch"
        ]
    },

    dataCollection: {
        title: "Recolección de datos",
        items: [
            "SNMP"
        ]
    },

    monitoringOperations: {
        title: "Operación de monitoreo",
        items: [
            "Monitoreo de redes",
            "Monitoreo de servidores",
            "Alertas",
            "Detección de incidentes"
        ]
    },

    databasesRelational: {
        title: "Bases de datos relacionales",
        items: [
            "MySQL / MariaDB · Avanzado",
            "SQL Server · Básico"
        ]
    },

    databasesNoSQL: {
        title: "NoSQL",
        items: [
            "MongoDB · Básico"
        ]
    },

    developmentLanguages: {
        title: "Lenguajes",
        items: [
            "JavaScript",
            "TypeScript",
            "Python"
        ]
    },

    developmentBackend: {
        title: "Backend",
        items: [
            "Node.js",
            "NestJS"
        ]
    },

    developmentWeb: {
        title: "Web",
        items: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },

    developmentRealtime: {
        title: "Tiempo real",
        items: [
            "WebSockets"
        ]
    },

    serverSecurity: {
        title: "Seguridad de servidores",
        items: [
            "Hardening SSH",
            "Hardening de servidores",
            "SSH 2FA / MFA (TOTP)"
        ]
    },

    networkSecurity: {
        title: "Seguridad de red",
        items: [
            "Firewall",
            "VPN"
        ]
    }
};


const experience = [
    {
        period: "2025 — ACTUALIDAD",
        company: "Providers S.A.",
        role: "Encargado del Área de Sistemas",
        description:
            "Responsable de redes e infraestructura de la organización.",
        responsibilities: [
            "Gestión de redes e infraestructura",
            "Administración del datacenter",
            "Monitoreo de servicios",
            "Toma de decisiones tecnológicas",
            "Gestión de recursos de infraestructura",
            "Coordinación de equipos"
        ],
        environment: [
            "Networking",
            "ISP",
            "Linux",
            "Virtualización",
            "Monitoreo",
            "Datacenter"
        ]
    },

    {
        period: "2023 — 2024",
        company: "Providers S.A.",
        role: "Analista de Redes",
        description:
            "Responsable de atender incidentes de red y participar en la operación y troubleshooting de la infraestructura.",
        responsibilities: [
            "Monitoreo de red",
            "Análisis de incidentes y troubleshooting",
            "Configuración de routers, switches, OLT y ONT",
            "Soporte a técnicos de campo",
            "Soporte de red a clientes"
        ],
        environment: [
            "Networking",
            "MikroTik",
            "OLT / ONT",
            "Zabbix",
            "Cacti"
        ]
    },

    {
        period: "2022 — 2023",
        company: "Providers S.A.",
        role: "Analista de Redes Junior",
        description:
            "Rol inicial orientado a la formación y soporte de redes, con participación en tareas de soporte interno y externo.",
        responsibilities: [
            "Soporte de red interno",
            "Soporte a técnicos de campo",
            "Soporte de segundo nivel",
            "Monitoreo de red",
            "Documentación de procedimientos"
        ],
        environment: [
            "Networking",
            "MikroTik",
            "Zabbix",
            "Cacti"
        ]
    }
];


const projects = [
    {
        id: "01",
        name: "SNAKE CI/CD",
        technologies: [
            "GitHub Actions",
            "Docker",
            "Docker Compose",
            "NGINX",
            "Bash",
            "JavaScript"
        ],
        description:
            "Juego Snake en JavaScript vanilla usado como base para implementar un pipeline CI/CD completo: tests automatizados, build de imagen Docker y deploy continuo a producción en un VPS propio.",
        details: [
            "Pipeline en GitHub Actions (test + deploy)",
            "Pull requests: solo tests · main: deploy completo",
            "Tests unitarios con node:test, shellcheck y validación del compose",
            "Runner self-hosted en el VPS de producción",
            "Mínimo privilegio: runner sin root y sudo acotado al deploy",
            "Healthcheck y verificación de versión post-deploy",
            "Reverse proxy NGINX sobre red Docker, sin puertos expuestos"
        ],
        repository: {
            label: "github.com/estebannoblega/app_snake",
            url: "https://github.com/estebannoblega/app_snake"
        },
        demo: {
            label: "snake.enoblega.com.ar",
            url: "https://snake.enoblega.com.ar/"
        }
    },

    {
        id: "02",
        name: "SERVIDOR DE CORREO",
        technologies: [
            "Debian",
            "Postfix",
            "Dovecot",
            "DNS",
            "TLS"
        ],
        description:
            "Diseño, configuración y puesta en producción de un servidor de correo para un dominio propio.",
        details: [
            "Buzones virtuales",
            "Maildir",
            "LMTP",
            "DNS",
            "TLS",
            "Hardening del servidor"
        ],
        repository: {
            label: "github.com/estebannoblega/MailServerVPS",
            url: "https://github.com/estebannoblega/MailServerVPS"
        }
    },

    {
        id: "03",
        name: "APLICACIONES WEBSOCKET",
        technologies: [
            "C",
            "TypeScript",
            "WebSockets"
        ],
        description:
            "Implementaciones de una aplicación distribuida de mensajería utilizando WebSockets.",
        implementations: [
            {
                label: "C",
                url: "https://github.com/estebannoblega/WebSocket"
            },
            {
                label: "TypeScript",
                url: "https://github.com/estebannoblega/WebSocket---TS"
            }
        ]
    },

    {
        id: "04",
        name: "PORTAL CAUTIVO",
        technologies: [
            "MikroTik",
            "HTML",
            "JavaScript",
            "Google Forms"
        ],
        description:
            "Implementación de un portal cautivo para un servicio de Wi-Fi gratuito, integrado con un formulario externo para recopilación de datos.",
        details: [
            "MikroTik Hotspot",
            "Portal cautivo externo",
            "Google Forms",
            "Google Sheets"
        ]
    }
];


const education = [
    {
        title: "Ingeniería en Computación",
        institution: "Universidad Nacional de Tucumán",
        faculty: "Facultad de Ciencias Exactas y Tecnología",
        period: "2016 — 2025"
    }
];


const courses = [
    {
        year: "2026",
        name: "DevOps, integración y agilidad continua",
        institution: "Universidad Tecnológica Nacional — Facultad Regional Buenos Aires",
        duration: "48 horas",
        type: "Curso",
        certificate: false
    },

    {
        year: "2026",
        name: "Docker & Kubernetes",
        institution: "Universidad Tecnológica Nacional — Facultad Regional Buenos Aires",
        type: "Curso / formación",
        certificate: true,
        certificateId: "65449f47-9c90-41ee-8046-38915b746fa4",
        verificationUrl:
            "https://validator.centrodeelearning.com/validator/kWxMbrrnuJ"
    },

    {
        year: "2025",
        name: "Curso de Proxmox VE completo, desde 0 a experto",
        institution: "Udemy",
        instructor: "Arturo Diaz Lora",
        duration: "6 horas",
        type: "Curso",
        certificate: true,
        certificateId: "UC-4867bbd1-ce1a-4a65-94f0-1e0b2e19616a",
        verificationUrl:
            "https://www.udemy.com/certificate/UC-4867bbd1-ce1a-4a65-94f0-1e0b2e19616a/"
    },

    {
        year: "2022",
        name: "Nest: Desarrollo backend escalable con Node",
        institution: "Udemy",
        instructor: "Fernando Herrera",
        duration: "24,5 horas",
        type: "Curso",
        certificate: true,
        certificateId: "UC-4dc454e3-281c-420a-a7e4-4fb4064d5090",
        verificationUrl:
            "https://www.udemy.com/certificate/UC-4dc454e3-281c-420a-a7e4-4fb4064d5090/"
    }
];


const contact = {
    email: "contacto@enoblega.com.ar"
};
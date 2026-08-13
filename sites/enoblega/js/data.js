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
        "ISP Infrastructure",
        "Systems Administration",
        "Datacenter & Virtualization",
        "Monitoring",
        "Infrastructure"
    ]
};


const skills = {
    networking: {
        title: "Routing",
        items: [
            "BGP",
            "OSPF",
            "IPv4",
            "Static Routing",
            "Policy Routing",
            "Route Filtering"
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
        title: "Network Services",
        items: [
            "NAT",
            "Port Forwarding",
            "DHCP",
            "DNS",
            "VPN",
            "Firewall",
            "PPPoE",
            "Hotspot / Captive Portal"
        ]
    },

    trafficManagement: {
        title: "QoS / Traffic Management",
        items: [
            "Queues",
            "Queue Tree",
            "Simple Queues",
            "Traffic Shaping",
            "Bandwidth Management"
        ]
    },

    ispAccess: {
        title: "ISP / Access",
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
        title: "Operating Systems",
        items: [
            "Linux",
            "Windows"
        ]
    },

    systemAdministration: {
        title: "System Administration",
        items: [
            "SSH",
            "Bash",
            "Server Hardening",
            "User Management",
            "Package Management",
            "Service Management",
            "Log Management"
        ]
    },

    containers: {
        title: "Containers",
        items: [
            "Docker",
            "Docker Compose"
        ]
    },

    webServices: {
        title: "Web Services",
        items: [
            "NGINX",
            "Apache"
        ]
    },

    systemNetworkServices: {
        title: "Network Services",
        items: [
            "DNS",
            "Postfix",
            "Dovecot"
        ]
    },

    virtualizationStorage: {
        title: "Virtualization & Storage",
        items: [
            "Proxmox",
            "Ceph",
            "NFS",
            "iSCSI",
            "SAN / NAS"
        ]
    },

    monitoring: {
        title: "Monitoring Platforms",
        items: [
            "Zabbix",
            "Grafana",
            "Cacti"
        ]
    },

    logManagement: {
        title: "Log Management",
        items: [
            "ELK / Elasticsearch"
        ]
    },

    dataCollection: {
        title: "Data Collection",
        items: [
            "SNMP"
        ]
    },

    monitoringOperations: {
        title: "Monitoring Operations",
        items: [
            "Network Monitoring",
            "Server Monitoring",
            "Alerting",
            "Incident Detection"
        ]
    },

    databasesRelational: {
        title: "Relational Databases",
        items: [
            "MySQL / MariaDB · Advanced",
            "SQL Server · Basic"
        ]
    },

    databasesNoSQL: {
        title: "NoSQL",
        items: [
            "MongoDB · Basic"
        ]
    },

    developmentLanguages: {
        title: "Languages",
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
        title: "Real-time",
        items: [
            "WebSockets"
        ]
    },

    serverSecurity: {
        title: "Server Security",
        items: [
            "SSH Hardening",
            "Server Hardening",
            "SSH 2FA / MFA (TOTP)"
        ]
    },

    networkSecurity: {
        title: "Network Security",
        items: [
            "Firewall",
            "VPN"
        ]
    }
};


const experience = [
    {
        period: "2025 — PRESENT",
        company: "Providers S.A.",
        role: "Encargado del Área de Sistemas",
        description:
            "Responsable de redes e infraestructura de la organización.",
        responsibilities: [
            "Network & infrastructure management",
            "Datacenter administration",
            "Service monitoring",
            "Technology decisions",
            "Infrastructure resource management",
            "Team coordination"
        ],
        environment: [
            "Networking",
            "ISP",
            "Linux",
            "Virtualization",
            "Monitoring",
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
            "Network monitoring",
            "Incident analysis and troubleshooting",
            "Router / switch / OLT / ONT configuration",
            "Field technician support",
            "Customer network support"
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
            "Internal network support",
            "Field technician support",
            "Second-level support",
            "Network monitoring",
            "Procedure documentation"
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
        name: "MAIL SERVER",
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
            "Virtual mailboxes",
            "Maildir",
            "LMTP",
            "DNS",
            "TLS",
            "Server hardening"
        ],
        repository: {
            label: "github.com/estebannoblega/MailServerVPS",
            url: "https://github.com/estebannoblega/MailServerVPS"
        }
    },

    {
        id: "02",
        name: "WEBSOCKET APPLICATIONS",
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
        id: "03",
        name: "CAPTIVE PORTAL",
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
            "External captive portal",
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
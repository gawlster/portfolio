import coffeeRun from "./assets/coffee-run-thumbnail.jpg"
import raytracer from "./assets/ray-tracer-thumbnail.png"
import rosewald from "./assets/rosewald-thumbnail.jpg"
import underwaterExplorer from "./assets/underwater-explorer-thumbnail.png"
import kando from "./assets/kando-thumbnail.png"
import wikilink from "./assets/wikilink-thumbnail.png"

export const homepage = {
    preTitle: "Hello, World! I'm",
    title: "CONNOR GAWLEY,",
    postTitle:
        "a developer passionate about crafting exciting and immersive software experiences.",
    imagePath: "avatar.png",
}

type Tag = {
    title: string
    color: string
}

type CTA = {
    title: string
    link: string
    color: string
}

export type ProjectInfo = {
    title: string
    description: string
    imageObject: string
    tags: Tag[]
    ctas: CTA[]
    badge?: {
        icon: string
        tooltip: string
    }
}

export const projects = {
    title: "Here are some projects I've been working on:",
    items: [
        {
            title: "Rosewald Studios",
            description:
                "A portfolio site for Rosewald Studios, a local photography studio",
            imageObject: rosewald,
            tags: [
                {
                    title: "NextJS",
                    color: "blue",
                },
                {
                    title: "Tailwind",
                    color: "blue",
                },
                {
                    title: "Typescript",
                    color: "blue",
                },
            ],
            ctas: [
                {
                    title: "Live Site",
                    link: "https://rosewald-gawlster.vercel.app/",
                    color: "orange",
                },
                {
                    title: "Source Code",
                    link: "https://github.com/gawlster/rosewald",
                    color: "orange",
                },
            ],
        },
        {
            title: "WikiLink",
            description:
                "A game to strategically navigate between Wikipedia articles",
            imageObject: wikilink,
            tags: [
                {
                    title: "Web Components",
                    color: "blue",
                },
                {
                    title: "Typescript",
                    color: "blue",
                },
                {
                    title: "NodeJS",
                    color: "blue",
                },
            ],
            ctas: [
                {
                    title: "Source Code",
                    link: "https://github.com/gawlster/wikilink-client",
                    color: "orange",
                },
            ],
        },
        {
            title: "Underwater Explorer",
            description:
                "A 2D underwater scene built using hierarchical modeling including a diver, fish, and seaweed",
            imageObject: underwaterExplorer,
            tags: [
                {
                    title: "Javascript",
                    color: "blue",
                },
                {
                    title: "WebGL",
                    color: "blue",
                },
                {
                    title: "Computer Graphics",
                    color: "blue",
                },
            ],
            ctas: [
                {
                    title: "Live Site",
                    link: "https://gawlster.github.io/underwater-explorer/main.html",
                    color: "orange",
                },
                {
                    title: "Source Code",
                    link: "https://github.com/gawlster/underwater-explorer",
                    color: "orange",
                },
            ],
            badge: {
                icon: "📓",
                tooltip:
                    "Created as part of a Computer Graphics course at the University of Victoria",
            },
        },
        {
            title: "Coffee Run",
            description:
                "An infinite, procedurally generated runner game where coffee and donuts race to escape relentless knives in a fast-paced chase",
            imageObject: coffeeRun,
            tags: [
                {
                    title: "Unity",
                    color: "blue",
                },
                {
                    title: "C#",
                    color: "blue",
                },
                {
                    title: "Game Design",
                    color: "blue",
                },
            ],
            ctas: [
                {
                    title: "Itch.io",
                    link: "https://gawlster.itch.io/coffee-run",
                    color: "orange",
                },
                {
                    title: "Source Code",
                    link: "https://github.com/gawlster/coffeerun",
                    color: "orange",
                },
            ],
        },
        {
            title: "Raytracer",
            description:
                "A dynamic, recursive ray tracing program which can render arbitrary spheres and ellipsoids",
            imageObject: raytracer,
            tags: [
                {
                    title: "Python",
                    color: "blue",
                },
                {
                    title: "Computer Graphics",
                    color: "blue",
                },
            ],
            ctas: [
                {
                    title: "Source Code",
                    link: "https://github.com/gawlster/raytracer-python",
                    color: "orange",
                },
            ],
            badge: {
                icon: "📓",
                tooltip:
                    "Created as part of a Computer Graphics course at the University of Victoria",
            },
        },
        {
            title: "Kando",
            description:
                "A collaborative Kanban board application for organizing, tracking, and managing tasks in a clear and structured way.",
            imageObject: kando,
            tags: [
                {
                    title: "NextJS",
                    color: "blue",
                },
                {
                    title: "PostgreSQL",
                    color: "blue",
                },
                {
                    title: "Typescript",
                    color: "blue",
                },
            ],
            ctas: [
                {
                    title: "Source Code",
                    link: "https://github.com/gawlster/kando",
                    color: "orange",
                },
            ],
        },
    ],
}

export const qualificationSections = [
    "workExperience",
    "education",
    "technicalSkills",
    "softSkills",
    "interests",
] as const

export type QualificationSections =
    | "workExperience"
    | "education"
    | "technicalSkills"
    | "softSkills"
    | "interests"

export const qualifications = {
    title: "Here's what makes me qualified:",
    workExperience: {
        title: "Work Experience",
        icon: "💼",
        items: [
            {
                title: "Full Stack Software Developer",
                company: "Nova",
                date: "2025-present",
                listItems: [
                    "Architected a modular plugin registry system for a complex mapping sidebar, utilizing React composition and TypeScript generics to enable scalable management of nested project layers and folder hierarchies.",
                    "Optimized frontend performance to maintain 30fps while managing 10,000+ project layers by implementing list virtualization and aggressive re-render reduction strategies.",
                    "Engineered a Factory Pattern video system, replacing a brittle global variable state with an AbstractController architecture that supports concurrent rendering of multiple streams and telemetry-synced replays.",
                    "Refactored application routing with a type-safe react-router wrapper, transitioning from query-param-based state to a RESTful URL structure to enable robust deep-linking and state persistence across organizations.",
                    "Developed asynchronous Python services to calculate concave and convex hulls from drone image point clouds, providing real-time geometric 'scan area' visualizations for mapping projects.",
                    "Optimized Postgres database performance by normalizing complex schemas and designing dedicated linking tables to improve query eﬃciency and data integrity for large-scale relational systems.",
                ],
                quotes: [],
            },
            {
                title: "Software Developer",
                company: "Giftbit",
                date: "2022-2024",
                listItems: [
                    "Spearheaded the functional development of a major Azure AD B2C migration, utilizing the Identity Experience Framework (IEF) to achieve SOC2 compliance via TOTP MFA and custom security-focused user flows.",
                    "Designed a high-stakes Just-In-Time (JIT) migration system that performed server-to-server encrypted credential verification to move existing users into Azure seamlessly during their first login.",
                    "Architected automated rollback user journeys to maintain data integrity by cleaning up partially initialized accounts in the event of failed MFA or registration steps.",
                    "Orchestrated a front-loaded registration flow that prioritizes email verification, reducing user friction by ensuring a verified identity before requiring the completion of extensive profile data.",
                    "Engineered a production-stable identity system that has sustained minimal iteration from initial deployment through current production usage.",
                ],
                quotes: [
                    {
                        text: "I've been in the software development space for over 25 years and Connor certainly ranks in the top echelon of fast learning, high focus, yet down to Earth people I've come across.",
                        cite: "- Steve, Manager @ Giftbit",
                    },
                ],
            },
        ],
    },
    education: {
        title: "Education",
        icon: "🎓",
        items: [
            {
                title: "Bachelor of Science in Computer Science - With Distinction",
                school: "University of Victoria",
                date: "2020-2025",
                listItems: [
                    "Relevant Coursework: Data Structures, Algorithms, Software Engineering, Computer Graphics, Web Development, Database Management",
                    "Graduating GPA: 8.3/9 (9-point scale), approximately 3.8/4 (converted to 4-point scale)",
                ],
            },
            {
                title: "High School Diploma",
                school: "William Aberhart High School",
                date: "2017-2020",
                listItems: ["Honour's Society Member"],
            },
        ],
    },
    technicalSkills: {
        title: "Technical Skills",
        icon: "🖥️",
        items: [
            "TypeScript",
            "React + Next.js",
            "Redux + RTK",
            "Zustand",
            "Python",
            "Java + Groovy",
            "SQL + NoSQL",
            "Git",
            "AWS + Microsoft Azure",
        ] as string[],
    },
    softSkills: {
        title: "Soft Skills",
        icon: "🤝",
        items: [
            "Agile Methodology + Scrum Environments",
            "Time Management & Task Prioritization",
            "Attention to Detail in Code Reviews & Testing",
            "Collaborative Teamwork",
            "Problem-Solving & Debugging Complex Issues",
            "Clear Communication + Documentation of Technical Concepts",
            "Creative Thinking for Solution Design & Innovation",
            "Strong Organizational Skills for Managing Multiple Projects",
        ] as string[],
    },
    interests: {
        title: "Interests",
        icon: "🧠",
        items: [
            "Playing & Watching Hockey (Ice and Ball Hockey)",
            "Traveling the World + Exploring New Cultures",
            "Music (Listening to Various Genres & Exploring New Artists)",
            "Building Fun Software Side Projects",
            "Playing Video Games",
            "Learning & Exploring New Technologies",
            "Fitness and Health (Cycling and Walking)",
            "Developing new skills and tackling exciting challenges!",
        ] as string[],
    },
} as const

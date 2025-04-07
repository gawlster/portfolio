import coffeeRun from "./assets/coffee-run-thumbnail.jpg";
import dayTrading from "./assets/day-trading-thumbnail.png";
import nvim from "./assets/nvim-thumbnail.jpg";
import raytracer from "./assets/ray-tracer-thumbnail.png";
import rosewald from "./assets/rosewald-thumbnail.jpg";
import underwaterExplorer from "./assets/underwater-explorer-thumbnail.png";

export const homepage = {
  preTitle: "Hello, World! I'm",
  title: "CONNOR GAWLEY,",
  postTitle:
    "a developer passionate about crafting exciting and immersive software experiences.",
  imagePath: "avatar.png",
};

type Tag = {
  title: string;
  color: string;
};

type CTA = {
  title: string;
  link: string;
  color: string;
};

export type ProjectInfo = {
  title: string;
  description: string;
  imageObject: string;
  tags: Tag[];
  ctas: CTA[];
  badge?: {
    icon: string;
    tooltip: string;
  };
};

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
      title: "Custom Neovim Config",
      description:
        "A highly customizable Neovim configuration tailored to streamline development workflows and boost productivity",
      imageObject: nvim,
      tags: [
        {
          title: "Neovim",
          color: "blue",
        },
        {
          title: "Lua",
          color: "blue",
        },
      ],
      ctas: [
        {
          title: "Source Code",
          link: "https://github.com/gawlster/nvim",
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
      title: "Day Trading System",
      description:
        "A distributed microservices day trading system for buying and selling stocks in real time",
      imageObject: dayTrading,
      tags: [
        {
          title: "Microservices",
          color: "blue",
        },
        {
          title: "Javascript",
          color: "blue",
        },
        {
          title: "System Architecture",
          color: "blue",
        },
      ],
      ctas: [
        {
          title: "Source Code",
          link: "https://github.com/Newish0/seng468-day-trading",
          color: "orange",
        },
      ],
      badge: {
        icon: "📓",
        tooltip:
          "Created as part of a Software Scalability course at the University of Victoria",
      },
    },
  ],
};

export const qualificationSections = [
  "workExperience",
  "education",
  "technicalSkills",
  "softSkills",
  "interests",
] as const;

export type QualificationSections =
  | "workExperience"
  | "education"
  | "technicalSkills"
  | "softSkills"
  | "interests";

export const qualifications = {
  title: "Here's what makes me qualified:",
  workExperience: {
    title: "Work Experience",
    icon: "💼",
    items: [
      {
        title: "Software Developer",
        company: "Giftbit",
        date: "2022-2024",
        listItems: [
          "Built, tested, and branded fully custom authentication flows using Microsoft Azure B2C and Custom Policies",
          "Worked in a team of developers to upgrade our app from a legacy Grails server rendered solution to a single-page React app",
          "Responded to business requests quickly and efficiently to ensure our customers could use our app without issue",
        ],
        quotes: [
          {
            text: "I've been in the software development space for over 25 years and Connor certainly ranks in the top echelon of fast learning, high focus, yet down to earth people I've come across.",
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
        title: "Bachelor of Science in Computer Science",
        school: "University of Victoria",
        date: "2020-2025",
        listItems: [
          "Relevant Coursework: Data Structures, Algorithms, Software Engineering, Computer Graphics, Web Development, Database Management",
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
      "JavaScript + TypeScript",
      "ReactJS + Next.js",
      "Java + Groovy / Grails",
      "Python + Scripting",
      "SQL + Database Management",
      "Git + CI/CD",
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
      "Playing & Watching Hockey",
      "Traveling the World + Exploring New Cultures",
      "Music (Listening to Various Genres & Exploring New Artists)",
      "Building Fun Software Side Projects",
      "Playing Video Games",
      "Learning & Exploring New Technologies",
      "Fitness and Health (Cycling, Walking, etc.)",
      "Developing new skills and tackling exciting challenges!",
    ] as string[],
  },
} as const;

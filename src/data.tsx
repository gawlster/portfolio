import { Blockquote, Stack, Text, Title } from "@mantine/core";
import image from "../public/cocktail-website-thumbnail.jpg";

export const homepage = {
  preTitle: "Hello, World! I'm",
  title: "CONNOR GAWLEY,",
  postTitle:
    "a developer passionate about crafting exciting and immersive software experiences.",
  imagePath: "avatar.png",
};

export type ProjectInfo = {
  title: string;
  description: string;
  imageObject: string;
};

export const projects = {
  title: "Here are some projects I've been working on:",
  items: [
    {
      title: "Project 1",
      description: "Description of project 1",
      imageObject: image,
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      imageObject: image,
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      imageObject: image,
    },
    {
      title: "Project 4",
      description: "Description of project 4",
      imageObject: image,
    },
    {
      title: "Project 5",
      description: "Description of project 5",
      imageObject: image,
    },
    {
      title: "Project 6",
      description: "Description of project 6",
      imageObject: image,
    },
    {
      title: "Project 7",
      description: "Description of project 7",
      imageObject: image,
    },
  ],
};

const SublistText = ({ children }: { children: string }) => (
  <Text pl={28} style={{ textIndent: "-16px" }}>
    ✓ {children}
  </Text>
);

export const qualifications = {
  title: "Here's what makes me qualified:",
  items: [
    {
      key: "workexperience",
      icon: "💼",
      title: "Work Experience",
      description: (
        <Stack pl={36} gap={0}>
          <Title order={4} mb={4}>
            Software Developer - Giftbit, 2022-2024 ℹ️
          </Title>
          <SublistText>
            Built, tested, and branded fully custom authentication flows using
            Microsoft Azure B2C and Custom Policies
          </SublistText>
          <SublistText>
            Worked in a team of developers to upgrade our app from a legacy
            Grails server rendered solution to a single-page React app
          </SublistText>
          <SublistText>
            Responded to business requests quickly and efficiently to ensure our
            customers could use our app without issue
          </SublistText>
          <Blockquote
            ml={28}
            mt={16}
            color="gray"
            icon="💬"
            iconSize={30}
            cite="- Steve, Manager @ Giftbit"
            pl={28}
            pr={28}
            pt={24}
            pb={24}
          >
            "I've been in the software development space for over 25 years and
            Connor certainly ranks in the top echelon of fast learning, high
            focus, yet down to earth people I've come across."
          </Blockquote>
        </Stack>
      ),
    },
    {
      key: "technicalskills",
      icon: "🖥️",
      title: "Technical Skills",
      description: (
        <Stack pl={36} gap={0}>
          <SublistText>JavaScript + TypeScript</SublistText>
          <SublistText>ReactJS + Next.js</SublistText>
          <SublistText>Java + Groovy / Grails</SublistText>
          <SublistText>Python + Scripting</SublistText>
          <SublistText>SQL + Database Management</SublistText>
          <SublistText>Git + CI/CD</SublistText>
          <SublistText>AWS + Microsoft Azure</SublistText>
          <SublistText>Docker + Kubernetes</SublistText>
          <SublistText>
            ... and much more across the full stack, from development to system
            design and architecture.
          </SublistText>
        </Stack>
      ),
    },
    {
      key: "softskills",
      icon: "🤝",
      title: "Soft Skills",
      description: (
        <Stack pl={36} gap={0}>
          <SublistText>Agile Methodology + Scrum Environments</SublistText>
          <SublistText>Time Management & Task Prioritization</SublistText>
          <SublistText>
            Attention to Detail in Code Reviews & Testing
          </SublistText>
          <SublistText>Collaborative Teamwork</SublistText>
          <SublistText>Problem-Solving & Debugging Complex Issues</SublistText>
          <SublistText>
            Clear Communication + Documentation of Technical Concepts
          </SublistText>
          <SublistText>
            Creative Thinking for Solution Design & Innovation
          </SublistText>
          <SublistText>
            Strong Organizational Skills for Managing Multiple Projects
          </SublistText>
          <SublistText>
            ... and much more, including leadership, mentorship, and
            adaptability in fast-paced environments.
          </SublistText>
        </Stack>
      ),
    },
    {
      key: "interests",
      icon: "🧠",
      title: "Interests",
      description: (
        <Stack pl={36} gap={0}>
          <SublistText>Playing & Watching Hockey</SublistText>
          <SublistText>
            Traveling the World + Exploring New Cultures
          </SublistText>
          <SublistText>
            Music (Listening to Various Genres & Exploring New Artists)
          </SublistText>
          <SublistText>Building Fun Software Side Projects</SublistText>
          <SublistText>Playing Video Games</SublistText>
          <SublistText>Learning & Exploring New Technologies</SublistText>
          <SublistText>Fitness and Health (Cycling, Walking, etc.)</SublistText>
          <SublistText>
            ... and much more, including developing new skills and tackling
            exciting challenges!
          </SublistText>
        </Stack>
      ),
    },
  ],
};

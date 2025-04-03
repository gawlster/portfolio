import { Container, Grid, Paper, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import Section from "../components/Section";
import { ProjectInfo, projects } from "../data";

function Tile({ project }: { project: ProjectInfo }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Paper
      h="140px"
      shadow="md"
      style={{
        overflow: "hidden",
        backgroundImage: `url("${project.imageObject}")`,
        backgroundSize: "cover",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          // opacity: isHovering ? 1 : 0,
          transition: "opacity 0.15s ease-in-out",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))",
          }}
        ></div>
        <Stack w="100%" h="100%" align="start" justify="end">
          <Text c="white">{project.title}</Text>
        </Stack>
      </div>
    </Paper>
  );
}

const gridCols = [
  { base: 12, xs: 4 },
  { base: 12, xs: 8 },
  { base: 12, xs: 8 },
  { base: 12, xs: 4 },
  { base: 12, xs: 3 },
  { base: 12, xs: 3 },
  { base: 12, xs: 6 },
];

export default function Projects() {
  return (
    <Section bg="dark">
      <Title order={2} mb="20px">
        {projects.title}
      </Title>
      <Container w="100%" maw="700px">
        <Grid maw="950px">
          {projects.items.map((project, index) => (
            <Grid.Col key={index} span={gridCols[index]}>
              <Tile project={project} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

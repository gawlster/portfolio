import {
  BackgroundImage,
  Badge,
  Button,
  Container,
  Grid,
  Group,
  Modal,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import Section from "../components/Section";
import { ProjectInfo, projects } from "../data";

function Tile({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  project: ProjectInfo;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const isHovered = hoveredIndex === index;
  const isNeighbor =
    hoveredIndex !== null &&
    (index === hoveredIndex - 1 || index === hoveredIndex + 1);
  return (
    <>
      <Paper
        h="140px"
        shadow="md"
        style={{
          overflow: "hidden",
          backgroundImage: `url("${project.imageObject}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out, filter 0.2s ease-in-out",
          transform: isHovered
            ? "scale(1.1)"
            : isNeighbor
            ? "scale(0.9)"
            : "scale(1)",
          filter: isHovered
            ? "grayscale(0%) blur(0px) brightness(1)"
            : "grayscale(100%) blur(0.5px) brightness(0.8)",
          position: "relative",
        }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={open}
      ></Paper>
      <Modal opened={opened} onClose={close} centered withCloseButton={false}>
        <BackgroundImage src={project.imageObject} h="160px" />
        <Container pt="8px" pb="8px">
          <Title order={3}>{project.title}</Title>
          <Group mt="4px" mb="16px" gap="4px">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="light" color="blue" radius="sm">
                {tag.title}
              </Badge>
            ))}
          </Group>
          <Text>{project.description}</Text>
          <Group
            mt="16px"
            mb="8px"
            gap="4px"
            w="100%"
            grow
            align="center"
            justify="center"
          >
            {project.ctas.map((cta, i) => (
              <Button
                variant="light"
                key={i}
                component="a"
                href={cta.link}
                target="_blank"
                color={cta.color}
                miw="120px"
              >
                {cta.title}
              </Button>
            ))}
          </Group>
        </Container>
      </Modal>
    </>
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section bg="dark">
      <Title order={2}>{projects.title}</Title>
      <Stack w="100%" maw="700px" mt="20px" mb="20px">
        <Grid maw="950px">
          {projects.items.map((project, index) => (
            <Grid.Col key={index} span={gridCols[index]}>
              <Tile
                project={project}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            </Grid.Col>
          ))}
        </Grid>
        <Button
          mt="12px"
          variant="outline"
          color="blue"
          component="a"
          href="https://github.com/gawlster"
          target="_blank"
        >
          View more
        </Button>
      </Stack>
    </Section>
  );
}

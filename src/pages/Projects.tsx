import {
  BackgroundImage,
  Badge,
  Button,
  Container,
  FocusTrap,
  Grid,
  Group,
  Modal,
  Paper,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import moreProjectsTileImage from "../assets/more-thumbnail.png";
import Section from "../components/Section";
import { ProjectInfo, projects } from "../data";

function Tile({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
  moreProjectsTile = false,
}: {
  project?: ProjectInfo;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  moreProjectsTile?: boolean;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const isHovered = hoveredIndex === index;
  const isNeighbor =
    hoveredIndex !== null &&
    (index === hoveredIndex - 1 || index === hoveredIndex + 1);
  if (moreProjectsTile || !project) {
    return (
      <Paper
        h="140px"
        shadow="md"
        style={{
          overflow: "hidden",
          backgroundImage: `url("${moreProjectsTileImage}")`,
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
        onClick={() => window.open("https://github.com/gawlster", "_blank")}
      ></Paper>
    );
  }
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
        <FocusTrap.InitialFocus />
        <BackgroundImage src={project.imageObject} h="160px" />
        <Container pt="8px" pb="8px" style={{ position: "relative" }}>
          {project.badge && (
            <Tooltip label={project.badge.tooltip} withArrow>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  background: "var(--mantine-color-gray-2)",
                  padding: "4px",
                  borderBottomLeftRadius: "4px",
                  cursor: "default",
                }}
              >
                {project.badge.icon}
              </div>
            </Tooltip>
          )}
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
  { base: 12, xs: 6 },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section bg="dark">
      <Title order={2}>{projects.title}</Title>
      <Stack w="95%" maw="700px" mt="20px" mb="20px" ml="2.5%">
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
          <Grid.Col span={{ base: 12, xs: 3 }}>
            <Tile
              moreProjectsTile
              index={6}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          </Grid.Col>
        </Grid>
      </Stack>
    </Section>
  );
}

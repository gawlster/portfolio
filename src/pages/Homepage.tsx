import { Container, Group, Stack, Text, Title } from "@mantine/core";
import Section from "../components/Section";
import { homepage } from "../data";

export default function Homepage() {
  return (
    <Section bg="light" fullHeight>
      <Container w="80%" maw="800px">
        <Group
          style={{
            width: "100%",
            minHeight: "100vh",
          }}
          align="center"
          justify="center"
          gap="0"
        >
          <img
            src={homepage.imagePath}
            alt=""
            style={{
              maxWidth: "200px",
            }}
          />
          <Stack
            gap="4px"
            style={{
              textAlign: "left",
            }}
          >
            <Text>{homepage.preTitle}</Text>
            <Title c="var(--color-orange)">{homepage.title}</Title>
            <Text>{homepage.postTitle}</Text>
          </Stack>
        </Group>
      </Container>
    </Section>
  );
}

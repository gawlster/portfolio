import { Image, Stack, Text, Title } from "@mantine/core";
import Section from "../components/Section";
import { homepage } from "../data";

export default function Homepage() {
  return (
    <Section bg="light" fullHeight noInnerContainer>
      <Stack align="center" justify="center" h="100%" p="48px">
        <Image src={homepage.imagePath} maw="200px" />
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
      </Stack>
    </Section>
  );
}

import { Accordion, Blockquote, Container, Stack, Title } from "@mantine/core";
import { useCallback } from "react";
import ListText from "../components/ListText";
import Section from "../components/Section";
import {
  qualifications,
  QualificationSections,
  qualificationSections,
} from "../data";

export default function Qualifications() {
  const getContent = useCallback((key: QualificationSections) => {
    switch (key) {
      case "workExperience":
        return <WorkExperience data={qualifications.workExperience.items} />;
      case "education":
        return <Education data={qualifications.education.items} />;
      case "technicalSkills":
        return <List data={qualifications.technicalSkills.items} />;
      case "softSkills":
        return <List data={qualifications.softSkills.items} />;
      case "interests":
        return <List data={qualifications.interests.items} />;
    }
  }, []);
  return (
    <Section bg="light">
      <Title order={2} mb="20px">
        {qualifications.title}
      </Title>
      <Container w="100%" maw="700px">
        <Accordion>
          {qualificationSections.map((key) => (
            <Accordion.Item key={key} value={key}>
              <Accordion.Control icon={qualifications[key].icon}>
                <Title order={3}>{qualifications[key].title}</Title>
              </Accordion.Control>
              <Accordion.Panel>{getContent(key)}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}

function List({ data }: { data: string[] }) {
  return (
    <Stack pl={36} gap={0}>
      {data.map((item, index) => (
        <ListText key={index}>{item}</ListText>
      ))}
    </Stack>
  );
}

function WorkExperience({
  data,
}: {
  data: typeof qualifications.workExperience.items;
}) {
  return data.map((item, index) => (
    <Stack pl={36} gap={0} mt={index === 0 ? 0 : 16}>
      <Title order={4} mb={4}>
        {item.title} - {item.company} {item.date}
      </Title>
      {item.listItems.map((listItem, index) => (
        <ListText key={index}>{listItem}</ListText>
      ))}
      {item.quotes.map((quote, index) => (
        <Blockquote
          key={index}
          ml={28}
          mt={16}
          color="gray"
          icon="💬"
          iconSize={30}
          cite={quote.cite}
          pl={28}
          pr={28}
          pt={24}
          pb={24}
        >
          "{quote.text}"
        </Blockquote>
      ))}
    </Stack>
  ));
}

function Education({ data }: { data: typeof qualifications.education.items }) {
  return data.map((item, index) => (
    <Stack pl={36} gap={0} mt={index === 0 ? 0 : 16}>
      <Title order={4} mb={4}>
        {item.title} - {item.school} {item.date}
      </Title>
      {item.listItems.map((listItem, index) => (
        <ListText key={index}>{listItem}</ListText>
      ))}
    </Stack>
  ));
}

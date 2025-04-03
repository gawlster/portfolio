import { Accordion, Container, Title } from "@mantine/core";
import Section from "../components/Section";
import { qualifications } from "../data";

export default function Qualifications() {
  return (
    <Section bg="light">
      <Title order={2}>{qualifications.title}</Title>
      <Container w="100%" maw="700px">
        <Accordion>
          {qualifications.items.map((item) => (
            <Accordion.Item key={item.key} value={item.key}>
              <Accordion.Control icon={item.icon}>
                <Title order={3}>{item.title}</Title>
              </Accordion.Control>
              <Accordion.Panel>{item.description}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}

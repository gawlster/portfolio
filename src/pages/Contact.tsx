import { Button, Container, Group, Image, Text, Title } from "@mantine/core";
import Section from "../components/Section";
import github from "../icons/brand-github.svg";
import linkedin from "../icons/brand-linkedin.svg";
import email from "../icons/mail.svg";

export default function Contact() {
  return (
    <Section bg="dark" small>
      <Title order={2} mb="20px">
        Get in touch!
      </Title>
      <Container w="100%" maw="700px">
        <Text>
          I am always searching for new ways to grow as a developer. If you are
          curious about one of my projects, have an opportunity and think I'd be
          a good fit, or if you just want to say hi, I'd love to hear from you!
        </Text>
        <Group mt="20px" justify="center" align="center">
          <Button
            variant="light"
            component="a"
            href="mailto:me@connorgawley.ca"
            target="_blank"
            color="orange"
          >
            <Image src={email} mr="6px" h="16px" />
            Email
          </Button>
          <Button
            variant="light"
            component="a"
            href="https://www.linkedin.com/in/connor-gawley"
            target="_blank"
            color="orange"
          >
            <Image src={linkedin} mr="6px" h="16px" />
            LinkedIn
          </Button>
          <Button
            variant="light"
            component="a"
            href="https://github.com/gawlster"
            target="_blank"
            color="orange"
          >
            <Image src={github} mr="6px" h="16px" />
            Github
          </Button>
        </Group>
      </Container>
    </Section>
  );
}

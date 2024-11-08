import { Title, Text, Group, Card, Flex } from "@mantine/core";
import SocialIcon from "@core/ui/components/icon/icon";
import classes from "./contact.module.css";
import { socialIconsData } from "../../constants/social-icons";

export function Contact() {
  return (
    <Flex
      mih={"120vh"}
      w={"100%"}
      pt={"13%"}
      pb={"7%"}
      mb={"10%"}
      align={"center "}
      direction={"column"}
      justify={"space-between"}
    >
      <Card shadow="xl" padding="lg" radius="md" className={classes.card}>
        <Title order={1}>
          <Text
            variant="gradient"
            gradient={{ from: "pink", to: "black", deg: 150 }}
            inherit
          >
            Contact Me!
          </Text>
        </Title>

        <Text c="dimmed" size="lg" mt="md">
          Got questions or just want to share your llama love? Don’t be shy!
          Whether it’s about llama care or the latest llama memes, I’m all ears!
          Send me a message, and let’s chat—because who wouldn’t want to talk
          about these fabulous fuzzy creatures? Llamaste! 🦙✨
        </Text>

        <Group justify="center" mt="lg">
          {socialIconsData.map((socialIcon, index) => (
            <SocialIcon
              key={index}
              icon={socialIcon.icon}
              href={socialIcon.href}
            />
          ))}
        </Group>
      </Card>
    </Flex>
  );
}

import LamaButton from "../../../../../../core/ui/components/button/lama-button";
import {
  Card,
  CardSection,
  Image,
  Text,
  Badge,
  Group,
  ActionIcon,
  Flex,
} from "@mantine/core";
import { IconEyeStar, IconExternalLink } from "@tabler/icons-react";
import classes from "./qoutes.module.css";

interface LlamaCardProps {
  image?: string;
  title?: string;
  description?: string;
  url?: string;
}

export function LlamaCard({ image, title, description, url }: LlamaCardProps) {
  const handleCheck = () => {
    console.log("Register button clicked!");
  };

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={classes.card}
    >
      <CardSection className={classes.section}>
        <Image src={image} height={160} alt="Llama" />
      </CardSection>

      <CardSection className={classes.section}>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500} className={classes.title}>
            {title}
          </Text>
          <Badge
            className={classes.badge}
            variant="outline"
            color="pink"
            radius="md"
          >
            wewe
          </Badge>
        </Group>
        <Text fz="sm" className={classes.title}>
          {description}
        </Text>
      </CardSection>

      <Group mt="sm">
        <LamaButton
          schema={{
            type: "button",
            color: "dark",
            size: "compact-md",
            variant: "filled",
            fullWidth: true,
          }}
          onClick={handleCheck}
        >
          CHECK!
        </LamaButton>

        {url && (
          <ActionIcon
            size={32}
            variant="filled"
            color="pink"
            aria-label="Settings"
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconEyeStar size={20} />
          </ActionIcon>
        )}
      </Group>
    </Card>
  );
}

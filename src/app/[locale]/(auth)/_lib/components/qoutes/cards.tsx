
import Button from '../../../../../../core/ui/components/button/button';
import { Card, CardSection, Image, Text, Badge, Group, ActionIcon } from '@mantine/core';
import { IconEyeStar, IconExternalLink } from '@tabler/icons-react';
import classes from "./qoutes.module.css";

interface LlamaCardProps {
  image?: string;
  title?: string;
  description?: string;
  url?: string;
}

export function LlamaCard({ image, title, description, url }: LlamaCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
      <CardSection className={classes.section}>
        <Image src={image} height={160} alt="Llama" />
      </CardSection>

      <CardSection className={classes.section}>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500} className={classes.title}>{title}</Text>
          <Badge className={classes.badge} variant="outline" color="pink" radius="md">wewe</Badge>
        </Group>
        <Text fz="sm" className={classes.title}>{description}</Text>
      </CardSection>

      <Group mt="sm">
        <Button
          schema={{ type: "link" }}
          component="a"
          href={url}
          target="_blank"
          leftSection={<IconExternalLink size={16} />}
          style={{ flex: 1 }}
          variant="filled"
          color="black"
          radius="md"
        >
          Check!
        </Button>
        <ActionIcon size={32} variant="filled" color="pink" aria-label="Settings" component="a" href={url} target="_blank">
          <IconEyeStar size={20} />
        </ActionIcon>
      </Group>
    </Card>
  );
}

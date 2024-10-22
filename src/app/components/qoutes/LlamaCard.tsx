import { Card, CardSection, Image, Text, Badge, Button, Group, ActionIcon } from '@mantine/core';
import { IconEyeStar } from '@tabler/icons-react';
import { IconExternalLink } from '@tabler/icons-react';
import classes from './Qoutes.module.css';
interface LlamaCardProps {
    image?: string;
    title?: string;
    description?: string;
    url?: string;
}


export function LlamaCard({image, title, description, url}: LlamaCardProps) {
  return (
    <Card className={classes.card} shadow="sm" padding="lg" radius="md" withBorder>
      <CardSection >
        <Image
          src={image}
          height={160}
          alt="Llama"
        />
      </CardSection>


      <CardSection  className={classes.section}>
      <Group justify="space-between" mt="md" mb="xs">
        <Text className={classes.title} fw={500}>{title}</Text>
        <Badge variant="outline" color="pink" radius="md" className={classes.badge}>wewe</Badge>
      </Group>
      <Text className={classes.title} fz="sm">{description}</Text>
      </CardSection>

    <Group mt="sm">
      <Button leftSection={<IconExternalLink style={{ width: '70%', height: '70%' }} stroke={1.5}/>} style={{flex: 1}} variant="filled" color="black" radius="md" component='a' href={url} target='_blank'>
        Check !
      </Button>
      <ActionIcon size={32} variant="filled" color="pink" aria-label="Settings" component='a' href={url} target='_blank'>
      <IconEyeStar style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
    </Group>
    </Card>
  );
}
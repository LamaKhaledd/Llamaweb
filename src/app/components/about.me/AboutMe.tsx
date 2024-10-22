import { Container, SimpleGrid, Text, Title, Image, ThemeIcon, List, ListItem } from "@mantine/core";
import { IconCheck } from '@tabler/icons-react';
import classes from "./AboutMe.module.css";

export function AboutMe() {
  return (
    <div className={classes.wrapper}>
    <Container className={classes.inner}>
      <SimpleGrid cols={2}>
        <div>
          <Title className={classes.title} pb="lg">
            NO DRAMA
            <Title>
              <Text
                size="xl"
                fw={900}
                variant="gradient"
                inherit
                gradient={{ from: 'black', to: 'pink', deg: 5 }}>
                LLAMA
              </Text>
            </Title>
          </Title>

          <Text color="dimmed" pb="md">
            Happy Llama, sad Llama, mentally disturbed Llama. Happy Llama, sad Llama, mentally disturbed Llama.
            Happy Llama, sad Llama, mentally disturbed Llama. Happy Llama, sad Llama, mentally disturbed Llama.
            Happy Llama, sad Llama, mentally disturbed Llama.
          </Text>

          <List
            mt="30"
            spacing="md"
            size="sm"
            icon={
              <ThemeIcon color="black" size={20} radius="xl">
                <IconCheck stroke={2} color="pink" />
              </ThemeIcon>
            }
          >
            <ListItem><b>Llamas</b> tell their companions off by spitting at them</ListItem>
            <ListItem><b>Llamas</b> language is humming</ListItem>
            <ListItem><b>Llamas</b> are not only sociable and soft but also extremely resilient!</ListItem>
            <ListItem><b>Llamas</b> can carry up to 25-30% of their body weight, making them excellent pack animals in mountainous regions.</ListItem>
            <ListItem><b>Llamas</b> have a three-compartment stomach that helps them efficiently digest tough plants and extract nutrients from low-quality food.</ListItem>
            
          </List>
        </div>

        <div  className={classes.imageContainer}>
          <Image
          className={classes.image}
          mx={"auto"}
            alt="Llama Logo"
            src="https://i.pinimg.com/564x/ea/26/c1/ea26c1ef53e723c727827714b71bc469.jpg"
            radius="md"
          />
        </div>
      </SimpleGrid>
    </Container>
    </div>
  );
}

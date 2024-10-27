import { Container, SimpleGrid, Text, Title } from "@mantine/core";
import Image from "next/image";
import classes from "./about.module.css";
import MoreInfoList from "./about-llama-list";

const About = () => {
  return (
    <Container className={classes.wrapper}>
      <Container className={classes.inner}>
        <SimpleGrid cols={2}>
          <Container>
            <Title className={classes.title} pb="lg">
              NO DRAMA
              <Title>
                <Text
                  size="xl"
                  fw={900}
                  variant="gradient"
                  inherit
                  gradient={{ from: 'black', to: 'pink', deg: 5 }}
                >
                  LLAMA
                </Text>
              </Title>
            </Title>

            <Text c="dimmed" pb="md">
              Happy Llama, sad Llama, mentally disturbed Llama. Happy Llama, sad Llama, mentally disturbed Llama.
              Happy Llama, sad Llama, mentally disturbed Llama. Happy Llama, sad Llama, mentally disturbed Llama.
              Happy Llama, sad Llama, mentally disturbed Llama.
            </Text>

            <MoreInfoList />
          </Container>

          <Container className={classes.imageContainer}>
            <Image
              className={classes.image}
              src="/Llama.jpg"
              alt="Llama"
              width={300}
              height={400}
              style={{ display: "block", marginTop: "2rem", margin: "0 auto" }}
            />
          </Container>
        </SimpleGrid>
      </Container>
    </Container>
  );
}

export default About;

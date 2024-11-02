import { Box, Container, Flex, Paper, SimpleGrid, Text, Title } from "@mantine/core";
import Image from "next/image";
import classes from "./about.module.css";
import MoreInfoList from "./about-llama-list";

const About = () => {
  return (
    <Paper radius="lg" bg="rgba(215, 179, 192, 0.5)" >
    <Flex mih={"120vh"} pt={"10%"} pb={"10%"} mb={"10%"} align={"center "} justify={"center"}>
      <Flex pl={"5%"} pr={"5%"} h={50} justify={"space-between"} align={"center "} w={"100%"}>
        <SimpleGrid cols={2}>
          <Container>
            <Title fw={900} size="2.5rem">
              NO DRAMA
              <Title>
                <Text
                  size="xl"
                  fw={900}
                  variant="gradient"
                  inherit
                  gradient={{ from: "black", to: "pink", deg: 5 }}
                >
                  LLAMA
                </Text>
              </Title>
            </Title>

            <Text c="dimmed" pb="md">
              Happy Llama, sad Llama, mentally disturbed Llama. Happy Llama, sad
              Llama, mentally disturbed Llama. Happy Llama, sad Llama, mentally
              disturbed Llama. Happy Llama, sad Llama, mentally disturbed Llama.
              Happy Llama, sad Llama, mentally disturbed Llama.
            </Text>

            <MoreInfoList />
          </Container>

          <Flex align={"center "} justify={"center"} w={"100%"}>
            <Box display="block" mt="2rem">
              <Image
                className={classes.image}
                src="/Llama.jpg"
                alt="Llama"
                width={300}
                height={400}
              />
            </Box>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
    </Paper>
  );
};

export default About;

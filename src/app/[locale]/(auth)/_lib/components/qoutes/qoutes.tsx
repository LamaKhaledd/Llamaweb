import { Container, Title, Text, SimpleGrid, Flex } from "@mantine/core";
import { cardsData } from "./cards-data";
import { LlamaCard } from "./cards";
import classes from "./qoutes.module.css";

const Qoutes = () => {
    const myQoutes = cardsData.map((item) => {
        return(
        <LlamaCard key={item?.title} image={item?.image} title={item?.title} description={item?.description} url={item?.url}/>
        );
    });
    return(
      <Flex mih={"100vh"} miw={"150vh"} pt={"8%"} pb={"10%"} pl={"5%"} pr={"5%"} mb={"10%"} direction={"column"} justify={"space-between"} bg='rgba(249, 210, 223, 0.5)'>
        <Title mb={"1%"} >
          <Text 
            variant="gradient"
            gradient={{ from: "pink", to: "black", deg: 360 }} 
            inherit
          >
          Llama Wisdom: Quotes to Inspire and Delight
          </Text>
        </Title>
        <Text c="dimmet" className={classes.text} fw="bold">
          Welcome to our collection of llama-inspired quotes!  </Text><Text c="dimmet" className={classes.text}>wisdom meets whimsy! Llamas are not only adorable creatures; they also remind us of the importance of staying calm, embracing our uniqueness, and finding joy in life’s little moments. Explore these delightful sayings that celebrate the charm and character of llamas, and let them inspire you to navigate your own adventures with a little more llama spirit!
        </Text>
        <SimpleGrid cols={3}>{myQoutes}</SimpleGrid>
    </Flex>
    );
}

export default Qoutes;
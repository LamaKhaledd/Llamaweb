import { 
    Title, 
    Text, 
    Card, 
    Flex
} from "@mantine/core";
import classes from "./insights.module.css";
import LlamaTabs from "./llama-tabs"; 

const Insights = () => {
    return (
        <Flex mih={"120vh"} w={"100%"} pt={"50%"} pb={"7%"} mb={"10%"} align={"center "} direction={"column"}   justify={"space-between"}>
      <Flex pl={"5%"} pr={"5%"} h={50} justify={"space-between"} align={"center "} w={"100%"}>
      <Card shadow="xl" padding="lg" radius="md" className={classes.card}>
                    <Title fw={900} size="2.5rem">
                        <Text 
                            variant="gradient"
                            gradient={{ from: "pink", to: "black", deg: 150 }} 
                            inherit
                        >
                            Details
                        </Text>
                    </Title>
                    
                    <Text c="dimmed" size="lg" mt="md">
                        <Text fw={500}>The llama,</Text> native to the Andes, is a domesticated animal valued for its wool, 
                        meat, and use as a pack animal. Standing 5-6 feet tall, llamas are social and gentle, 
                        making them easy to train. They provide wool for textiles and are well-adapted to cold 
                        mountain climates. Their curious and friendly nature has made them popular worldwide, 
                        symbolizing the Andean culture.
                    </Text>
                    <LlamaTabs />
                </Card>
            </Flex>
        </Flex>
    );
}

export default Insights;

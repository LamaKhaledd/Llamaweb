import { 
    Container, 
    Title, 
    Text, 
    Card 
} from "@mantine/core";
import classes from "./insights.module.css";
import LlamaTabs from "./llama-tabs"; 

const Insights = () => {
    return (
        <Container className={classes.wrapper}>
            <Container className={classes.container}>
                <Card shadow="xl" padding="lg" radius="md" className={classes.card}>
                    <Title className={classes.title}>
                        <Text 
                            variant="gradient"
                            gradient={{ from: "pink", to: "black", deg: 150 }} 
                            inherit
                        >
                            Details
                        </Text>
                    </Title>
                    
                    <Text c="dimmed" size="lg" mt="md">
                        <b>The llama,</b> native to the Andes, is a domesticated animal valued for its wool, 
                        meat, and use as a pack animal. Standing 5-6 feet tall, llamas are social and gentle, 
                        making them easy to train. They provide wool for textiles and are well-adapted to cold 
                        mountain climates. Their curious and friendly nature has made them popular worldwide, 
                        symbolizing the Andean culture.
                    </Text>
                    <LlamaTabs />
                </Card>
            </Container>
        </Container>
    );
}

export default Insights;

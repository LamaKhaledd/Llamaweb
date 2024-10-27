"use client";
import { Container, Group, Text, Title, Paper } from "@mantine/core";
import Button from '../../../../../../core/ui/components/button/button';
import classes from "./Summary.module.css";
import { IconFlower } from "@tabler/icons-react";
import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import Image from "next/image";

const Summary = () => {
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    return (
        <Container className={classes.wrapper}>
            <Title ta="center" order={1}>
                Hi! I'm <Text className={classes.name} inherit>Wewe</Text><Text className={classes.name} inherit>!</Text>
            </Title>

            <Container p={0} size={600}>
                <Text size="lg" c="dimmed" className={classes.description}>
                    As I was playing online games like 
                    <Text component="span" size="lg" c="black" fw={700}> Pubg mobile</Text>, three years ago, multiple times people missed spelling my name.
                    Most of them thought it was Llama. Actually, Turkish people used to call me "Hayvan," which means animal in English 
                    <Text component="span" size="lg" c="black" fw={700}> lol</Text>.
                    That's where my interest in Llamas started from.
                </Text>
            </Container>

            <Group justify="center">
                <Button 
                    onClick={() => setOpened(true)} 
                    leftSection={<IconFlower size={14} />} 
                    size="lg" 
                    variant="filled" 
                    color="green" 
                    mt="lg"
                >
                    Check this dummy button
                </Button>
                {opened && (
                    <Paper ref={ref} shadow="sm" p="md">
                        <Text>كلشي بحكيه بتصدقوه</Text>
                    </Paper>
                )}
            </Group>

            <Image 
                src="/file.png" 
                alt="Llama" 
                width={300} 
                height={300} 
                style={{ display: "block", margin: "2rem auto 8rem" }} 
            />
        </Container>
    );
}

export default Summary;

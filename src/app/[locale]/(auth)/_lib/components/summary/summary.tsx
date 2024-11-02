"use client";
import { Container, Group, Text, Title, Paper, Flex } from "@mantine/core";
import LamaButton from '../../../../../../core/ui/components/button/lama-button';
import { IconFlower } from "@tabler/icons-react";
import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import Image from "next/image";

const Summary = () => {
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));


    const handleCheck = () => setOpened(true);

    return (
        <Flex mih={"120vh"} w={"100%"} pt={"13%"} pb={"2%"} mb={"10%"} align={"center"} direction={"column"} justify={"space-between"}>
            <Title ta="center" order={1}>
                Hi! I'm <Text fw={800} variant="gradient"
      gradient={{ from: 'rgba(231,84,135,255)', to: 'black', deg: 90 }} inherit>✨ Lama ✨</Text>
            </Title>

            <Container p={0} size={600}>
                <Text size="lg" c="dimmed" line-height={1.5} ta="center" mt="md">
                    As I was playing online games like 
                    <Text component="span" size="lg" c="black" fw={700}> Pubg mobile</Text>, three years ago, multiple times people missed spelling my name.
                    Most of them thought it was Llama. Actually, Turkish people used to call me "Hayvan" which means animal in English 
                    <Text component="span" size="lg" c="black" fw={700}> lol</Text>.
                    That's where my interest in Llamas started from.
                </Text>
            </Container>

            <Group justify="center" mt="lg">
                <LamaButton
                    schema={{
                        type: "button",
                        color: "pink",
                        size: "compact-xl",
                        variant: "light",
                    }}
                    onClick={handleCheck}
                    >
                    Check this dummy button!
                </LamaButton>
                
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
        </Flex>
    );
}

export default Summary;

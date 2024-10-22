"use client";
import { Button, Container, Group, Text, Title, Image, Paper } from "@mantine/core";
import classes from "./Summary.module.css";
import { IconFlower } from "@tabler/icons-react";
import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";

export function Summary() {
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    return (
        <Container className={classes.wrapper}>
            <Title className={classes.title}>
                Hi! I&apos;m <span className={classes.name}>Wewe</span><span className={classes.exclamation}>!</span>
            </Title>

            <Container p={0} size={600}>
                <Text size="lg" color="dimmed" className={classes.description}>
                    As I was playing online games like <b>Pubg mobile</b> three years ago, multiple times people missed spelling my name.
                    Most of them thought it&apos;s Llama. Actually, turkish people used to call me &quot;Hayvan&quot; which means animal in English <b>lol</b>.
                    That&apos;s where my interest in Llamas started from.
                </Text>
            </Container>

            <Group justify="center">
                <Button onClick={() => setOpened(true)} leftSection={<IconFlower size={14} />} size="lg" variant="outline" color="pink" mt="lg">
                    Check this dummy button
                </Button>
                {opened && (
                    <Paper ref={ref} shadow="sm">
                        <span>كلشي بحكيه بتصدقوه</span>
                    </Paper>
                )}
            </Group>

            <Image src="/file.png" alt="Llama" height={370} mx="auto" />
        </Container>
    );
}

import { Container, Title, Text, Group, ActionIcon,  Card } from "@mantine/core";
import { IconBrandLinkedin, IconBrandInstagram, IconBrandTiktok, IconBrandSnapchat } from '@tabler/icons-react';
import classes from './Contact.module.css';

export function Contact() {
    return (
        <Container className={classes.wrapper}>
            <Card shadow="xl" padding="lg" radius="md" className={classes.card}>
                <Title  order={1}>
                    <Text 
                        variant="gradient"
                        gradient={{ from: "pink", to: "black", deg: 150 }} 
                        inherit
                    >
                        Contact Me!
                    </Text>
                </Title>
                <Text color="dimmed" size="lg" mt="md">
                    Got questions or just want to share your llama love? Don’t be shy! Whether it’s about llama care or the latest llama memes, I’m all ears! Send me a message, and let’s chat—because who wouldn’t want to talk about these fabulous fuzzy creatures? Llamaste! 🦙✨
                </Text>
                <Group justify="center" mt="lg" >
                    <ActionIcon 
                        color="pink" 
                        size="xl" 
                        variant="outline" 
                        component="a" 
                        target="_blank" 
                        href="https://www.linkedin.com/in/lama-ibrahim-a382aa305/"
                        className={classes.icon}
                    >
                        <IconBrandLinkedin size="3rem" strokeWidth={1}/>
                    </ActionIcon>

                    <ActionIcon 
                        color="pink" 
                        size="xl" 
                        variant="outline" 
                        component="a" 
                        target="_blank" 
                        href="https://www.instagram.com/lama.ibrahimm/"
                        className={classes.icon}
                    >
                        <IconBrandInstagram size="3rem" strokeWidth={1}/>
                    </ActionIcon>

                    <ActionIcon 
                        color="pink" 
                        size="xl" 
                        variant="outline" 
                        component="a" 
                        target="_blank" 
                        href="https://www.tiktok.com/@lama.ibrahimm?_t=8qjRVxMDk64&_r=1"
                        className={classes.icon}
                    >
                        <IconBrandTiktok size="3rem" strokeWidth={1}/>
                    </ActionIcon>

                    <ActionIcon 
                        color="pink" 
                        size="xl" 
                        variant="outline" 
                        component="a" 
                        target="_blank" 
                        href="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWQxOXg3dnE2Z2J2NmJ5c3B4eHJ1b28yMm1leHRvdzZ3NGJ2MXo5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DU4iDpA1CDkcZMpAVA/giphy.webp"
                        className={classes.icon}
                    >
                        <IconBrandSnapchat size="3rem" strokeWidth={1}/>
                    </ActionIcon>
                </Group>
            </Card>
        </Container>
    );
}

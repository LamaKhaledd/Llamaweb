import React from 'react';
import { List, ThemeIcon, ListItem, Text } from "@mantine/core";
import { IconMusicCheck } from '@tabler/icons-react';

interface LlamaListsProps {
    type: "mountainHelpers" | "wool";
}

const LlamaLists: React.FC<LlamaListsProps> = ({ type }) => {
    const mountainHelpersList = (
        <>
            <ListItem>
                <Text fw={500}>Llamas</Text> tell their companions off by spitting at them
            </ListItem>
            <ListItem>
                <Text fw={500}>Llamas</Text> language is humming
            </ListItem>
            <ListItem>
                <Text fw={500}>Llamas</Text> are not only sociable and soft but also extremely resilient!
            </ListItem>
        </>
    );

    const woolList = (
        <>
            <ListItem>
                <Text fw={500}>Llamas</Text> love basking in the sun during chilly mornings
            </ListItem>
            <ListItem>
                <Text fw={500}>Llamas</Text> can recognize their favorite snacks from a distance
            </ListItem>
            <ListItem>
                <Text fw={500}>Llamas</Text> have an incredible sense of direction, rarely getting lost
            </ListItem>
        </>
    );

    const selectedList = type === "mountainHelpers" ? mountainHelpersList : woolList;

    return (
        <List
            icon={
                <ThemeIcon color="pink" size={30} radius="xl">
                    <IconMusicCheck stroke={2} color="pink" />
                </ThemeIcon>
            }
            mt="lg"
        >
            {selectedList}
        </List>
    );
};

export default LlamaLists;

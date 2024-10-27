import React from 'react';
import { List, ThemeIcon, ListItem } from "@mantine/core";
import { IconMusicCheck } from '@tabler/icons-react';

interface LlamaListsProps {
    type: "mountainHelpers" | "wool";
}

const LlamaLists: React.FC<LlamaListsProps> = ({ type }) => {
    const mountainHelpersList = (
        <>
            <ListItem><b>Llamas</b> tell their companions off by spitting at them</ListItem>
            <ListItem><b>Llamas</b> language is humming</ListItem>
            <ListItem><b>Llamas</b> are not only sociable and soft but also extremely resilient!</ListItem>
        </>
    );

    const woolList = (
        <>
            <ListItem><b>Llamas</b> love basking in the sun during chilly mornings</ListItem>
            <ListItem><b>Llamas</b> can recognize their favorite snacks from a distance</ListItem>
            <ListItem><b>Llamas</b> have an incredible sense of direction, rarely getting lost</ListItem>
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

import { List, ListItem, ThemeIcon, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { LLAMA_FACTS } from "./llama-facts";

const MoreInfoList = () => {
  return (
    <List
      mt="30"
      spacing="md"
      size="sm"
      icon={
        <ThemeIcon color="black" size={20} radius="xl">
          <IconCheck stroke={2} color="pink" />
        </ThemeIcon>
      }
    >
      {LLAMA_FACTS.map((fact) => (
        <ListItem key={fact.id}>
          <Text fw={500}>Llamas</Text> {fact.text}
        </ListItem>
      ))}
    </List>
  );
};

export default MoreInfoList;

import { Tabs, TabsList, TabsTab, TabsPanel, Title, Text } from "@mantine/core";
import LlamaLists from "./llama-info-lists"; // Import the LlamaLists component
import classes from "./insights.module.css";

const LlamaTabs = () => {
  return (
    <Tabs
      color="pink"
      variant="pills"
      radius="md"
      orientation="vertical"
      defaultValue="gallery"
      className={classes.tabsContainer}
    >
      <TabsList className={classes.tabsList}>
        <TabsTab className={classes.tab} value="Mountain Helpers">
          Mountain Helpers
        </TabsTab>
        <TabsTab className={classes.tab} value="Wool">
          Wool
        </TabsTab>
        <TabsTab className={classes.tab} value="Friendly and Smart">
          Friendly and Smart
        </TabsTab>
      </TabsList>

      <TabsPanel className={classes.tabsInner} value="Mountain Helpers">
        <Title order={2}>Mountain Helpers</Title>
        <Text fs="italic" mt="md">
          Llamas have been essential pack animals in the Andes for centuries,
          known for their strength and ability to carry heavy loads through
          difficult terrain. Their resilience and sure-footedness make them
          ideal for navigating high-altitude environments.
        </Text>
        <LlamaLists type="mountainHelpers" />
        <Text c="gray" mt="md">
          Llamas continue to be valuable partners in both traditional and
          modern uses across the globe.
        </Text>
      </TabsPanel>

      <TabsPanel className={classes.tabsInner} value="Wool">
        <Title order={2}>Wool</Title>
        <Text fs="italic" mt="md">
          Llama wool is valued for its softness and hypoallergenic qualities.
          It’s spun into yarn for clothing and textiles, with natural colors
          that range from white to deep browns and blacks, making it a
          versatile material for artisans.
        </Text>
        <LlamaLists type="wool" />
        <Text c="gray" mt="md">
          Llamas are not only reliable, but they also bring joy to people with
          their quirky behavior and calm demeanor.
        </Text>
      </TabsPanel>

      <TabsPanel className={classes.tabsInner} value="Friendly and Smart">
        <Title order={2}>Friendly and Smart</Title>
        <Text fs="italic" mt="md">
          Llamas are social, intelligent creatures that thrive in herds and are
          easy to train. Their gentle nature makes them popular for therapy,
          farming, and recreational activities, though they can defend
          themselves by spitting if threatened. Their intelligence and calm
          demeanor make them highly trainable, often used in farming as guard
          animals to protect livestock, such as sheep, from predators like
          coyotes. Llamas also play a role in eco-tourism, where they
          accompany hikers and trekkers on trails, carrying supplies while
          offering companionship.
        </Text>
      </TabsPanel>
    </Tabs>
  );
};

export default LlamaTabs;

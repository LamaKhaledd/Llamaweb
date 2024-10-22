import { 
  Container, 
  Title, 
  Text, 
  Tabs, 
  TabsList, 
  TabsTab, 
  TabsPanel, 
  List, 
  ThemeIcon, 
  ListItem, 
  Card 
} from "@mantine/core";
import { IconMusicCheck } from '@tabler/icons-react';
import classes from "./Details.module.css";

export function Details() {
  return (
      <div className={classes.wrapper}>
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
                  
                  <Text color="dimmed" size="lg" mt="md">
                      <b>The llama,</b> native to the Andes, is a domesticated animal valued for its wool, 
                      meat, and use as a pack animal. Standing 5-6 feet tall, llamas are social and gentle, 
                      making them easy to train. They provide wool for textiles and are well-adapted to cold 
                      mountain climates. Their curious and friendly nature has made them popular worldwide, 
                      symbolizing the Andean culture.
                  </Text>
                  
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
                              known for their strength and ability to carry heavy loads through difficult terrain. 
                              Their resilience and sure-footedness make them ideal for navigating high-altitude environments.
                          </Text>
                          <List
                              icon={
                                  <ThemeIcon color="pink" size={30} radius="xl">
                                      <IconMusicCheck stroke={2} color="pink" />
                                  </ThemeIcon>
                              }
                              mt="lg"
                          >
                              <ListItem><b>Llamas</b> tell their companions off by spitting at them</ListItem>
                              <ListItem><b>Llamas</b> language is humming</ListItem>
                              <ListItem><b>Llamas</b> are not only sociable and soft but also extremely resilient!</ListItem>
                          </List>
                          <Text color="gray" mt="md">
                              Llamas continue to be valuable partners in both traditional and modern uses across the globe.
                          </Text>
                      </TabsPanel>

                      <TabsPanel className={classes.tabsInner} value="Wool">
                          <Title order={2}>Wool</Title>
                          <Text fs="italic" mt="md">
                              Llama wool is valued for its softness and hypoallergenic qualities. 
                              It’s spun into yarn for clothing and textiles, with natural colors that range 
                              from white to deep browns and blacks, making it a versatile material for artisans.
                          </Text>
                          <List
                              icon={
                                  <ThemeIcon color="pink" size={30} radius="xl">
                                      <IconMusicCheck stroke={2} color="pink" />
                                  </ThemeIcon>
                              }
                              mt="lg"
                          >
                              <ListItem><b>Llamas</b> love basking in the sun during chilly mornings</ListItem>
                              <ListItem><b>Llamas</b> can recognize their favorite snacks from a distance</ListItem>
                              <ListItem><b>Llamas</b> have an incredible sense of direction, rarely getting lost</ListItem>
                          </List>
                          <Text color="gray" mt="md">
                              Llamas are not only reliable, but they also bring joy to people with their quirky behavior and calm demeanor.
                          </Text>
                      </TabsPanel>

                      <TabsPanel className={classes.tabsInner} value="Friendly and Smart">
                          <Title order={2}>Friendly and Smart</Title>
                          <Text fs="italic" mt="md">
                              Llamas are social, intelligent creatures that thrive in herds and are 
                              easy to train. Their gentle nature makes them popular for therapy, farming, 
                              and recreational activities, though they can defend themselves by spitting if threatened.
                              Their intelligence and calm demeanor make them highly trainable, often used in farming as guard animals to protect livestock, such as sheep, from predators like coyotes. Llamas also play a role in eco-tourism, where they accompany hikers and trekkers on trails, carrying supplies while offering companionship.
                          </Text>
                      </TabsPanel>
                  </Tabs>
              </Card>
          </Container>
      </div>
  );
}

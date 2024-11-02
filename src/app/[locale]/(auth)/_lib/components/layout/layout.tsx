"use client";
import { AppShell, Center, Container, Flex } from "@mantine/core";
import SimpleHeader from "../header/header";
import Summary from "../summary/summary";
import About from "../about/about";
import Inisghts from "../insights/insights";
import Qoutes from "../qoutes/qoutes";
import { Contact } from "../contact/contact";

export function BasicAppShell() {
  return (
    <Container>
      <AppShell>
        <AppShell.Header>
          <SimpleHeader />
        </AppShell.Header>
        <Flex direction={"column"} justify={Center}>
          <Container w={"100%"}>
            <Summary />
          </Container>
          <Container w={"100%"}>
            <About />
          </Container>
          <Container w={"100%"}>
            <Inisghts />
          </Container>
          <Container w={"100%"}>
            <Qoutes />
          </Container>
          <Container w={"100%"}>
            <Contact />
          </Container>
        </Flex>
      </AppShell>
    </Container>
  );
}

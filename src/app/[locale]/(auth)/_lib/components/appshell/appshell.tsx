"use client";
import { AppShell, Container, Box } from '@mantine/core';
import SimpleHeader from '../header/header';
import Summary from '../summary/summary';
import About from '../about/about';
import Inisghts from '../insights/insights';
import Qoutes from '../qoutes/qoutes';
import { Contact } from '../contact/contact';


export function BasicAppShell() {
  return (
    <Container>
      <AppShell
      >
        <AppShell.Header>
          <SimpleHeader />
        </AppShell.Header>

        <AppShell.Main
          style={{
            display: "flex",
            flexDirection: "column",       
            alignItems: "center",       
            gap: "2rem",                
          }}
        >
          <Box style={{ width: "100%", maxWidth: "600px" }}><Summary /></Box>
          <Box style={{ width: "100%", maxWidth: "800px" }}><About /></Box>
          <Box style={{ width: "100%", maxWidth: "800px" }}><Inisghts /></Box>
          <Box style={{ width: "100%", maxWidth: "800px" }}><Qoutes /></Box>
          <Box style={{ width: "100%", maxWidth: "800px" }}><Contact /></Box>
        </AppShell.Main>
      </AppShell>
    </Container>
  );
}

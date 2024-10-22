import { Button, Container } from '@mantine/core';
import { Summary } from './components/summary/Summary';
import { AboutMe } from './components/about.me/AboutMe';
import { Details } from './components/details/Details';
import { Qoutes } from './components/qoutes/Qoutes';
import { Contact } from './components/contact/Contact';
import { HeaderSimple } from './components/header/MyHeader';
function Home() {
  return (
    <Container>
      <HeaderSimple />
      <Summary />
      <AboutMe />
      <Details />
      <Qoutes />
      <Contact />
    </Container>
    
  );
}

export default Home;

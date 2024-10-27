"use client";
import { useState } from 'react';
import { Container, Group, Burger, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconFlower } from '@tabler/icons-react';
import classes from './header.module.css';
import { links } from '../../constants/links';
import AuthModal from '../../../../../../core/ui/components/modal/modal';

const SimpleHeader= () => {
  const [opened, { toggle, open, close }] = useDisclosure(false); 
  const [active, setActive] = useState(links[0].link);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, link: { label: string; link: string }) => {
    event.preventDefault(); 
    setActive(link.link); 
    if (link.label === 'Sign up') {
      open(); 
    }
  };

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => handleClick(event, link)} 
    >
      {link.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <AuthModal opened={opened} onClose={close} />
      <Container size="lg" className={classes.inner}>
        <IconFlower size={32} color="white" />
        <Group gap={5} visibleFrom="xs" className={classes.navGroup}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

export default SimpleHeader;

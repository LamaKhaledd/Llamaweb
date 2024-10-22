"use client";
import { useState } from 'react';
import { Container, Group, Burger, Button, Modal, TextInput, PasswordInput, Checkbox } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconFlower } from '@tabler/icons-react';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/signup', label: 'Sign up' }, 
];

export function HeaderSimple() {
  const [opened, { toggle, open, close }] = useDisclosure(false); 
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        if (link.label === 'Sign up') {
          open(); 
        }
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Modal opened={opened} onClose={close} title="Authentication">
        <TextInput label="First name" placeholder="Your first name" required />
        <TextInput label="Last name" placeholder="Your last name" required />
        <TextInput label="Email" placeholder="Your email" required />
        <PasswordInput label="Password" placeholder="Password" required />
        <PasswordInput label="Confirm Password" placeholder="Confirm password" required />
        <Checkbox
          label="I agree to sell my soul and privacy to this corporation"
          required
        />
        <Button fullWidth mt="md" onClick={close}>
          Register
        </Button>
      </Modal>

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

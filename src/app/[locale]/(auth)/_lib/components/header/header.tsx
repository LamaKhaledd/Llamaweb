"use client";
import { useState } from "react";
import { Container, Group, Burger, Anchor, Modal, Grid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFlower } from "@tabler/icons-react";
import classes from "./header.module.css";
import { links } from "../../constants/links";
import InputRenderer from "@/core/ui/components/inputs-renderer/lama-inputs-renderer";
import LamaButton from "@/core/ui/components/button/lama-button";
import { InputSchema, InputType } from "@/core/ui/models/input-base.type";

type CheckboxGroupValues = { [key: string]: boolean };

const SimpleHeader = () => {
  const [opened, { toggle, open, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const genders = ["Male", "Female", "Other"];

  const employerRegisterInputsSchema: InputSchema[] = [
    {
      inputType: "text" as InputType,
      label: "Email",
      name: "Email",
      required: true,
    },

    {
      inputType: "password" as InputType,
      label: "Password",
      name: "password",
      required: true,
    },

    {
      inputType: "checkbox" as InputType,
      label: "I agree to the terms and conditions",
      name: "terms",
      required: true,
    },

    {
      inputType: "radio" as InputType,
      label: "Gender",
      name: "gender",
      options: genders.map((gender) => ({
        id: gender.toLowerCase(),
        value: gender.toLowerCase(),
        label: gender,
      })),
    },
  ];

  const initialCheckboxGroupValues: CheckboxGroupValues = Array.from(
    { length: 5 },
    (_, i) => `Testing checkbox group ${i + 1}`
  ).reduce((acc, key) => ({ ...acc, [key]: false }), {});

  const [checkboxGroupValues, setCheckboxGroupValues] =
    useState<CheckboxGroupValues>(initialCheckboxGroupValues);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: { label: string; link: string }
  ) => {
    event.preventDefault();
    setActive(link.link);
    if (link.label === "Sign up") open();
  };

  const handleRegister = () => {
    close();
  };

  const navItems = links.map((link) => (
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
      <Modal opened={opened} onClose={close} title="Authentication">
        <Grid gutter="lg">
          {employerRegisterInputsSchema.map((inputSchema) => (
            <Grid.Col key={inputSchema.label} span={12}>
              <InputRenderer schema={inputSchema} value={undefined} />
            </Grid.Col>
          ))}
        </Grid>
        <LamaButton
          schema={{
            type: "button",
            color: "pink",
            size: "compact-md",
            variant: "outline",
            fullWidth: true,
          }}
          onClick={handleRegister}
        >
          Register
        </LamaButton>
      </Modal>

      <Container size="lg" className={classes.inner}>
        <IconFlower size={32} color="white" />
        <Group gap={5} visibleFrom="xs" className={classes.navGroup}>
          {navItems}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

export default SimpleHeader;

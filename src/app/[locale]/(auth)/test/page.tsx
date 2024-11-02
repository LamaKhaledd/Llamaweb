"use client";

import { Stack, Title, Button, Group, Container, Grid, GridCol } from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";
import { mockSchema } from "../../../../../mock-schema";
import InputRenderer from "@/core/ui/components/inputs-renderer/lama-inputs-renderer";

const Test = () => {
  const methods = useForm();
  const submit = (data: any) => console.log(data);
  
  return (
    <Container size="xs" style={{ marginTop: '2rem' }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submit)}>
          <Title ta="center" style={{ marginBottom: '1.5rem' }}>Form Test</Title>
          <Stack style={{ width: '100%' }}>
            <Grid>
              {mockSchema.map((schema) => (
                <GridCol span={12} key={schema.name}>
                  <InputRenderer schema={schema} />
                </GridCol>
              ))}
            </Grid>
            <Group justify="center" style={{ marginTop: '1.5rem' }}>
              <Button type="submit" color="blue" size="md" mb="xl">
                Submit
              </Button>
            </Group>
          </Stack>
        </form>
      </FormProvider>
    </Container>
  );
};

export default Test;

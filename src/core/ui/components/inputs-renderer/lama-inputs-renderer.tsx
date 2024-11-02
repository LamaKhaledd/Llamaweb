import React from "react";
import { getInputComponent } from "../../utils/inputs";
import { InputSchema, ValuesTypes } from "../../models/input-base.type";
import { Control, Controller, useFormContext } from "react-hook-form";

interface InputComponentProps {
  schema: InputSchema;
  value?: ValuesTypes;
  onChange?: (event: { value: ValuesTypes }) => void;
  onBlur?: () => void;
}

interface InputRendererProps {
  schema: InputSchema;
  value?: any;
}

const InputRenderer: React.FC<InputRendererProps> = ({ schema, value }) => {
  const { name, ...rest } = schema;
  const { control } = useFormContext();
  const Component = getInputComponent(
    schema.inputType
  ) as React.ComponentType<InputComponentProps>;

  const handleInputChange = <T extends string | string[] | number | undefined>({
    event,
    name,
    onChange,
  }: {
    event: { value: T };
    name: string;
    onChange: React.Dispatch<React.SetStateAction<T>>;
  }) => {
    onChange(event?.value);
    console.log(name, event?.value);
  };

  if (Component) {
    return (
      <Controller
        name={name}
        control={control as Control}
        render={({ field: { value, onChange, onBlur } }) => (
          <Component
            schema={{
              ...rest,
              name: name,
            }}
            onChange={(event: { value: ValuesTypes }) => {
              handleInputChange({ event, name, onChange });
            }}
            onBlur={() => {
              onChange(typeof value === "string" ? value?.trim() : value);
            }}
            value={value}
          />
        )}
      />
    );
  }

  return null;
};

export default InputRenderer;

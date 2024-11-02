import React from "react";
import { TextInput as MantineTextInput } from "@mantine/core";
import { ITextInput } from "@core/ui/components/inputs/lama-text/models/lama-text.interface";

const LamaTextInput = ({
  schema,
  value,
  onChange,
}: {
  schema: ITextInput;
  value?: string;
  onChange?: ({ value }: { value: string }) => void;
}): React.ReactNode => {
  const {
    label,
    placeholder = "Enter text",
    size = "md",
    color,
    required = false,
  } = schema;

  const handleOnChange = (value: string) => {
    if (onChange) {
      onChange({ value });
    }
  };

  return (
    <MantineTextInput
      label={label}
      placeholder={placeholder}
      size={size}
      required={required}
      color={color}
      value={value}
      onChange={(event) => handleOnChange(event.target.value)}
    />
  );
};

export default LamaTextInput;

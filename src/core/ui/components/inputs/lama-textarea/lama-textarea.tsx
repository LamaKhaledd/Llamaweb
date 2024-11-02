import React from "react";
import { Textarea as MantineTextarea } from "@mantine/core";
import { ITextarea } from "@core/ui/components/inputs/lama-textarea/models/lama-textarea.interface";

const LamaTextarea = ({
  schema,
  value,
  onChange,
}: {
  schema: ITextarea;
  value: string;
  onChange?: ({ value }: { value: string }) => void;
}): React.ReactNode => {
  const {
    label,
    placeholder = "Enter text",
    size = "md",
    color,
    required = false,
    autosize = false,
    minRows = 3,
    maxRows = 10,
  } = schema;

  const handleOnChange = (value: string) => {
    if (onChange) {
      onChange({ value });
    }
  };

  return (
    <MantineTextarea
      label={label}
      placeholder={placeholder}
      size={size}
      required={required}
      color={color}
      autosize={autosize}
      minRows={minRows}
      maxRows={maxRows}
      value={value}
      onChange={(event) => handleOnChange(event.target.value)}
    />
  );
};

export default LamaTextarea;
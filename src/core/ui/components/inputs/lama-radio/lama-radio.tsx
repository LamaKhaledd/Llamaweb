import React from "react";
import { Radio, RadioGroup } from "@mantine/core";
import { IRadioInput } from "@core/ui/components/inputs/lama-radio/models/lama-radio.interface";

const LamaRadioInput = ({
  schema,
  value,
  onChange,
}: {
  schema: IRadioInput;
  value: string;
  onChange: ({ value }: { value: string }) => void;
}): React.ReactNode => {
  const { label, size = "md", color, options = [] } = schema;

  const handleOnChange = (value: string) => {
    if (onChange) {
      onChange({ value });
    }
  };

  return (
    <RadioGroup
      label={label}
      size={size}
      color={color}
      value={value}
      onChange={(selectedValue) => handleOnChange(selectedValue)}
    >
      {options.map((option) => (
        <Radio key={option.value} value={option.value} label={option.label} />
      ))}
    </RadioGroup>
  );
};

export default LamaRadioInput;

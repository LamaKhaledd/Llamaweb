import React from "react";
import { Select, MultiSelect } from "@mantine/core";
import { ISelectInput } from "@core/ui/components/inputs/lama-select/models/lama-select.interface";

const LamaSelectInput = ({
  schema,
  value,
  onChange,
}: {
  schema: ISelectInput;
  value: string | string[];
  onChange: ({ value }: { value: string | string[] }) => void;
}): React.ReactNode => {
  const {
    label,
    size = "md",
    color,
    options = [],
    placeholder = "Select...",
    searchable = true,
    clearable = true,
    multiple = false,
  } = schema;

  const commonProps = {
    label,
    size,
    color,
    data: options.map((option) => ({ value: option.value, label: option.label })),
    placeholder,
    searchable,
    clearable,
  };

  const handleOnChange = (selected: string | string[]) => {
    if (onChange) {
      onChange({ value: selected });
    }
  };

  return multiple ? (
    <MultiSelect
      {...commonProps}
      value={value as string[]}
      onChange={(selected) => handleOnChange(selected)}
    />
  ) : (
    <Select
      {...commonProps}
      value={value as string}
      onChange={(selected) => handleOnChange(selected as string)}
    />
  );
};

export default LamaSelectInput;
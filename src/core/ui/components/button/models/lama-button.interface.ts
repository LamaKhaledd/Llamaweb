import { ButtonVariant, MantineSize } from "@mantine/core";
import { ButtonType, CompactButtonSize } from "./lama-button.type";

export interface IButton {
  type?: ButtonType;
  label?: string;
  color?: string;
  size?: MantineSize | CompactButtonSize;
  variant?: ButtonVariant;
  rightSection?: React.ReactNode;
  leftSection?: React.ReactNode;
  fullWidth?: boolean;
}

import exp from "constants";
import { ICheckboxInput } from "../components/inputs/lama-checkbox/models/lama-checkbox.interface";
import { IPasswordInput } from "../components/inputs/lama-password/models/lama-password.interface";
import { IRadioInput } from "../components/inputs/lama-radio/models/lama-radio.interface";
import { ISelectInput } from "../components/inputs/lama-select/models/lama-select.interface";
import { ISwitchInput } from "../components/inputs/lama-switch/models/lama-switch.interface";
import { ITextInput } from "../components/inputs/lama-text/models/lama-text.interface";
import { ITextarea } from "../components/inputs/lama-textarea/models/lama-textarea.interface";

export type InputSchema =
  | ITextInput
  | IPasswordInput
  | ITextarea
  | IRadioInput
  | ISwitchInput
  | ISelectInput
  | ICheckboxInput;

export type InputType =
  | "text"
  | "password"
  | "textarea"
  | "checkbox"
  | "radio"
  | "select"
  | "switch";

export type ValuesTypes =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | Date
  | Date[]
  | [number, number];

import { INPUT_TYPE } from "../../constants/input-renderer-constants";
import { InputComponentProps } from "./input-component-props";
import LamaCheckboxInput from "./lama-checkbox/lama-checkbox";
import LamaPasswordInput from "./lama-password/lama-password";
import LamaRadioInput from "./lama-radio/lama-radio";
import LamaSelectInput from "./lama-select/lama-select";
import LamaSwitchInput from "./lama-switch/lama-switch";
import LamaTextInput from "./lama-text/lama-text";
import LamaTextarea from "./lama-textarea/lama-textarea";

export const INPUT_COMPONENTS_MAP = {
  [INPUT_TYPE.TEXT]: LamaTextInput as React.FC<InputComponentProps>,
  [INPUT_TYPE.PASSWORD]: LamaPasswordInput as React.FC<InputComponentProps>,
  [INPUT_TYPE.TEXT_AREA]: LamaTextarea as React.FC<InputComponentProps>,
  [INPUT_TYPE.CHECKBOX]: LamaCheckboxInput as React.FC<InputComponentProps>,
  [INPUT_TYPE.RADIO]: LamaRadioInput as React.FC<InputComponentProps>,
  [INPUT_TYPE.SELECT]: LamaSelectInput as React.FC<InputComponentProps>,
  [INPUT_TYPE.SWITCH]: LamaSwitchInput as React.FC<InputComponentProps>,
};

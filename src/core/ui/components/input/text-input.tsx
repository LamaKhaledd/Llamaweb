import React from 'react';
import { TextInput as MantineTextInput, TextInputProps } from '@mantine/core';
import styles from './input.module.css'; 

interface CoreTextInputProps extends TextInputProps {
  label: string;
}

const CoreTextInput: React.FC<CoreTextInputProps> = ({ label, ...props }) => {
  return (
    <MantineTextInput
      label={label}
      className={styles.input} 
      {...props}
    />
  );
};

export default CoreTextInput;

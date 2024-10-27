import React from 'react';
import { PasswordInput as MantinePasswordInput, PasswordInputProps } from '@mantine/core';
import styles from './input.module.css'; 

interface CorePasswordInputProps extends PasswordInputProps {
  label: string;
}

const CorePasswordInput: React.FC<CorePasswordInputProps> = ({ label, ...props }) => {
  return (
    <MantinePasswordInput
      label={label}
      className={styles.input} 
      {...props}
    />
  );
};

export default CorePasswordInput;

import React from 'react';
import { Checkbox as MantineCheckbox, CheckboxProps } from '@mantine/core';
import styles from './input.module.css'; 

interface CoreCheckboxProps extends CheckboxProps {
  label: string;
}

const CoreCheckbox: React.FC<CoreCheckboxProps> = ({ label, ...props }) => {
  return (
    <MantineCheckbox
      label={label}
      className={styles.checkbox} 
      {...props}
    />
  );
};

export default CoreCheckbox;

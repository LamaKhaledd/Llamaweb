import React from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import styles from './Button.module.css';

interface CoreButtonProps extends MantineButtonProps {
  schema?: {
    type: "increment" | "toggle" | "link";
    incrementBy?: number;
    max?: number;
    toggleValues?: any[];
  };
  value?: any;
  onChange?: (newValue: any) => void;
  onClick?: () => void;
  component?: any;
  href?: string; 
  target?: string; 
}

const Button: React.FC<CoreButtonProps> = ({
  children,
  className,
  schema,
  value,
  onChange,
  onClick,
  component,
  href,
  target,
  ...props
}) => {
  const handleClick = () => {
    let newValue = value;

    if (schema) {
      switch (schema.type) {
        case "increment":
          newValue = (value || 0) + (schema.incrementBy || 1);
          if (schema.max && newValue > schema.max) newValue = schema.max;
          break;
        case "toggle":
          if (schema.toggleValues && schema.toggleValues.length > 0) {
            const currentIndex = schema.toggleValues.indexOf(value);
            newValue = schema.toggleValues[(currentIndex + 1) % schema.toggleValues.length];
          }
          break;
        case "link":
          // handle link type if needed
          break;
        default:
          break;
      }
    }

    if (onChange) {
      onChange(newValue);
    }

    if (onClick) {
      onClick();
    }
  };

  const buttonClass = `${styles.button} ${className || ''}`;

  
  if (href) {
    return (
      <a href={href} target={target} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <MantineButton
          className={buttonClass}
          onClick={handleClick}
          component={component}
          {...props}
        >
          {children}
        </MantineButton>
      </a>
    );
  }

  return (
    <MantineButton
      className={buttonClass}
      onClick={handleClick}
      component={component}
      {...props}
    >
      {children}
    </MantineButton>
  );
};

export default Button;

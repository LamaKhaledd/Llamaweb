import React from "react";
import { Button } from "@mantine/core";
import { IButton } from "./models/lama-button.interface";

const LamaButton = ({
  schema = {},  
  children,
  onClick,
}: {
  schema?: IButton; 
  children: React.ReactNode;
  onClick: () => void;
}): React.ReactNode => {
  const {
    label = "",            
    type = "button",      
    color = "pink",       
    size = "compact-md",   
    variant = "filled",    
    rightSection,
    leftSection,
    fullWidth = false,
  } = schema || {};      

  return (
    <Button
      variant={variant}
      size={size}
      c={color}
      type={type}
      rightSection={rightSection}
      leftSection={leftSection}
      onClick={onClick}
      fullWidth={fullWidth} 
    >
      {label || children}
    </Button>
  );
};

export default LamaButton;

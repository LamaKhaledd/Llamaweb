import React from 'react';
import { Modal } from '@mantine/core';
import CoreTextInput from '../input/text-input'; 
import CorePasswordInput from '../input/password-input'; 
import CoreCheckbox from '../input/checkbox-input'; 
import Button from '../button/button'; 

interface AuthModalProps {
  opened: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ opened, onClose }) => {
  const handleRegister = () => {
    onClose(); 
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Authentication">
      <CoreTextInput label="First name" placeholder="Your first name" required />
      <CoreTextInput label="Last name" placeholder="Your last name" required />
      <CoreTextInput label="Email" placeholder="Your email" required />
      <CorePasswordInput label="Password" placeholder="Password" required />
      <CorePasswordInput label="Confirm Password" placeholder="Confirm password" required />
      <CoreCheckbox
        label="I agree to sell my soul and privacy to this corporation"
        required
      />
      <Button fullWidth mt="md" onClick={handleRegister}>
        Register
      </Button>
    </Modal>
  );
};

export default AuthModal;

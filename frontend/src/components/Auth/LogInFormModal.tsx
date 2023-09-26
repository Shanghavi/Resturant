import React from "react";
import LogInForm from "./LogInForm";

interface LoginFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginFormModal: React.FC<LoginFormModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
      
          <div>
            <LogInForm onClose={onClose} />
          </div>
       
      )}
    </>
  );
};

export default LoginFormModal;

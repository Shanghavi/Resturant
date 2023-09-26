import React from "react";

import SignUpForm from "./SignUpForm";

interface SignupFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpFormModal: React.FC<SignupFormModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
      
          <div>
            <SignUpForm onClose={onClose} />
          </div>
       
      )}
    </>
  );
};

export default SignUpFormModal;

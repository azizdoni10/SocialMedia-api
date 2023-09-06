import React from "react";
import { Input } from "./AppInput.style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'tel' | 'password';
  placeholder: string;
  isDisabled: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  errorText?: string;
}

export const AppInput = ({
  type,
  placeholder,
  isDisabled,
  hasError,
  errorText,
  ...props
}: InputProps) => {
  return (
    <div>
      <Input
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        hasError={hasError} 
        {...props}
      />
      {hasError && <p className="error-message">{errorText}</p>} {/* Add a class name to the error message */}
    </div>
  );
};
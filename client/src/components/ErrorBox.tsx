import React from 'react';

interface ErrorBoxProps {
  message: string;
  close: () => void;
}

const ErrorBox: React.FC<ErrorBoxProps> = ({ message, close }) => {
  return (
    <div className="error-box">
      <p>{message}</p>
      <button onClick={close}>X</button>
    </div>
  );
};

export default ErrorBox;
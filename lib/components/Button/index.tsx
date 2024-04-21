import React from 'react';

type ButtonVariant = 'filled' | 'outlined' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonColor = 'primary' | 'secondary';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  size = 'md',
  color = 'primary',
  children,
  ...props
}) => {
  const baseStyles = 'rounded font-semibold';

  const sizeStyles = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4',
    lg: 'py-3 px-10 text-lg',
  };

  const colorStyles = {
    primary: {
      filled: 'bg-primary-700 hover:bg-primary-500 text-primaryText',
      outlined:
        'bg-transparent bg-opacity-5 bg-primary-300 hover:bg-primary-500 hover:bg-opacity-10 text-primary-700 border-primary-700 border focus:ring-[#00C200]',
      text: 'bg-transparent hover:bg-primary-500 hover:bg-opacity-30 text-primary-700',
    },
    secondary: {
      filled: 'bg-secondary-700 hover:bg-secondary-500 text-primaryText',
      outlined:
        'bg-transparent hover:bg-secondary-900 hover:bg-opacity-10 text-secondary-700 border-secondary-700 border',
      text: 'bg-transparent hover:bg-secondary-700 hover:bg-opacity-10 text-secondary-700',
    },
  };

  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[color][variant]}`;

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

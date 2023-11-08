import React from 'react';

type ButtonVariant = 'filled' | 'outlined' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonColor = 'primary' | 'secondary';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;

}

export const Button: React.FC<ButtonProps> = (
    {variant = 'filled', 
    size = 'md',
     color = 'primary',
      children,
      ...props
    }) => {

        const baseStyles =
        'rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
    
      const sizeStyles = {
        sm: 'py-1 px-2 text-sm',
        md: 'py-2 px-4',
        lg: 'py-3 px-6 text-lg',
      };
    
      const colorStyles = {
        primary: {
          filled: 'bg-[#35FF1F] hover:bg-[#00C200] text-white focus:ring-[#00C200]',
          outlined:
            'bg-transparent hover:bg-[#dcfce7] text-[#35FF1F] border-[#35FF1F] border focus:ring-[#00C200]',
          text: 'bg-transparent hover:bg-[#dcfce7] text-[#35FF1F] focus:ring-[#00C200]',
        },
        secondary: {
          filled: 'bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-400',
          outlined:
            'bg-transparent hover:bg-gray-100 text-gray-500 border-gray-500 border focus:ring-gray-400',
          text: 'bg-transparent hover:bg-gray-100 text-gray-500 focus:ring-gray-400',
        },
      };
    
      const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[color][variant]}`;
    

    return (
        <button className={buttonStyles} {...props}>
        {children}
      </button>
    )
}
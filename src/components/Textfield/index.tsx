import React from 'react';

type textFieldVariant = 'filled' | 'outlined' | 'standard';
type textFieldSize = 'sm' | 'md' | 'lg';
type textFieldType = 'password' | 'number' | 'email' | 'text';

export interface textFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: textFieldVariant;
  size?: textFieldSize;
  type?: textFieldType;
  label?: string;
  color?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  rowsMax?: number;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

export const TextField: React.FC<textFieldProps> = ({
  variant = 'standard',
  size = 'md',
  type = 'text',
  label,

  placeholder,

  disabled,
  required,
  readOnly,

  startIcon,
  endIcon,
  onChange,
  onClick,

  onKeyPress,
  onKeyUp,
  onKeyDown,
  ...props
}) => {
  const baseStyles =
    'rounded font-semibold flex items-center focus:outline-none';

  const sizeStyles = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-2',
    lg: 'py-3 px-2 text-lg',
  };

  const variantStyles = {
    filled:
      'bg-[#F1FDEB] hover:bg-[#DAE6D4] text-[#21351B] focus:border-b-2 border-[#35FF1F]',
    outlined:
      'bg-transparent hover:border-[#A6B1A0] text-[#21351B] border-[#DAE6D4] border  focus:border-[#35FF1F]',
    standard:
      ' bg-transparent text-[#21351B] border-b-2 border-[#DAE6D4] hover:border-[#A6B1A0]  focus:border-b-2 focus:border-[#35FF1F]',
  };

  const textFieldStyles = `${baseStyles} ${sizeStyles[size]} ${
    variantStyles[variant as keyof typeof variantStyles]
  }`;

  const iconStyles = `inline-block h-auto w-auto ${startIcon ? 'mr-2' : 'ml-2'}`;

  const handleFocus = () => {
    const parent = document.getElementById('parent');
    if (parent) {
      if (variant === 'standard' || variant === 'filled')
        parent.style.borderBottom = '2px solid #35FF1F';
      else parent.style.border = '2px solid #35FF1F';
    }
  };

  const handleBlur = () => {
    const parent = document.getElementById('parent');
    if (parent) {
      if (variant === 'standard' || variant === 'filled')
        parent.style.borderBottom = '2px solid #DAE6D4';
      else parent.style.border = '2px solid #DAE6D4';
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'column',
        gap: '5px',
      }}
    >
      {label && <label style={{ marginLeft: '2px' }}>{label}</label>}
      <div
        id="parent"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          width: 'fit-content',
        }}
        className={textFieldStyles}
      >
        {startIcon && <span className={iconStyles}>{startIcon}</span>}
        <input
          style={{
            outline: 'none',
            background: 'transparent',
          }}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-describedby="helper-text"
          onChange={onChange}
          onClick={onClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          {...props}
        />
        {endIcon && <span className={iconStyles}>{endIcon}</span>}
      </div>
    </div>
  );
};

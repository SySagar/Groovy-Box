import React from 'react';
import { useRef, useEffect } from 'react';

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
      'bg-primary-700 hover:bg-opacity-95 text-[#21351B] focus:border-b-2',
    outlined:
      'bg-transparent hover:border-[#A6B1A0] text-[#21351B] border-[#DAE6D4] border  focus:border-[#35FF1F]',
    standard:
      ' bg-transparent text-[#21351B] border-b-2 border-[#DAE6D4] hover:border-[#A6B1A0]  focus:border-b-2 focus:border-[#35FF1F]',
  };

  const textFieldStyles = `${baseStyles} ${sizeStyles[size]} ${
    variantStyles[variant as keyof typeof variantStyles]
  }`;

  const iconStyles = `inline-block h-auto w-auto ${startIcon ? 'mr-2' : 'ml-2'}`;
  const inputRef = useRef<HTMLInputElement>(null);
  const parentInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && variant==='filled') {
      inputRef.current.className = 'text-primaryText';
    }

    if (inputRef.current && (variant==='filled' || variant==='outlined')) {
      inputRef.current.className = 'text-secondaryText';
    }
  }
  , [variant]);

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
        ref={parentInputRef}
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
          }}
          ref={inputRef}
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

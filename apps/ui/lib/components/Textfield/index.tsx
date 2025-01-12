import React, { forwardRef, useState, createContext, useContext } from 'react';
import { motion, AnimatePresence, MotionProps } from 'framer-motion';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@utils/utils';
import { Text } from '../Typography';

const textFieldVariants = cva(
  'grv-w-full grv-rounded-md grv-transition-all grv-duration-200 grv-ease-in-out',
  {
    variants: {
      variant: {
        filled:
          'grv-bg-secondary-100 focus:bg-primary-50 grv-border-b-2 grv-border-primary focus:grv-outline-secondary-500 focus:grv-outline-2 focus:grv-border-secondary-500 ',
        outlined:
          'grv-bg-transparent grv-outline-2 focus:grv-outline-secondary-300  focus:border-primary-500 focus:grv-outline-2 focus:grv-border-secondary-500',
        standard:
          'grv-bg-transparent grv-border-none grv-outline-none grv-relative',
      },
      size: {
        sm: 'grv-py-1 grv-px-2 grv-text-sm',
        md: 'grv-py-2 grv-px-3 grv-text-base',
        lg: 'grv-py-3 grv-px-4 grv-text-lg',
      },
      error: {
        true: 'grv-border-error-500 focus:grv-border-error-500',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'standard',
      size: 'md',
      error: false,
    },
  }
);

type TextFieldContextType = {
  variant?: VariantProps<typeof textFieldVariants>['variant'];
  size?: VariantProps<typeof textFieldVariants>['size'];
  error?: boolean;
  isFocused: boolean;
  setIsFocused: (value: boolean) => void;
};

const TextFieldContext = createContext<TextFieldContextType | undefined>(
  undefined
);

const useTextField = () => {
  const context = useContext(TextFieldContext);
  if (!context) {
    throw new Error(
      'TextField components must be used within a TextField.Root'
    );
  }
  return context;
};

interface TextFieldRootProps extends MotionProps {
  children: React.ReactNode;
  variant?: VariantProps<typeof textFieldVariants>['variant'];
  size?: VariantProps<typeof textFieldVariants>['size'];
  error?: boolean;
  className?: string;
}

interface TextFieldInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string;
}

interface TextFieldIconProps {
  children: React.ReactNode;
  position: 'start' | 'end';
  className?: string;
}

interface TextFieldHelperTextProps {
  children: React.ReactNode;
  className?: string;
}

const Root = ({
  children,
  variant,
  size,
  error = false,
  className,
  ...props
}: TextFieldRootProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerVariants = {
    initial: { scale: 1 },
    focus: { scale: 1.01 },
  };

  const dashVariants = {
    initial: {
      scaleX: 1,
      backgroundColor: '#e5e7eb',
    },
    focus: {
      scaleX: 1,
      backgroundColor: '#3b82f6',
    },
  };

  return (
    <TextFieldContext.Provider
      value={{ variant, size, error, isFocused, setIsFocused }}
    >
      <div className="grv-flex grv-flex-col grv-gap-1">
        <motion.div
          className={cn('grv-relative', className)}
          initial="initial"
          animate={isFocused ? 'focus' : 'initial'}
          variants={containerVariants}
          {...props}
        >
          <div className="grv-flex grv-items-center">{children}</div>
          {variant === 'standard' && (
            <motion.div
              className={cn(
                'grv-absolute grv-bottom-[-8px] grv-left-0 grv-right-0 grv-h-[2px] grv-rounded-full',
                error ? 'grv-bg-red-500' : 'grv-bg-gray-200'
              )}
              variants={dashVariants}
              initial="initial"
              animate={isFocused ? 'focus' : 'initial'}
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.div>
      </div>
    </TextFieldContext.Provider>
  );
};

const Input = forwardRef<HTMLInputElement, TextFieldInputProps>(
  (
    {
      className,
      type = 'text',
      placeholder,
      disabled,
      required,
      readOnly,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const { variant, size, error, setIsFocused } = useTextField();

    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        className={cn(
          textFieldVariants({ variant, size, error }),
          'grv-w-full grv-bg-transparent focus:outline-none',
          disabled && 'grv-cursor-not-allowed grv-opacity-50',
          className
        )}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        {...props}
      />
    );
  }
);

const Icon = ({ children, position, className }: TextFieldIconProps) => {
  const { isFocused } = useTextField();

  const iconVariants = {
    initial: { opacity: 0.7 },
    focus: { opacity: 1 },
  };

  return (
    <motion.span
      className={cn(
        position === 'start' ? 'grv-ml-3 grv-mr-2' : 'grv-mr-3 grv-ml-2',
        'grv-text-text-secondary',
        className
      )}
      variants={iconVariants}
      initial="initial"
      animate={isFocused ? 'focus' : 'initial'}
    >
      {children}
    </motion.span>
  );
};

const HelperText = ({ children, className }: TextFieldHelperTextProps) => {
  const { error } = useTextField();

  return (
    <AnimatePresence>
      <motion.p
        className={cn(
          'grv-text-xs grv-mt-1 grv-block',
          error ? 'grv-text-error-500' : 'grv-text-text-secondary',
          className
        )}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        <Text>{children}</Text>
      </motion.p>
    </AnimatePresence>
  );
};

export const TextField = {
  Root,
  Input: Input,
  Icon,
  HelperText,
};

Input.displayName = 'TextField.Input';

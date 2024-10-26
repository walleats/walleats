import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  variant?: 'default' | 'outlined' | 'text';
  state?: 'default' | 'disabled' | 'pressed' | 'loading';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  variant = 'default',
  state = 'default',
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const baseStyle = 'rounded-lg transition-all ease-in-out duration-150 h-[47px]';
  const sizeStyles = {
    small: 'w-[255px]',
    medium: 'w-[352px]',
    large: 'w-[398px]',
  };

  const variantStyles = {
    default: primary ? 'bg-primary-500' : 'bg-secondary-500',
    outlined: primary ? 'border-2 border-primary-500 text-primary-500' : 'border-2 border-secondary-500 text-secondary-500',
    text: primary ? 'text-primary-500' : 'text-secondary-500',
  };

  const stateStyles = {
    default: '',
    disabled: 'opacity-50 cursor-not-allowed',
    pressed: 'scale-95',
    loading: 'cursor-wait opacity-70',
  };

  return (
    <button
      type="button"
      className={`${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${stateStyles[state]}`}
      disabled={state === 'disabled' || state === 'loading'}
      {...props}
    >
      {state === 'loading' ? 'Loading...' : label}
    </button>
  );
};

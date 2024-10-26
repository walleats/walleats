import React from 'react';
import { Spinner } from '../loaders/Spinner';

export interface ButtonProps {
  variant?: 'default' | 'outlined' | 'text';
  state?: 'default' | 'disabled' | 'pressed' | 'loading';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
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
    default: {
      default: 'bg-primary-500 text-text-50',
      disabled: 'bg-neutral-300 text-text-400',
      pressed: 'bg-primary-600 text-text-50',
      loading: 'bg-primary-300 flex items-center justify-center',
    },
    outlined: {
      default: 'bg-transparent border-2 border-primary-500 text-text-950',
      disabled: 'bg-transparent border-2 border-neutral-300 text-text-400',
      pressed: 'bg-transparent border-2 border-primary-600 text-text-950',
      loading: 'bg-transparent border-2 border-primary-300 flex items-center justify-center', 
    },
    text: {
      default: 'bg-transparent border-transparent text-text-950',
      disabled: 'bg-transparent border-transparent text-text-400',
      pressed: 'bg-transparent border-transparent text-primary-600',
      loading: 'bg-transparent border-transparent flex items-center justify-center',
    },
  };

  return (
    <button
      type="button"
      className={`${baseStyle} ${sizeStyles[size]} ${variantStyles[variant][state]}`}
      disabled={state === 'disabled' || state === 'loading'}
      {...props}
    >
      {state === 'loading' ? <Spinner size='small'/> : label}
    </button>
  );
};

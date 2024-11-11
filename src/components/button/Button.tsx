import React from 'react';
import { Spinner } from '../loaders/Spinner';
import { Icon } from '../icon/Icon';

export interface ButtonProps {
  variant?: 'default' | 'outlined' | 'text' | 'icon';
  state?: 'default' | 'disabled' | 'pressed' | 'loading';
  size?: 'small' | 'medium' | 'large' | 'xsmall' | 'component' | 'componentSmall';
  label?: string;
  icon?: string;
  onClick?: () => void;
}

export const Button = ({
  variant = 'default',
  state = 'default',
  size = 'medium',
  label,
  icon,
  ...props
}: ButtonProps) => {
  const baseStyle = 'h-[47px] rounded-lg transition-all ease-in-out duration-150';
  const sizeStyles = {
    small: 'w-[255px] text-h5 font-medium',
    medium: 'w-[352px] text-h5 font-medium',
    large: 'w-[398px] text-h5 font-medium',
    component: 'w-[144px] h-[44px] text-body font-medium',
    componentSmall: 'w-[134px] h-[44px] text-body font-medium',
    xsmall: 'w-[87px] h-[24px] text-button font-medium', 
    icon: 'w-[45px] h-[45px] flex items-center justify-center',
  };

  const variantStyles = {
    default: {
      default: 'bg-primary-500 text-text-50',
      disabled: 'bg-neutral-300 text-text-400',
      pressed: 'bg-primary-600 text-text-50',
      loading: 'bg-primary-400 flex items-center justify-center',
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
    icon: {
      default: 'bg-primary-500 ', 
      disabled: 'bg-neutral-300 ',
      pressed: 'bg-primary-600 ',
      loading: 'bg-primary-300',
    },
  };

  return (
    <button
      type="button"
      className={`${baseStyle} ${sizeStyles[variant === 'icon' ? 'icon' : size]} ${variantStyles[variant][state]}`}
      disabled={state === 'disabled' || state === 'loading'}
      {...props}
    >
      {state === 'loading' ? (
        <Spinner size="small" color="white" />
      ) : variant === 'icon' && icon ? (
        <Icon icon={icon} size="medium" />
      ) : (
        <>
          {label}
        </>
      )}
    </button>
  );
};

Button.displayName = "Button";

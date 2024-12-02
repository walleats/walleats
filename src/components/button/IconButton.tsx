import React from 'react';
import { Icon } from '../icon/Icon';

export interface IconButtonProps {
  icon: string;
  label?: string;  
  iconSize?: 'xsmall' | 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const IconButton = ({
  icon,
  label,
  iconSize = 'small',
  onClick,
}: IconButtonProps) => {
  const baseStyle = 'h-[35px] min-w-[35px] flex items-center justify-center rounded bg-primary-500 p-2';

  return (
    <button
      type="button"
      className={`${baseStyle} ${label ? 'gap-2' : ''}`} 
      onClick={onClick}
    >
      <Icon icon={icon} size={iconSize} />
      {label && <span className='text-body font-medium text-text-50 '>{label}</span>} 
    </button>
  );
};

IconButton.displayName = 'IconButton';

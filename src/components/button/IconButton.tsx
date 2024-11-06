import React from 'react';
import { Icon } from '../icon/Icon';

export interface IconButtonProps {
  icon: string;
  onClick?: () => void;
}

export const IconButton = ({ icon, onClick }: IconButtonProps) => {
  const baseStyle = 'rounded-lg transition-all ease-in-out duration-150 h-[47px]';
  return (
    <button
      type="button"
      className={`${baseStyle} `}
      onClick={onClick}
    >
      <Icon icon={icon} />
    </button>
  );
};

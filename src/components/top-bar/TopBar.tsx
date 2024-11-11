import React from 'react';
import { Icon } from '../icon/Icon';
import { icons } from '@/constants/icons';

export interface TopBarProps {
  title: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
  showCartButton?: boolean;
  onCartClick?: () => void;
  showProfileButton?: boolean;
  onProfileClick?: () => void;
}

export const TopBar = ({
  title,
  showBackButton = false,
  onBackClick,
  showCartButton = true,
  onCartClick,
  showProfileButton = true,
  onProfileClick,
}: TopBarProps) => {
  return (
    <div className="relative flex items-center w-full h-[41px] bg-background-50 px-4">
      {showBackButton && (
        <button
          type="button"
          onClick={onBackClick}
          className="flex items-center justify-center h-full"
        >
          <Icon icon={icons.arrowLeft} size="xsmall" />
        </button>
      )}

      <div className="absolute left-1/2 transform -translate-x-1/2 font-medium text-h5 text-text-950">
        {title}
      </div>

      <div className="ml-auto flex items-center gap-4">
        {showCartButton && (
          <button
            type="button"
            onClick={onCartClick}
            className="flex items-center justify-center"
          >
            <Icon icon={icons.cart} size="small" />
          </button>
        )}
        {showProfileButton && (
          <button
            type="button"
            onClick={onProfileClick}
            className="flex items-center justify-center"
          >
            <Icon icon={icons.profile} size="small" />
          </button>
        )}
      </div>
    </div>
  );
};

TopBar.displayName = 'TopBar';

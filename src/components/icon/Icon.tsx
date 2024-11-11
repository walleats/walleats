import Image from 'next/image';
import React from 'react';

interface IconProps {
  children?: React.ReactNode;
  icon: string;
  altText?: string;
  onClick?: () => void;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
}

export const Icon: React.FC<IconProps> = ({ icon, altText = 'icon', size = 'medium' ,onClick}) => {
  const sizes = {
    xsmall: 12,
    small: 16,
    medium: 24,
    large: 32,
  };

  return (
      <div
          className="flex items-center justify-center cursor-pointer"
          style={{width: sizes[size], height: sizes[size]}}
          onClick={onClick}
      >
        <Image
            src={icon}
            alt={altText}
            width={sizes[size]}
            height={sizes[size]}
            className="object-contain"
        />
      </div>
  );
};

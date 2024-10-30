import Image from 'next/image';
import React from 'react';

interface IconProps {
  url: string;
  altText?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Icon: React.FC<IconProps> = ({ url, altText = 'icon', size = 'medium' }) => {
  const sizes = {
    small: 16,
    medium: 24,
    large: 32,
  };

  return (
    <div className="flex items-center justify-center" style={{ width: sizes[size], height: sizes[size] }}>
      <Image 
        src={url} 
        alt={altText} 
        width={sizes[size]} 
        height={sizes[size]} 
        className="object-contain" 
      />
    </div>
  );
};

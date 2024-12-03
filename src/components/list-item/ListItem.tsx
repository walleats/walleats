import React, { ReactNode } from 'react';

export interface ListItemProps {
  imageShape: 'rounded' | 'square';
  icon: ReactNode;
  title: string;
  subtitle?: string;
  submitIcon?: ReactNode;
  onClick?: () => void;
}

export const ListItem = ({
  imageShape = 'rounded',
  icon,
  title,
  subtitle,
  submitIcon,
  onClick,
}: ListItemProps) => {
  return (
    <div
      className="flex items-center min-w-[400px] justify-between w-full p-2 border bg-background-50 h-[70px] border-primary-500 rounded-md"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div
          className={`flex items-center justify-center w-[50px] h-[50px] overflow-hidden border border-text-950 ${
            imageShape === 'rounded' ? 'rounded-full' : 'rounded-md'
          }`}
        >
          <div className="w-full h-full flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="ml-2">
          <h3 className="text-h6 font-bold text-text-500">{title}</h3>
          {subtitle && <p className="text-h6 font-medium text-text-400">{subtitle}</p>}
        </div>
      </div>
      {submitIcon}
    </div>
  );
};

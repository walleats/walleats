import React, { ReactNode } from 'react';

export interface ListItemProps {
  imageShape: 'rounded' | 'square';
  icon: ReactNode;
  title: string;
  subtitle?: string;
  submitIcon?: ReactNode;
  showBorder?: boolean;
  onClick?: () => void;
}

export const ListItem = ({
  imageShape = 'rounded',
  icon,
  title,
  subtitle,
  submitIcon,
  showBorder = true,
  onClick,
}: ListItemProps) => {
  return (
    <div
      className="flex items-center min-w-[300px] justify-between p-2 border-b bg-background-50 h-[70px] border-neutral-500"
      onClick={onClick}
    >
      <div className="flex items-center gap-1">
        <div
          className={`flex items-center justify-center w-[50px] h-[50px] overflow-hidden ${
            showBorder ? 'border border-text-950' : ''
          } ${imageShape === 'rounded' ? 'rounded-full' : 'rounded-md'}`}
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

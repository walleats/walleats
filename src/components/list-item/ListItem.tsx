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
      className="flex items-center justify-between w-full p-4 border-b border-neutral-200"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div
          className={`flex-shrink-0 w-12 h-12 ${imageShape === 'rounded' ? 'rounded-full' : 'rounded-lg'}`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-h5 font-medium text-text-900">{title}</h3>
          {subtitle && <p className="text-body text-text-400">{subtitle}</p>}
        </div>
      </div>
      {submitIcon}
    </div>
  );
};
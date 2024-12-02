import Image from 'next/image';
import React from 'react';
import { Button } from '../button/Button';

export interface PlanFoodProps {
  title: string;
  description: string;
  image: string;
  onSubmit: () => void;
}

export const PlanFood: React.FC<PlanFoodProps> = ({ title, description, image, onSubmit }) => {
  return (
    <div className="flex flex-col items-center w-[374px] bg-background-50 p-2 rounded-md border border-primary-500">
      <div className="relative w-full h-36">
        <Image
          src={image}
          alt={title}
          layout='fill' 
          className="object-cover rounded-md" 
        />
      </div>
      <div className='flex flex-col items-start w-full p-1 gap-1'>
      <div className='text-text-500 text-h5 font-bold'>{title}</div>
      <div className='text-text-400 text-h6 font-medium'>{description}</div>
      </div>
      <Button
        label='Order'
        variant='default'
        size='medium'
        state='default'
        onClick={onSubmit}
        />

    </div>
  );
}

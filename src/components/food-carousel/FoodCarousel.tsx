'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export interface FoodCarosuelItem {
  title: string;
  label?: string;
  image: string;
}
export interface FoodCarouselProps {
  items: FoodCarosuelItem[];
}

export const FoodCarousel: React.FC<FoodCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-[382px] h-[152px] flex flex-col overflow-hidden rounded-md">
      <div className="relative w-full h-full">
        <Image
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          className="w-full h-full object-cover"
          fill
          priority
        />

        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/70 to-transparent"></div>

        <div className="absolute top-2 text-text-50 text-h3 font-medium pl-2 z-10">
          {items[currentIndex].title}
        </div>

        {items[currentIndex].label && (
          <div className="absolute bottom-9 left-0 z-10">
            <div className="mt-1 bg-warning-500 text-text-950 text-button font-bold px-2 py-1 inline-block">
              {items[currentIndex].label}
            </div>
          </div>
        )}
      </div>

      <div className="absolute w-full h-6 bg-neutral-950 bottom-0 flex justify-center items-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex ? 'w-3 h-3 bg-text-50' : 'w-2 h-2 bg-gray-300'
            }`}
            style={{
              transform: `scale(${index === currentIndex ? 1 : 0.8})`,
              opacity: index === currentIndex ? 1 : 0.6,
            }}
          />
        ))}
      </div>
    </div>
  );
};

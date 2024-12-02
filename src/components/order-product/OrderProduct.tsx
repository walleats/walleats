import Image from "next/image";
import React from "react";

export interface OrderProductProps {
    imageShape: 'rounded'
    text: string;
    firstSubText: string;
    secondSubText: string;
    imagePath: string;
    onClick?: () => void;
}

export const OrderProduct = ({
                                 imageShape = 'rounded',
                                 imagePath,
                                 text,
                                 firstSubText,
                                 secondSubText,
                                 onClick,
                             }: OrderProductProps) => {
    return (
        <div
            className="flex items-center justify-between w-full p-2 border bg-background-50 h-[54px] min-w-[378px] border-primary-500 rounded-md"
            onClick={onClick}
        >
            <div className="flex items-center space-x-4">
            <div
                    className={`flex items-center justify-center w-[38px] h-[38px] overflow-hidden ${
                        imageShape === 'rounded' ? 'rounded-full' : 'rounded-md'
                    }`}
                >
                    <Image
                        src={imagePath}
                        alt="Store"
                        width={38}
                        height={38}
                        className="object-cover"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>

                <div className="w-[247px]">
                    <h3 className="text-h6 font-medium text-text-500">{text}</h3>
                </div>

                <div className="ml-3">
                    <h3 className="text-body font-regular text-text-500">{firstSubText}</h3>
                    <h3 className="text-body font-regular text-text-500">{secondSubText}</h3>
                </div>
            </div>
        </div>
    );
};
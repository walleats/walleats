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
            className="flex items-center justify-between w-full p-2 border bg-background-50 h-[54px] min-w-[378px] border-primary-500 rounded-lg"
            onClick={onClick}
        >
            <div className="flex items-center space-x-4">
                <div
                    className={`flex items-center justify-center w-[37px] h-[38px] overflow-hidden border border-text-950 ${
                        imageShape === 'rounded' ? 'rounded-full' : 'rounded-md'
                    }`}
                >
                    <img
                        src={imagePath}
                        alt="Product"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="ml-2 w-[247px] h-[24px]">
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
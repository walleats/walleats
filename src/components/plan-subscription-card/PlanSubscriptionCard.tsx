import React from 'react';
import { Button } from "@/components/button/Button";

export interface PlanSubscriptionCardProps {
    title: string;
    description: string;
    price: string;
    label: string;
}

export const PlanSubscriptionCard = ({
                                         title,
                                         description,
                                         price,
                                        label,
                                     }: PlanSubscriptionCardProps) => {
    return (
        <div className="p-2 bg-background-50 border border-primary-500 rounded-md w-[180px] h-[155px] flex flex-col gap-2">
            <div>
                <div className='text-text-500 text-h6 font-bold'>{title}</div>
                <p className="text-text-400 text-body font-regular">{description}</p>
            </div>
            <div className="flex items-center justify-between">
                <h3 className="text-body font-bold text-gray-900">{price}</h3>
                <Button
                    label={label}
                    size="xsmall"
                />
            </div>
        </div>
    );
};

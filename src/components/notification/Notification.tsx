import React from "react";
import { Icon } from "@/components/icon/Icon";
import { icons } from "@/constants/icons";

export interface NotificationProps {
    variant?: 'success' | 'error' | 'warning';
    message: string;
}

export const Notification: React.FC<NotificationProps> = ({
                                                              message,
                                                              variant = 'success'
                                                          }) => {
    const colorStyle = {
        success: "rounded-[10px] border-[3px] border-success-500 bg-background-50",
        error: "rounded-[10px] border-[3px] border-error-500 bg-background-50",
        warning: "rounded-[10px] border-[3px] border-warning-500 bg-background-50"
    };

    const iconType = {
        success: icons.check,
        error: icons.errorCircle,
        warning: icons.warning
    };

    const iconSize: { [key in 'success' | 'error' | 'warning']: 'small' | 'medium' | 'large' } = {
        success: 'medium',
        error: 'medium',
        warning: 'medium'
    };

    return (
        <div className={`flex w-[404px] p-[10px] items-center gap-[10px] ${colorStyle[variant]}`}>
            <div className="flex justify-between items-center flex-[1_0_0]">
                <div className="flex items-center gap-2.5 w-[248.5px]">
                    <Icon icon={iconType[variant]} size={iconSize[variant]} />
                    <span className="text-text-950 font-poppins text-base font-medium leading-6">
                        {message}
                    </span>
                </div>
            </div>
        </div>
    );
};
import React from "react";
import { Icon } from "@/components/icon/Icon";
import { icons } from "@/constants/icons";
import {IconsProps} from "@storybook/core/components";

export interface NotificationProps {
    variant?: 'success' | 'error' | 'warning';
    message: string;
}


export const Notification: React.FC<NotificationProps> = ({
                                                              message,
                                                              variant = 'success'
                                                          }) => {
    const colorStyle = {
        success: "rounded-[10px] border-[3px] border-[#43A047] bg-[#FFF]",
        error: "rounded-[10px] border-[3px] border-[#E53935] bg-[#FFF]",
        warning: "rounded-[10px] border-[3px] border-[#FFA000] bg-[#FFF]"
    };

    const iconType = {
        success: icons.check,
        error: icons.error,
        warning: icons.error
    };


    return (
        <div className={`flex w-[404px] p-[10px] items-center gap-[10px] ${colorStyle[variant]}`}>
            <div className="flex justify-between items-center flex-[1_0_0]">
                <div className="flex items-center gap-2.5 w-[248.5px]">
                    <Icon icon={iconType[variant]} size="medium" />
                    <span className="text-black font-poppins text-base font-medium leading-6">
                        {message}
                    </span>
                </div>
            </div>
        </div>
    );
};
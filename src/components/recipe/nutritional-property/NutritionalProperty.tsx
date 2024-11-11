import {Icon} from "@/components/icon/Icon";

export interface NutritionalPropertyProps {
    iconPath: string;
    propertyValue: string;
}

export const NutritionalProperty: React.FC<NutritionalPropertyProps> = ({
                                                                            iconPath,
                                                                            propertyValue
                                                                        }) => {
    return (
        <div className="flex p-2 gap-1 items-center">
            <Icon icon={iconPath} size={"medium"}></Icon>
            <span className="text-text-400 font-poppins text-sm leading-[21px]">
                {propertyValue}
            </span>
        </div>

    )
}
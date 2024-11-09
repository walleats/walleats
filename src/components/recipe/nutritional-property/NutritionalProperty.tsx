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
        <div className="flex p-2 items-center">
            <Icon icon={iconPath} size={"medium"}></Icon>
            <span className="text-[#9E9E9E] font-poppins text-sm font-normal leading-[21px]">
                {propertyValue}
            </span>
        </div>

    )
}
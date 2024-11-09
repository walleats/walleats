import {NutritionalProperty, NutritionalPropertyProps} from "@/components/recipe/NutritionalPropery";
import React from "react";

export interface NutritionalInfoProps {
    nutritionalProperties: NutritionalPropertyProps[];
}

export const NutritionalInfo: React.FC<NutritionalInfoProps> = ({
                                                                    nutritionalProperties
                                                                }) => {
    return (
        <div className="flex w-[378px] p-2 flex-col items-start gap-2 bg-white">
           <span className="text-[#212121] font-poppins text-[28px] font-bold leading-[42px]">
                Nutritional Info
           </span>
            <div className="flex w-[362px] justify-between items-center content-center gap-2 flex-wrap">
                {nutritionalProperties.map((property, index) => (
                    <NutritionalProperty
                        key={index}
                        iconPath={property.iconPath}
                        propertyValue={property.propertyValue}
                    />
                ))}
            </div>
        </div>
    )
}
import {NutritionalProperty, NutritionalPropertyProps} from "@/components/recipe/nutritional-property/NutritionalProperty";
import React from "react";

export interface NutritionalInfoProps {
    nutritionalProperties: NutritionalPropertyProps[];
}

export const NutritionalInfo: React.FC<NutritionalInfoProps> = ({ nutritionalProperties }) => {
    return (
        <div className="flex w-[378px] p-2 flex-col items-start gap-2 bg-background-50">
           <span className="text-text-950 font-poppins text-h3 font-bold leading-[42px]">
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
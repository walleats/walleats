import {Icon} from "@/components/icon/Icon";
import {icons} from "@/constants/icons";
import React from "react";
import {RecipeReview} from "@/components/recipe/recipe-review/RecipeReview";

export interface RecipeDescription {
    description:string,
    review:number,
    reviews:number,
    time:number,
}

export interface RecipeDescriptionProps {
    recipeDescription: RecipeDescription;
    onClickReview: (index:number) => void;
}

export const RecipeDescription: React.FC<RecipeDescriptionProps> = ({
    recipeDescription,
    onClickReview
}) =>{
    return (
        <div className="flex w-[378px] p-2 flex-col items-start gap-2 rounded-t-lg bg-[#FFF]">
            <div className="flex pr-2 justify-between items-center self-stretch">
                <span className="flex-[1_0_0] text-[#212121] font-bold text-[24px] leading-[36px] font-poppins">
                    Description
                </span>
                <div className="flex items-center gap-2">
                    <Icon icon={icons.clock} size={"medium"}>
                    </Icon>
                    <span className="text-[#212121] font-poppins text-[24px] font-medium leading-[36px]">
                        {recipeDescription.time} min
                    </span>
                </div>
            </div>

            <div className="w-[346px] flex-shrink-0 text-[#636363] font-poppins text-[20px] font-normal leading-[30px]">
                {recipeDescription.description}
            </div>
            <RecipeReview
                recipeDescription={recipeDescription}
                onClickReview={onClickReview}
            />
        </div>
    )

}
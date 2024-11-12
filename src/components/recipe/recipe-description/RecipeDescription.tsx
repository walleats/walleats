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
        <div className="flex w-full p-2 flex-col items-start gap-2 rounded-t-lg bg-background-50">
            <div className="flex pr-2 justify-between items-center self-stretch">
                <span className="flex-[1_0_0] text-text-950 font-bold text-h4 leading-[36px] font-poppins">
                    Description
                </span>
                <div className="flex items-center gap-2">
                    <Icon icon={icons.clock} size={"medium"}>
                    </Icon>
                    <span className="text-text-950 font-poppins text-h4 font-medium leading-[36px]">
                        {recipeDescription.time} min
                    </span>
                </div>
            </div>

            <div className="flex-shrink-0 text-text-300 font-poppins text-h5 leading-[30px]">
                {recipeDescription.description}
            </div>
            <RecipeReview
                recipeDescription={recipeDescription}
                onClickReview={onClickReview}
            />
        </div>
    )

}
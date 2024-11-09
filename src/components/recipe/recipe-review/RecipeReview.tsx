import {RecipeDescriptionProps} from "@/components/recipe/recipe-description/RecipeDescription";
import {Icon} from "@/components/icon/Icon";
import {icons} from "@/constants/icons";
import {useState} from "react";

export const RecipeReview: React.FC<RecipeDescriptionProps> = ({
                                                                        recipeDescription,
                                                                        onClickReview
                                                                    }) =>{

    const [selectedRating, setSelectedRating] = useState<number>(recipeDescription.review);


    const handleStarClick = (index: number) => {
        setSelectedRating(index);
        if (onClickReview) {
            onClickReview(index);
        }
    };

    return (
        <div className="flex w-[362px] pb-2 pl-2 items-end gap-2">
            <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((starIndex) => (
                    <Icon
                        key={starIndex}
                        icon={starIndex <= selectedRating ? icons.starFilled : icons.starOutlined}
                        size={"medium"}
                        onClick={() => handleStarClick(starIndex)}
                    />
                ))}
            </div>
            <span className="flex justify-center items-end gap-[2px] text-[#212121] font-poppins text-[16px] font-normal leading-[24px]">
                {`(${recipeDescription.reviews} Reviews)`}
            </span>
        </div>
    );
}
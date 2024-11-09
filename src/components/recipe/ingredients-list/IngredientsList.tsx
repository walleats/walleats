import {ListItem, ListItemProps} from "@/components/list-item/ListItem";
import {Button} from "@/components/button/Button";
import React from "react";

export interface IngredientsListProps{
    itemProps: ListItemProps[],
    onClick: () => void;
}

export const IngredientsList: React.FC<IngredientsListProps> = ({
    itemProps,
    onClick
}) => {
    return (
        <div className="flex w-[378px] py-2 flex-col items-start gap-2">
            <div className="flex px-2 justify-between items-center self-stretch">
                <span className="text-[#212121] font-poppins text-[24px] font-bold leading-[36px]">
                    Ingredients
                </span>
                <Button label={"Add all to cart"} size={"componentSmall"} onClick={onClick}></Button>
            </div>
            {itemProps.map((item, index) => (
                <ListItem
                    key={index}
                    {...item}
                />
            ))}
        </div>
    )
}
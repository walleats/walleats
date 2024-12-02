import {ListItem, ListItemProps} from "@/components/list-item/ListItem";
import React from "react";
import { IconButton } from "@/components/button/IconButton";
import { icons } from "@/constants/icons";

export interface IngredientsListProps{
    itemProps: ListItemProps[],
    onClick: () => void;
}

export const IngredientsList: React.FC<IngredientsListProps> = ({
    itemProps,
    onClick
}) => {
    return (
        <div className="flex min-w-[300px] py-2 flex-col items-start gap-2">
            <div className="flex px-2 justify-between items-center self-stretch">
                <span className="text-text-950 font-poppins text-h4 font-bold leading-[36px]">
                    Ingredients
                </span>
                <IconButton label={"Add all to cart"} icon={icons.cartWhite} onClick={onClick} />
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
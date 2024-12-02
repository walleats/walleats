import React from "react";
import Image from "next/image";
import { Quantity } from "../quantity/Quantity";
import { icons } from "@/constants/icons";
import { IconButton } from "../button/IconButton";

export interface CartProductCardProps {
  name: string;
  price: number;
  image: string;
  amount: number;
  onRemove: () => void;
  onAdd: () => void;
  onSubtract: () => void;
}

export const CartProductCard: React.FC<CartProductCardProps> = ({
  name,
  price,
  image,
  amount,
  onRemove,
  onAdd,
  onSubtract,
}) => (
  <div className="flex flex-col items-center gap-2 pt-2">
    <div className="flex items-center gap-2 justify-between w-full">
      <Image
        src={image}
        alt={name}
        width={50}
        height={50}
        className="object-cover rounded-md"
      />
      <span className="text-text-500 w-full text-h4 font-medium">{name}</span>
      <span className="text-text-500 text-h4 font-medium">${price}</span>
    </div>
    <div className="flex justify-between items-center w-full">
      <IconButton icon={icons.trash} iconSize='medium' onClick={onRemove} />
      <Quantity value={amount} add={onAdd} subtract={onSubtract} size="small" />
    </div>
  </div>
);

import React from "react";
import { CartProductCard } from "./CartProductCard";

export interface CartProduct {
  name: string;
  price: number;
  image: string;
  amount: number;
}

export interface CartStoreProductsProps {
  storeName: string;
  products: CartProduct[];
  onRemoveProduct: (index: number) => void;
  onAddProduct: (index: number) => void;
  onSubtractProduct: (index: number) => void;
}

export const CartStoreProducts: React.FC<CartStoreProductsProps> = ({
  storeName,
  products,
  onRemoveProduct,
  onAddProduct,
  onSubtractProduct,
}) => {
  return (
    <div className="flex flex-col bg-background-50 w-[380px] gap-1 p-[10px] rounded-md border border-primary-500">
      <div className="text-text-500 rounded-md text-h3 font-bold py-1">{storeName}</div>
      {products.map((product, index) => (
        <CartProductCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
          amount={product.amount}
          onRemove={() => onRemoveProduct(index)}
          onAdd={() => onAddProduct(index)}
          onSubtract={() => onSubtractProduct(index)}
        />
      ))}
    </div>
  );
};

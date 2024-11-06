import Image from "next/image";
import { Button } from "../button/Button";
import { Quantity } from "../quantity/Quantity";
import { icons } from "@/constants/icons";

export interface CartProduct {
  name: string;
  price: number;
  image: string;
  amount: number;
}
export interface CartStoreProductsProps {
  storeName: string;
  products: CartProduct[];
  onRemoveProduct: () => void;
  onAddProduct: () => void;
  onSubtractProduct: () => void;
}

export const CartStoreProducts: React.FC<CartStoreProductsProps> = ({
  storeName,
  products,
}) => {
  return (
    <div className="flex flex-col bg-background-50 w-[380px] gap-1 p-[10px] rounded-md border border-primary-500">
      <div className="text-text-500 rounded-md text-h3 font-bold py-1">{storeName}</div>
      {products.map((product, index) => (
        <div key={index} className="flex flex-col items-center gap-2 pt-2">
          <div className="flex items-center gap-2 justify-between w-full">
            <Image
              src={product.image}
              alt={product.name}
              width={50}
              height={50}
              className="object-cover rounded-md"
            />
            <span className="text-text-500 w-full text-h4 font-medium">{product.name}</span>
            <span className="text-text-500 text-h4 font-medium">${product.price}</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <Button
              icon={icons.trash}
              variant="icon"
              onClick={() => {}}
            />
            <Quantity
              value={product.amount}
              add={() => {}}
              subtract={() => {}}
              size="small"
            />
          </div>
        </div>
      ))}
    </div>
  );
}


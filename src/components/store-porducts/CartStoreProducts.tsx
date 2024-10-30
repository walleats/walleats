import Image from "next/image";
import { Button } from "../button/Button";

export interface CartProduct {
  name: string;
  price: number;
  image: string;
  amount: number;
  onRemove: () => void;
  onAdd: () => void;
  onSubtract: () => void;
}
export interface CartStoreProductsProps {
  storeName: string;
  products: CartProduct[];
}

export const CartStoreProducts: React.FC<CartStoreProductsProps> = ({ storeName, products }) => {
  return (
    <div className="flex flex-col bg-secondary-200 w-[380px] gap-1 p-[10px] rounded-md">
      <div className="text-text-500 rounded-md text-h3 font-bold py-1 px-2 bg-primary-300">{storeName}</div>
      {products.map((product, index) => (
        <div key={index} className="flex flex-col items-center gap-2 py-2">
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
          <div className="flex justify-between w-full">
            <Button
              label="Remove"
              variant="default"
              size="componentSmall"
              onClick={product.onRemove}
            />
            <Button
              label="missing component"
              variant="default"
              size="xsmall"
              onClick={product.onSubtract}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
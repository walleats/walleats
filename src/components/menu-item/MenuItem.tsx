import {Button} from "@/components/button/Button";
import Image from "next/image";

export interface MenuItemProps {
    productTitle: string;
    productDescription: string;
    imagePath: string;
    price: string;
}

export const MenuItem = ({
                             productTitle,
                             productDescription,
                             imagePath,
                             price,
                         }: MenuItemProps) => {
    return (
        <div className={"flex flex-col items-center justify-center w-[384px] h-[204px] border bg-background-50 border-primary-500 rounded-lg"}>
            <div className="flex items-center justify-center w-[382px] h-[150px] borderless">
                <div className={"flex justify-between w-[352px] h-[118px]"}>
                    <div className={"flex flex-col w-[218px] h-[114px]"}>
                        <div className="w-full">
                            <h3 className="text-h4 font-bold text-text-950">{productTitle}</h3>
                        </div>
                        <div className="w-full">
                            <p className="text-body font-medium text-text-400 line-clamp-4">{productDescription}</p>
                        </div>
                    </div>
                    <Image src={imagePath} alt="Product" width={118} height={118} className="rounded-lg"/>
                </div>
            </div>

            <div className={"flex justify-between w-[382px] h-[44px] borderless px-[16px]"}>
                <h3 className={"text-h6 font-bold text-text-950"}>{price}</h3>
                <Button label={"Add Product"} size={"xsmall"}></Button>
            </div>
        </div>

    );
};
export interface OrderCardProps {
    status: string,
    color: string,
    datetime: string,
    imagePath: string,
    storeName: string,
    price: number,
}

export const OrderCard = ({
    status,
    datetime,
    imagePath,
    storeName,
    price,
}: OrderCardProps) => {
    return (
        <div className={"flex-col bg-background-50 w-[430px] h-[102px] space-y-1 p-2"}>
            <div className={"flex items-center justify-between w-fill h-[24px] px-[1px]"}>
                <div className={`flex justify-center w-[108px] h-[24px] rounded-[50px] ${
                    status === "Confirmed" 
                        ? 'bg-success-500'
                        : status === "Cancelled"
                        ? 'bg-error-500'
                        : status === "Delivered"
                        ? 'bg-info-500'
                            : ''
                }`}>
                    <h3 className={'text-h6 font-medium text-background-50'}>{status}</h3>
                </div>
                <div className={"w-[102px] h-[21px]"}>
                    <h3 className={'text-body font-medium text-text-300'}>{datetime}</h3>
                </div>
            </div>
            <div className={"flex items-center w-fill h-[55px] space-x-2.5"}>
                <div className={"w-[51px] h-[51px]"}>
                    <img
                        src={imagePath}
                        alt="Product"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className={"w-[197px] h-[42px] flex items-center"}>
                    <h3 className={"text-h5 font-medium text-text-800"}>{storeName} - ${price}</h3>
                </div>
            </div>
        </div>
    );
}
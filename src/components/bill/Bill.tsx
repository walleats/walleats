export interface BillProps {
    title: string,
    productsPrice: number,
    deliveryPrice: number,
    servicePrice: number,
    tipPrice: number,
}

export const Bill = ({
    title,
    productsPrice,
    deliveryPrice,
    servicePrice,
    tipPrice,
}: BillProps) => {
    return (
        <div className={"flex-col items-center w-[430px] h-[352px] borderless bg-background-50 space-y-1"}>
            <div className={"w-[410px] h-[30px]"}>
                <h3 className={"text-h5 font-bold text-text-500"}>{title}</h3>
            </div>
            <div className={"w-[410px] h-[226px] space-y-2.5"}>
                <Data title={"Product"} price={productsPrice}></Data>
                <Data title={"Delivery"} price={deliveryPrice}></Data>
                <Data title={"Service"} price={servicePrice}></Data>
                <Data title={"Tip"} price={tipPrice}></Data>
                <div className="border-b border-text-500"></div>
            </div>
            <div className={"w-[410px] h-[70px]"}>
            <div className={"flex justify-between w-[390px] h-[50px]"}>
                    <h3 className={"text-h5 font-regular text-text-500"}>Total</h3>
                    <h3 className={"text-h5 font-medium text-text-500"}>${productsPrice + deliveryPrice + servicePrice + tipPrice}</h3>
                </div>
            </div>
        </div>
    );
}

interface DataProps {
    title: string,
    price: number,
}
const Data = ({
    title,
    price,
}: DataProps) => {
    return (
      <div className={"flex justify-between w-[390px] h-[44px]"}>
          <h3 className={"text-h6 font-regular text-text-500"}>{title}</h3>
          <h3 className={"text-h6 font-regular text-text-500"}>${price}</h3>
      </div>
    );
}
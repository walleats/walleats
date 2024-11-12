import {CardInput} from "@/components/card-input/CardInput";

export const CardData = () => {
    const baseStyle = 'flex-col justify-start items-start gap-2 inline-flex';
    const middleStyle = 'flex-row justify-between items-center inline-flex w-full';
    return(
        <div className={`${baseStyle}`}>
            <CardInput title={'Card number'} placeholder={'1111 1111 1111 1111'}/>
            <div className={`${middleStyle}`}>
                <CardInput title={'Expiration Date'} placeholder={'MM/YY'} size={'small'}/>
                <CardInput title={'CVV'} placeholder={'123'} size={'small'}/>
            </div>
            <CardInput title={'Cardholder Name'} placeholder={'John Doe'}/>
        </div>
    )
}
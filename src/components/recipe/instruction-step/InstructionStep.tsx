import React from "react";

export interface InstructionStep{
    stepNumber:number,
    stepName:string,
    stepDescription:string,
}

export interface InstructionStepProps {
    instructionStep: InstructionStep;
}

export const InstructionStep: React.FC<InstructionStepProps> = ({
    instructionStep
}) => {
    const {stepNumber, stepName, stepDescription} = instructionStep;
    return (
        <div className="flex w-[362px] p-2 flex-col items-start gap-2 rounded-lg bg-white">
            <div className="flex items-end gap-[3px] self-stretch">
                <span className="text-[#212121] font-poppins text-[20px] font-bold leading-[30px]">
                    {stepNumber}
                </span>
                <div className="flex px-2 pb-2 items-end gap-2 self-stretch">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 fill-[#212121]" viewBox="0 0 8 9">
                        <circle cx="4" cy="4.5" r="4"/>
                    </svg>
                </div>
                <span className="text-[#212121] font-poppins text-[20px] font-bold leading-[30px]">
                    {stepName}
                </span>
            </div>
            <div className="flex flex-col justify-center items-start gap-2 px-4 pb-2 self-stretch">
                <span className="self-stretch text-[#636363] font-poppins text-[14px] font-normal leading-[21px]">
                    {stepDescription}
                </span>
            </div>
        </div>
    )
}


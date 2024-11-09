import {InstructionStep} from "@/components/recipe/instruction-step/InstructionStep";

export interface InstructionList{
    instructions: InstructionStep[];
}

export interface InstructionListProps {
    instructionList: InstructionList;
}

export const InstructionList: React.FC<InstructionListProps> = ({
    instructionList
}) => {
    return (
        <div className="flex w-[378px] p-2 flex-col items-start gap-2 bg-white">
            <span className="self-stretch text-[#212121] font-poppins text-[28px] font-bold leading-[42px]">
                Instructions
            </span>

            {instructionList.instructions.map((instruction, index) => (
                <InstructionStep
                    key={index}
                    instructionStep={instruction}
                />)
            )}
        </div>
    )
}
import {InstructionStep} from "@/components/recipe/instruction-step/InstructionStep";

export interface InstructionListProps {
    instructions: InstructionStep[];
}

export const InstructionList: React.FC<InstructionListProps> = ({
    instructions
}) => {
    return (
        <div className="flex w-full p-2 flex-col items-start gap-2 bg-white">
            <span className="self-stretch text-[#212121] font-poppins text-[28px] font-bold leading-[42px]">
                Instructions
            </span>

            {instructions.map((instruction, index) => (
                <InstructionStep
                    key={index}
                    instructionStep={instruction}
                />)
            )}
        </div>
    )
}
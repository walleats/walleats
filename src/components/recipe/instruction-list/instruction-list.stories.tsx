import { Meta, StoryObj } from '@storybook/react';
import { InstructionList, InstructionListProps } from './InstructionList';
import { InstructionStep } from "@/components/recipe/instruction-step/InstructionStep";


const meta: Meta<InstructionListProps> = {
    title: 'InstructionList',
    component: InstructionList,
    parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<InstructionListProps>;


const Template = (args: InstructionListProps) => <InstructionList {...args} />


export const Default: Story = {
    render: Template,
    args: {
        instructionList: {
            instructions: [
                {
                    stepNumber: 1,
                    stepName: 'Step 1: Prepare Ingredients',
                    stepDescription: 'Gather all necessary ingredients for the recipe.',
                },
                {
                    stepNumber: 2,
                    stepName: 'Step 2: Heat Pan',
                    stepDescription: 'Heat the pan over medium heat before adding ingredients.',
                },
                {
                    stepNumber: 3,
                    stepName: 'Step 3: Cook Ingredients',
                    stepDescription: 'Add ingredients to the pan and cook for 10 minutes.',
                },
                {
                    stepNumber: 4,
                    stepName: 'Step 4: Serve',
                    stepDescription: 'Once cooked, serve on a plate and garnish as needed.',
                },
            ],
        },
    },
};


export const Empty: Story = {
    render: Template,
    args: {
        instructionList: {
            instructions: [],
        },
    },
};


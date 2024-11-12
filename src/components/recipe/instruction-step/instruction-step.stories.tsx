import { Meta, StoryObj } from '@storybook/react';
import { InstructionStep, InstructionStepProps } from './InstructionStep';

const meta: Meta<InstructionStepProps> = {
    title: 'Recipe/InstructionStep',
    component: InstructionStep,
    parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<InstructionStepProps>;

const Template = (args: InstructionStepProps) => <InstructionStep {...args} />;

export const Default: Story = {
    render: Template,
    args: {
        instructionStep: {
            stepNumber: 1,
            stepName: 'Prepare ingredients',
            stepDescription: 'Gather all the necessary ingredients for the recipe, including vegetables, protein, and spices.',
        },
    },
};
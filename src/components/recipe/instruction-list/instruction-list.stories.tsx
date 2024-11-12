import { Meta, StoryObj } from '@storybook/react';
import { InstructionList, InstructionListProps } from './InstructionList';


const meta: Meta<InstructionListProps> = {
    title: 'Recipe/InstructionList',
    component: InstructionList,
    parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<InstructionListProps>;


const Template = (args: InstructionListProps) => <InstructionList {...args} />


export const Default: Story = {
    render: Template,
    args: {
            instructions: [
                {
                    stepNumber: 1,
                    stepName: 'Prepare Ingredients',
                    stepDescription: 'Gather all necessary ingredients for the recipe.',
                },
                {
                    stepNumber: 2,
                    stepName: 'Heat Pan',
                    stepDescription: 'Heat the pan over medium heat before adding ingredients.',
                },
                {
                    stepNumber: 3,
                    stepName: 'Cook Ingredients',
                    stepDescription: 'Add ingredients to the pan and cook for 10 minutes.',
                },
                {
                    stepNumber: 4,
                    stepName: 'Serve',
                    stepDescription: 'Once cooked, serve on a plate and garnish as needed.',
                },
            ],
    },
};


export const Empty: Story = {
    render: Template,
    args: {
            instructions: [],
    },
};


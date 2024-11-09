import { Meta, StoryObj } from '@storybook/react';
import { NutritionalProperty,NutritionalPropertyProps } from './NutritionalPropery';
import {icons} from "@/constants/icons";


const meta: Meta<NutritionalPropertyProps> = {
    title: 'NutritionalProperty',
    component: NutritionalProperty,
    parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<NutritionalPropertyProps>;

const Template = (args: NutritionalPropertyProps) => <NutritionalProperty {...args} />;

export const Default: Story = {
    render: Template,
    args: {
        iconPath: `${icons.fire}`,
        propertyValue: '200 kcal',
    },
};

export const Fat: Story = {
    render: Template,
    args: {
        iconPath: `${icons.food}`,
        propertyValue: '10 g fat',
    },
};

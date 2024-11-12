import { Meta, StoryObj } from '@storybook/react';
import { NutritionalInfo, NutritionalInfoProps } from './NutritionalInfo';
import { icons } from '@/constants/icons';


const nutritionalProperties = [
    { iconPath: icons.fire, propertyValue: '200 kcal' },
    { iconPath: icons.food, propertyValue: '10 g fat' },
    { iconPath: icons.fire, propertyValue: '150 kcal' },
    { iconPath: icons.food, propertyValue: '8 g fat' },
    { iconPath: icons.fire, propertyValue: '250 kcal' },
    { iconPath: icons.food, propertyValue: '12 g fat' },
];

const meta: Meta<NutritionalInfoProps> = {
    title: 'Recipe/NutritionalInfo',
    component: NutritionalInfo,
    parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<NutritionalInfoProps>;

const Template = (args: NutritionalInfoProps) => <NutritionalInfo {...args} />;

export const Default: Story = {
    render: Template,
    args: {
        nutritionalProperties,
    },
};
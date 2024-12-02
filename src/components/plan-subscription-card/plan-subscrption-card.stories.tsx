import type { Meta, StoryObj } from '@storybook/react';
import { PlanSubscriptionCard, PlanSubscriptionCardProps } from './PlanSubscriptionCard';

const meta: Meta<PlanSubscriptionCardProps> = {
    title: 'Card/PlanSubscriptionCard',
    component: PlanSubscriptionCard,
    parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<PlanSubscriptionCardProps>;

const Template = (args: PlanSubscriptionCardProps) => <PlanSubscriptionCard {...args} />;

export const Default: Story = {
    render: Template,
    args: {
        title: 'Daily Delight',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec dapibus odio.',
        price: '$10.0',
        label : 'Subscribe'
    },
};

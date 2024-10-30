import { Meta, StoryObj } from '@storybook/react';
import { images } from '@/constants/images';
import { FoodPlanCard, FoodPlanCardProps } from './FoodPlanCard';

const meta: Meta<FoodPlanCardProps> = {
  title: 'FoodPlanCard',
  component: FoodPlanCard,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<FoodPlanCardProps>;

const Template = (args: FoodPlanCardProps) => <FoodPlanCard {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    title: 'Some Plan',
    image: images.foodLargeSqaured,
    tag: 'Popular',
  },
};

export const DarkText: Story = {
  render: Template,
  args: {
    title: 'Some Plan',
    image: images.foodLargeSqaured,
    tag: 'POPULAR',
    darkText: true,
  },
};
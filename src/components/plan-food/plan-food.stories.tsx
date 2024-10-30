import type { Meta, StoryObj } from '@storybook/react';
import { images } from '@/constants/images';
import { PlanFood, PlanFoodProps } from './PlanFood';

const meta: Meta<PlanFoodProps> = {
  title: 'PlanFood',
  component: PlanFood,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<PlanFoodProps>;

const Template = (args: PlanFoodProps) => <PlanFood {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    title: 'Grilled Chicken Salad',
    description: 'Grilled chicken, mixed greens, cherry tomatoes, cucumbers, and balsamic vinaigrette',
    image: images.foodDark,
    onSubmit: () => console.log('submit'),
  },
};


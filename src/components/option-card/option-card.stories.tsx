import { Meta, StoryObj } from '@storybook/react';
import { images } from '@/constants/images';
import { OptionCard, OptionCardProps } from './OptionCard';

const meta: Meta<OptionCardProps> = {
  title: 'OptionCard',
  component: OptionCard,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<OptionCardProps>;

const Template = (args: OptionCardProps) => <OptionCard {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    title: 'Some Plan',
    image: images.foodLargeSqaured,
  },
};

export const DarkText: Story = {
  render: Template,
  args: {
    title: 'Some Plan',
    image: images.foodLargeSqaured,
    darkText: true,
  },
};
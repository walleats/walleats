import type { Meta, StoryObj } from '@storybook/react';
import { IconButton, IconButtonProps } from './IconButton';
import { icons } from '@/constants/icons';

const meta: Meta<IconButtonProps> = {
  title: 'Button/IconButton',
  component: IconButton,
  parameters: { layout: 'centered' },
  argTypes: {
    onClick: { action: 'clicked' },
    icon: {
      control: 'select',
      options: Object.values(icons), 
    },
    label: {
      control: 'text', 
      description: 'Optional label displayed next to the icon',
    },
    iconSize: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large'], 
      description: 'Size of the icon',
    },
  },
};

export default meta;
type Story = StoryObj<IconButtonProps>;

const Template = (args: IconButtonProps) => <IconButton {...args} />;

export const IconOnly: Story = {
  render: Template,
  args: {
    icon: icons.cartWhite,
    iconSize: 'small', 
  },
};

export const IconWithLabel: Story = {
  render: Template,
  args: {
    icon: icons.cartWhite, 
    label: 'Add all to cart', 
    iconSize: 'small', 
  },
};

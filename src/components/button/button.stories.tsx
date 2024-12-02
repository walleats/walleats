import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Button/Button',
  component: Button,
  parameters: { layout: 'centered' },
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'text'],
    },
    state: {
      control: 'select',
      options: ['default', 'disabled', 'pressed', 'loading'], 
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'component', 'componentSmall'], 
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

const Template = (args: ButtonProps) => <Button {...args} />;

export const Playground: Story = {
  render: Template,
  args: {
    label: 'Button',
    variant: 'default',
    state: 'default',
    size: 'medium',
  },
};

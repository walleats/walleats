import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { icons } from '@/constants/icons';

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  parameters: { layout: 'centered' },
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default: Story = {
  render: Template,
  args: { label: 'Default Button', variant: 'default', state: 'default', size: 'medium' },
};

export const Outlined: Story = {
  render: Template,
  args: { label: 'Outlined Button', variant: 'outlined', state: 'default', size: 'medium' },
};

export const Text: Story = {
  render: Template,
  args: { label: 'Text Button', variant: 'text', state: 'default', size: 'medium' },
};

export const Disabled: Story = {
  render: Template,
  args: { label: 'Disabled Button', variant: 'default', state: 'disabled', size: 'medium' },
};

export const Pressed: Story = {
  render: Template,
  args: { label: 'Pressed Button', variant: 'default', state: 'pressed', size: 'medium' },
};

export const Loading: Story = {
  render: Template,
  args: { label: 'Loading Button', variant: 'default', state: 'loading', size: 'medium' },
};

export const Large: Story = {
  render: Template,
  args: { label: 'Large Button', variant: 'default', state: 'default', size: 'large' },
};

export const Small: Story = {
  render: Template,
  args: { label: 'Small Button', variant: 'default', state: 'default', size: 'small' },
};

export const XSmall: Story = {
  render: Template,
  args: { label: 'XSmall', variant: 'default', state: 'default', size: 'xsmall' },
};

export const Component: Story = {
  render: Template,
  args: { label: 'Component Button', variant: 'default', state: 'default', size: 'component' },
};

export const ComponentSmall: Story = {
  render: Template,
  args: { label: 'Component Small Button', variant: 'default', state: 'default', size: 'componentSmall' },
};

export const IconButton: Story = {
  render: Template,
  args: { variant: 'icon', state: 'default', icon: icons.trash}, 
};

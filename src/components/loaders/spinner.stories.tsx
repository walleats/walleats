import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Example/Spinner',
  component: Spinner,
  parameters: { layout: 'centered' },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Small: Story = {
  args: {
    size: 'small',
    color: 'primary-500',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    color: 'primary-500',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    color: 'primary-500',
  },
};

export const CustomColor: Story = {
  args: {
    size: 'medium',
    color: 'success-500',
  },
};

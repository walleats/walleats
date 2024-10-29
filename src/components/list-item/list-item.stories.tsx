import type { Meta, StoryObj } from '@storybook/react';
import { ListItem, ListItemProps } from './ListItem';

const meta: Meta<ListItemProps> = {
  title: 'Example/ListItem',
  component: ListItem,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<ListItemProps>;

const Template = (args: ListItemProps) => <ListItem {...args} />;

export const Rounded: Story = {
  render: Template,
  args: {
    imageShape: 'rounded',
    icon: <img src="https://via.placeholder.com/150" alt="rounded" />,
    title: 'Rounded',
    subtitle: 'This is a rounded image',
  },
};

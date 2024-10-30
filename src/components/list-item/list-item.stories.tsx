import type { Meta, StoryObj } from '@storybook/react';
import { ListItem, ListItemProps } from './ListItem';
import { icons } from '@/constants/icons';
import { Icon } from '../icon/Icon';

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
    icon: <Icon url={icons.food} altText="food" size="large" />,
    title: 'Rounded',
    subtitle: 'This is a rounded image',
    submitIcon: <Icon url={icons.arrowRight} altText="arrow right" size="small" />,
  },
};

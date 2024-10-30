import type { Meta, StoryObj } from '@storybook/react';
import { ListItem, ListItemProps } from './ListItem';
import { icons } from '@/constants/icons';
import { Icon } from '../icon/Icon';
import { images } from '@/constants/images';
import Image from 'next/image';

const meta: Meta<ListItemProps> = {
  title: 'ListItem',
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
    icon: <Icon icon={icons.food} altText="food" size="large" />,
    title: 'Rounded',
    subtitle: 'This is a rounded image',
    submitIcon: <Icon icon={icons.arrowRight} altText="arrow right" size="small" />,
  },
};

export const Square: Story = {
  render: Template,
  args: {
    imageShape: 'square',
    icon: <Icon icon={icons.ingredient} altText="food" size="large" />,
    title: 'Square',
    subtitle: 'This is a square image',
    submitIcon: <Icon icon={icons.arrowRight} altText="arrow right" size="small" />,
  },
};


export const NoRightIconAndSubtitle: Story = {
  render: Template,
  args: {
    imageShape: 'rounded',
    icon: <Icon icon={icons.food} altText="food" size="large" />,
    title: 'No Right Icon',
  },
};

export const WithImage: Story = {
  render: Template,
  args: {
    imageShape: 'square',
    icon: (
      <div className="relative w-full max-w-xs h-full max-h-xs overflow-hidden">
        <Image
          src={images.foodLargeSqaured}
          alt="food"
          layout="fill"
          className="object-cover"
        />
      </div>
    ),
    title: 'With Image',
    subtitle: 'This is an image',
    submitIcon: <Icon icon={icons.arrowRight} altText="arrow right" size="small" />,
  },
};


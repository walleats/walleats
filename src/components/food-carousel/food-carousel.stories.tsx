import { Meta, StoryObj } from '@storybook/react';
import { images } from '@/constants/images';
import { FoodCarousel, FoodCarouselProps } from './FoodCarousel';

const meta: Meta<FoodCarouselProps> = {
  title: 'Card/FoodCarousel',
  component: FoodCarousel,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<FoodCarouselProps>;

const Template = (args: FoodCarouselProps) => <FoodCarousel {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    items: [
      {
        title: 'Some Text',
        image: images.foodLargeSqaured,
        label: '40% OFF',
      },
      {
        title: 'Some Food',
        image: images.foodLargeSqaured,
      },
      {
        title: 'Some Food',
        image: images.foodLargeSqaured,
      },
    ],
  },
};


import { Meta, StoryObj } from "@storybook/react";
import { CartStoreProducts, CartStoreProductsProps } from "./CartStoreProducts";
import { images } from "@/constants/images";

const meta: Meta<CartStoreProductsProps> = {
  title: 'CartStoreProducts',
  component: CartStoreProducts,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<CartStoreProductsProps>;

const Template = (args: CartStoreProductsProps) => <CartStoreProducts {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    storeName: 'Store Name',
    products: [
      {
        name: 'Product Name',
        price: 10.0,
        image: images.mcdonalds,
        amount: 1,
        onRemove: () => console.log('remove'),
        onAdd: () => console.log('add'),
        onSubtract: () => console.log('subtract'),
      },
    ],
  },
};

export const MultipleProducts: Story = {
  render: Template,
  args: {
    storeName: 'Store Name',
    products: [
      {
        name: 'Product Name',
        price: 10.0,
        image: images.foodSmall,
        amount: 1,
        onRemove: () => console.log('remove'),
        onAdd: () => console.log('add'),
        onSubtract: () => console.log('subtract'),
      },
      {
        name: 'Product Name',
        price: 10.0,
        image: images.foodSmall,
        amount: 1,
        onRemove: () => console.log('remove'),
        onAdd: () => console.log('add'),
        onSubtract: () => console.log('subtract'),
      },
    ],
  },
};

import { Meta, StoryObj } from "@storybook/react";
import { CartStoreProducts, CartStoreProductsProps } from "./CartStoreProducts";
import { images } from "@/constants/images";

const meta: Meta<CartStoreProductsProps> = {
  title: "Cart/StoreProducts",
  component: CartStoreProducts,
  parameters: { layout: "centered" },
  argTypes: {
    storeName: { control: "text" },
    products: { control: "object" },
    onRemoveProduct: { action: "remove product" },
    onAddProduct: { action: "add product" },
    onSubtractProduct: { action: "subtract product" },
  },
};

export default meta;
type Story = StoryObj<CartStoreProductsProps>;

const Template = (args: CartStoreProductsProps) => <CartStoreProducts {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    storeName: "My Store",
    products: [
      {
        name: "Burger",
        price: 9.99,
        image: images.foodSmall,
        amount: 1,
      },
    ],
    onRemoveProduct: (index) => console.log(`Remove product at index: ${index}`),
    onAddProduct: (index) => console.log(`Add product at index: ${index}`),
    onSubtractProduct: (index) => console.log(`Subtract product at index: ${index}`),
  },
};

export const MultipleProducts: Story = {
  render: Template,
  args: {
    storeName: "Awesome Store",
    products: [
      {
        name: "Pizza",
        price: 12.99,
        image: images.foodSmall,
        amount: 1,
      },
      {
        name: "Burger",
        price: 9.99,
        image: images.foodSmall,
        amount: 2,
      },
      {
        name: "Salad",
        price: 5.99,
        image: images.foodSmall,
        amount: 1,
      },
    ],
    onRemoveProduct: (index) => console.log(`Remove product at index: ${index}`),
    onAddProduct: (index) => console.log(`Add product at index: ${index}`),
    onSubtractProduct: (index) => console.log(`Subtract product at index: ${index}`),
  },
};


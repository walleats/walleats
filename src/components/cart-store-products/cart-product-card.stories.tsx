import { Meta, StoryObj } from "@storybook/react";
import { CartProductCard, CartProductCardProps } from "./CartProductCard";
import { images } from "@/constants/images";

const meta: Meta<CartProductCardProps> = {
  title: "Cart/ProductCard",
  component: CartProductCard,
  argTypes: {
    name: { control: "text" },
    price: { control: "number" },
    image: {
      control: "select",
      options: Object.values(images), 
    },
    amount: { control: "number" },
    onRemove: { action: "remove clicked" },
    onAdd: { action: "add clicked" },
    onSubtract: { action: "subtract clicked" },
  },
};

export default meta;
type Story = StoryObj<CartProductCardProps>;

export const Default: Story = {
  args: {
    name: "Delicious Pizza",
    price: 12.99,
    image: images.foodSmall,
    amount: 1,
  },
};

export const MultipleQuantity: Story = {
  args: {
    name: "Burger",
    price: 8.5,
    image: images.foodSmall,
    amount: 3,
  },
};

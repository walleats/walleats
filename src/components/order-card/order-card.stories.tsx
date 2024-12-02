import { OrderCard, OrderCardProps } from "@/components/order-card/OrderCard";
import { Meta, StoryObj } from "@storybook/react";
import { images } from "@/constants/images";

const meta: Meta<OrderCardProps> = {
    title: 'Card/OrderCard',
    component: OrderCard,
    parameters: { layout: 'centered' },
    argTypes: {
        status: {
            control: 'select', 
            options: ['Confirmed', 'Cancelled', 'Delivered'], 
        },
        imagePath: {
            control: 'select', 
            options: Object.values(images), 
        },
    },
};

export default meta;
type Story = StoryObj<OrderCardProps>;

const Template = (args: OrderCardProps) => <OrderCard {...args} />;

export const Playground: Story = {
    render: Template,
    args: {
        status: "Confirmed",
        datetime: "01/01 - 12:00hs",
        imagePath: images.mcdonalds,
        storeName: "Store Name",
        price: 0.0,
    },
};

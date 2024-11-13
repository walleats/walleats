import {OrderCard, OrderCardProps} from "@/components/order-card/OrderCard";
import {Meta, StoryObj} from "@storybook/react";
import {images} from "@/constants/images";

const meta: Meta<OrderCardProps> = {
    title: 'OrderCard',
    component: OrderCard,
    parameters: { layout: 'centered' },
}

export default meta;
type Story = StoryObj<OrderCardProps>

const Template = (args: OrderCardProps) => <OrderCard {...args} />

export const ConfirmedOrderCard: Story = {
    render: Template,
    args: {
        status: "Confirmed",
        datetime: "01/01 - 12:00hs",
        imagePath: images.mcdonalds,
        storeName: "Store Name",
        price: 0.0,
    }
}

export const CancelledOrderCard: Story = {
    render: Template,
    args: {
        status: "Cancelled",
        datetime: "01/01 - 12:00hs",
        imagePath: images.mcdonalds,
        storeName: "Store Name",
        price: 0.0,
    },
}

export const DeliveredOrderCard: Story = {
    render: Template,
    args: {
        status: "Delivered",
        datetime: "01/01 - 12:00hs",
        imagePath: images.mcdonalds,
        storeName: "Store Name",
        price: 0.0,
    },
}
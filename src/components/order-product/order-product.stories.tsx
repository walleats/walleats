import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { OrderProduct, OrderProductProps } from './OrderProduct';
import {images} from "@/constants/images";

const meta: Meta<OrderProductProps> = {
    title: 'OrderProduct',
    component: OrderProduct,
    parameters: { layout: 'centered' }
}

export default meta;
type Story = StoryObj<OrderProductProps>;

const Template = (args: OrderProductProps) => <OrderProduct {...args} />;

export const Default: Story = {
    render: Template,
    args: {
        text: 'Product Name',
        firstSubText: '2x',
        secondSubText: '$10.00',
        imagePath: images.mcdonalds,
        onClick: () => alert('Product clicked!'),
    },
};

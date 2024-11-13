import {Bill, BillProps} from "@/components/bill/Bill";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<BillProps> = {
    title: 'Bill',
    component: Bill,
    parameters: {layout: 'centered'},
}

export default meta;
type Story = StoryObj<BillProps>;

const Template = (args: BillProps) => <Bill {...args} />;

export const Default: Story = {
    render: Template,
    args: {
        title: 'Title text',
        productsPrice: 0.0,
        deliveryPrice: 0.0,
        servicePrice: 0.0,
        tipPrice: 0.0,
    }
}
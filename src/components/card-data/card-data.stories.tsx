import {Meta, StoryObj} from "@storybook/react";
import {CardData} from "@/components/card-data/CardData";

const meta:Meta = {
    title: 'CardData',
    component: CardData,
    parameters: { layout: 'centered' },
}

export default meta;
type Story = StoryObj;

const Template = () => <CardData />;

export const Default: Story = {
    render: Template,
};

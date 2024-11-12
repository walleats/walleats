import {Meta, StoryObj} from "@storybook/react";
import {CardInput, CardInputProps} from "@/components/card-input/CardInput";

const meta:Meta<CardInputProps> = {
    title: 'CardInput',
    component: CardInput,
    parameters: { layout: 'centered' },
}

export default meta;
type Story = StoryObj<CardInputProps>

const Template = (args: CardInputProps) => <CardInput {...args} />;

export const Default: Story = {
    render: Template,
    args: {
        title: 'Title',
        placeholder: 'Value',
    }
}

export const Small: Story = {
    render: Template,
    args: {
        title: 'Title',
        placeholder: 'Value',
        size: 'small',
    }
}
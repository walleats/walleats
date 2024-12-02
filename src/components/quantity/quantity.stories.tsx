import { Meta, StoryObj } from "@storybook/react";
import { Quantity, QuantityProps } from "./Quantity";

const meta: Meta<QuantityProps> = {
  title: "Input/Quantity",
  component: Quantity,
  parameters: { layout: "centered" },
  argTypes: {
    value: { control: "number", defaultValue: 1 },
    size: {
      control: "radio",
      options: ["default", "small"],
      defaultValue: "default",
    },
    state: {
      control: "radio",
      options: ["default", "add-disabled", "subtract-disabled"],
      defaultValue: "default",
    },
  },
};

export default meta;
type Story = StoryObj<QuantityProps>;

const Template = (args: QuantityProps) => <Quantity {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    value: 1,
    size: "default",
    state: "default",
  },
};

export const Small: Story = {
  render: Template,
  args: {
    value: 1,
    size: "small",
    state: "default",
  },
};

export const AddDisabled: Story = {
  render: Template,
  args: {
    value: 1,
    size: "default",
    state: "add-disabled",
  },
};

export const SubtractDisabled: Story = {
  render: Template,
  args: {
    value: 1,
    size: "default",
    state: "subtract-disabled",
  },
};

export const SmallWithAddDisabled: Story = {
  render: Template,
  args: {
    value: 1,
    size: "small",
    state: "add-disabled",
  },
};

export const SmallWithSubtractDisabled: Story = {
  render: Template,
  args: {
    value: 1,
    size: "small",
    state: "subtract-disabled",
  },
};

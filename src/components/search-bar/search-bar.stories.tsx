import { Meta, StoryObj } from "@storybook/react";
import { SearchBar, SearchBarProps } from "./SearchBar";

const meta: Meta<SearchBarProps> = {
  title: "Input/SearchBar",
  component: SearchBar,
  parameters: { layout: "fullscreen" },
  argTypes: {
    placeholder: { control: "text", defaultValue: "Search for products..." },
  },
};

export default meta;
type Story = StoryObj<SearchBarProps>;

const Template = (args: SearchBarProps) => <SearchBar {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    placeholder: "Search for products or restaurants",
  },
};

export const WithoutText: Story = {
  render: Template,
  args: {
    placeholder: "Search for products or restaurants",
  },
};

export const CustomPlaceholder: Story = {
  render: Template,
  args: {
    placeholder: "Search by name, category, or price",
  },
};

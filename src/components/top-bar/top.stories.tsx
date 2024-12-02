import { Meta, StoryObj } from "@storybook/react";
import { Top, TopProps } from "./Top";

const meta: Meta<TopProps> = {
  title: "Nav/TopBar",
  component: Top,
  parameters: { layout: "fullscreen" },
  argTypes: {
    // TopBarProps controls
    topBarProps: {
      control: 'object',
      defaultValue: {
        title: "Home",
        showBackButton: true,
        showCartButton: false,
        showProfileButton: false,
      },
    },

    // SearchBarProps controls
    showSearchBar: { control: "boolean", defaultValue: true },
    searchProps: {
      control: 'object',
      defaultValue: { placeholder: "Search for items, categories, or restaurants" },
    },
  },
};

export default meta;
type Story = StoryObj<TopProps>;

const Template = (args: TopProps) => <Top {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    topBarProps: {
      title: "Home",
      showBackButton: true,
      showCartButton: true,
      showProfileButton: true,
    },
    showSearchBar: true,
    searchProps: {
      placeholder: "Search for items, categories, or restaurants",
    },
  },
};

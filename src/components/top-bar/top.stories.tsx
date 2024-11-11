import { Meta, StoryObj } from "@storybook/react";
import { Top, TopProps } from "./Top";

const meta: Meta<TopProps> = {
  title: 'TopBar',
  component: Top,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<TopProps>;

const Template = (args: TopProps) => <Top {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    topBarProps: {
      title: 'Home',
    },
    showSearchBar: true,
    searchProps: {
      placeholder: 'Search for products or restaurants',
    },
  },
};
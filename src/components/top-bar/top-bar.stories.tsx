import { Meta, StoryObj } from "@storybook/react";
import { TopBar, TopBarProps } from "./TopBar";

const meta: Meta<TopBarProps> = {
  title: 'TopBar',
  component: TopBar,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<TopBarProps>;

const Template = (args: TopBarProps) => <TopBar {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    title: 'Title',
  },
};
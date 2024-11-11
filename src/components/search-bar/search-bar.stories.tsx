import { SearchBar, SearchBarProps } from "./SearchBar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SearchBarProps> = {
  title: 'SearchBar',
  component: SearchBar,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<SearchBarProps>;

const Template = (args: SearchBarProps) => <SearchBar {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    placeholder: 'Search',
  },
};

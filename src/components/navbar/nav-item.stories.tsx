import { Meta, StoryObj } from "@storybook/react";
import { NavItem, NavItemProps } from "./NavItem";
import { icons } from "@/constants/icons";

const meta: Meta<NavItemProps> = {
  title: 'Nav/NavItem',
  component: NavItem,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<NavItemProps>;

const Template = (args: NavItemProps) => <NavItem {...args} />;

export const Active: Story = {
  render: Template,
  args: {
    iconActive: icons.homeActive,
    iconInactive: icons.homeInactive,
    state: "active",
  },
};

export const Inactive: Story = {
  args: {
    iconActive: icons.homeActive,
    iconInactive: icons.homeInactive,
    state: "inactive",
  },
  render: Template,
};

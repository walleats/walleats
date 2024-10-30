import { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./NavBar";
import { icons } from "@/constants/icons"; 

const metaNavBar: Meta = {
  title: 'NavBar',
  component: NavBar,
  parameters: { layout: 'fullscreen' },
};

export default metaNavBar;

type Story = StoryObj<typeof NavBar>;

const navItems = [
  { iconActive: icons.homeActive, iconInactive: icons.homeInactive },
  { iconActive: icons.recipeActive, iconInactive: icons.recipeInactive },
  { iconActive: icons.orderActive, iconInactive: icons.orderInactive },
];

export const Default: Story = {
  render: () => (
      <NavBar
        navItems={navItems}
      />
  ),
};

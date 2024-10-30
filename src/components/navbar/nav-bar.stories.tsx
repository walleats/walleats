import { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./NavBar";
import { icons } from "@/constants/icons"; // Adjust the import according to your project structure

const metaNavBar: Meta = {
  title: 'Example/NavBar',
  component: NavBar,
  parameters: { layout: 'centered' },
};

export default metaNavBar;

type Story = StoryObj<typeof NavBar>;

const navItems = [
  { iconActive: icons.homeActive, iconInactive: icons.homeInactive },
  { iconActive: icons.recipeActive, iconInactive: icons.recipeInactive },
  { iconActive: icons.orderActive, iconInactive: icons.orderInactive },
];

export const Default: Story = {
  render: () => <NavBar navItems={navItems} />,
};

export const WithCustomIcons: Story = {
  render: () => (
    <NavBar
      navItems={navItems}
    />
  ),
};

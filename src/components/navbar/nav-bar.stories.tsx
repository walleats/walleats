import { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./NavBar";
import { navItems } from "@/constants/mocks";

const metaNavBar: Meta = {
  title: 'NavBar',
  component: NavBar,
  parameters: { layout: 'fullscreen' },
};

export default metaNavBar;

type Story = StoryObj<typeof NavBar>;


export const Default: Story = {
  render: () => (
      <NavBar
        navItems={navItems}
      />
  ),
};

import {MenuItem, MenuItemProps} from "@/components/menu-item/MenuItem";
import {Meta, StoryObj} from "@storybook/react";
import {images} from "@/constants/images";

const meta: Meta<MenuItemProps> = {
    title: 'MenuItem',
    component: MenuItem,
    parameters: {layout: 'centered'},
};

export default meta;
type Story = StoryObj<MenuItemProps>;

const Template = (args: MenuItemProps) => <MenuItem {...args}/>


export const Default: Story = {
    render: Template,
    args: {
        productTitle: 'Some Title',
        productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae ornare nibh. Aenean vel pharetra quam.',
        imagePath: images.grilledSalmon,
        price: '$20',
    }
}
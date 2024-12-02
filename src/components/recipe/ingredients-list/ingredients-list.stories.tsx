import type { Meta, StoryObj } from '@storybook/react';
import {IngredientsList, IngredientsListProps} from "@/components/recipe/ingredients-list/IngredientsList";
import {icons} from "@/constants/icons";
import {Icon} from "@/components/icon/Icon";
import { IconButton } from '@/components/button/IconButton';

const meta: Meta<IngredientsListProps> = {
    title: 'Recipe/IngredientsList',
    component: IngredientsList,
    parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<IngredientsListProps>;

const Template = (args: IngredientsListProps) => <IngredientsList {...args} />

export const Default: Story={
    render: Template,
    args: {
        itemProps:[
            {
                imageShape: 'rounded',
                icon: <Icon icon={icons.meat} altText="food" size="large" />,
                title: 'Eggs',
                subtitle: '12 eggs',
                submitIcon: <IconButton icon={icons.plusWhite} />,
                onClick: () => {console.log("Item added to cart")}
            },
            {
                imageShape: 'rounded',
                icon: <Icon icon={icons.meat} altText="food" size="large" />,
                title: 'Eggs',
                subtitle: '12 eggs',
                submitIcon: <IconButton icon={icons.plusWhite} />,
                onClick: () => {console.log("Item added to cart")}
            },
            {
                imageShape: 'rounded',
                icon: <Icon icon={icons.meat} altText="food" size="large" />,
                title: 'Eggs',
                subtitle: '12 eggs',
                submitIcon: <IconButton icon={icons.plusWhite} />,
                onClick: () => {console.log("Item added to cart")}
            },
        ],
        onClick: () => {console.log("All items added to cart")}
    }
}
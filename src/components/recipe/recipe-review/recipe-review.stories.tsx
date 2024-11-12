import type { Meta, StoryObj } from '@storybook/react';
import { RecipeReview } from './RecipeReview';
import {RecipeDescriptionProps} from "@/components/recipe/recipe-description/RecipeDescription";

const meta: Meta<RecipeDescriptionProps> = {
    title: 'Recipe/RecipeReview',
    component: RecipeReview,
    parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<RecipeDescriptionProps>;

const Template = (args: RecipeDescriptionProps) => <RecipeReview {...args} />;

export const Default: Story = {
    render: Template,
    args: {
        recipeDescription: {
            description: 'A delicious and healthy salad with grilled chicken.',
            review: 1,
            reviews: 120,
            time: 30,
        },
        onClickReview: (rating: number) => console.log(`Review clicked: ${rating}`),
    },
};



export const MaxReviewSelected: Story = {
    render: Template,
    args: {
        recipeDescription: {
            description: 'Gourmet pasta with fresh basil and tomato sauce.',
            review: 5,
            reviews: 200,
            time: 45,
        },
        onClickReview: (rating: number) => console.log(`Review clicked: ${rating}`),
    },
};
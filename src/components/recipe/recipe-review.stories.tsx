import type { Meta, StoryObj } from '@storybook/react';
import { RecipeReview } from './RecipeReview';
import {RecipeDescriptionProps} from "@/components/recipe/RecipeDescription";

const meta: Meta<RecipeDescriptionProps> = {
    title: 'RecipeReview',
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
            review: 3,
            reviews: 120,
            time: 30,
        },
        onClickReview: (rating: number) => console.log(`Review clicked: ${rating}`),
    },
};

export const NoReviewSelected: Story = {
    render: Template,
    args: {
        recipeDescription: {
            description: 'A simple sandwich recipe with cheese and tomato.',
            review: 0,
            reviews: 50,
            time: 15,
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
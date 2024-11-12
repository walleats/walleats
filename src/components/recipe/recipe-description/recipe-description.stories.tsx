import type { Meta, StoryObj } from '@storybook/react';
import { RecipeDescription, RecipeDescriptionProps } from './RecipeDescription';

const meta: Meta<RecipeDescriptionProps> = {
    title: 'Recipe/RecipeDescription',
    component: RecipeDescription,
    parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<RecipeDescriptionProps>;

const Template = (args: RecipeDescriptionProps) => <RecipeDescription {...args} />;

export const Default: Story = {
    render: Template,
    args: {
        recipeDescription: {
            description:
                'A delicious grilled chicken salad with mixed greens, cherry tomatoes, cucumbers, and a tangy balsamic vinaigrette dressing.',
            review: 4,
            reviews: 123,
            time: 20,
        },
        onClickReview: (index: number) => {
            console.log('Rating clicked:', index);
        },
    },
};
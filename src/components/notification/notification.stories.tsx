import { Meta, StoryObj } from '@storybook/react';
import { Notification, NotificationProps } from './Notification';


const meta: Meta<NotificationProps> = {
    title: 'Notification/Notification',
    component: Notification,
    parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<NotificationProps>;

const Template = (args: NotificationProps) => <Notification {...args} />;

export const Success: Story = {
    render: Template,
    args: {
        variant: 'success',
        message: 'Some success message',
    },
};

export const Error: Story = {
    render: Template,
    args: {
        variant: 'error',
        message: 'Some error message',
    },
};

export const Warning: Story = {
    render: Template,
    args: {
        variant: 'warning',
        message: 'Some warning message',
    },
};
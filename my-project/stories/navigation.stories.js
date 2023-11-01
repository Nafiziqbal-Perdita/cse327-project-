import React from 'react';
import { action } from '@storybook/addon-actions';
import Navigation from "../components/navigation/navigation";


export default {
    title: 'Navigation',
    component: Navigation,
    tags: ['autodocs'],
    argTypes: {
        setIsNavOpen: {
            description: 'A function that controls the open/closed state of the navigation menu.',
            table: {
                defaultValue: { summary: 'false' },
            },
        },

        "Home": {
            description: 'When Pressed, the component will navigate the website to the Home page',
            table: {
                defaultValue: "",
            },
        },

        "Organic Shop button": {
            description: 'When Pressed, the component will navigate the website to the Organic shop page',
            table: {
                defaultValue: "",
            },
        },

        "My cart button": {
            description: 'When Pressed, the component will navigate the website to the My cart page',
            table: {
                defaultValue: "",
            },
        },

        "Saved List button": {
            description: 'When Pressed, the component will navigate the website to the Saved list page',
            table: {
                defaultValue: "",
            },
        },

        "Shopping list button": {
            description: 'When Pressed, the component will navigate the website to the Shopping list page',
            table: {
                defaultValue: "",
            },
        },

        "vegetables button": {
            description: 'When Pressed, the component will navigate the website to the vegetables page',
            table: {
                defaultValue: "",
            },
        },

        "Log out button": {
            description: 'When Pressed, the user will log out',
            table: {
                defaultValue: "",
            },
        },

    },
};

export const Default = (args) => (
    <Navigation {...args} />
);

Default.args = {
    setIsNavOpen: action('does shit!'),
};

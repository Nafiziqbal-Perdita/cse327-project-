import React from 'react';
import { action } from '@storybook/addon-actions';
import HorizontalNavBar from "../components/HorizontalNavBar";


export default {
    title: 'HorizontalNavBar',
    component: HorizontalNavBar,
    tags: ['autodocs'],
    argTypes: {
        isEnglish: {
            description: 'A value that sets the language for the Navigation bar.',
            table: {
                defaultValue: true,
            },
        },
        "my Cart button": {
            description: 'When Pressed, the component will navigate the website to the cart page',
            table: {
                defaultValue: "",
            },
        },

        "shopping list button": {
            description: 'When Pressed, the component will navigate the website to the shopping list page',
            table: {
                defaultValue: "",
            },
        },

        "saved list button": {
            description: 'When Pressed, the component will navigate the website to the saved list page',
            table: {
                defaultValue: "",
            },
        },

        "offers button": {
            description: 'When Pressed, the component will navigate the website to the offers page',
            table: {
                defaultValue: "",
            },
        },

        "fruits button": {
            description: 'When Pressed, the component will navigate the website to the fruits page',
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

        "all products button": {
            description: 'When Pressed, the component will navigate the website to the all products page',
            table: {
                defaultValue: "",
            },
        },


    },
};

export const Default = (args) => (
    <HorizontalNavBar onClick={action('clicked')} {...args} />
);

Default.args = {
    isEnglish: true,
    _documentation: {
        action: {

            "my Cart": [''],
            "Shopping List": ['When Pressed, the component will navigate the website to the shopping list page'],
            "Saved list": ['When Pressed, the component will navigate the website to the saved list page'],
            "Offers": ['When Pressed, the component will navigate the website to the offers page'],
            "fruits": ['When Pressed, the component will navigate the website to the fruits page'],
            "vegetables": ['When Pressed, the component will navigate the website to the vegetables page'],
            "all products": ['When Pressed, the component will navigate the website to the all products page'],
        }
    }
    // "my Cart Button": function goToMyCart() { },
};

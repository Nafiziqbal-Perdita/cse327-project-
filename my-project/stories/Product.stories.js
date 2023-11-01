import React from 'react';
import { action } from '@storybook/addon-actions';
import Product from "../components/product";


export default {
    title: 'product',
    component: Product,
    tags: ['autodocs'],
    argTypes: {
        product: {
            description: 'This is the product data that will be send to the UI component.',
            table: {
                defaultValue: {
                    id: "1",
                    image: "https://1.bp.blogspot.com/-L7-6TTaFgm8/XRLtrOwrBJI/AAAAAAAAAac/m0TFOe5-6ygRjbpXNn6R9MekN763CxsQwCLcBGAs/s1600/1.jpg",
                    name: "Organic Food",
                    category: "Vegetables",
                    price: "120",
                    quantity: 5
                },
            },
        },
        "add button": {
            description: 'When Pressed, the button will increase the quantity of the product in the card.',
            table: {
                defaultValue: "",
            },
        },

        "remove button": {
            description: 'When Pressed, the button will decrease the quantity of the product in the card',
            table: {
                defaultValue: "",
            },
        },
    },
};

export const Default = (args) => (
    <Product {...args} />
);

Default.args = {
    product: {
        id: "1",
        image: "https://1.bp.blogspot.com/-L7-6TTaFgm8/XRLtrOwrBJI/AAAAAAAAAac/m0TFOe5-6ygRjbpXNn6R9MekN763CxsQwCLcBGAs/s1600/1.jpg",
        name: "Organic Food",
        category: "Vegetables",
        price: "120",
        quantity: "5"
    },
};

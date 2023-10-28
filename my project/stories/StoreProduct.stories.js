import React from 'react';
import { action } from '@storybook/addon-actions';
import Product from "../components/storeProduct";


export default {
    title: 'storeProduct',
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


        isTheProductInCart: {
            description: 'This is the variable that indicates if the product list in cart or not.',
        },
        isInWishList: {
            description: 'This is the varable that indicated if the product is in wishlist or not.',
        },



        "add button": {
            description: 'When Pressed, the button will add the product in the cart.',
            table: {
                defaultValue: "",
            },
        },

        "remove button": {
            description: 'When Pressed, the button will remove the product in the cart.',
            table: {
                defaultValue: "",
            },
        },

        "add to wishlist button": {
            description: 'When Pressed, the button will add the product in the wishlist.',
            table: {
                defaultValue: "",
            },
        },

        "remove from wishlist button": {
            description: 'When Pressed, the button will remove the product in the wishlist.',
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

    isTheProductInCart: true,
    isInWishList: false,
};

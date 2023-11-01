import React from 'react';
import { action } from '@storybook/addon-actions';
import Order from "../components/order";


export default {
    title: 'order',
    component: Order,
    tags: ['autodocs'],
    argTypes: {
        order: {
            description: 'Its a data that contains information about a order',
            table: {
                defaultValue: {
                    orderId: "1",
                    orderStatus: "ongoing",
                    date: "1/11/23",
                    location: { address: "Bashundhara" },
                    cart: { total: "125" }
                },
            },
        },
        "Go to order button": {
            description: 'When Pressed, the component will navigate the website to the Go to order page.',
            table: {
                defaultValue: "",
            },
        },
    },
};

export const Default = (args) => (
    <Order {...args} />
);

Default.args = {
    order: {
        orderId: "1",
        orderStatus: "ongoing",
        date: "1/11/23",
        location: { address: "Bashundhara" },
        cart: { total: "125" }
    },
};

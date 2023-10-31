import useAllOrders from '../hooks/useAllOrders';
import React from 'react'
import styles from '../styles/Orders.module.css'
import { useRouter } from 'next/router';

function DeliveryMan({order}){
    const router = useRouter();
    return (
        <div key={index} className={styles.order}>
            <div className={styles.orderHeader}>
                <div className={styles.orderNumber}>Order #{order.orderID}</div>
                <div className={getStyle(order)}>{order.orderStatus}</div>
            </div>
            <div className={styles.orderDate}>{`Date : ${order.date}$`}</div>
            <div className={styles.orderAddress}>{`Address: ${order.location.address}`}</div>
            <div className={styles.orderTotal}>{`Total : ${order.cart.total}$`}</div>
    
            {
    
                (order.orderStatus === "ongoing" || order.orderStatus === "delivery_started") &&
                <div className={styles.goToOrder} onClick={() => {
                    let route = "deliveryman" + "/" + order.orderID;
                    router.push(route);
                }}>
                    {"Go To Order"}
                </div>
            }
        </div>
    )
}
export default DeliveryMan
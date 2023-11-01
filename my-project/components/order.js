import { useRouter } from 'next/router';
import styles from '../styles/Orders.module.css'

function getStyle(order) {
    if (order.orderStatus === "ongoing") {
        return styles.pending
    }
    if (order.orderStatus === "delivery_started") {
        return styles.pending
    }
    if (order.orderStatus === "delivered") {
        return styles.delivered
    }
    if (order.orderStatus === "cancelled") {
        return styles.cancelled
    }
}

function Order({ order }) {

    const router = useRouter();

    return (
        <div className={styles.order}>
            <div className={styles.orderHeader}>
                <div className={styles.orderNumber}>Order #{order.orderID}</div>
                <div className={getStyle(order)}>{order.orderStatus}</div>
            </div>
            <div className={styles.orderDate}>{`Date : ${order.date}$`}</div>
            <div className={styles.orderAddress}>{`Address: ${order.location.address}`}</div>
            <div className={styles.orderTotal}>{`Total : ${order.cart.total} TK`}</div>

            <div className={styles.goToOrder} onClick={() => {
                let route = "order" + "/" + order.orderID;
                router.push(route);
            }}>
                {"Go To Order"}
            </div>
        </div>
    )
}

export default Order
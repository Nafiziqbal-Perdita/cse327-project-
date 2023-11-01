import { useRouter } from 'next/router';
import styles from '../styles/Cart.module.css'
import { decreaseQuantityOfProductInCart, getCartTotal, increaseQuantityOfProductInCart, removeProductFromCart } from '../utils/cartManager';

function Product({ product }) {
    const router = useRouter();

    return (
        <div className={styles.product} >
            <div className={styles.removeProductFromCart} onClick={() => { removeProductFromCart(product); router.reload() }} />

            <div className={styles.productInformation}>
                <div className={styles.productImage}>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className={styles.productName}>{`${product.name} (${product.category?.toLowerCase()})`}</div>
                <div className={styles.productPrice}>{product.price} TK</div>
                <div> x {product.quantity} kg</div>
            </div>
            <div className={styles.productActionButtons}>
                <div className={styles.removeProduct} onClick={() => { decreaseQuantityOfProductInCart(product); router.reload() }} >Remove</div>
                <div className={styles.productQuantity}>{product.quantity} kg</div>
                <div className={styles.addProduct} onClick={() => { increaseQuantityOfProductInCart(product); router.reload() }} >Add</div>
            </div>
        </div>
    )
}

export default Product

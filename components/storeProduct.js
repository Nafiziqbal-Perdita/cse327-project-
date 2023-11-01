import styles from '../styles/Store.module.css'

function isProductInCart(isTheProductInCart) { return isTheProductInCart; }
function removeProductFromCart() { }
function increaseQuantityOfProductInCart() { }
async function handleWishlistClick() { }
async function handleRemoveWishlistClick() { }

function Product({ product, isTheProductInCart, isInWishList }) {

    return (
        <div className={styles.product} key={product.id}>
            <div className={styles.productImage}
                onClick={() => { router.push(`/product/${product.id}`) }}
            >
                <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.productName}>{`${product.name} (${product.category?.toLowerCase()})`}</div>
            <div className={styles.productPrice}>{product.price} TK</div>
            {

                isProductInCart(isTheProductInCart) &&
                <div className={styles.removeProduct} onClick={() => { removeProductFromCart(product); router.reload() }}> remove </div>
            }
            {

                !isProductInCart(isTheProductInCart) &&
                <div className={styles.addProduct} onClick={() => { increaseQuantityOfProductInCart(product); router.reload() }}> add </div>
            }

            {
                !isInWishList &&
                <div className={styles.wishlistProduct}
                    onClick={async () => { await handleWishlistClick(product) }}
                >

                    add to wishlist
                </div>
            }

            {
                isInWishList &&
                <div div className={styles.removeWishlistProduct}
                    onClick={async () => { await handleRemoveWishlistClick(product) }}
                >
                    remove from wishlist
                </div>
            }
        </div >
    )
}


export default Product;
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";


function HorizontalNavBar({ isEnglish }) {

    const router = useRouter();


    return (
        <div className={styles.horizontalNavBar} style={{ backgroundColor: "green" }}>

            <div className={styles.navOption}
                onClick={() => { router.push('/cart') }}>
                {
                    isEnglish ? "my cart" : "মাই কার্ট"
                }
            </div>

            <div className={styles.navOption}
                onClick={() => { router.push('/orders') }}>
                {
                    isEnglish ? "shopping list" : "শপিং লিষ্ট"
                }
            </div>


            <div className={styles.navOption}
                onClick={() => { router.push('/saved-list') }}>
                {
                    isEnglish ? "saved list" : "সেভড লিষ্ট"
                }
            </div>


            <div className={styles.navOption}
                onClick={() => { router.push('/') }}>
                {
                    isEnglish ? "offers" : "অফার"
                }
            </div>

            <div className={styles.navOption}
                onClick={() => { router.push('/store?filter=fruits') }}>
                {
                    isEnglish ? "fruits" : "ফলমূল "
                }
            </div>

            <div className={styles.navOption}
                onClick={() => { router.push('/store?filter=vegetables') }}>
                {
                    isEnglish ? "vegetables" : "শাকসবজি"
                }
            </div>

            <div className={styles.navOption}
                onClick={() => { router.push('/store?filter=all') }}>
                {
                    isEnglish ? "all products" : "সব প্রডাক্ট"
                }
            </div>

        </div>
    )
}


export default HorizontalNavBar
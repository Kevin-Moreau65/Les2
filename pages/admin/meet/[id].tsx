import { useRouter } from "next/router"
import styles from "$styles/Meet[id].module.css"

const ArticlePage = () => {
    const router = useRouter()
    const { id } = router.query
    return <div className={styles.main}>
        <div className={styles.cams}></div>
        <div className={styles.chat}>
            <div className={styles.msgContainer}></div>
            <div className={styles.newMsg}></div>
        </div>
    </div>
}
export default ArticlePage
import Protected from '../../components/Protected/Protected'
import styles from '../../styles/Admin.module.css'
export default function AdminPage() {
    return <div className={styles.main}>
        <h1>Admin</h1>
        <Protected></Protected>
    </div>
}
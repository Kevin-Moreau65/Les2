import Link from 'next/link'
import styles from './header.module.css'
const Header = () => {
    return <div className={styles.nav}>
        <div className={styles.navigate}>
            <Link href={'/'}>
                Home
            </Link>
        </div>
        <div className={styles.navigate}>
            <Link href={'/login'}>
                Se connecter
            </Link>
        </div>
    </div>
}

export default Header
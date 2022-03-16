import Link from 'next/link'
import styles from './header.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const checkConnection = () => {
    const token = localStorage.getItem("token")
    if (!token) return false
    //appel API pour vérif le token
    return token === "OK"
}
const Admin = () => {
    const router = useRouter()
    const logout = () => {
        localStorage.removeItem("token")
        router.push('/')
    }
    return <div className={styles.navigate}>
        <Link href={'/admin'}>
            Admin
        </Link>
        <Link href={'/admin/meet'}>
            Réunions
        </Link>
        <p onClick={logout} style={{ cursor: "pointer" }}>
            Se déconnecter
        </p>
    </div>
}
const Client = () => {
    return <div className={styles.navigate}>
        <Link href={'/login'}>
            Se connecter
        </Link>
    </div>
}
const Header = () => {
    const router = useRouter()
    const [status, setStatus] = useState(false)
    useEffect(() => {
        router.events.on("routeChangeComplete", () => {
            setStatus(checkConnection())
        })
        return router.events.off("routeChangeComplete", () => {
        })
    }, [router.events])
    return <div className={styles.nav}>
        <div className={styles.navigate}>
            <Link href={'/'}>
                Home
            </Link>
        </div>
        {status ? <Admin /> : <Client />}
    </div>
}

export default Header
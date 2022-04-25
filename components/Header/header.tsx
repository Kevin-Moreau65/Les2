import Link from 'next/link'
import styles from './header.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// const checkConnection = async () => {
//         const token = localStorage.getItem("token")
//         if (!token) return false
//         const res = await fetch(`http://les2api.30d7d9e7b2014052a7b4.francecentral.aksapp.io/check`)
//         const data = await res.json()
//         if (data.message !== "OK") return false
//         return true
// }
// const Admin = () => {
//     const router = useRouter()
//     const logout = () => {
//         localStorage.removeItem("token")
//         router.push('/')
//     }
//     return <div className={styles.navigate}>
//         <Link href={'/admin'}>
//             Admin
//         </Link>
//         <Link href={'/admin/meet'}>
//             Réunions
//         </Link>
//         <p onClick={logout} style={{ cursor: "pointer" }}>
//             Se déconnecter
//         </p>
//     </div>
// }
const Client = () => {
    return <div className={styles.navigate}>
        <Link href={'/login'}>
            Se connecter
        </Link>
    </div>
}
const Header = () => {
    // const router = useRouter()
    // const [status, setStatus] = useState(false)
    // useEffect(() => {
    //     router.events.on("routeChangeComplete", () => {
    //         async function check() {
    //             return setStatus(await checkConnection())
    //         }
    //        check() 
    //     })
    //     return router.events.off("routeChangeComplete", () => {
    //     })
    // }, [router.events])
    return <div className={styles.nav}>
        <div className={styles.navigate}>
            <Link href={'/'}>
                Home
            </Link>
        </div>
        <Client/>
    </div>
}

export default Header
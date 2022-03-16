import { useState } from 'react'
import styles from '../styles/Login.module.css'
import Button from '../components/Button/button'
import { useRouter } from 'next/router'
function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function handleEmail(e: React.FormEvent<HTMLInputElement>) {
        setEmail(e.currentTarget.value)
    }
    function handlePassword(e: React.FormEvent<HTMLInputElement>) {
        setPassword(e.currentTarget.value)
    }
    function login() {
        //Appelle API pour vérifier l'identité//
        localStorage.setItem("token", "OK")
        router.push("/admin")
    }
    const router = useRouter()
    return <div className={styles.main}>
        <div className={styles.formulaire}>
            <h3>Se connecter</h3>
            <div className={styles.champs}>
                <label htmlFor="username">Email</label>
                <input type="text" name='email' placeholder='email' onChange={handleEmail} value={email} />
            </div>
            <div className={styles.champs}>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name='password' placeholder='Mot de passe' onChange={handlePassword} value={password} />
            </div>
            {/* <button className={styles.button}>Connecter</button> */}
            <Button text="Se connecter" action={login} width={"150px"} height={"30px"}></Button>
        </div>
    </div>
}
export default LoginPage
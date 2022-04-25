import { useState } from 'react'
import styles from '../styles/Login.module.css'
import Button from '../components/Button/button'
import { useRouter } from 'next/router'
function LoginPage() {
    const [pseudo, setPseudo] = useState("")
    const [password, setPassword] = useState("")
    function handlePseudo(e: React.FormEvent<HTMLInputElement>) {
        setPseudo(e.currentTarget.value)
    }
    function handlePassword(e: React.FormEvent<HTMLInputElement>) {
        setPassword(e.currentTarget.value)
    }
    async function login() {
        console.log(JSON.stringify({
            username: pseudo,
            pwd: password
        }))
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const res = await fetch('http://les2api.30d7d9e7b2014052a7b4.francecentral.aksapp.io/login', {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                username: pseudo,
                pwd: password
            })
        })
        const data = await res.json()
        console.log(data)
        if (!data.token) return alert("pseudo ou mot de passe incorrect")
        localStorage.setItem("token", data.token)
        router.push("/admin")
    }
    const router = useRouter()
    return <div className={styles.main}>
        <div className={styles.formulaire}>
            <h3>Se connecter</h3>
            <div className={styles.champs}>
                <label htmlFor="username">pseudo</label>
                <input type="text" name='pseudo' placeholder='pseudo' onChange={handlePseudo} value={pseudo} />
            </div>
            <div className={styles.champs}>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name='password' placeholder='Mot de passe' onChange={handlePassword} value={password} />
            </div>
            <Button text="Se connecter" action={login} width={"150px"} height={"30px"}></Button>
        </div>
    </div>
}
export default LoginPage
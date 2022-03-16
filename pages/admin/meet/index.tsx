import { useState } from "react";
import Button from "$components/Button/button";
import Protected from "$components/Protected/Protected";
import styles from '$styles/Meet.module.css'
import { useRouter } from "next/router";
export default function MeetPage() {
    const [numero, setNumero] = useState("")
    const router = useRouter()
    const handleNum = (e: React.FormEvent<HTMLInputElement>) => {
        setNumero(e.currentTarget.value)
    }
    return <div className={styles.main}>
        <h1>Rejoindre une réunion</h1>
        <div className={styles.form}>
            <p>Numéro de salle:</p>
            <input type="text" name="numero" value={numero} onChange={handleNum} />
            <Button text="Rejoindre" action={() => router.push(`meet/${numero}`)} width="100px" height="45px"></Button>
        </div>
        <Protected></Protected>
    </div>
}
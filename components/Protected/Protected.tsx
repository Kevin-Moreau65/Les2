import { useRouter } from "next/router"
import { useEffect, useState } from "react"
const checkConnection = () => {
    const token = localStorage.getItem("token")
    if (!token) return false
    //appel API pour vérif le token
    return token === "OK"
}
const Protected = () => {
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token || token !== "OK") router.push("/")
    }, [router])
    return <div>

    </div>
}
export default Protected
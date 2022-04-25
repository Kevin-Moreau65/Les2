import { useRouter } from "next/router"
import { useEffect, useState } from "react"
const Protected = () => {
    const router = useRouter()
    useEffect(() => {
        async function checkToken() {
            const token = localStorage.getItem("token")
            if (!token) return router.push("/")
            const res = await fetch(`http://les2api.30d7d9e7b2014052a7b4.francecentral.aksapp.io/check`)
            const data = await res.json()
            if (data.message !== "OK") return router.push("/")
        }
        checkToken()
    }, [router])
    return <div>

    </div>
}
export default Protected
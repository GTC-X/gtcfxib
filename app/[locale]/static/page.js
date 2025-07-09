'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import FallbackLoader from "../components/LoadingSpinner"

const Pages = () => {
    const router = useRouter()
    useEffect(() => {
        router.push("/")
    }, [])
    return (
        <div>
            <FallbackLoader />
        </div>
    )
}
export default Pages
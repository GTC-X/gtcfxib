'use client'

import { useRouter } from "next/navigation"
 import FallbackLoader from "../[locale]/components/LoadingSpinner"
import { useEffect } from "react"
  
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
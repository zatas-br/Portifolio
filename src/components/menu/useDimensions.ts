"use client"

import { useEffect, useState } from "react"

export function useDimensions(ref: React.RefObject<HTMLElement | null>) {
    const [dimensions, setDimensions] = useState({ height: 0 })

    useEffect(() => {
        if (!ref.current) return
        const measure = () => setDimensions({ height: ref.current?.offsetHeight || 0 })
        measure()
        window.addEventListener("resize", measure)
        return () => window.removeEventListener("resize", measure)
    }, [ref])

    return dimensions
}

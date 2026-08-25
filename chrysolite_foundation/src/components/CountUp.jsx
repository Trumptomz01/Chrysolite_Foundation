"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

const CountUp = ({ value, suffix = "", duration = 1200, once = false }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, amount: 0.5 })
    const [display, setDisplay] = useState(0)

    useEffect(() => {

      if (!isInView) {
            setDisplay(0)
            return
        }

        let animationFrameId
        const startTime = performance.now()

        const tick = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            
            setDisplay(Math.round(eased * value))

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(tick)
            }
        }

        animationFrameId = requestAnimationFrame(tick)

        return () => cancelAnimationFrame(animationFrameId)
    }, [isInView, value, duration])

    return (
        <span ref={ref}>
            {display}{suffix}
        </span>
    )
}

export default CountUp
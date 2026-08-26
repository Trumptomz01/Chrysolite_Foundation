"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"
import { FaStar } from "react-icons/fa"
import Reveal from "@/components/Reveal"
import { RevealGroup, RevealItem } from "@/components/RevealGroup"

const heroImages = [
    "/images/2023.jpg",
    "/images/2023/9.jpg",
    "/images/2023/7.jpg",
]

const SLIDE_INTERVAL = 7000 // ms between slides

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % heroImages.length)
        }, SLIDE_INTERVAL)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative min-h-[90vh] flex items-center">
            <div className="absolute inset-0 bg-[#0F2A5C]">
                {heroImages.map((src, i) => (
                    <Image
                        key={src}
                        src={src}
                        alt="Community"
                        fill
                        priority={i === 0}
                        className="object-cover transition-opacity duration-1000 ease-in-out"
                        style={{ opacity: activeSlide === i ? 0.3 : 0 }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32" style={{ fontFamily: "var(--font-sans)" }}>
                <RevealGroup className="max-w-2xl">
                    <RevealItem className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full  border bg-white/10 backdrop-blur-md border-cyan-400/40 text-cyan-400 text-[11px] font-bold uppercase tracking-widest mb-8">
                        <FaStar size={9} />
                        Chrysolite Foundation   
                    </RevealItem>
                    <RevealItem>
                        <h1
                            className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Live, Love,<br />
                            <span className="text-blue-600">Empower.</span>
                        </h1>
                    </RevealItem>
                    <RevealItem>
                        <p className="text-lg lg:text-xl text-blue-100 leading-relaxed mb-10 max-w-xl">
                            We are advancing the welfare of future generations through empowerment and education, one community at a time.
                        </p>
                    </RevealItem>
                    <Reveal className="flex flex-wrap gap-4">
                            <Link
                                href="/about-us"
                                className="px-7 py-4 animation- border bg-white/30  backdrop-blur-sm border-gray-500  active:scale-95 text-white font-semibold rounded-full transition-all hover:bg-cyan-300/20"
                            >
                                Join Us
                            </Link>
                            <Link
                                href="/projects"
                                className="px-7 py-3.5 bg-white/20 hover:backdrop-blur-md hover:gap-3 active:scale-95 backdrop-blur-[1px] text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
                            >
                                Learn More <FiArrowRight size={16} />
                            </Link>
                    </Reveal>
                </RevealGroup>
            </div>

            {/* Slide indicator dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {heroImages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all ${
                            activeSlide === i ? "w-6 bg-white" : "w-1.5 bg-white/40"
                        }`}
                    />
                ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f0efedc0] to-transparent" />
        </section>
    )
}

export default Hero
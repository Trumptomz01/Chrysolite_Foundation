"use client"
import Logo from "./Logo"
import { usePathname } from "next/navigation"
import { FiMenu, FiX } from "react-icons/fi"
import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"

const links = [
    {
        title: "Home",
        url: "/",
        isExternal: false,
        isButton: false
    },
    {
        title: "About Us",
        url: "/about-us",
        isExternal: false,
        isButton: false
    },
    {
        title: "Merchandise",
        url: "/merchandise",
        isExternal: true,
        isButton: false
    },
    {
        title: "Projects",
        url: "/projects",
        isExternal: false,
        isButton: false
    },
    {
        title: "Contact Us",
        url: "/contact",
        isExternal: false,
        isButton: false
    },
    {
        title: "Donate",
        url: "/donate",
        isExternal: false,
        isButton: true
    },
]



const Navbar = () => {
    const [navVisible, setNavVisible] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [highlightClose, setHighlightClose] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        if (!navVisible) return

        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setNavVisible(false)
            }
        }

       let highlightTimer
        const handleScrollAttempt = () => {
            setHighlightClose(true)
            clearTimeout(highlightTimer)
            highlightTimer = setTimeout(() => setHighlightClose(false), 1200)
        }

        document.addEventListener("mousedown", handleClickOutside)
        window.addEventListener("wheel", handleScrollAttempt, { passive: true })
        window.addEventListener("touchmove", handleScrollAttempt, { passive: true })

        return () => {
            document.body.style.overflow = originalOverflow
            document.removeEventListener("mousedown", handleClickOutside)
            window.removeEventListener("wheel", handleScrollAttempt)
            window.removeEventListener("touchmove", handleScrollAttempt)
            clearTimeout(highlightTimer)
        }
    }, [navVisible])

    return (
        <nav 
            ref={navRef} 
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-white/85 shadow-sm backdrop-blur-lg" : "bg-white"
            }`}
        >
            <div className="flex relative items-center justify-between border-b px-10 py-3 lg:py-4 lg:px-10">
                <div>
                    <Logo />
                </div>

                <ul className="hidden md:flex gap-x-1 font-medium items-center text-sm">
                    <NavLinks />
                </ul>

                <div 
                    onClick={() => setNavVisible(!navVisible)} 
                    className={`md:hidden cursor-pointer p-2 rounded-full transition-all duration-300 ${
                        highlightClose 
                            ? "bg-cyan-100 text-blue-600 ring-2 ring-blue-400 shadow-[0_0_18px_rgba(6,182,212,0.95)] scale-109 animate-pulse" 
                            : "text-primary hover:bg-gray-100"
                    }`}
                >
                    {navVisible ? <FiX size={26} /> : <FiMenu size={26} />}
                </div>
            </div>

            {navVisible && (
                <ul className="md:hidden absolute top-full left-0 right-0 flex flex-col gap-y-0.5 bg-white backdrop-blur-lg border-t border-gray-100 px-4 py-3 shadow-lg z-60">
                    <NavLinks onLinkClick={() => setNavVisible(false)} />
                </ul>
            )}
        </nav>
    )
}

const NavLinks = ({ onLinkClick }) => {
    const pathname = usePathname()

    return (
        <>
            {links.map((appLink) => {
                const active = pathname === appLink.url

                if (appLink.isButton) {
                    return (
                        <li key={appLink.title}>
                            <Link
                                href={appLink.url}
                                onClick={onLinkClick}
                                target={appLink.isExternal ? "_blank" : undefined}
                                className="block md:inline-block w-full md:w-auto text-center md:ml-3 tracking-wide px-5 py-2.5 md:py-2 bg-[#0056A4] text-white font-semibold text-sm rounded-full hover:bg-blue-700 active:scale-95 transition-all shadow-sm"
                            >
                                {appLink.title}
                            </Link>
                        </li>
                    )
                }

                return (
                    <li key={appLink.title}>
                        <Link
                            href={appLink.url}
                            onClick={onLinkClick}
                            target={appLink.isExternal ? "_blank" : undefined}
                            className={`block px-3.5 py-2.5 md:py-2 text-sm font-medium tracking-wide rounded-full transition-colors ${
                                active 
                                    ? "text-[#1A56A7] bg-blue-100" 
                                    : "text-gray-700 hover:text-[#1A56A7] hover:bg-blue-50/50"
                            }`}
                        >
                            {appLink.title}
                        </Link>
                    </li>
                )
            })}
        </>
    )
}

export default Navbar
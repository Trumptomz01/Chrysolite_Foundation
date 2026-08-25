"use client"
import Logo from "./Logo"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiMenu, FiX } from "react-icons/fi"

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
        url: "https://www.whatsapp.com/catalog/2349127480531/?app_absent=0",
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

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/85 shadow-sm backdrop-blur-md" : "bg-white"}`}>
            <div
                className={"flex relative items-center justify-between border-3 px-10 py-3 lg:py-4 lg:px-10"}>
                <div>
                    <Logo/>
                </div>
                <ul className={"hidden md:flex gap-x-1 font-medium items-center text-sm"}>
                    <NavLinks/>
                </ul>
                <div onClick={() => setNavVisible(!navVisible)} className={"md:hidden text-primary cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors"}>
                    {navVisible ? <FiX size={26} /> : <FiMenu size={26} />}
                </div>
            </div>
            {
                navVisible && (
                    <ul className={"md:hidden absolute top-full left-0 right-0 flex flex-col gap-y-0.5 bg-white border-t border-gray-100 px-4 py-3 shadow-lg z-40"}>
                        <NavLinks/>
                    </ul>
                )
            }
        </nav>
    )
}

const NavLinks = () => {
    const pathname = usePathname()
    return (
        <>
            {
                links.map((appLink) => {
                    const active = pathname === appLink.url

                    if (appLink.isButton) {
                        return (
                            <li key={appLink.title}>
                                <Link
                                    href={appLink.url}
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
                                target={appLink.isExternal ? "_blank" : undefined}
                                className={`block px-3.5 py-2.5 md:py-2 text-sm font-medium tracking-wide rounded-lg transition-colors ${
                                    active ? "text-[#1A56A7] bg-blue-50" : "text-gray-600 hover:text-[#1A56A7] hover:bg-blue-50/60"
                                }`}
                            >
                                {appLink.title}
                            </Link>
                        </li>
                    )
                })
            }
        </>
    )
}

export default Navbar
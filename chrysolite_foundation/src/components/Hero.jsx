import Link from "next/link"
import Image from "next/image"
import { FiArrowRight } from "react-icons/fi"
import { FaStar } from "react-icons/fa"
import Image2023 from "../../public/images/2023.jpg"

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center">
            <div className="absolute inset-0 bg-[#0F2A5C]">
               <Image src={Image2023} alt="Community" fill style={{ objectFit: "cover" }} className="opacity-30" priority />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32" style={{ fontFamily: "var(--font-sans)" }}>
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[11px] font-bold uppercase tracking-widest mb-8">
                        <FaStar size={9} />
                        Chrysolite Foundation
                    </div>
                    <h1
                        className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Live, Love,<br />
                        <span className="text-[#F59E0B]">Empower.</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 leading-relaxed mb-10 max-w-xl">
                        We are advancing the welfare of future generations through empowerment and education — one community at a time.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/about-us"
                            className="px-7 py-3.5 bg-[#F59E0B] text-white font-semibold rounded-full hover:bg-amber-500 transition-all shadow-lg hover:shadow-amber-500/30"
                        >
                            Join Us
                        </Link>
                        <Link
                            href="/projects"
                            className="px-7 py-3.5 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
                        >
                            Learn More <FiArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F7F4] to-transparent" />
        </section>
    )
}

export default Hero
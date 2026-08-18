// src/app/components/GetInvolved.jsx
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

const GetInvolved = () => {
    return (
      <section className="py-20 lg:py-28 bg-[#1A56A7]" style={{ fontFamily: "var(--font-sans)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-[11px] font-bold uppercase tracking-widest mb-6">
              Get Involved
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5" style={{ fontFamily: "var(--font-display)" }}>
              Be Part of the Movement
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you volunteer your time, support a project, or give, every part moves a young person forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
                href="/donate"
                className="px-8 py-4 bg-[#F59E0B] text-white font-bold rounded-full hover:bg-amber-500 transition-colors shadow-lg"
            >
                Donate Now
            </Link>
            <Link
                href="/contact-us"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20"
            >
                Volunteer With Us <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    )
}

export default GetInvolved
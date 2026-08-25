import { FiUsers, FiHeart, FiCalendar } from "react-icons/fi"
import { FaStar, FaSeedling } from "react-icons/fa"
import Reveal from "@/components/Reveal"
import CountUp from "@/components/CountUp"
import { RevealGroup, RevealItem } from "@/components/RevealGroup"

const stats = [
    { num: "30", suffix: "+", label: "Dedicated Volunteers", icon: FiUsers },
    { num: "70", suffix: "+", label: "People Reached, Odo-Osun 2020", icon: FiHeart },
    { num: "4", suffix: "", label: "Active Projects", icon: FaSeedling },
    { num: "7", suffix: "", label: "Years of Community Service", icon: FiCalendar },
]

const Impact = () => {
    return (
        <section className="py-16 lg:py-20 bg-[#1A56A7]" style={{ fontFamily: "var(--font-sans)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-12">
                  <Reveal className="inline-flex text-center items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-cyan-400/20 text-cyan-400 text-[11px] font-bold uppercase tracking-widest mb-4">
                     <FaStar className="animate-pulse items-center " size={9} />
                     Our Impact
                  </Reveal>
                  <Reveal>
                     <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                        Real Change, Real People
                     </h2>
                  </Reveal>
               </div>

               <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map(({ num, label, suffix, icon: Icon }) => (
                     <RevealItem key={label} className="bg-white/10 rounded-2xl p-6 lg:p-8 text-center border border-white/10 hover:bg-white/15 transition-colors">
                           <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-400/20 text-blue-500 mb-4">
                              <Icon className="animate-pulse" size={22} />
                           </div>
                           <div className="text-4xl lg:text-5xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                              <CountUp value={num} suffix={suffix} /> 
                           </div>
                           <div className="text-blue-200 text-sm font-medium">{label}</div>
                     </RevealItem>
                  ))}
               </RevealGroup>
            </div>
        </section>
    )
}

export default Impact
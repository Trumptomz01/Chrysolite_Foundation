import Image from "next/image"
import Reveal from "@/components/Reveal"
import { RevealGroup, RevealItem } from "@/components/RevealGroup"
import { FiGlobe, FiHeart } from "react-icons/fi"
import { FaLightbulb } from "react-icons/fa"
import SectionTag from "./SectionTag"
import teamImage from "../../public/images/2023/8.jpg"

const pillars = [
    { icon: FiGlobe, title: "Vision", text: "To give a voice, empower, and share new perspectives." },
    { icon: FaLightbulb, title: "Mission", text: "To create a movement and empowerment strategy for the total person — assisting educational advancement and the general welfare of the future generation." },
    { icon: FiHeart, title: "Core Values", text: "The passion to love. The dignity and value of every person." },
]

const aboutUs = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Reveal>
                  <SectionTag>Who We Are</SectionTag>
                </Reveal>
                <Reveal>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                      Giving a Voice.<br />
                      Empowering Lives.
                  </h2>
                </Reveal>

                <Reveal>
                  <p className="text-gray-600 leading-relaxed mb-8">
                      Chrysolite Foundation is a non-governmental organization dedicated to advancing the welfare of future generations. We work directly with young people in low-income, underprivileged, and marginalized communities — because every person carries inherent dignity and potential.
                  </p>
                </Reveal>
                <RevealGroup className="space-y-4">
                    {pillars.map(({ icon: Icon, title, text }) => (
                        <RevealItem key={title} className="flex gap-4 p-4 rounded-2xl bg-white border border-blue-50 hover:border-blue-100 transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-[#EBF3FF] flex items-center justify-center shrink-0">
                                <Icon size={18} className="text-[#1A56A7]" />
                            </div>
                            <div>
                                <div className="font-semibold text-[#111827] text-sm mb-0.5">{title}</div>
                                <div className="text-gray-500 text-sm leading-relaxed">{text}</div>
                            </div>
                        </RevealItem>
                    ))}
                </RevealGroup>
              </div>
              <RevealGroup className="relative">
                  <RevealItem className="rounded-3xl overflow-hidden shadow-md h-[480px] bg-blue-100 relative">
                      <Image src={teamImage} alt="Community gathering" fill style={{ objectFit: "cover" }} />
                  </RevealItem>
                  <RevealItem className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-blue-50">
                      <div className="text-3xl font-bold text-[#1A56A7]" style={{ fontFamily: "var(--font-display)" }}>30+</div>
                      <div className="text-sm text-gray-500 font-medium">Dedicated Volunteers</div>
                  </RevealItem>
                  <RevealItem className="absolute -top-6 -right-4 lg:-right-6 bg-[#0056A4] rounded-2xl p-5 shadow-xl">
                      <div className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>2019</div>
                      <div className="text-sm text-cyan-100 font-medium">Founded</div>
                  </RevealItem>
              </RevealGroup>
          </div>
      </div>
    </section>
  )
}

export default aboutUs
// src/app/about-us/page.jsx
import { FiGlobe, FiHeart, FiUsers } from "react-icons/fi"
import { FaLightbulb } from "react-icons/fa"
import SectionTag from "../../components/SectionTag"
import { journey } from "../data/journey"
import { RevealGroup } from "../../components/RevealGroup"
import { RevealItem } from "../../components/RevealGroup"

export const metadata = {
  title: "About Us | Chrysolite Foundation",
}

const pillars = [
  { icon: FiGlobe, title: "Vision", text: "To give a voice, empower, and share new perspectives." },
  { icon: FaLightbulb, title: "Mission", text: "To create a movement and empowerment strategy for the total person. To assist in the educational advancement and the general welfare of the future generation." },
  { icon: FiHeart, title: "Core Values", text: "The passion to love. The dignity and value of every person." },
]


const storyPlaceholders = [
  { project: "CommunityCrop", quote: null },
  { project: "Ray of Hope", quote: null },
  { project: "Tales & Thinkers", quote: null },
]

export default function AboutUsPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      {/* Hero */}
      <section className="relative py-28 bg-[#0F2A5C] text-center">
        <RevealGroup className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealItem><SectionTag>About Us</SectionTag></RevealItem>
          <RevealItem>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2" style={{ fontFamily: "var(--font-display)" }}>
              Giving a Voice. Empowering Lives.<br />Sharing New Perspectives.
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-blue-200 mt-4 max-w-2xl mx-auto leading-relaxed">
              Chrysolite Foundation is a non-governmental organization advancing the welfare of future
              generations through empowerment and education, working directly with young people in
              low-income, underprivileged, and marginalized communities.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 lg:py-28 bg-[#F8F7F4]">
        <RevealGroup className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, text }) => (
              <RevealItem key={title} className="bg-white rounded-2xl p-7 border border-blue-50">
                <div className="w-11 h-11 rounded-xl bg-[#EBF3FF] flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#1A56A7]" />
                </div>
                <h3 className="font-bold text-[#111827] mb-2" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* Our Team */}
      <section className="py-20 lg:py-28 bg-white">
        <RevealGroup className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealItem><SectionTag>Our Team</SectionTag></RevealItem>
          <RevealItem>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Powered by People Who Show Up
            </h2>
          </RevealItem>
          <RevealItem className="max-w-2xl mx-auto bg-[#F8F7F4] rounded-2xl p-8 border border-blue-50">
            <div className="w-14 h-14 rounded-2xl bg-[#EBF3FF] flex items-center justify-center mx-auto mb-4">
              <FiUsers size={24} className="text-[#1A56A7]" />
            </div>
            <div className="text-4xl font-bold text-[#1A56A7] mb-2" style={{ fontFamily: "var(--font-display)" }}>30+</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Chrysolite Foundation is currently made up of more than 30 volunteers, including two
              administrative volunteer staff who help coordinate our programs and outreach.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* Our Journey */}
      <section className="py-20 lg:py-28 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup className="text-center mb-14">
            <RevealItem><SectionTag>Our Journey</SectionTag></RevealItem>
            <RevealItem>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111827]" style={{ fontFamily: "var(--font-display)" }}>
                Milestones That Made Us
              </h2>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-blue-100 hidden lg:block" />
            {journey.map((item, i) => (
              <RevealItem key={item.year} className={`relative flex gap-8 mb-10 items-start ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                <div className="flex-1">
                  <div className={`bg-white rounded-2xl p-6 shadow-sm border border-blue-50 max-w-sm ${i % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}>
                    <span className="text-[#0056A4] font-bold text-2xl block mb-2" style={{ fontFamily: "var(--font-display)" }}>{item.year}</span>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center shrink-0 z-10">
                  <div className="w-12 h-12 rounded-full bg-[#1A56A7] border-4 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold">
                    {String(item.year).slice(2)}
                  </div>
                </div>
                <div className="flex-1 hidden lg:block" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Stories, placeholders only */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup className="text-center mb-12">
            <RevealItem><SectionTag>Community Stories</SectionTag></RevealItem>
            <RevealItem>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111827]" style={{ fontFamily: "var(--font-display)" }}>
                Stories From the Field
              </h2>
            </RevealItem>
          </RevealGroup>
          <RevealGroup className="grid sm:grid-cols-3 gap-6">
            {storyPlaceholders.map(({ project }) => (
              <RevealItem key={project} className="bg-[#F8F7F4] rounded-2xl p-7 border border-dashed border-blue-200 text-center">
                <div className="text-xs font-bold text-[#1A56A7] uppercase tracking-wider mb-3">{project}</div>
                <p className="text-gray-400 text-sm italic">Testimonial coming soon.</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0056A4]">
        <RevealGroup className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealItem>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Help Us Write the Next Chapter
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-cyan-100 max-w-xl mx-auto mb-8">
              Your support allows us to expand our reach, launch new projects, and serve more young people.
            </p>
          </RevealItem>
          <RevealItem>
            <a href="/donate" className="inline-block px-8 py-4 bg-white text-blue-600 tracking-wide font-bold rounded-full hover:bg-cyan-50 transition-colors">
              Donate Today
            </a>
          </RevealItem>
        </RevealGroup>
      </section>
    </div>
  )
}
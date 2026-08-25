import Image from "next/image"
import Link from "next/link"
import { FiUsers, FiMapPin, FiArrowRight } from "react-icons/fi"
import SectionTag from "@/components/SectionTag"
import { projects } from "../data/projects"
import { RevealGroup, RevealItem } from "@/components/RevealGroup"

export const metadata = {
  title: "Our Projects — Chrysolite Foundation",
}

export default function page() {
  return (
    <div>
      <section className="relative py-28 bg-[#0F2A5C]">
        <div className="absolute inset-0">
          <Image src="/images/2019/1.jpg" alt="Projects" fill style={{ objectFit: "cover" }} className="opacity-20 ease-in-out transition-all" />
        </div>
        <RevealGroup className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealItem><SectionTag>Our Projects</SectionTag></RevealItem>
          <RevealItem>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2" style={{ fontFamily: "var(--font-display)" }}>
              Initiatives That Matter
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-blue-200 mt-4 max-w-xl mx-auto leading-relaxed">
              From agriculture to arts, from literacy to life skills — our projects are designed to meet communities where they are.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      <section className="py-20 lg:py-28 bg-[#F8F7F4]" style={{ fontFamily: "var(--font-sans)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup className="grid sm:grid-cols-2 gap-8">
            {projects.map((project) => (
              <RevealItem key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-50">
                <div className="relative h-64 overflow-hidden bg-blue-100">
                  <Image src={project.photo} alt={project.name} fill style={{ objectFit: "cover" }} className="group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.tagColor}`}>{project.tag}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-[#111827] mb-3" style={{ fontFamily: "var(--font-display)" }}>{project.name}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.short}</p>
                  <div className="flex flex-wrap gap-2 mb-6 items-center">
                    <span className="text-xs text-gray-500 flex items-center gap-1"><FiUsers size={11} /> {project.target}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1"><FiMapPin size={11} /> {project.location}</span>
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center active:scale-95 gap-2 px-5 py-2.5 bg-[#1A56A7] text-white font-semibold text-sm rounded-full hover:bg-[#1546C7] transition-all w-fit"
                  >
                    View Project <FiArrowRight size={14} />
                  </Link>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  )
}
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FiUsers, FiMapPin, FiCalendar, FiArrowLeft } from "react-icons/fi"
import { FaStar } from "react-icons/fa"
import { projects } from "../../data/projects"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = projects.find((p) => p.id === slug)
  return { title: project ? `${project.name} — Chrysolite Foundation` : "Project Not Found" }
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params
  const project = projects.find((p) => p.id === slug)

  if (!project) {
    notFound()
  }

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <div className="relative h-64 lg:h-96 bg-[#0F2A5C]">
        <Image src={project.photo} alt={project.name} fill style={{ objectFit: "cover" }} className="opacity-40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <Link href="/projects" className="flex items-center gap-2 text-white/70 text-sm mb-4 hover:text-white transition-colors w-fit">
              <FiArrowLeft size={14} /> All Projects
            </Link>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block ${project.tagColor}`}>{project.tag}</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{project.name}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#111827] mb-4" style={{ fontFamily: "var(--font-display)" }}>Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-10">{project.description}</p>
            <h2 className="text-2xl font-bold text-[#111827] mb-5" style={{ fontFamily: "var(--font-display)" }}>Objectives</h2>
            <ul className="space-y-3">
              {project.objectives.map((obj) => (
                <li key={obj} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF3FF] flex items-center justify-center shrink-0 mt-0.5">
                    <FaStar size={9} className="text-[#1A56A7]" />
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            {[
              { label: "Target Audience", value: project.target, icon: FiUsers },
              { label: "Location", value: project.location, icon: FiMapPin },
              { label: "Timeframe", value: project.timeframe, icon: FiCalendar },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="bg-[#F8F7F4] rounded-2xl p-5 border border-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={14} className="text-[#1A56A7]" />
                  <span className="text-xs font-bold text-[#1A56A7] uppercase tracking-wider">{label}</span>
                </div>
                <p className="text-gray-700 text-sm font-medium">{value}</p>
              </div>
            ))}
            <Link
              href="/donate"
              className="block text-center w-full py-3.5 bg-[#F59E0B] text-white font-semibold rounded-full hover:bg-amber-500 transition-colors"
            >
              Support This Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
import Image from "next/image"
import Link from "next/link"
import { projects } from "../app/data/projects"

const Projects = () => {
  return (
    <div className="grid border   border-red-600 lg:py-30 px-4 sm:px-6 lg:px-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap- ">
      {/* {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="group block bg-white rounded-2xl overflow-hidden border shadow border-gray-200 hover:border-blue-100 hover:shadow-lg transition-all"
        >
          <div className="relative h-[160px] bg-blue-50">
            <Image
              src={project.photo}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="p-5">
            <span className="inline-block px-2.5 py-1 rounded-full bg-blue-50 text-[#1A56A7] text-[11px] font-semibold mb-3">
              {project.tag}
            </span>

            <h3
              className="font-bold text-[#111827] mb-1.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.name}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </Link>
      ))} */}
    </div>
  )
}

export default Projects
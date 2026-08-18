import Image from "next/image"
import Link from "next/link"
import { projects } from "../app/data/projects"
import { FiArrowRight } from "react-icons/fi"

const Projects = () => {
  return (

    <section className="py-24 px-4 sm:px-6 lg:px-8 flex flex-col gap-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group block   bg-white rounded-2xl overflow-hidden border shadow border-gray-200 hover:border-blue-100 hover:shadow-lg transition-all"
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
        ))}
      </div>

      <div className="flex ml-auto mt-4 p-2">
        <Link href={"/projects"} className="flex text-center items-center px-10 py-3 border border-gray-200 font-medium hover:gap-2 text-blue-500 ml-auto rounded-2xl hover:text-white shadow-md hover:scale-95 active:scale-100 transition hover:bg-[#3372B5]   ">
          View all projects <FiArrowRight size={16} />
        </Link>
      </div>
    </section>
   
      
  )
}

export default Projects
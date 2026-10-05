import Image from "next/image";
import Reveal from "./Reveal";
import { RevealGroup, RevealItem } from "./RevealGroup";
import Link from "next/link";
import { projects } from "../app/data/projects";
import { FiArrowRight } from "react-icons/fi";
import SectionTag from "./SectionTag";

const Projects = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col gap-4 ">
      <RevealGroup className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 lg:mb-12">
        <div>
          <RevealItem>
            <SectionTag>Our Projects</SectionTag>
          </RevealItem>
          <RevealItem>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#111827] leading-tight mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Initiatives That Transform Communities
            </h2>
          </RevealItem>

          <RevealItem>
            <p className="text-gray-500 mt-3 max-w-xl leading-relaxed">
              From agriculture to arts, from literacy to life skills, our
              projects are designed to meet communities where they are.
            </p>
          </RevealItem>
        </div>
        <RevealItem>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-[#1A56A7] font-semibold text-sm hover:gap-3 transition-all shrink-0"
          >
            View All Projects <FiArrowRight size={14} />
          </Link>
        </RevealItem>
      </RevealGroup>

      <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {projects.map((project) => (
          <RevealItem  className="group block bg-white rounded-2xl overflow-hidden border shadow border-gray-200 hover:border-blue-100 hover:shadow-lg transition-all" key={project.id}>
            <Link
              href={`/projects/${project.id}`}
              // className="group block bg-white rounded-2xl overflow-hidden border shadow border-gray-200 hover:border-blue-100 hover:shadow-lg transition-all"
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
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="flex ml-auto mt-4 py-2">
        <Link
          href="/projects"
          className="flex text-center font-semibold text-[#1A56A7] items-center px-10 py-3 hover:gap-2 ml-auto rounded-2xl shadow-md hover:scale-95 text-sm border border-[#3372B5]/10 active:scale-100 transition "
        >
          View All Projects <FiArrowRight size={16} />
        </Link>
      </Reveal>
    </section>
  );
};

export default Projects;

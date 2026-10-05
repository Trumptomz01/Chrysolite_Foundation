// src/app/blog/page.jsx
import Link from "next/link"
import { FiEdit3 } from "react-icons/fi"

export const metadata = {
  title: "Blog | Chrysolite Foundation",
}

const MEDIUM_URL = "https://medium.com/@thechrysolitefoundation"

export default function BlogPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F8F7F4] px-4 py-20" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="max-w-xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#EBF3FF] flex items-center justify-center mx-auto mb-6">
          <FiEdit3 size={26} className="text-[#1A56A7]" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1A56A7] text-[11px] font-bold uppercase tracking-widest mb-5">
          Coming Soon
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Our Blog Is Moving In Soon
        </h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          We will soon be sharing stories from the field, project updates, and reflections from our
          work in the community, right here on the site. For now, you can read our existing posts
          on Medium.
        </p>
        <Link
          href={MEDIUM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A56A7] text-white font-semibold rounded-full hover:bg-[#1546C7] transition-colors"
        >
          Read Our Posts on Medium
        </Link>
      </div>
    </div>
  )
}
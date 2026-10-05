// src/app/merchandise/page.jsx
import Link from "next/link"
import { FiShoppingBag } from "react-icons/fi"

export const metadata = {
  title: "Merchandise | Chrysolite Foundation",
}

const WHATSAPP_CATALOG_URL = "https://www.whatsapp.com/catalog/2349127480531/?app_absent=0"

export default function MerchandisePage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F8F7F4] px-4 py-20" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="max-w-xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#EBF3FF] flex items-center justify-center mx-auto mb-6">
          <FiShoppingBag size={26} className="text-[#1A56A7]" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1A56A7] text-[11px] font-bold uppercase tracking-widest mb-5">
          Coming Soon
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Our Online Store Is On Its Way
        </h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          In the future, we plan to sell branded merchandise right here on the site, with proceeds
          going toward our programs and outreach. For now, you can still browse and order from our
          current catalog on WhatsApp.
        </p>
        <Link
          href={WHATSAPP_CATALOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A56A7] text-white font-semibold rounded-full hover:bg-[#1546C7] transition-colors"
        >
          Shop Current Catalog on WhatsApp
        </Link>
      </div>
    </div>
  )
}  
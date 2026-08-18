export default function AboutUsLoading() {
  return (
    <div>
      <section className="relative py-28 bg-[#0F2A5C] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-6 w-28 bg-white/10 rounded-full mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-96 max-w-full bg-white/10 rounded-lg mx-auto animate-pulse" />
          <div className="h-4 w-64 bg-white/10 rounded mx-auto mt-4 animate-pulse" />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-blue-50 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 animate-pulse" />
                <div className="h-5 w-24 bg-gray-100 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
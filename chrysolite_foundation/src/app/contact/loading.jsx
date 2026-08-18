export default function ContactUsLoading() {
  return (
    <div>
      <section className="relative py-28 bg-[#1A56A7] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-6 w-28 bg-white/10 rounded-full mx-auto mb-6 animate-pulse" />
          <div className="h-10 w-80 max-w-full bg-white/10 rounded-lg mx-auto animate-pulse" />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gray-100 animate-pulse shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-16 bg-gray-100 rounded animate-pulse" />
                    <div className="h-4 w-40 bg-gray-100 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-3 bg-white rounded-3xl p-8 lg:p-10 border border-blue-50 space-y-5">
              <div className="h-7 w-40 bg-gray-100 rounded animate-pulse mb-2" />
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-3 w-20 bg-gray-100 rounded animate-pulse" />
                  <div className="h-12 w-full bg-gray-50 border border-gray-100 rounded-xl animate-pulse" />
                </div>
              ))}
              <div className="h-12 w-full bg-blue-100 rounded-full animate-pulse mt-2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
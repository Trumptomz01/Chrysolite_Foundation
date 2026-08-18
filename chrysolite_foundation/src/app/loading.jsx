
export default function RootLoading() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      <div className="h-1 bg-[#1A56A7] animate-[loadbar_1s_ease-in-out_infinite]" />
      <style>{`
        @keyframes loadbar {
          0% { width: 0%; margin-left: 0%; }
          50% { width: 60%; margin-left: 20%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  )
}
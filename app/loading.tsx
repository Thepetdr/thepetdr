export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c9748f] to-[#a85570] flex items-center justify-center shadow-lg animate-pulse">
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
            <path d="M4.5 11.5A2 2 0 106.5 9.5 2 2 0 004.5 11.5zM9 7a2 2 0 102 2A2 2 0 009 7zm6 0a2 2 0 102 2 2 2 0 00-2-2zm4.5 4.5a2 2 0 102 2 2 2 0 00-2-2zm-7.63 4.63C10.31 15.08 8 14 8 14a6 6 0 000 4s1.5 2 4 2 4-2 4-2a6 6 0 000-4s-2.31 1.08-3.87 1.63a1 1 0 01-.76 0z" />
          </svg>
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#c9748f] animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
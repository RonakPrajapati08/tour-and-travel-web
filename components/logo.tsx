import Link from "next/link"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 rounded-full bg-[#2E7D32] flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5 text-white"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M12 3C7.5 3 4 7.5 4 12c0 3 1.5 5.5 4 7l4-4 4 4c2.5-1.5 4-4 4-7 0-4.5-3.5-9-8-9z"
            fill="currentColor"
          />
        </svg>
      </div>
      <span className="text-xl font-semibold">
        <span className="text-[#2E7D32]">Polo</span>{" "}
        <span className="text-[#6B7280]">Safari</span>
      </span>
    </Link>
  )
}

export function LogoWhite({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 rounded-full bg-[#2E7D32] flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5 text-white"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M12 3C7.5 3 4 7.5 4 12c0 3 1.5 5.5 4 7l4-4 4 4c2.5-1.5 4-4 4-7 0-4.5-3.5-9-8-9z"
            fill="currentColor"
          />
        </svg>
      </div>
      <span className="text-xl font-semibold">
        <span className="text-[#2E7D32]">Polo</span>{" "}
        <span className="text-[#9CA3AF]">Safari</span>
      </span>
    </Link>
  )
}

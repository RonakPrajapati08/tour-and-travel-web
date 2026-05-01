export function LogosSection() {
  const logos = [
    "IIM Ahmedabad",
    "Nirma University",
    "Zydus",
    "Adani",
    "Bandhan Bank",
    "DA-IICT",
    "Rotary Club",
    "Infosys",
    "Tata Group",
  ]

  return (
    <section className="py-12 bg-[#F5F3EF] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-[#6B7280] uppercase tracking-wider mb-8">
          Trusted by Corporates, Schools & Communities
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {logos.map((logo, index) => (
            <span
              key={index}
              className="text-[#9CA3AF] font-medium text-sm lg:text-base"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TimelineSection() {
  const steps = [
    {
      step: "STEP 01",
      title: "Planning",
      description:
        "Tell us: solo, weekends, family, budget — and we'll craft a trip. No Cookie-cutter. 100 Custom as Promised.",
    },
    {
      step: "STEP 02",
      title: "Travel",
      description:
        "Doorstep pickups, vetted vehicles, and a support team on every moment of the day from door to forest.",
    },
    {
      step: "STEP 03",
      title: "Activities",
      description:
        "Trek, sail, or explore, campfire, heritage walks, rooftop planets, and photography.",
    },
    {
      step: "STEP 04",
      title: "Experience",
      description:
        "Come back as a part of our extended family. Stories, discounts and first access to secret spots.",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#2E7D32] text-sm font-medium uppercase tracking-wider mb-4">
            How We Work
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A]">
            From idea to
            <br />
            <span className="text-[#2E7D32] italic">unforgettable</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center lg:text-left">
              <p className="text-xs text-[#6B7280] font-medium mb-2">
                {item.step}
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

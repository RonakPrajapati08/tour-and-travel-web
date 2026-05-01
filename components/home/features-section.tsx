import { Users, Wallet, Shield, Calendar } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Guides",
    description:
      "Certified naturalists who understand every trail, lake, and secret sunrise spot.",
  },
  {
    icon: Wallet,
    title: "Affordable Packages",
    description:
      "Transparent pricing, no hidden costs. Enjoy the best trips without the hefty price tag.",
  },
  {
    icon: Shield,
    title: "Safe Travel",
    description:
      "Vetted stays, first aid-trained guides, safety 24/7 by our emergency line.",
  },
  {
    icon: Calendar,
    title: "Customized Tours",
    description:
      "Your pace, your people, your dates. Private, tailored itineraries built around you.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#2E7D32] text-sm font-medium uppercase tracking-wider mb-4">
            Why Travel With Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A]">
            Designed for people who
            <br />
            want <span className="text-[#2E7D32] italic">more than a trip</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#2E7D32]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

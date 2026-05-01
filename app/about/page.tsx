import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Leaf, Users, Award, Heart } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Eco-First",
    description:
      "We partner with local communities and eco-certified stays. Every trip offsets its own carbon.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description:
      "Never more than 14 travellers per departure. You're a guest, not a number.",
  },
  {
    icon: Award,
    title: "Expert Crew",
    description:
      "Wildlife biologists, climbing instructors, and local cultural leads.",
  },
  {
    icon: Heart,
    title: "Thoughtful Pace",
    description:
      "Trips paced for moments — not check-ins. Rest breaks, sunrise hikes, slow coffees.",
  },
]

const stats = [
  { value: "14+", label: "YEARS GUIDING" },
  { value: "2,300", label: "TRIPS COMPLETED" },
  { value: "18K+", label: "HAPPY TRAVELLERS" },
  { value: "40+", label: "DESTINATIONS" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <Header />

      {/* Story Section */}
      <section className="pt-24 pb-16 lg:py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-[#2E7D32] text-sm font-medium uppercase tracking-wider mb-4">
                Our Story
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight mb-6">
                It started with one
                <br />
                <span className="text-[#2E7D32] italic">forgotten forest</span>.
              </h1>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                In 2012, our founder Raj hiked into Polo Forest alone with a rented tent and a
                borrowed map. He came back with a promise: to introduce this hidden 400-
                year-old kingdom to travellers who care.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-8">
                What began as weekend treks for friends is now a family of 2,300+ trips, 40+
                destinations, and a crew of naturalists, drivers, chefs, and storytellers — each
                handpicked, each local. We don&apos;t run tours. We introduce you to places we love.
              </p>
              <Link href="/packages">
                <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-full px-8">
                  See our trips
                </Button>
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80"
                  alt="Founder hiking in forest"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#2E7D32] text-sm font-medium uppercase tracking-wider mb-4">
              What We Stand For
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A]">
              Our travel values.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#F5F3EF] rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#2E7D32]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl lg:text-5xl font-serif text-[#2E7D32] mb-2">
                  {stat.value}
                </p>
                <p className="text-xs text-[#6B7280] uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

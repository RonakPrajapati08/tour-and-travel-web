import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function StorySection() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-[#8BC34A] text-sm font-medium uppercase tracking-wider mb-4">
            Once Upon a Trek
          </p>
          <h2 className="text-3xl lg:text-5xl font-serif text-white leading-tight mb-6">
            Where the forest
            <br />
            <span className="text-[#8BC34A] italic">whispers old songs</span>.
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Polo isn&apos;t just a forest — it&apos;s a 400-year-old forgotten kingdom
            tangled in fruit and bamboo. Walk past 15th-century temple ruins,
            cross the shallow streams, and end your day at the safaris&apos; hidden
            campground in the deep quiet.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            Our Vibes are both — solo power trips for people. Your 5 hikes with
            rivers or lake camps, and moonrise walks a sky so clear
            you&apos;ll rediscover how big things feel.
          </p>
          <Link href="/packages">
            <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-full px-8">
              Explore Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

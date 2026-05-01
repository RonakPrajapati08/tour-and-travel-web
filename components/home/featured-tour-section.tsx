import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function FeaturedTourSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80"
                alt="Polo Forest Day Tour"
                fill
                className="object-cover"
              />
            </div>
            {/* Price Badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl px-4 py-3 shadow-lg">
              <p className="text-xs text-[#6B7280]">FROM</p>
              <p className="text-2xl font-bold text-[#1A1A1A]">
                <span className="text-lg">₹</span>1,499
              </p>
            </div>
            {/* Rating Badge */}
            <div className="absolute bottom-6 right-6 bg-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">4.9</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <Badge className="bg-[#E8F5E9] text-[#2E7D32] hover:bg-[#E8F5E9] mb-4">
              Featured Tour
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A] mb-4">
              Polo Forest Day Tour
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-6">
              Step into Polo Forest, an untouched wilderness stretching along the
              Harnav River. Trek through rare semi-evergreen ecosystem, discover
              15th century Jain and Hindu ruins, and watch the evening sun
              warm campfire under a blanket of stars.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-[#F5F3EF] rounded-full text-sm text-[#1A1A1A]">
                Trekking
              </span>
              <span className="px-4 py-2 bg-[#F5F3EF] rounded-full text-sm text-[#1A1A1A]">
                Heritage Walk
              </span>
              <span className="px-4 py-2 bg-[#F5F3EF] rounded-full text-sm text-[#1A1A1A]">
                Bird watching
              </span>
              <span className="px-4 py-2 bg-[#F5F3EF] rounded-full text-sm text-[#1A1A1A]">
                Campfire
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Link href="/booking">
                <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-full px-8">
                  Book Now
                </Button>
              </Link>
              <Link href="/packages/polo-forest">
                <Button
                  variant="ghost"
                  className="text-[#2E7D32] hover:text-[#1B5E20] hover:bg-[#E8F5E9] rounded-full px-8"
                >
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

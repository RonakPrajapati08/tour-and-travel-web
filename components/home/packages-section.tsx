import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, ArrowRight } from "lucide-react"

const packages = [
  {
    id: 1,
    title: "Statue of Unity Getaway",
    location: "Kevadia, Gujarat",
    duration: "2D",
    price: "5,499",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    tag: "Heritage",
    tagColor: "bg-[#2E7D32]",
    description: "Marvel at the world's tallest statue, cruise the Narmada, and explore the Valley of Flowers.",
  },
  {
    id: 2,
    title: "Rann of Kutch — White Desert",
    location: "Dhordo, Gujarat",
    duration: "3D",
    price: "9,999",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
    tag: "Adventure",
    tagColor: "bg-[#0F2E25]",
    description: "Walk across an endless white salt desert under a full moon. Tents, folk music, and Kutchi...",
  },
  {
    id: 3,
    title: "Manali Himachal Escape",
    location: "Manali, Himachal Pradesh",
    duration: "5D",
    price: "14,999",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    tag: "Adventure",
    tagColor: "bg-[#0F2E25]",
    description: "Snow-capped mountains, river rafting, paragliding, and cozy cafes tucked into pine...",
  },
  {
    id: 4,
    title: "Jessore Sanctuary Wildlife Trek",
    location: "Banaskantha, Gujarat",
    duration: "2D",
    price: "4,299",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&q=80",
    tag: "Eco-Tourism",
    tagColor: "bg-[#8BC34A]",
    description: "A wildlife lover's paradise — home to sloth bears, leopards, and over 100 bird species.",
  },
  {
    id: 5,
    title: "Saputara Hill Retreat",
    location: "Dang, Gujarat",
    duration: "2D",
    price: "3,499",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&q=80",
    tag: "Family",
    tagColor: "bg-[#FF9800]",
    description: "A misty hill station with lakes, ropeways, and tribal culture — perfect for a quick family reset.",
  },
  {
    id: 6,
    title: "Gir Lion Safari Adventure",
    location: "Sasan Gir, Gujarat",
    duration: "3D",
    price: "11,999",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1534177616064-de4e6fa5e0a5?w=600&q=80",
    tag: "Wildlife",
    tagColor: "bg-[#795548]",
    description: "The only place on earth where Asiatic lions roam free. Jeep safaris, jungle stays, and rare wildlife.",
  },
]

export function PackagesSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <p className="text-[#2E7D32] text-sm font-medium uppercase tracking-wider mb-2">
              Handpicked Packages
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A]">
              Trips that turn into
              <br />
              <span className="text-[#2E7D32] italic">stories</span>.
            </h2>
          </div>
          <Link
            href="/packages"
            className="mt-4 sm:mt-0 text-[#2E7D32] font-medium flex items-center gap-2 hover:gap-3 transition-all"
          >
            View all packages <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Link key={pkg.id} href={`/packages/${pkg.id}`}>
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-4 left-4 ${pkg.tagColor} text-white`}>
                    {pkg.tag}
                  </Badge>
                  <div className="absolute bottom-4 right-4 bg-white rounded-lg px-2 py-1 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold">{pkg.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-4 text-xs text-[#6B7280] mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {pkg.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {pkg.duration}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] line-clamp-2 mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#6B7280]">FROM</p>
                      <p className="text-lg font-bold text-[#1A1A1A]">
                        <span className="text-sm">₹</span>{pkg.price}
                      </p>
                    </div>
                    <span className="text-[#2E7D32] text-sm font-medium flex items-center gap-1">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Star, MapPin, Clock, ArrowRight, Search } from "lucide-react"

const allPackages = [
  {
    id: 1,
    title: "Polo Forest Day Tour",
    location: "Vijaynagar, Gujarat",
    duration: "1D",
    price: 1499,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&q=80",
    tag: "Eco-Tourism",
    tagColor: "bg-[#8BC34A]",
    category: "eco-tourism",
    description: "A soulful escape into the ancient jungles of Polo — trekking, heritage ruins, bird watching, and a...",
  },
  {
    id: 2,
    title: "Statue of Unity Getaway",
    location: "Kevadia, Gujarat",
    duration: "2D",
    price: 5499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    tag: "Heritage",
    tagColor: "bg-[#2E7D32]",
    category: "heritage",
    description: "Marvel at the world's tallest statue, cruise the Narmada, and explore the Valley of Flowers.",
  },
  {
    id: 3,
    title: "Rann of Kutch — White Desert",
    location: "Dhordo, Gujarat",
    duration: "3D",
    price: 9999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
    tag: "Adventure",
    tagColor: "bg-[#0F2E25]",
    category: "adventure",
    description: "Walk across an endless white salt desert under a full moon. Tents, folk music, and Kutchi...",
  },
  {
    id: 4,
    title: "Manali Himachal Escape",
    location: "Manali, Himachal Pradesh",
    duration: "5D",
    price: 14999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    tag: "Adventure",
    tagColor: "bg-[#0F2E25]",
    category: "adventure",
    description: "Snow-capped mountains, river rafting, paragliding, and cozy cafes tucked into pine...",
  },
  {
    id: 5,
    title: "Jessore Sanctuary Wildlife Trek",
    location: "Banaskantha, Gujarat",
    duration: "2D",
    price: 4299,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&q=80",
    tag: "Eco-Tourism",
    tagColor: "bg-[#8BC34A]",
    category: "eco-tourism",
    description: "A wildlife lover's paradise — home to sloth bears, leopards, and over 100 bird species.",
  },
  {
    id: 6,
    title: "Saputara Hill Retreat",
    location: "Dang, Gujarat",
    duration: "2D",
    price: 3499,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&q=80",
    tag: "Family",
    tagColor: "bg-[#FF9800]",
    category: "family",
    description: "A misty hill station with lakes, ropeways, and tribal culture — perfect for a quick family reset.",
  },
  {
    id: 7,
    title: "Gir Lion Safari Adventure",
    location: "Sasan Gir, Gujarat",
    duration: "3D",
    price: 11999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1534177616064-de4e6fa5e0a5?w=600&q=80",
    tag: "Wildlife",
    tagColor: "bg-[#795548]",
    category: "wildlife",
    description: "The only place on earth where Asiatic lions roam free. Jeep safaris, jungle stays, and rare wildlife.",
  },
  {
    id: 8,
    title: "Goa Beach Break",
    location: "North Goa",
    duration: "4D",
    price: 12499,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    tag: "Beach",
    tagColor: "bg-[#03A9F4]",
    category: "beach",
    description: "Sandy beaches, sunset cruises, water sports, and Goan food — the classic tropical escape.",
  },
]

export default function PackagesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDuration, setSelectedDuration] = useState("any")
  const [priceRange, setPriceRange] = useState([500, 20000])

  const filteredPackages = allPackages.filter((pkg) => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || pkg.category === selectedCategory
    const matchesDuration = selectedDuration === "any" || 
      (selectedDuration === "1d" && pkg.duration === "1D") ||
      (selectedDuration === "2-3d" && (pkg.duration === "2D" || pkg.duration === "3D")) ||
      (selectedDuration === "4d+" && parseInt(pkg.duration) >= 4)
    const matchesPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1]
    
    return matchesSearch && matchesCategory && matchesDuration && matchesPrice
  })

  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#0F2E25] pt-24 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#8BC34A] text-sm font-medium uppercase tracking-wider mb-4">
            Tour Packages
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight max-w-xl">
            Every trip —
            <br />
            <span className="text-[#8BC34A] italic">handcrafted</span>, from the
            <br />
            first call to the last
            <br />
            campfire.
          </h1>
          <p className="mt-6 text-gray-400 max-w-lg">
            Browse 40+ curated experiences across India. Filter by{" "}
            <span className="text-[#8BC34A] underline">destination</span>,{" "}
            <span className="text-[#8BC34A] underline">budget</span>, or{" "}
            <span className="text-[#8BC34A] underline">duration</span> — or talk to us for a custom plan.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <Input
                placeholder="Search destination or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-lg border-gray-200"
              />
            </div>

            {/* Category */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[150px] rounded-lg border-gray-200">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="eco-tourism">Eco-Tourism</SelectItem>
                <SelectItem value="heritage">Heritage</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="wildlife">Wildlife</SelectItem>
                <SelectItem value="beach">Beach</SelectItem>
              </SelectContent>
            </Select>

            {/* Duration */}
            <Select value={selectedDuration} onValueChange={setSelectedDuration}>
              <SelectTrigger className="w-[150px] rounded-lg border-gray-200">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Duration</SelectItem>
                <SelectItem value="1d">1 Day</SelectItem>
                <SelectItem value="2-3d">2-3 Days</SelectItem>
                <SelectItem value="4d+">4+ Days</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Range */}
            <div className="flex items-center gap-4 flex-1 max-w-xs">
              <span className="text-sm text-[#6B7280] whitespace-nowrap">Price</span>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={500}
                max={20000}
                step={500}
                className="flex-1"
              />
              <span className="text-sm text-[#1A1A1A] whitespace-nowrap">
                ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#6B7280] mb-6">
            Showing <span className="font-semibold text-[#1A1A1A]">{filteredPackages.length}</span> packages
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
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
                      <Star className="w-3 h-3 fill-[#8BC34A] text-[#8BC34A]" />
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
                          <span className="text-sm">₹</span>{pkg.price.toLocaleString()}
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

      <Footer />
    </main>
  )
}

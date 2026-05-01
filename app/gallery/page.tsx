"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80",
    alt: "Hiking through forest",
    span: "row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    alt: "Dense forest path",
    span: "",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
    alt: "White desert landscape",
    span: "",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    alt: "Sunlight through trees",
    span: "",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    alt: "Mountain landscape",
    span: "row-span-2",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    alt: "Traveler on mountain",
    span: "",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&q=80",
    alt: "Wildlife in nature",
    span: "",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    alt: "Waterfall in forest",
    span: "row-span-2",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    alt: "Beach sunset",
    span: "",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1534177616064-de4e6fa5e0a5?w=600&q=80",
    alt: "Safari adventure",
    span: "",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
    alt: "Lake and mountains",
    span: "",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
    alt: "Misty mountains",
    span: "",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-8 lg:pt-28 lg:pb-12 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#2E7D32] text-sm font-medium uppercase tracking-wider mb-4">
            Gallery
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight">
            Moments, mountains,
            <br />
            and <span className="text-[#2E7D32] italic">memories</span>.
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative mb-4 break-inside-avoid cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={image.span ? 600 : 300}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </main>
  )
}

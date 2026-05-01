"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "The team made Polo Forest feel like our own private wilderness. Guides knew every bird call and sunrise spot. Our weekend trip was pure magic!",
    author: "Anita Sharma",
    role: "Solo Traveler",
    rating: 5,
  },
  {
    quote:
      "Best storytelling trip I've ever been on. The entire desert under a full moon in Kutch — amazing. Campfire shared experiences felt surreal.",
    author: "Priya Sharma",
    role: "Photographer",
    rating: 5,
  },
  {
    quote:
      "The trekking/hiking in Dabhoi is quite unlike anything else in Old Houses! —every moment was perfectly planned. Worth every rupee.",
    author: "Rahul Sinha",
    role: "Family Traveler",
    rating: 5,
  },
  {
    quote:
      "The spotted these lions on our very first safari. The meals, food, and homemade love at every stay set.",
    author: "Asha Patel",
    role: "Nature Lover",
    rating: 5,
  },
  {
    quote:
      "A seamless family trip. Kids loved the jungle safari and the river cruise on a river safari cruise.",
    author: "Ratan Joshi",
    role: "Parent",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#2E7D32] text-sm font-medium uppercase tracking-wider mb-4">
            Traveller Stories
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A]">
            The best reviews come
            <br />
            with <span className="text-[#2E7D32] italic">sun-tanned smiles</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <p className="text-[#6B7280] leading-relaxed mb-6 text-sm">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#1A1A1A]">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-[#6B7280]">{testimonial.role}</p>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <p className="text-[#6B7280] leading-relaxed mb-6 text-sm">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#1A1A1A]">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-[#6B7280]">{testimonial.role}</p>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

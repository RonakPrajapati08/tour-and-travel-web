"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
]

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#2E7D32] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3C7.5 3 4 7.5 4 12c0 3 1.5 5.5 4 7l4-4 4 4c2.5-1.5 4-4 4-7 0-4.5-3.5-9-8-9z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xl font-semibold">
                <span className="text-[#2E7D32]">Polo</span>{" "}
                <span className="text-white">Safari</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white hover:text-[#8BC34A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link href="/booking">
                <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-full px-6">
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white rounded-lg py-4 mt-2">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium px-4 py-2 text-[#1A1A1A] hover:text-[#2E7D32]"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-4 pt-2">
                  <Link href="/booking">
                    <Button className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-full">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <p className="text-[#8BC34A] text-sm font-medium uppercase tracking-wider mb-4">
              Eco-Adventures
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              Memorable trips?
              <br />
              <span className="text-[#8BC34A] italic">We make it happen.</span>
            </h1>
            <p className="text-gray-300 text-base lg:text-lg mb-8 max-w-lg leading-relaxed">
              Handcrafted journeys through India&apos;s most breathtaking forests,
              deserts, and mountains — with guides who care as much about the
              planet as they do about your perfect trip.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/packages">
                <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-full px-8 py-6 text-base">
                  Explore Packages
                </Button>
              </Link>
              <Link href="/booking">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0F2E25] rounded-full px-8 py-6 text-base bg-transparent"
                >
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
              <div>
                <p className="text-white text-lg font-semibold">4.9/5</p>
                <p className="text-gray-400 text-sm">1,300+ reviews</p>
              </div>
              <div>
                <p className="text-white text-lg font-semibold">14+</p>
                <p className="text-gray-400 text-sm">Years of adventures</p>
              </div>
              <div>
                <p className="text-white text-lg font-semibold">30+</p>
                <p className="text-gray-400 text-sm">Destinations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

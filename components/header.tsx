"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
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

interface HeaderProps {
  variant?: "default" | "transparent"
}

export function Header({ variant = "default" }: HeaderProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isTransparent = variant === "transparent"

  return (
    <header
      className={`w-full z-50 ${
        isTransparent
          ? "absolute top-0 left-0 bg-transparent"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#2E7D32]"
                      : isTransparent
                      ? "text-white hover:text-[#8BC34A]"
                      : "text-[#1A1A1A] hover:text-[#2E7D32]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
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
              <X className={`w-6 h-6 ${isTransparent ? "text-white" : "text-[#1A1A1A]"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isTransparent ? "text-white" : "text-[#1A1A1A]"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-medium px-4 py-2 ${
                      isActive ? "text-[#2E7D32]" : "text-[#1A1A1A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
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
  )
}

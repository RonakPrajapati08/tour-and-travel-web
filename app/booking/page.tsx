"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Check } from "lucide-react"
import { useState } from "react"

const benefits = [
  "Free cancellation up to 7 days",
  "Pay 25% to confirm",
  "Curated small groups (max 14)",
  "24/7 on-trip assistance",
]

const packages = [
  { value: "polo-forest", label: "Polo Forest Day Tour" },
  { value: "statue-unity", label: "Statue of Unity Getaway" },
  { value: "rann-kutch", label: "Rann of Kutch — White Desert" },
  { value: "manali", label: "Manali Himachal Escape" },
  { value: "jessore", label: "Jessore Sanctuary Wildlife Trek" },
  { value: "saputara", label: "Saputara Hill Retreat" },
  { value: "gir", label: "Gir Lion Safari Adventure" },
  { value: "goa", label: "Goa Beach Break" },
]

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    travelDate: "",
    guests: "2",
    package: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking submitted:", formData)
  }

  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0F2E25] pt-24 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#8BC34A] text-sm font-medium uppercase tracking-wider mb-4">
            Booking
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
            Quick booking. <span className="text-[#8BC34A] italic">3 simple</span>
            <br />
            <span className="text-[#8BC34A] italic">steps</span>.
          </h1>
          <p className="mt-4 text-gray-400 max-w-lg">
            Tell us who&apos;s coming, where, and when. We&apos;ll call you within 24 hours to confirm.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 lg:p-8">
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-6">
                Your details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#1A1A1A] mb-1 block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="rounded-lg border-gray-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#1A1A1A] mb-1 block">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="rounded-lg border-gray-200"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#1A1A1A] mb-1 block">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="rounded-lg border-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#1A1A1A] mb-1 block">
                      Travel Date <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) =>
                        setFormData({ ...formData, travelDate: e.target.value })
                      }
                      className="rounded-lg border-gray-200"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#1A1A1A] mb-1 block">Guests</label>
                    <Select
                      value={formData.guests}
                      onValueChange={(value) =>
                        setFormData({ ...formData, guests: value })
                      }
                    >
                      <SelectTrigger className="rounded-lg border-gray-200">
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "traveller" : "travellers"}
                          </SelectItem>
                        ))}
                        <SelectItem value="10+">10+ travellers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm text-[#1A1A1A] mb-1 block">Package</label>
                    <Select
                      value={formData.package}
                      onValueChange={(value) =>
                        setFormData({ ...formData, package: value })
                      }
                    >
                      <SelectTrigger className="rounded-lg border-gray-200">
                        <SelectValue placeholder="Select or leave blank" />
                      </SelectTrigger>
                      <SelectContent>
                        {packages.map((pkg) => (
                          <SelectItem key={pkg.value} value={pkg.value}>
                            {pkg.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-[#1A1A1A] mb-1 block">
                    Notes / Custom request
                  </label>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Tell us about your group, preferences, dates you can't make..."
                    className="rounded-lg border-gray-200 min-h-[100px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-full py-6"
                >
                  Request Booking
                </Button>
                <p className="text-xs text-center text-[#6B7280]">
                  We&apos;ll{" "}
                  <span className="text-[#2E7D32]">confirm availability</span> and share a
                  quote on{" "}
                  <span className="text-[#2E7D32]">WhatsApp</span> /{" "}
                  <span className="text-[#2E7D32]">email</span> within 24 hours.
                </p>
              </form>
            </div>

            {/* Benefits Sidebar */}
            <div className="bg-[#F5F3EF] rounded-2xl p-6 h-fit">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">
                Why book with us
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#2E7D32] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#6B7280]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    label: "OFFICE",
    value: "SG Highway, Ahmedabad, Gujarat 380054",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 99999 99999",
  },
  {
    icon: Mail,
    label: "EMAIL",
    value: "hello@polosafari.in",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0F2E25] pt-24 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#8BC34A] text-sm font-medium uppercase tracking-wider mb-4">
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
            Let&apos;s plan your <span className="text-[#8BC34A] italic">next</span>
            <br />
            <span className="text-[#8BC34A] italic">story</span>.
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#2E7D32]" />
                  </div>
                  <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-[#1A1A1A] font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 lg:p-8">
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#1A1A1A] mb-1 block">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="rounded-lg border-gray-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#1A1A1A] mb-1 block">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="rounded-lg border-gray-200"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#1A1A1A] mb-1 block">Phone</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="rounded-lg border-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#1A1A1A] mb-1 block">Subject</label>
                    <Input
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="rounded-lg border-gray-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-[#1A1A1A] mb-1 block">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="rounded-lg border-gray-200 min-h-[120px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-full px-8"
                >
                  Send <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

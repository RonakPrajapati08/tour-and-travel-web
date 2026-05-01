import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-[#0F2E25]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#8BC34A] text-sm font-medium uppercase tracking-wider mb-4">
          Looking for More Adventure?
        </p>
        <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">
          Let&apos;s build your
          <br />
          <span className="text-[#8BC34A] italic">dream trip together</span>.
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Tell us where you want to go, how you like to travel, and we&apos;ll
          handle the rest.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/booking">
            <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-full px-8 py-6 text-base">
              Talk to us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

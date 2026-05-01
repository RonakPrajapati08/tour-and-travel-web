import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { FeaturedTourSection } from "@/components/home/featured-tour-section"
import { PackagesSection } from "@/components/home/packages-section"
import { StorySection } from "@/components/home/story-section"
import { TimelineSection } from "@/components/home/timeline-section"
import { LogosSection } from "@/components/home/logos-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <HeroSection />
      <FeaturesSection />
      <FeaturedTourSection />
      <PackagesSection />
      <StorySection />
      <TimelineSection />
      <LogosSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

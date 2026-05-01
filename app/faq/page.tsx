import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2-3 weeks in advance for most trips. For peak seasons (October-March) and festival periods like Rann Utsav, booking 4-6 weeks ahead is advisable to secure your preferred dates and accommodations.",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Yes! Groups of 6 or more get 10% off. Corporate and school groups of 15+ get special rates. Contact us directly for a custom quote tailored to your group size and requirements.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Free cancellation up to 7 days before departure. Cancellations 3-7 days before get a 50% refund. Less than 3 days notice is non-refundable, but we'll try to reschedule you for free if possible.",
  },
  {
    question: "Are the trips suitable for kids?",
    answer:
      "Most of our trips welcome children aged 6 and above. Family-specific packages are designed with kids in mind — shorter treks, engaging activities, and comfortable stays. Some adventure-focused trips have age restrictions for safety.",
  },
  {
    question: "Do you arrange solo female-only trips?",
    answer:
      "Absolutely! We have several women-only departures each month with female guides. Solo female travellers can also join our regular groups — we've hosted thousands safely. Our guides are trained in safety protocols.",
  },
  {
    question: "How do payments work?",
    answer:
      "Pay just 25% to confirm your booking. The remaining 75% is due 7 days before departure. We accept UPI, bank transfers, credit/debit cards, and EMI options for trips above ₹10,000.",
  },
  {
    question: "Can I customize a package?",
    answer:
      "Yes! Every trip can be tailored. Want an extra day? Different hotel? Private guide? Just tell us. We'll create a custom itinerary and quote within 24 hours.",
  },
  {
    question: "What if it rains or the weather turns bad?",
    answer:
      "We monitor weather closely and adjust activities accordingly. If conditions are unsafe, we reschedule or offer alternatives. In rare cases of trip cancellation due to weather, you get a full refund or free rebooking.",
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-8 lg:pt-28 lg:pb-12 bg-[#F5F3EF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#2E7D32] text-sm font-medium uppercase tracking-wider mb-4">
            FAQ
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight">
            Questions we get <span className="text-[#2E7D32] italic">often</span>.
          </h1>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-8 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 lg:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-[#1A1A1A] hover:text-[#2E7D32] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6B7280] leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Eco-Tourism: Why It Matters More Than Ever",
    excerpt:
      "Travel that gives back. How small choices on your next trip can protect wildlife, cultures, and...",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&q=80",
    date: "2026-02-02",
    tags: ["Eco-Tourism", "Sustainability"],
  },
  {
    id: 2,
    title: "A First-Timer's Guide to Rann Utsav",
    excerpt:
      "From tent booking hacks to the best folk performances — the complete rookie handbook...",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
    date: "2026-01-22",
    tags: ["Rann of Kutch", "Festival"],
  },
  {
    id: 3,
    title: "Monsoon Magic: Why Polo Forest Is Unreal in July",
    excerpt:
      "When the monsoon paints Polo Forest in a hundred shades of green, the ancient ruins feel...",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    date: "2026-01-15",
    tags: ["Polo Forest", "Monsoon"],
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-8 lg:pt-28 lg:pb-12 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#2E7D32] text-sm font-medium uppercase tracking-wider mb-4">
            Travel Journal
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight">
            Stories, tips, and <span className="text-[#2E7D32] italic">travel</span>
            <br />
            <span className="text-[#2E7D32] italic">journals</span>.
          </h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-gray-200 text-[#6B7280] text-xs font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h2 className="font-semibold text-lg text-[#1A1A1A] mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#6B7280] line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <span className="text-[#2E7D32] text-sm font-medium flex items-center gap-1">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

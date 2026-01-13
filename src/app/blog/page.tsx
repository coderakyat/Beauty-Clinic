import { BlogCard, BlogSidebar, blogPosts } from "@/features/blog";
import { Pagination } from "@/components/ui/Pagination";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
    title: "Blog & Artikel - Contoh6",
    description: "Temukan tips kecantikan, informasi treatment, dan tren terbaru dari ahli kami.",
};

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="container mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-16 md:py-24">

                    {/* Header Section */}
                    <div className="mb-20 md:mb-24 space-y-6 text-center lg:text-left">
                        <h1 className="text-4xl font-heading font-bold sm:text-5xl md:text-6xl tracking-tight">
                            Latest News & Medical Insights
                        </h1>
                        <p className="max-w-[800px] text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Expert advice, health tips, and clinic updates from our specialists. Stay informed about the future of wellness.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Main Content Area */}
                        <div className="lg:col-span-8 space-y-16">
                            <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
                                {blogPosts.map((post) => (
                                    <BlogCard key={post.id} post={post} />
                                ))}
                                {/* Duplicating posts to fill the grid for demo purposes */}
                                {blogPosts.map((post) => (
                                    <BlogCard key={`demo-${post.id}`} post={post} />
                                ))}
                            </div>

                            <Pagination currentPage={1} totalPages={5} className="pt-8" />
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

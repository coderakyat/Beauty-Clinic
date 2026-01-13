import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, BlogPost } from "@/features/blog";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Artikel Tidak Ditemukan",
        };
    }

    return {
        title: `${post.title} - Contoh6`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section with Featured Image */}
                <section className="relative bg-muted">
                    <div className="aspect-21/9 w-full overflow-hidden">
                        <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-gray-200 to-gray-300 text-gray-500">
                            <span className="text-lg font-medium">Featured Image</span>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="container mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
                    {/* Back Button */}
                    <div className="py-8">
                        <Button asChild variant="ghost" size="sm" className="-ml-4">
                            <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                <ArrowLeft className="h-4 w-4" />
                                Kembali ke Blog
                            </Link>
                        </Button>
                    </div>

                    {/* Article Header */}
                    <header className="space-y-6 pb-10 border-b border-border">
                        {/* Category Badge */}
                        <div>
                            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary">
                                {post.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl font-heading font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                            {post.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                            {post.excerpt}
                        </p>

                        {/* Author & Date Info */}
                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-full bg-linear-to-br from-primary/20 to-primary/40 flex items-center justify-center text-lg font-bold text-primary">
                                    {post.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{post.author}</div>
                                    <div className="text-sm text-muted-foreground">Penulis Kontributor</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <time dateTime={post.date}>{post.date}</time>
                            </div>
                        </div>
                    </header>

                    {/* Article Body */}
                    <div className="py-12 lg:py-16">
                        <div
                            className="prose prose-lg prose-stone max-w-none 
                                       prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
                                       prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                                       prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                                       prose-li:text-muted-foreground prose-li:leading-relaxed
                                       prose-ul:my-6 prose-ul:pl-6
                                       prose-img:rounded-xl prose-img:shadow-lg
                                       dark:prose-invert"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>

                    {/* Article Footer / CTA */}
                    <div className="border-t border-border py-12">
                        <div className="rounded-xl bg-muted/50 p-8 text-center">
                            <h3 className="text-xl font-heading font-bold mb-3">
                                Ingin konsultasi lebih lanjut?
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                                Hubungi tim kami untuk mendapatkan saran perawatan yang sesuai dengan kebutuhan Anda.
                            </p>
                            <Button asChild size="lg">
                                <Link href="/reservasi">
                                    Reservasi Sekarang
                                </Link>
                            </Button>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}

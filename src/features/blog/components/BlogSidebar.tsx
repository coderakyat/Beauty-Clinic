import Link from "next/link";
import { Search, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { blogPosts } from "@/features/blog";

export function BlogSidebar() {
    // Mock categories (in a real app, derive this from data or database)
    const categories = [
        { name: "Dermatology", count: 4 },
        { name: "Plastic Surgery", count: 6 },
        { name: "Wellness & Nutrition", count: 24 },
        { name: "Clinic Updates", count: 2 },
    ];

    const recentPosts = blogPosts.slice(0, 3);

    return (
        <aside className="space-y-8">
            {/* Search Widget */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-6 font-heading text-lg font-bold">Search</h3>
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search articles..." className="pl-9" />
                </div>
            </div>

            {/* Categories Widget */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-6 font-heading text-lg font-bold">Categories</h3>
                <ul className="space-y-3">
                    {categories.map((cat) => (
                        <li key={cat.name} className="flex items-center justify-between text-sm">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                {cat.name}
                            </Link>
                            <span className="text-xs text-muted-foreground/60">{cat.count}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-6 font-heading text-lg font-bold">Recent Posts</h3>
                <div className="space-y-4">
                    {recentPosts.map(post => (
                        <div key={post.id} className="flex gap-4 group">
                            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
                                {/* Placeholder image */}
                                <div className="h-full w-full bg-gray-200 flex items-center justify-center text-xs text-gray-400">
                                    Img
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-sm font-medium leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h4>
                                <span className="text-xs text-muted-foreground mt-1">{post.date} • {post.author}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* WhatsApp CTA Widget */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        {/* Whatsapp Icon or similar */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    </div>
                    <div>
                        <h3 className="font-heading font-bold text-lg leading-none">Need Advice?</h3>
                        <p className="text-xs text-muted-foreground mt-1">Chat with our experts now.</p>
                    </div>
                </div>
                <Button className="w-full mt-4 bg-[#25D366] hover:bg-[#128C7E] text-white" asChild>
                    <Link href="https://wa.me/6281234567890" target="_blank">
                        Book via WhatsApp
                    </Link>
                </Button>
            </div>

            {/* Newsletter Widget */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-primary">
                    <Mail className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Newsletter</span>
                </div>
                <h3 className="mb-4 font-heading text-lg font-bold">Join Our List</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                    Get exclusive health tips and special offers directly to your inbox.
                </p>
                <div className="space-y-2">
                    <Input placeholder="Your email address" />
                    <Button className="w-full">Subscribe</Button>
                </div>
            </div>
        </aside>
    );
}

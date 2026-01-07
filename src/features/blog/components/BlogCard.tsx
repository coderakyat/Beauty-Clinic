import Link from "next/link";
import { BlogPost } from "@/features/blog";
import { Button } from "@/components/ui/Button";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg bg-card text-card-foreground shadow-sm transition-all hover:shadow-md h-full hover:-translate-y-1">
      <div className="relative aspect-video w-full overflow-hidden bg-muted group">
        {/* In production this should be a Next.js Image component */}
        {/* <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        /> */}
        <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-400 group-hover:scale-105 transition-transform duration-300">
          <span className="text-sm">Image Placeholder</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-8">
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            {post.category}
          </span>
        </div>

        <h3 className="mb-4 text-xl font-heading font-bold leading-tight line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>

        <p className="mb-8 flex-1 text-base text-muted-foreground line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto border-t pt-6 border-border/40">
          <span className="text-xs font-medium text-muted-foreground tracking-wide">
            {post.author} • {post.date}
          </span>
          <Button asChild variant="link" size="sm" className="px-0 text-primary hover:text-primary/80 h-auto p-0 font-bold group/btn">
            <Link href={`/blog/${post.slug}`} className="flex items-center gap-1">
              Read More <span className="text-base transition-transform group-hover/btn:translate-x-1">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

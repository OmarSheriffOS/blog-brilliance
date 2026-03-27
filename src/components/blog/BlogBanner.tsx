import React from "react";
import AuthorPopover, { type AuthorData } from "./AuthorPopover";
import { Badge } from "@/components/ui/badge";

interface BlogBannerProps {
  category: string;
  title: string;
  author: AuthorData;
  lastUpdated: string;
  bannerImage: string;
  bannerAlt?: string;
}

const BlogBanner: React.FC<BlogBannerProps> = ({
  category,
  title,
  author,
  lastUpdated,
  bannerImage,
  bannerAlt = "Blog banner",
}) => {
  return (
    <section className="w-full bg-blog-banner min-h-[50vh] max-h-screen flex items-center">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-5">
            <Badge
              variant="outline"
              className="border-primary/40 text-primary font-semibold text-xs uppercase tracking-wider px-3 py-1"
            >
              {category}
            </Badge>
            <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-foreground">
              {title}
            </h1>
            <div className="flex items-center gap-3 text-sm">
              <AuthorPopover author={author} />
              <span className="text-muted-foreground">·</span>
              <time className="text-accent font-medium">{lastUpdated}</time>
            </div>
          </div>

          {/* Right: Banner image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-primary/5">
            <img
              src={bannerImage}
              alt={bannerAlt}
              className="w-full h-auto object-cover rounded-xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;

import React from "react";
import BlogBanner from "./BlogBanner";
import BlogSidebar, { type TocItem } from "./BlogSidebar";
import type { AuthorData } from "./AuthorPopover";

interface BlogLayoutProps {
  category: string;
  title: string;
  author: AuthorData;
  lastUpdated: string;
  bannerImage: string;
  bannerAlt?: string;
  tocItems: TocItem[];
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({
  category,
  title,
  author,
  lastUpdated,
  bannerImage,
  bannerAlt,
  tocItems,
  children,
}) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BlogBanner
        category={category}
        title={title}
        author={author}
        lastUpdated={lastUpdated}
        bannerImage={bannerImage}
        bannerAlt={bannerAlt}
      />

      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="flex gap-12 lg:gap-16 items-start">
          {/* Sidebar - left on desktop */}
          <BlogSidebar tocItems={tocItems} />

          {/* Main content */}
          <article className="flex-1 min-w-0 max-w-3xl">
            <div className="prose-blog">{children}</div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;

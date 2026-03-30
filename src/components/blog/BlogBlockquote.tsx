import React from "react";
import { Quote } from "lucide-react";

interface BlogBlockquoteProps {
  children: React.ReactNode;
  author?: string;
  role?: string;
}

const BlogBlockquote: React.FC<BlogBlockquoteProps> = ({
  children,
  author,
  role,
}) => {
  return (
    <blockquote className="my-8 relative bg-card rounded-xl border border-border p-6 pl-14">
      <Quote className="absolute left-5 top-5 h-6 w-6 text-primary/40" />
      <div className="text-foreground/90 text-base italic leading-relaxed">
        {children}
      </div>
      {author && (
        <footer className="mt-3 text-sm text-muted-foreground">
          — <span className="font-medium text-foreground">{author}</span>
          {role && <span>, {role}</span>}
        </footer>
      )}
    </blockquote>
  );
};

export default BlogBlockquote;

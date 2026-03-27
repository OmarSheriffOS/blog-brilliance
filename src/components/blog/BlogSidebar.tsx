import React, { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  label: string;
  children?: TocItem[];
}

interface BlogSidebarProps {
  tldr: React.ReactNode;
  tocItems: TocItem[];
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ tldr, tocItems }) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
      item.children?.forEach((child) => {
        const childEl = document.getElementById(child.id);
        if (childEl) observer.observe(childEl);
      });
    });

    return () => observer.disconnect();
  }, [tocItems]);

  return (
    <aside className="hidden lg:block w-72 xl:w-80 shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* TL;DR */}
        <div className="bg-blog-sidebar rounded-xl border border-border p-5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
            TL;DR
          </h3>
          <div className="text-sm text-foreground/80 leading-relaxed space-y-2">
            {tldr}
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="bg-blog-sidebar rounded-xl border border-border p-5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
            On This Page
          </h3>
          <ul className="space-y-1.5">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block text-sm py-1 px-3 rounded-md transition-all ${
                    activeId === item.id
                      ? "bg-blog-toc-active/10 text-blog-toc-active font-semibold border-l-2 border-blog-toc-active"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className="ml-3 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          className={`block text-xs py-0.5 px-3 rounded-md transition-all ${
                            activeId === child.id
                              ? "text-blog-toc-active font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default BlogSidebar;

import React, { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  label: string;
  children?: TocItem[];
}

interface BlogSidebarProps {
  tocItems: TocItem[];
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ tocItems }) => {
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
    <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
      <nav className="sticky top-24">
        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
          On This Page
        </h3>
        <ul className="space-y-1 border-l border-border">
          {tocItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block text-sm py-1.5 px-4 transition-all ${
                  activeId === item.id
                    ? "text-primary font-semibold border-l-2 border-primary -ml-px"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
              {item.children && (
                <ul className="ml-4 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <a
                        href={`#${child.id}`}
                        className={`block text-xs py-0.5 px-4 transition-all ${
                          activeId === child.id
                            ? "text-primary font-medium"
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
    </aside>
  );
};

export default BlogSidebar;

import React from "react";
import { Lightbulb, AlertTriangle, Info, CheckCircle } from "lucide-react";

type HighlightVariant = "tip" | "warning" | "info" | "success";

interface HighlightBoxProps {
  variant?: HighlightVariant;
  title?: string;
  children: React.ReactNode;
}

const variantConfig: Record<
  HighlightVariant,
  { icon: React.ElementType; borderClass: string; iconClass: string; bgClass: string }
> = {
  tip: {
    icon: Lightbulb,
    borderClass: "border-l-blog-highlight",
    iconClass: "text-blog-highlight",
    bgClass: "bg-blog-highlight-bg",
  },
  warning: {
    icon: AlertTriangle,
    borderClass: "border-l-primary",
    iconClass: "text-primary",
    bgClass: "bg-primary/5",
  },
  info: {
    icon: Info,
    borderClass: "border-l-secondary",
    iconClass: "text-secondary",
    bgClass: "bg-secondary/5",
  },
  success: {
    icon: CheckCircle,
    borderClass: "border-l-accent",
    iconClass: "text-accent",
    bgClass: "bg-accent/5",
  },
};

const HighlightBox: React.FC<HighlightBoxProps> = ({
  variant = "info",
  title,
  children,
}) => {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <div
      className={`my-6 rounded-r-xl border-l-4 ${config.borderClass} ${config.bgClass} p-5`}
    >
      <div className="flex gap-3">
        <Icon className={`h-5 w-5 mt-0.5 shrink-0 ${config.iconClass}`} />
        <div className="space-y-1.5">
          {title && (
            <h4 className="text-sm font-semibold font-display text-foreground">
              {title}
            </h4>
          )}
          <div className="text-sm text-foreground/80 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightBox;

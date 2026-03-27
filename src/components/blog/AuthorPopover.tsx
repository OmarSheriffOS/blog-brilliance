import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface AuthorData {
  name: string;
  photo?: string;
  bio: string;
  profileUrl: string;
}

interface AuthorPopoverProps {
  author: AuthorData;
}

const AuthorPopover: React.FC<AuthorPopoverProps> = ({ author }) => {
  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <a
          href={author.profileUrl}
          className="inline-flex items-center gap-2.5 text-accent hover:text-accent/80 transition-colors font-medium"
        >
          <Avatar className="h-9 w-9 border-2 border-accent/30">
            <AvatarImage src={author.photo} alt={author.name} />
            <AvatarFallback className="bg-accent/20 text-accent text-xs font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <span>{author.name}</span>
        </a>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-80 bg-card border-border"
        side="bottom"
        align="start"
      >
        <div className="flex gap-3">
          <Avatar className="h-12 w-12 border-2 border-accent/30">
            <AvatarImage src={author.photo} alt={author.name} />
            <AvatarFallback className="bg-accent/20 text-accent text-sm font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1.5">
            <h4 className="text-sm font-semibold font-display text-foreground">
              {author.name}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {author.bio}
            </p>
            <a
              href={author.profileUrl}
              className="text-xs text-accent hover:underline font-medium"
            >
              View full profile →
            </a>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default AuthorPopover;

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { BookOpen, Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
            <BookOpen className="h-5 w-5 text-emerald-500" />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            MentorEnglish
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            How It Works
          </Link>
          <Link
            href="#tech-stack"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Tech Stack
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            Sign In
          </Button>
          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Start Free
          </Button>
        </div>
      </div>
    </nav>
  );
}

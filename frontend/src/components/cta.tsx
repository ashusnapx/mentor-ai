import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 sm:p-16">
          {/* Background glow */}
          <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-emerald-500/20 blur-[100px]" />
          <div className="absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-violet-500/20 blur-[100px]" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Ace SSC English?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of aspirants who are already using MentorEnglish to
              improve their English scores.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-emerald-500 px-8 text-base hover:bg-emerald-600"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Start Learning Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No signup required. No credit card needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

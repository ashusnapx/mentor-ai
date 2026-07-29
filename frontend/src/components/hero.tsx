import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-[128px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm text-emerald-600 dark:text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            Built for SSC Aspirants
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Your AI English{" "}
            <span className="text-gradient">Mentor</span>{" "}
            That Remembers
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            Unlike ChatGPT, MentorEnglish remembers your weaknesses and teaches
            accordingly. Built specifically for SSC CGL, CHSL, CPO & MTS
            aspirants.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-emerald-500 px-8 text-base hover:bg-emerald-600"
            >
              Start Learning Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              No signup required
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              Free to start
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              SSC focused
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="relative rounded-2xl border border-border bg-card p-8 backdrop-blur-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-card border border-border px-4 py-1 text-xs text-muted-foreground">
              Live Preview
            </div>

            {/* Mock chat interface */}
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="rounded-2xl rounded-br-md bg-emerald-500/10 px-4 py-3 text-sm text-foreground max-w-md">
                  Explain the difference between past perfect and past perfect continuous.
                </div>
              </div>

              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-muted px-4 py-3 text-sm text-foreground max-w-lg">
                  <p className="mb-2">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">Past Perfect:</span> I{" "}
                    <span className="underline decoration-emerald-500/50">had finished</span> my homework before he came.
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">Past Perfect Continuous:</span> I{" "}
                    <span className="underline decoration-emerald-500/50">had been studying</span> for 3 hours when the power went out.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Key difference: Past perfect = completed action. Past perfect continuous = ongoing action with duration.
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="rounded-2xl rounded-br-md bg-emerald-500/10 px-4 py-3 text-sm text-foreground max-w-md">
                  Can you give me an SSC-style question on this?
                </div>
              </div>

              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-muted px-4 py-3 text-sm text-foreground max-w-lg">
                  <p className="mb-2 font-medium text-emerald-600 dark:text-emerald-400">Error Detection:</p>
                  <p className="mb-2">
                    She <span className="text-red-500 line-through">had been completed</span> the project before the deadline.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Correction: &quot;had completed&quot; — The action is completed, not ongoing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

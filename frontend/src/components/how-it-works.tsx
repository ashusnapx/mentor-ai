const steps = [
  {
    number: "01",
    title: "Ask Any SSC English Question",
    description:
      "Grammar doubt? Vocabulary? Error detection? Just ask naturally. The AI understands SSC context.",
    color: "text-emerald-500",
    border: "border-emerald-500/20",
  },
  {
    number: "02",
    title: "AI Analyzes Your Profile",
    description:
      "The system checks your weakness areas, revision history, preferred explanation style, and difficulty level.",
    color: "text-violet-500",
    border: "border-violet-500/20",
  },
  {
    number: "03",
    title: "Retrieves Relevant Knowledge",
    description:
      "PageIndex vectorless RAG retrieves from grammar books, previous year papers, and vocabulary lists.",
    color: "text-amber-500",
    border: "border-amber-500/20",
  },
  {
    number: "04",
    title: "Adapts Response to You",
    description:
      "Response includes your weak topics, uses your preferred style, and suggests relevant practice questions.",
    color: "text-emerald-500",
    border: "border-emerald-500/20",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How MentorEnglish Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every interaction makes the AI smarter about you. Here&apos;s the
            flow.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex gap-6 rounded-2xl border ${step.border} bg-card p-6 transition-all hover:shadow-lg`}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${step.border} bg-background font-mono text-sm font-semibold ${step.color}`}
              >
                {step.number}
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-full h-6 w-px bg-gradient-to-b from-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

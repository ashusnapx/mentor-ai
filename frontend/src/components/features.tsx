import {
  Brain,
  BookOpen,
  Target,
  Zap,
  BarChart3,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Remembers Your Weaknesses",
    description:
      "Unlike ChatGPT, we track your grammar mistakes, vocabulary gaps, and revision history. The AI adapts to you.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Target,
    title: "SSC-Specific Content",
    description:
      "Built only for SSC English. Error Detection, Sentence Improvement, Cloze Test, Para Jumbles, Reading Comprehension.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: BookOpen,
    title: "Vectorless RAG",
    description:
      "PageIndex-powered retrieval. No chunking, no lost context. Grammar rules stay intact with hierarchical tree indexing.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: MessageSquare,
    title: "Adaptive Explanations",
    description:
      "Prefers Hindi explanations? Tables? Examples? The AI learns your style and adapts every response.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    description:
      "Visualize your progress with weakness heatmaps, knowledge graphs, and performance tracking.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: Zap,
    title: "Smart Revision",
    description:
      "The AI automatically schedules revisions based on your forgetting curve. Never miss a weak topic again.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why MentorEnglish is Different
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Not another chatbot. A real mentor that learns, adapts, and teaches
            you better every day.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg}`}
              >
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

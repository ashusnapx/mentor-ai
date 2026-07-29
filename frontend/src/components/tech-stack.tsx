import {
  Code2,
  Database,
  Brain,
  Globe,
  Server,
  Layers,
  BarChart3,
  Shield,
} from "lucide-react";

const techCategories = [
  {
    icon: Globe,
    title: "Frontend",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    techs: [
      { name: "Next.js 16", desc: "React framework" },
      { name: "TypeScript", desc: "Type safety" },
      { name: "Tailwind CSS v4", desc: "Styling" },
      { name: "shadcn/ui", desc: "Component library" },
      { name: "React Query", desc: "Data fetching" },
      { name: "React Hook Form", desc: "Form management" },
      { name: "Zod", desc: "Validation" },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    techs: [
      { name: "FastAPI", desc: "Python API" },
      { name: "Python 3.12+", desc: "Runtime" },
      { name: "Pydantic", desc: "Data validation" },
      { name: "Alembic", desc: "Migrations" },
      { name: "Celery", desc: "Task queue" },
    ],
  },
  {
    icon: Brain,
    title: "AI Layer",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    techs: [
      { name: "LangChain", desc: "AI framework" },
      { name: "LangGraph", desc: "Agent orchestration" },
      { name: "PageIndex", desc: "Vectorless RAG" },
      { name: "Langfuse", desc: "LLMOps tracing" },
      { name: "DeepEval", desc: "Evaluations" },
    ],
  },
  {
    icon: Database,
    title: "Data & Storage",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    techs: [
      { name: "PostgreSQL", desc: "Primary database" },
      { name: "Redis", desc: "Caching & rate limiting" },
      { name: "Neo4j", desc: "Knowledge graph" },
    ],
  },
  {
    icon: Code2,
    title: "DevOps",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    techs: [
      { name: "Docker", desc: "Containerization" },
      { name: "Azure Container Apps", desc: "Hosting" },
      { name: "GitHub Actions", desc: "CI/CD" },
    ],
  },
  {
    icon: Shield,
    title: "Architecture",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    techs: [
      { name: "Custom MCPs", desc: "Tool protocol" },
      { name: "Model Router", desc: "Cost optimization" },
      { name: "5-Layer Memory", desc: "Personalization" },
      { name: "Guardrails", desc: "Safety & scope" },
    ],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm text-emerald-600 dark:text-emerald-400">
            <Layers className="h-3.5 w-3.5" />
            Production Architecture
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built With Modern Tech Stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every technology chosen for a reason. Scalable to millions of users.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-border/80 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${category.bg}`}
                >
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.techs.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex items-baseline justify-between text-sm"
                  >
                    <span className="font-medium text-foreground">
                      {tech.name}
                    </span>
                    <span className="text-muted-foreground">{tech.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Architecture diagram */}
        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-border bg-card p-8">
          <h3 className="mb-6 text-center font-semibold">System Architecture</h3>
          <div className="flex flex-col items-center gap-4 font-mono text-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
                User Query
              </div>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-center text-violet-600 dark:text-violet-400">
                Intent Detection
              </div>
              <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-center text-amber-600 dark:text-amber-400">
                Memory Retrieval
              </div>
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-center text-emerald-600 dark:text-emerald-400">
                Knowledge Graph
              </div>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="rounded-lg border border-border bg-muted px-4 py-2">
              LangGraph Orchestration
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-center">
                PageIndex RAG
              </div>
              <div className="rounded-lg border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-center">
                LLM Response
              </div>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-center text-amber-600 dark:text-amber-400">
              Store Memory + Evaluate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

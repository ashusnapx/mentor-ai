const stats = [
  { value: "10K+", label: "SSC Questions" },
  { value: "500+", label: "Grammar Rules" },
  { value: "50+", label: "Vocabulary Lists" },
  { value: "100%", label: "SSC Focused" },
];

export function Stats() {
  return (
    <section className="py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

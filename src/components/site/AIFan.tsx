const tools = [
  { name: "ChatGPT", slug: "openai", color: "412991" },
  { name: "Gemini", slug: "googlegemini", color: "8E75B2" },
  { name: "Perplexity", slug: "perplexity", color: "1FB8CD" },
  { name: "Claude", slug: "claude", color: "D97757" },
  { name: "Copilot", slug: "githubcopilot", color: "000000" },
  { name: "AI Overviews", slug: "google", color: "4285F4" },
];

/**
 * AI platforms rendered as glass "poker cards" fanned out in a circular arc.
 */
export function AIFan() {
  const count = tools.length;
  const spread = 70; // total degrees of the fan

  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[440px] select-none md:h-[420px]">
      <div aria-hidden className="pointer-events-none absolute inset-0 brand-glow rounded-full" />
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <div className="relative h-0 w-0">
          {tools.map((t, i) => {
            const angle = -spread / 2 + (spread / (count - 1)) * i;
            return (
              <div
                key={t.name}
                className="fan-card liquid-glass-light absolute bottom-0 left-0 flex h-[210px] w-[140px] -translate-x-1/2 flex-col items-start gap-4 rounded-2xl p-3.5 md:h-[240px] md:w-[158px]"
                style={{
                  transform: `translateX(-50%) rotate(${angle}deg)`,
                  transformOrigin: "50% 150%",
                  zIndex: i + 1,
                  animationDelay: `${i * 90}ms`,
                }}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-background/80 shadow-sm">
                  <img
                    src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                    alt={`${t.name} logo`}
                    loading="lazy"
                    className="h-5 w-5"
                  />
                </span>
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground whitespace-nowrap"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {t.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

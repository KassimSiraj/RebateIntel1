const tools = [
  { name: "ChatGPT", note: "OpenAI" },
  { name: "Gemini", note: "Google" },
  { name: "Perplexity", note: "Answer engine" },
  { name: "Claude", note: "Anthropic" },
  { name: "Copilot", note: "Microsoft" },
  { name: "AI Overviews", note: "Google Search" },
];

/**
 * AI platforms rendered as glass "poker cards" fanned out in a circular arc.
 */
export function AIFan() {
  const count = tools.length;
  const spread = 96; // total degrees of the fan

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
                className="fan-card liquid-glass-light absolute bottom-0 left-0 flex h-[210px] w-[140px] -translate-x-1/2 flex-col items-center gap-3 rounded-2xl p-4 pt-5 md:h-[240px] md:w-[158px]"
                style={{
                  transform: `translateX(-50%) rotate(${angle}deg)`,
                  transformOrigin: "50% 150%",
                  zIndex: i + 1,
                  animationDelay: `${i * 90}ms`,
                }}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-brand-foreground text-sm font-bold">
                  {t.name.charAt(0)}
                </span>
                <div className="text-center">
                  <div className="text-sm font-semibold text-foreground leading-tight">{t.name}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                    {t.note}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

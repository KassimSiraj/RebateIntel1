const tools = [
  { name: "ChatGPT", domain: "openai.com" },
  { name: "Gemini", domain: "gemini.google.com" },
  { name: "Perplexity", domain: "perplexity.ai" },
  { name: "Claude", domain: "claude.ai" },
  { name: "Grok", domain: "x.ai" },
  { name: "Copilot", domain: "microsoft.com" },
  { name: "AI Overviews", domain: "google.com" },
];

/**
 * AI platforms rendered as floating glass orbs fanned in a subtle semicircle.
 * Apple "liquid glass" feel: soft refraction, light bloom, slow parallax float.
 */
export function AIFan() {
  const count = tools.length;
  const spread = 128; // degrees of the arc
  const radius = 158; // px from arc center

  return (
    <div className="relative mx-auto h-[330px] w-full max-w-[460px] select-none md:h-[360px]">
      <div aria-hidden className="pointer-events-none absolute inset-0 brand-glow rounded-full" />
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
        <div className="relative h-0 w-0">
          {tools.map((t, i) => {
            const angle = -spread / 2 + (spread / (count - 1)) * i;
            const rad = (angle * Math.PI) / 180;
            const x = Math.sin(rad) * radius;
            const y = -Math.cos(rad) * radius;
            const mid = (count - 1) / 2;
            const depth = 1 - Math.abs(i - mid) / (mid + 1); // center orbs sit closer
            const size = 76 + depth * 26;

            return (
              <div
                key={t.name}
                className="absolute left-0 top-0"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  zIndex: 10 + Math.round(depth * 10),
                }}
              >
                <div
                  className="glass-orb-float"
                  style={{
                    animationDelay: `${i * 420}ms`,
                    animationDuration: `${7 + (i % 3) * 1.6}s`,
                  }}
                >
                  <div
                    className="glass-orb group"
                    style={{
                      width: size,
                      height: size,
                      animationDelay: `${i * 110}ms`,
                    }}
                    title={t.name}
                  >
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=128`}
                      alt={`${t.name} logo`}
                      loading="lazy"
                      decoding="async"
                      width={128}
                      height={128}
                      className="relative z-[2] object-contain drop-shadow-sm"
                      style={{ width: size * 0.38, height: size * 0.38 }}
                    />
                    <span aria-hidden className="glass-orb-sheen" />
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

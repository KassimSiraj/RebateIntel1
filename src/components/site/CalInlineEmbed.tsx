import { useEffect, useRef } from "react";

const CAL_EMBED_SCRIPT = `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin:"https://app.cal.com"});
Cal.config = Cal.config || {};
Cal.config.forwardQueryParams = true;

  Cal.ns["30min"]("inline", {
    elementOrSelector:"#my-cal-inline-30min",
    config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"auto"},
    calLink: "kmssignal/30min",
  });

  Cal.ns["30min"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#A85F00"},"dark":{"cal-brand":"#F5AC07"}},"hideEventTypeDetails":true,"layout":"month_view"});`;

export function CalInlineEmbed() {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = CAL_EMBED_SCRIPT;
    scriptRef.current = script;
    document.body.appendChild(script);

    return () => {
      scriptRef.current?.remove();
    };
  }, []);

  return (
    <div className="cal-inline-shell mt-8">
      <div
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        id="my-cal-inline-30min"
      />
    </div>
  );
}
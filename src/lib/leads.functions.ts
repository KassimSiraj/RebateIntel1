import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "ymail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "msn.com",
  "aol.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "proton.me",
  "protonmail.com",
  "gmx.com",
  "gmx.de",
  "mail.com",
  "zoho.com",
  "yandex.com",
  "yandex.ru",
  "qq.com",
  "163.com",
  "126.com",
  "naver.com",
  "hey.com",
  "mail.ru",
  "rediffmail.com",
  "tutanota.com",
  "fastmail.com",
]);

const BUSINESS_EMAIL_MESSAGE = "Please enter your business work email address.";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z
    .string()
    .trim()
    .email(BUSINESS_EMAIL_MESSAGE)
    .max(200)
    .refine((value) => {
      const domain = value.split("@")[1]?.toLowerCase() ?? "";
      if (!domain || !domain.includes(".")) return false;
      if (PERSONAL_EMAIL_DOMAINS.has(domain)) return false;
      // block disposable-style subdomains of personal providers too
      return ![...PERSONAL_EMAIL_DOMAINS].some((d) => domain.endsWith(`.${d}`));
    }, BUSINESS_EMAIL_MESSAGE),
  jobTitle: z.string().trim().min(1, "Job title is required").max(120),
  company: z.string().trim().min(1, "Company name is required").max(160),
  message: z.string().trim().max(2000).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    const parsed = leadSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(parsed.error.issues[0]?.message ?? "Please check your details.");
    }
    return parsed.data;
  })
  .handler(async ({ data }) => {
    const supabaseUrl = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];

    if (!supabaseUrl || !key) {
      throw new Error("Lead capture is not configured.");
    }

    const supabase = createClient<Database>(supabaseUrl, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const headers = new Headers(init?.headers);
          if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
            headers.delete("Authorization");
          }
          headers.set("apikey", key);
          return fetch(input, { ...init, headers });
        },
      },
    });

    const { error } = await supabase.from("strategy_call_leads").insert({
      full_name: data.name,
      company_name: data.company,
      job_title: data.jobTitle,
      work_email: data.email,
    });

    // 23505 = duplicate work email: the lead already exists, treat as saved.
    if (error && error.code !== "23505") {
      console.error("Lead insert failed", error.code, error.message);
      throw new Error("Could not save your details. Please try again.");
    }

    // Best-effort mirror to the connected Google Sheet; never blocks the booking.
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const sheetsKey = process.env["GOOGLE_SHEETS_API_KEY"];
    const spreadsheetId = process.env["LEADS_SPREADSHEET_ID"];

    if (lovableKey && sheetsKey && spreadsheetId) {
      try {
        const url =
          `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${spreadsheetId}` +
          `/values/Leads!A:F:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${lovableKey}`,
            "X-Connection-Api-Key": sheetsKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            values: [
              [
                new Date().toISOString(),
                data.name,
                data.email,
                data.jobTitle,
                data.company,
                data.message ?? "",
              ],
            ],
          }),
        });
        if (!response.ok) {
          console.error(`Sheets append failed [${response.status}]`);
        }
      } catch (sheetsError) {
        console.error("Sheets append error", sheetsError);
      }
    }

    return { ok: true as const };
  });

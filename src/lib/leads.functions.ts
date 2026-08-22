import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid work email").max(200),
  jobTitle: z.string().trim().min(1, "Job title is required").max(120),
  company: z.string().trim().min(1, "Company name is required").max(160),
  message: z.string().trim().max(2000).optional(),
});


export type LeadInput = z.infer<typeof leadSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const sheetsKey = process.env.GOOGLE_SHEETS_API_KEY;
    const spreadsheetId = process.env.LEADS_SPREADSHEET_ID;

    if (!lovableKey || !sheetsKey || !spreadsheetId) {
      throw new Error("Lead capture is not configured.");
    }

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
      const errorBody = await response.text();
      console.error(`Sheets append failed [${response.status}]: ${errorBody}`);
      throw new Error(`Could not save your details [${response.status}]`);
    }

    return { ok: true as const };
  });

import { createClient } from "@supabase/supabase-js";
import { defineTool, type ToolContext } from "@lovable.dev/mcp-js";
import { z } from "zod";

function supabaseForUser(ctx: ToolContext) {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PUBLISHABLE_KEY!,
    {
      global: { headers: { Authorization: `Bearer ${ctx.getToken()}` } },
      auth: { persistSession: false, autoRefreshToken: false },
    },
  );
}

export default defineTool({
  name: "submit_demo_request",
  title: "Submit demo request",
  description:
    "Submit a demo / contact request to KredibilityPay's sales team on behalf of the signed-in user. Also saves the request to the user's history.",
  inputSchema: {
    name: z.string().min(1).describe("Full name of the contact."),
    email: z.string().email().describe("Business email of the contact."),
    company: z.string().optional().describe("Company name."),
    message: z
      .string()
      .min(1)
      .describe("What they want to solve, markets, expected volume, etc."),
    monthly_volume: z
      .string()
      .optional()
      .describe(
        "Estimated monthly transaction volume, e.g. '$10k-$50k', '$1M+'.",
      ),
  },
  annotations: {
    readOnlyHint: false,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input, ctx) => {
    if (!ctx.isAuthenticated()) {
      return {
        content: [{ type: "text", text: "Not authenticated" }],
        isError: true,
      };
    }

    const supabase = supabaseForUser(ctx);

    // Save to user's history
    const { data: saved, error: saveError } = await supabase
      .from("user_demo_requests")
      .insert({
        user_id: ctx.getUserId(),
        name: input.name,
        email: input.email,
        company: input.company ?? null,
        message: input.message,
        monthly_volume: input.monthly_volume ?? null,
        status: "pending",
      })
      .select()
      .single();

    if (saveError) {
      return {
        content: [
          { type: "text", text: `Could not save request: ${saveError.message}` },
        ],
        isError: true,
      };
    }

    // Send email via existing edge function
    try {
      const url = `${process.env.SUPABASE_URL}/functions/v1/send-contact-email`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.SUPABASE_PUBLISHABLE_KEY!,
          Authorization: `Bearer ${ctx.getToken()}`,
        },
        body: JSON.stringify({
          name: input.name,
          email: input.email,
          company: input.company ?? "",
          message: input.message,
          monthly_volume: input.monthly_volume ?? "",
          source: "mcp",
          user_id: ctx.getUserId(),
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.warn(`Email send failed [${res.status}]: ${text}`);
      }
    } catch (e) {
      console.warn("Email send exception", e);
    }

    return {
      content: [
        {
          type: "text",
          text: `Demo request submitted (id ${saved.id}). Sales will be in touch at ${input.email}.`,
        },
      ],
      structuredContent: { request: saved },
    };
  },
});

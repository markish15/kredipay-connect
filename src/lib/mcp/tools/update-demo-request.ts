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
  name: "update_demo_request",
  title: "Update a demo request",
  description:
    "Update fields of one of the signed-in user's own demo requests. Only the fields provided are updated.",
  inputSchema: {
    id: z.string().uuid().describe("ID of the demo request to update."),
    name: z.string().min(1).optional(),
    email: z.string().email().optional(),
    company: z.string().optional(),
    message: z.string().min(1).optional(),
    monthly_volume: z.string().optional(),
    status: z.string().optional(),
  },
  annotations: {
    readOnlyHint: false,
    idempotentHint: true,
    destructiveHint: false,
    openWorldHint: false,
  },
  handler: async ({ id, ...patch }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const clean = Object.fromEntries(
      Object.entries(patch).filter(([, v]) => v !== undefined),
    );
    if (Object.keys(clean).length === 0) {
      return { content: [{ type: "text", text: "No fields to update." }], isError: true };
    }
    const { data, error } = await supabaseForUser(ctx)
      .from("user_demo_requests")
      .update(clean)
      .eq("id", id)
      .select()
      .single();
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    return {
      content: [{ type: "text", text: `Updated request ${data.id}.` }],
      structuredContent: { request: data },
    };
  },
});

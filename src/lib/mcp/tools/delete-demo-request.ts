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
  name: "delete_demo_request",
  title: "Delete a demo request",
  description:
    "Delete one of the signed-in user's own demo requests. This cannot be undone.",
  inputSchema: {
    id: z.string().uuid().describe("ID of the demo request to delete."),
  },
  annotations: {
    readOnlyHint: false,
    idempotentHint: true,
    destructiveHint: true,
    openWorldHint: false,
  },
  handler: async ({ id }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const { error } = await supabaseForUser(ctx)
      .from("user_demo_requests")
      .delete()
      .eq("id", id);
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    return { content: [{ type: "text", text: `Deleted request ${id}.` }] };
  },
});

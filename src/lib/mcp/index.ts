import { auth, defineMcp } from "@lovable.dev/mcp-js";
import submitDemoRequest from "./tools/submit-demo-request";
import listDemoRequests from "./tools/list-demo-requests";
import updateDemoRequest from "./tools/update-demo-request";
import deleteDemoRequest from "./tools/delete-demo-request";

const projectRef =
  import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "kredibilitypay-mcp",
  title: "KredibilityPay",
  version: "0.1.0",
  instructions:
    "Tools for KredibilityPay. Submit demo/contact requests to sales on behalf of the signed-in user, and read/update/delete that user's own submitted requests.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    submitDemoRequest,
    listDemoRequests,
    updateDemoRequest,
    deleteDemoRequest,
  ],
});

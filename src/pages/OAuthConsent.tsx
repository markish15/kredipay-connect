import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";

// Beta auth.oauth namespace – narrow wrapper
type OAuthClient = { auth: { oauth: {
  getAuthorizationDetails: (id: string) => Promise<{ data: any; error: any }>;
  approveAuthorization: (id: string) => Promise<{ data: any; error: any }>;
  denyAuthorization: (id: string) => Promise<{ data: any; error: any }>;
} } };
const sb = supabase as unknown as OAuthClient;

const OAuthConsent = () => {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [checkedSession, setCheckedSession] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) return setError("Missing authorization_id");
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/auth?next=" + encodeURIComponent(next);
        return;
      }
      setCheckedSession(true);
      const { data, error } = await sb.auth.oauth.getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (error) return setError(error.message);
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    })();
    return () => { active = false; };
  }, [authorizationId]);

  async function decide(approve: boolean) {
    setBusy(true);
    const { data, error } = approve
      ? await sb.auth.oauth.approveAuthorization(authorizationId)
      : await sb.auth.oauth.denyAuthorization(authorizationId);
    if (error) { setBusy(false); return setError(error.message); }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) { setBusy(false); return setError("No redirect returned by the authorization server."); }
    window.location.href = target;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 flex justify-center">
        <Card className="w-full max-w-md p-8">
          {error && (
            <div>
              <h1 className="text-xl font-bold mb-2">Authorization error</h1>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          )}
          {!error && !checkedSession && <p>Loading…</p>}
          {!error && checkedSession && !details && <p>Loading authorization…</p>}
          {!error && details && (
            <>
              <h1 className="text-xl font-bold mb-2">
                Connect {details.client?.name ?? "an app"} to KredibilityPay
              </h1>
              <p className="text-sm text-muted-foreground mb-4">
                This lets {details.client?.name ?? "the client"} use KredibilityPay tools as you while you are signed in.
              </p>
              <p className="text-xs text-muted-foreground mb-6">
                This does not bypass KredibilityPay's permissions or backend policies.
              </p>
              <div className="flex gap-3">
                <Button onClick={() => decide(true)} disabled={busy} className="flex-1">Approve</Button>
                <Button onClick={() => decide(false)} disabled={busy} variant="outline" className="flex-1">Cancel</Button>
              </div>
            </>
          )}
        </Card>
      </main>
    </div>
  );
};

export default OAuthConsent;

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import Header from "@/components/layout/Header";

function sanitizeNext(next: string | null): string {
  if (!next) return "/";
  if (!next.startsWith("/") || next.startsWith("//")) return "/";
  return next;
}

const Auth = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const next = sanitizeNext(params.get("next"));
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate(next, { replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) navigate(next, { replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate, next]);

  const emailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const emailRedirectTo = `${window.location.origin}/auth${next !== "/" ? `?next=${encodeURIComponent(next)}` : ""}`;
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: fullName }, emailRedirectTo },
        });
        if (error) throw error;
        toast.success("Check your email to confirm your account.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err: any) {
      toast.error(err.message ?? "Auth error");
    } finally {
      setLoading(false);
    }
  };

  const googleAuth = async () => {
    const redirect_uri = `${window.location.origin}/auth${next !== "/" ? `?next=${encodeURIComponent(next)}` : ""}`;
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri });
    if (result.error) toast.error(result.error.message ?? "Google sign-in failed");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 flex justify-center">
        <Card className="w-full max-w-md p-8">
          <h1 className="text-2xl font-bold mb-2">
            {mode === "signin" ? "Sign in" : "Create account"}
          </h1>
          <p className="text-sm text-muted-foreground mb-6">
            {mode === "signin"
              ? "Sign in to KredibilityPay."
              : "Create your KredibilityPay account."}
          </p>

          <Button onClick={googleAuth} variant="outline" className="w-full mb-4">
            Continue with Google
          </Button>

          <div className="text-center text-xs text-muted-foreground my-4">or</div>

          <form onSubmit={emailAuth} className="space-y-4">
            {mode === "signup" && (
              <div>
                <Label htmlFor="fullName">Full name</Label>
                <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>
            )}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "…" : mode === "signin" ? "Sign in" : "Create account"}
            </Button>
          </form>

          <p className="text-sm text-center mt-6 text-muted-foreground">
            {mode === "signin" ? (
              <>No account?{" "}
                <button type="button" className="text-primary underline" onClick={() => setMode("signup")}>Create one</button>
              </>
            ) : (
              <>Already have an account?{" "}
                <button type="button" className="text-primary underline" onClick={() => setMode("signin")}>Sign in</button>
              </>
            )}
          </p>
          <p className="text-xs text-center mt-4">
            <Link to="/" className="text-muted-foreground hover:text-primary">← Back home</Link>
          </p>
        </Card>
      </main>
    </div>
  );
};

export default Auth;

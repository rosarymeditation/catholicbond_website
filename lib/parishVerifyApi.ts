// ════════════════════════════════════════════════════════════════════════════
// lib/parishVerifyApi.ts — talks to the CatholicBond API for the parish page
//
// Runs ONLY on the website's server (page + /api/parish-verify route), so
// the API address never needs CORS and isn't exposed to the browser.
//
// .env.local (website):
//   CATHOLICBOND_API_URL=https://your-api-domain.com/api/
//   (the same base your app uses — the part before "getMyParishVerification")
// ════════════════════════════════════════════════════════════════════════════

/** Base URL of the API, always ending with "/". */
function apiBase(): string {
    const base =
        process.env.CATHOLICBOND_API_URL ||
        "https://www.server.catholicbond.com/api";
    if (!base) throw new Error("CATHOLICBOND_API_URL is not set in .env.local");
    return base.endsWith("/") ? base : `${base}/`;
}

/** POSTs JSON to an API endpoint and returns { status, data }. Never cached. */
export async function callApi<T = unknown>(
    endpoint: string,
    body: Record<string, unknown>,
    headers: Record<string, string> = {},
): Promise<{ status: number; data: T }> {
    const res = await fetch(`${apiBase()}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...headers },
        body: JSON.stringify(body),
        cache: "no-store",
    });
    let data: T;
    try {
        data = (await res.json()) as T;
    } catch {
        data = {} as T;
    }
    return { status: res.status, data };
}

// ── Shapes returned by getParishVerificationByToken ────────────────────────
export type ParishVerifyState =
    | {
          state: "open";
          member: {
              firstname: string;
              photo: string | null;
              city: string;
              country: string;
          };
          parish: { name: string; city: string; country: string };
          expiresAt: string;
          roles: string[];
      }
    | {
          state: "answered";
          answer: "yes" | "no" | null;
          parish: { name: string };
      }
    | { state: "expired" | "closed"; parish: { name: string } }
    | { state: "invalid" };

/** What the confirmation page should show for this token. */
export async function getParishVerification(
    token: string,
): Promise<ParishVerifyState> {
    try {
        const { status, data } = await callApi<ParishVerifyState>(
            "getParishVerificationByToken",
            { token },
        );
        if (status !== 200 || !data || !("state" in data))
            return { state: "invalid" };
        return data;
    } catch {
        return { state: "invalid" };
    }
}

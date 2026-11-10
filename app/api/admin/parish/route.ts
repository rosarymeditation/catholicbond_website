// ════════════════════════════════════════════════════════════════════════════
// app/api/admin/parish/route.ts — the admin page's actions go through here
//
//   POST { key, action: "list",    status, page }
//   POST { key, action: "approve", id }
//   POST { key, action: "reject",  id, reason }
//   POST { key, action: "revoke",  id, reason }
//
// No login: the secret key from the admin link (?key=…) is passed to the API
// in the "x-admin-key" header. The API checks it against ADMIN_API_KEY in the
// SERVER .env — the website doesn't store the key anywhere.
// ════════════════════════════════════════════════════════════════════════════
import { NextResponse } from "next/server";
import { callApi } from "@/lib/parishVerifyApi";

// action → API endpoint
const ENDPOINTS: Record<string, string> = {
    list: "getParishVerificationsAdmin",
    approve: "approveParishVerification",
    reject: "rejectParishVerification",
    revoke: "revokeParishVerification",
};

export async function POST(req: Request) {
    let body: Record<string, unknown>;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json(
            { message: "Invalid request" },
            { status: 400 },
        );
    }

    const key = String(body.key || "");
    const endpoint = ENDPOINTS[String(body.action || "")];
    if (!key)
        return NextResponse.json(
            { message: "Missing admin key" },
            { status: 401 },
        );
    if (!endpoint)
        return NextResponse.json(
            { message: "Unknown action" },
            { status: 400 },
        );

    // Only pass on the fields each action needs
    const payload: Record<string, unknown> =
        body.action === "list"
            ? {
                  status: body.status || "pending_review",
                  page: body.page || 1,
                  limit: 20,
              }
            : { id: body.id, reason: String(body.reason || "").slice(0, 300) };

    try {
        const { status, data } = await callApi(endpoint, payload, {
            "x-admin-key": key,
        });
        return NextResponse.json(data, { status });
    } catch {
        return NextResponse.json(
            { message: "Couldn't reach the server." },
            { status: 502 },
        );
    }
}

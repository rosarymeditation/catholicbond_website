// ════════════════════════════════════════════════════════════════════════════
// app/api/parish-verify/route.ts — the form on the parish page posts here
//
// Forwards the parish's answer (or opt-out) to the CatholicBond API from the
// website's server. The browser never talks to the API directly.
//
//   POST { action: "respond", token, answer, responderName, responderRole, authorised }
//   POST { action: "optout",  token }
// ════════════════════════════════════════════════════════════════════════════
import { NextResponse } from "next/server";
import { callApi } from "@/lib/parishVerifyApi";

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

    const token = String(body.token || "");
    if (!/^[a-f0-9]{64}$/.test(token)) {
        return NextResponse.json({ message: "Invalid link" }, { status: 400 });
    }

    // Pass on who answered (stored with the answer for our records)
    const headers: Record<string, string> = {};
    const ip = req.headers.get("x-forwarded-for");
    const ua = req.headers.get("user-agent");
    if (ip) headers["x-forwarded-for"] = ip;
    if (ua) headers["user-agent"] = ua;

    try {
        if (body.action === "optout") {
            const { status, data } = await callApi(
                "optOutParishContact",
                { token },
                headers,
            );
            return NextResponse.json(data, { status });
        }

        if (body.action === "respond") {
            const { status, data } = await callApi(
                "respondParishVerification",
                {
                    token,
                    answer: body.answer === "yes" ? "yes" : "no",
                    responderName: String(body.responderName || "").slice(
                        0,
                        100,
                    ),
                    responderRole: String(body.responderRole || ""),
                    authorised: body.authorised === true,
                },
                headers,
            );
            return NextResponse.json(data, { status });
        }

        return NextResponse.json(
            { message: "Unknown action" },
            { status: 400 },
        );
    } catch {
        return NextResponse.json(
            { message: "Something went wrong. Please try again." },
            { status: 502 },
        );
    }
}

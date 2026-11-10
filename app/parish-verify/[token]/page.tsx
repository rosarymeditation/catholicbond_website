// ════════════════════════════════════════════════════════════════════════════
// app/parish-verify/[token]/page.tsx — the page a parish opens from our email
//
//   www.catholicbond.com/parish-verify/<token>            → confirm / decline
//   www.catholicbond.com/parish-verify/<token>?optout=1   → stop future requests
//
// Server component: looks the token up on the API, then shows one of:
//   open      → member's first name, photo, city + the answer form
//   answered  → "Thank you, this request has already been answered"
//   expired   → "This link has expired"
//   closed    → "This request is no longer active"
//   invalid   → "This link isn't valid"
//
// No login, never indexed by search engines, matches the site's look
// (navy, EB Garamond headings, Inter text, CSS variables from globals.css).
// ════════════════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { getParishVerification } from "@/lib/parishVerifyApi";
import ParishVerifyForm from "./ParishVerifyForm";

export const dynamic = "force-dynamic"; // always fresh, never cached

export const metadata: Metadata = {
    title: "Parish confirmation · CatholicBond",
    robots: { index: false, follow: false }, // private page, keep out of Google
};

type Props = {
    params: Promise<{ token: string }>;
    searchParams: Promise<{ optout?: string }>;
};

export default async function ParishVerifyPage({ params, searchParams }: Props) {
    const { token } = await params;
    const { optout } = await searchParams;
    const data = await getParishVerification(token);

    return (
        <main style={styles.page}>
            <div style={styles.glow} />
            <div style={styles.wrap}>
                {/* Brand */}
                <a href="/" style={styles.brand}>
                    <span style={styles.cross}>✝</span> CatholicBond
                </a>

                <div style={styles.card}>
                    {data.state === "open" ? (
                        <ParishVerifyForm
                            token={token}
                            member={data.member}
                            parish={data.parish}
                            expiresAt={data.expiresAt}
                            roles={data.roles}
                            startWithOptOut={optout === "1"}
                        />
                    ) : (
                        <Message
                            state={data.state}
                            parishName={"parish" in data ? data.parish.name : undefined}
                        />
                    )}
                </div>

                <p style={styles.footer}>
                    CatholicBond helps Catholic adults meet with marriage in mind.
                    <br />
                    Questions? <a href="mailto:support@catholicbond.com" style={styles.link}>support@catholicbond.com</a>
                    <br />
                    Operated by Softnergy Limited, Scotland, UK.
                </p>
            </div>
        </main>
    );
}

// ── Non-form states ─────────────────────────────────────────────────────────
function Message({
    state,
    parishName,
}: {
    state: "answered" | "expired" | "closed" | "invalid";
    parishName?: string;
}) {
    const parish = parishName;
    const content = {
        answered: {
            icon: "bi-check-circle-fill",
            color: "var(--green)",
            title: "Thank you, this has been answered",
            text: `${parish ? `${parish}'s` : "The"} answer has already been recorded. There's nothing more to do.`,
        },
        expired: {
            icon: "bi-hourglass-bottom",
            color: "var(--amber)",
            title: "This link has expired",
            text: "The request was open for 14 days. If the parishioner asks again, you'll receive a new email.",
        },
        closed: {
            icon: "bi-x-circle",
            color: "var(--dim)",
            title: "This request is no longer active",
            text: "It was withdrawn or closed. No action is needed.",
        },
        invalid: {
            icon: "bi-shield-exclamation",
            color: "var(--dim)",
            title: "This link isn't valid",
            text: "Please use the button in the email you received. If it still doesn't work, contact support@catholicbond.com.",
        },
    }[state];

    return (
        <div style={{ textAlign: "center", padding: "12px 4px" }}>
            <i className={`bi ${content.icon}`} style={{ fontSize: 40, color: content.color }} />
            <h1 style={{ ...styles.h1, marginTop: 14 }}>{content.title}</h1>
            <p style={styles.text}>{content.text}</p>
        </div>
    );
}

// ── Styles (inline, same tokens as the home page) ───────────────────────────
const styles: Record<string, CSSProperties> = {
    page: {
        minHeight: "100vh",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
        padding: "48px 16px 40px",
    },
    glow: {
        position: "absolute",
        top: -220,
        left: "50%",
        transform: "translateX(-50%)",
        width: 700,
        height: 700,
        background: "radial-gradient(circle, rgba(21,101,192,0.14) 0%, transparent 70%)",
        pointerEvents: "none",
    },
    wrap: { maxWidth: 560, margin: "0 auto", position: "relative" },
    brand: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "'EB Garamond', Georgia, serif",
        fontSize: 22,
        color: "var(--white)",
        textDecoration: "none",
        marginBottom: 22,
    },
    cross: { color: "var(--amber)" },
    card: {
        background: "var(--card)",
        border: "1px solid rgba(26,58,106,0.60)",
        borderRadius: 22,
        padding: "28px 24px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.30)",
    },
    h1: {
        fontFamily: "'EB Garamond', Georgia, serif",
        fontSize: 26,
        lineHeight: 1.25,
        color: "var(--white)",
        margin: "0 0 10px",
    },
    text: {
        fontFamily: "Inter, sans-serif",
        fontSize: 15,
        lineHeight: 1.7,
        color: "var(--dim)",
        margin: 0,
    },
    footer: {
        fontFamily: "Inter, sans-serif",
        fontSize: 12,
        lineHeight: 1.8,
        color: "var(--dim)",
        textAlign: "center",
        marginTop: 22,
        opacity: 0.8,
    },
    link: { color: "var(--soft-blue)" },
};
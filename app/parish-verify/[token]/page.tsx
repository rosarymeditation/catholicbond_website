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
// Layout
//   Header  → CatholicBond logo + name, "Parish confirmation" tag
//   Left    → the request card (the form)
//   Right   → "About CatholicBond", why we ask parishes, what we do with the
//             answer (a priest or secretary may never have heard of us)
//   Footer  → website, privacy, support, company
// On phones the two columns stack (request first).
//
// No login, never indexed by search engines, same look as the rest of the site
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

/** Transparent CatholicBond logo. */
const LOGO_URL = "https://rosaryapp.s3.eu-west-2.amazonaws.com/logo_2.png";

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

            {/* ── Header ─────────────────────────────────────────────────────── */}
            <header style={styles.header}>
                <a href="/" style={styles.brand} aria-label="CatholicBond home">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={LOGO_URL} alt="" width={44} height={44} style={styles.logo} />
                    <span>CatholicBond</span>
                </a>
                <span style={styles.tag}>
                    <i className="bi bi-shield-check" /> Parish confirmation
                </span>
            </header>

            {/* ── Request + About ────────────────────────────────────────────── */}
            <div style={styles.grid} className="pv-layout">
                <section style={styles.card}>
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
                        <Message state={data.state} parishName={"parish" in data ? data.parish.name : undefined} />
                    )}
                </section>

                <About />
            </div>

            {/* ── Footer ─────────────────────────────────────────────────────── */}
            <footer style={styles.footer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={LOGO_URL} alt="" width={28} height={28} style={{ ...styles.logo, opacity: 0.8 }} />
                <div style={styles.footerLinks}>
                    <a href="/" style={styles.footerLink}>catholicbond.com</a>
                    <span>·</span>
                    <a href="/privacy-policy" style={styles.footerLink}>Privacy</a>
                    <span>·</span>
                    <a href="mailto:support@catholicbond.com" style={styles.footerLink}>support@catholicbond.com</a>
                </div>
                <div>Operated by Softnergy Limited, Scotland, UK.</div>
            </footer>

            {/* Two columns on wide screens, stacked on phones */}
            <style>{`
        .pv-layout { grid-template-columns: 1fr; }
        @media (min-width: 900px) { .pv-layout { grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); } }
      `}</style>
        </main>
    );
}

// ── "About CatholicBond" panel ──────────────────────────────────────────────
// Written for a priest or parish secretary who has never heard of us.
function About() {
    const points = [
        {
            icon: "bi-heart",
            title: "Marriage in mind",
            text: "CatholicBond is a dating app for Catholic adults who want to meet someone who shares their faith, with marriage as the goal.",
        },
        {
            icon: "bi-people",
            title: "Why we ask parishes",
            text: "A short confirmation from a parish helps members trust that the person they're talking to is a practising Catholic.",
        },
        {
            icon: "bi-lock",
            title: "What we do with your answer",
            text: "It only decides whether a “Parish verified” badge shows on this member's profile. We don't add you to any mailing list or share your details.",
        },
    ];

    return (
        <aside style={styles.about}>
            <div style={styles.aboutHead}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={LOGO_URL} alt="" width={56} height={56} style={styles.logo} />
                <div>
                    <div style={styles.aboutTitle}>About CatholicBond</div>
                    <div style={styles.aboutSub}>Faith-centred introductions</div>
                </div>
            </div>

            {points.map((p) => (
                <div key={p.title} style={styles.point}>
                    <span style={styles.pointIcon}>
                        <i className={`bi ${p.icon}`} />
                    </span>
                    <div>
                        <div style={styles.pointTitle}>{p.title}</div>
                        <p style={styles.pointText}>{p.text}</p>
                    </div>
                </div>
            ))}

            <p style={styles.aboutNote}>
                Takes under a minute. If you're unsure, it's fine to choose “No”. The member is simply told the
                parish couldn't confirm.
            </p>
        </aside>
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
    const content = {
        answered: {
            icon: "bi-check-circle-fill",
            color: "var(--green)",
            title: "Thank you, this has been answered",
            text: `${parishName ? `${parishName}'s` : "The"} answer has already been recorded. There's nothing more to do.`,
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
        <div style={{ textAlign: "center", padding: "24px 4px" }}>
            <i className={`bi ${content.icon}`} style={{ fontSize: 44, color: content.color }} />
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
        padding: "0 16px 40px",
    },
    glow: {
        position: "absolute",
        top: -260,
        left: "50%",
        transform: "translateX(-50%)",
        width: 900,
        height: 800,
        background: "radial-gradient(circle, rgba(21,101,192,0.16) 0%, transparent 70%)",
        pointerEvents: "none",
    },
    header: {
        position: "relative",
        maxWidth: 1040,
        margin: "0 auto",
        padding: "22px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
        borderBottom: "1px solid rgba(26,58,106,0.45)",
        marginBottom: 32,
    },
    brand: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "'EB Garamond', Georgia, serif",
        fontSize: 26,
        color: "var(--white)",
        textDecoration: "none",
    },
    logo: { objectFit: "contain", display: "block", flexShrink: 0 },
    tag: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 14px",
        borderRadius: 100,
        border: "1px solid rgba(26,58,106,0.8)",
        background: "rgba(13,27,51,0.6)",
        color: "var(--soft-blue)",
        fontFamily: "Inter, sans-serif",
        fontSize: 12,
        fontWeight: 600,
    },
    grid: {
        position: "relative",
        maxWidth: 1040,
        margin: "0 auto",
        display: "grid",
        gap: 24,
        alignItems: "start",
    },
    card: {
        background: "var(--card)",
        border: "1px solid rgba(26,58,106,0.60)",
        borderRadius: 22,
        padding: "30px 26px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.30)",
    },
    about: {
        background: "rgba(13,27,51,0.55)",
        border: "1px solid rgba(26,58,106,0.45)",
        borderRadius: 22,
        padding: "26px 24px",
    },
    aboutHead: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        paddingBottom: 18,
        marginBottom: 6,
        borderBottom: "1px solid rgba(26,58,106,0.45)",
    },
    aboutTitle: { fontFamily: "'EB Garamond', Georgia, serif", fontSize: 22, color: "var(--white)" },
    aboutSub: { fontFamily: "Inter, sans-serif", fontSize: 12, color: "var(--amber)", marginTop: 2, letterSpacing: 0.3 },
    point: { display: "flex", gap: 14, marginTop: 18 },
    pointIcon: {
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "rgba(21,101,192,0.14)",
        color: "var(--soft-blue)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: 16,
    },
    pointTitle: { fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "var(--white)" },
    pointText: { fontFamily: "Inter, sans-serif", fontSize: 13.5, lineHeight: 1.65, color: "var(--dim)", margin: "4px 0 0" },
    aboutNote: {
        fontFamily: "Inter, sans-serif",
        fontSize: 12.5,
        lineHeight: 1.6,
        color: "var(--dim)",
        margin: "22px 0 0",
        padding: "12px 14px",
        borderRadius: 12,
        background: "rgba(255,202,40,0.06)",
        border: "1px solid rgba(255,202,40,0.18)",
    },
    h1: {
        fontFamily: "'EB Garamond', Georgia, serif",
        fontSize: 28,
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
        position: "relative",
        maxWidth: 1040,
        margin: "40px auto 0",
        paddingTop: 24,
        borderTop: "1px solid rgba(26,58,106,0.45)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        fontFamily: "Inter, sans-serif",
        fontSize: 12,
        lineHeight: 1.7,
        color: "var(--dim)",
        textAlign: "center",
    },
    footerLinks: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 },
    footerLink: { color: "var(--soft-blue)", textDecoration: "none" },
};
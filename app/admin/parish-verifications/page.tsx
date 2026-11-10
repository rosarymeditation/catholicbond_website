"use client";
// ════════════════════════════════════════════════════════════════════════════
// app/admin/parish-verifications/page.tsx — review parish verifications
//
// Open with your secret admin link (bookmark it):
//   https://www.catholicbond.com/admin/parish-verifications?key=YOUR_ADMIN_API_KEY
// No login. The key is checked by the API server (ADMIN_API_KEY in the server
// .env). Without the right key the page shows nothing.
//
// Tabs: Needs review · Sent to parish · Confirmed · Declined · Expired · All
//   Needs review → [Approve & send] emails the parish
//                  [Reject]          asks for a reason (the member sees it)
//   Confirmed    → [Revoke]          removes the badge (reason shown to member)
// ════════════════════════════════════════════════════════════════════════════
import { useCallback, useEffect, useState, type CSSProperties } from "react";

// ── Types (what the API returns) ────────────────────────────────────────────
type Item = {
    _id: string;
    status: string;
    createdAt?: string;
    sentAt?: string;
    reminderSentAt?: string;
    linkExpiresAt?: string;
    parish?: { name?: string; city?: string; country?: string; email?: string; website?: string; priestName?: string };
    checks?: { domainMatches?: boolean; freeProvider?: boolean };
    response?: { answer?: "yes" | "no" | null; responderName?: string; responderRole?: string; respondedAt?: string };
    review?: { reason?: string };
    user?: {
        firstname?: string;
        email?: string;
        location?: { city?: string; country?: string };
        profileImage?: { url: string; isPrimary?: boolean }[];
        photoVerification?: { status?: string };
    };
};

const TABS = [
    { key: "pending_review", label: "Needs review" },
    { key: "sent", label: "Sent to parish" },
    { key: "confirmed", label: "Confirmed" },
    { key: "denied", label: "Declined" },
    { key: "expired", label: "Expired" },
    { key: "all", label: "All" },
];

const STATUS: Record<string, { label: string; color: string }> = {
    pending_review: { label: "Needs review", color: "#FFCA28" },
    sent: { label: "Sent to parish", color: "#90B4E8" },
    confirmed: { label: "Confirmed", color: "#4CAF82" },
    denied: { label: "Declined by parish", color: "#E57373" },
    expired: { label: "No answer (expired)", color: "#8EA3C7" },
    rejected: { label: "Rejected by admin", color: "#E57373" },
    cancelled: { label: "Cancelled", color: "#8EA3C7" },
    revoked: { label: "Revoked", color: "#E57373" },
};

const PAGE_LIMIT = 20;

/** "10 Nov 2026, 14:05" */
const when = (d?: string) =>
    d
        ? new Date(d).toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
        : "—";

/** "stmarys.ie" → "https://stmarys.ie" */
const websiteHref = (w?: string) => (!w ? null : /^https?:\/\//i.test(w) ? w : `https://${w}`);

export default function ParishVerificationsAdminPage() {
    const [key, setKey] = useState<string | null>(null); // from ?key=
    const [tab, setTab] = useState("pending_review");
    const [page, setPage] = useState(1);
    const [items, setItems] = useState<Item[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [denied, setDenied] = useState(false); // wrong / missing key
    const [busy, setBusy] = useState<string | null>(null); // "<id>:<action>"
    const [reasonFor, setReasonFor] = useState<{ id: string; action: "reject" | "revoke" } | null>(null);
    const [reason, setReason] = useState("");
    const [notice, setNotice] = useState<{ text: string; ok: boolean } | null>(null);

    // Read the key from the link once (no login)
    useEffect(() => {
        setKey(new URLSearchParams(window.location.search).get("key") || "");
    }, []);

    /** Calls our /api/admin/parish route (which adds the key for the API). */
    const call = useCallback(
        async (payload: Record<string, unknown>) => {
            const res = await fetch("/api/admin/parish", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ key, ...payload }),
            });
            const data = await res.json().catch(() => ({}));
            return { status: res.status, data };
        },
        [key]
    );

    /** Loads the current tab. */
    const load = useCallback(async () => {
        if (!key) return;
        setLoading(true);
        try {
            const { status, data } = await call({ action: "list", status: tab, page });
            if (status === 401 || status === 403) {
                setDenied(true);
                return;
            }
            setDenied(false);
            setItems(data?.data || []);
            setTotal(data?.total || 0);
        } catch {
            setNotice({ text: "Couldn't load. Check your connection.", ok: false });
        } finally {
            setLoading(false);
        }
    }, [call, key, tab, page]);

    useEffect(() => {
        load();
    }, [load]);

    /** Approve / reject / revoke, then refresh the list. */
    async function act(item: Item, action: "approve" | "reject" | "revoke", why = "") {
        setBusy(`${item._id}:${action}`);
        setNotice(null);
        try {
            const { status, data } = await call({ action, id: item._id, reason: why });
            if (status !== 200) {
                setNotice({ text: data?.message || "Action failed.", ok: false });
                return;
            }
            setNotice({
                ok: true,
                text:
                    action === "approve"
                        ? `Sent to ${item.parish?.name}. The member has been told.`
                        : action === "reject"
                            ? "Rejected. The member has been told why."
                            : "Revoked. The member has been told.",
            });
            setReasonFor(null);
            setReason("");
            load();
        } finally {
            setBusy(null);
        }
    }

    const pages = Math.max(1, Math.ceil(total / PAGE_LIMIT));

    // ── No key / wrong key ────────────────────────────────────────────────────
    if (key === null) return <main style={s.page} />;
    if (!key || denied) {
        return (
            <main style={s.page}>
                <div style={{ ...s.wrap, maxWidth: 520, textAlign: "center", paddingTop: 80 }}>
                    <i className="bi bi-shield-lock" style={{ fontSize: 40, color: "var(--dim)" }} />
                    <h1 style={{ ...s.h1, marginTop: 14 }}>Admin link required</h1>
                    <p style={s.text}>
                        Open this page with your secret admin link:
                        <br />
                        <code style={s.code}>/admin/parish-verifications?key=…</code>
                    </p>
                </div>
            </main>
        );
    }

    // ── Page ──────────────────────────────────────────────────────────────────
    return (
        <main style={s.page}>
            <div style={s.wrap}>
                <h1 style={s.h1}>
                    <i className="bi bi-building" style={{ color: "var(--amber)", marginRight: 10 }} />
                    Parish verifications
                </h1>
                <p style={{ ...s.text, marginBottom: 22 }}>
                    Check parish details before we contact them, and see what parishes answered.
                </p>

                {/* Tabs */}
                <div style={s.tabs}>
                    {TABS.map((t) => (
                        <button
                            key={t.key}
                            onClick={() => {
                                setTab(t.key);
                                setPage(1);
                            }}
                            style={{ ...s.tab, ...(tab === t.key ? s.tabActive : {}) }}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                {notice && (
                    <div style={{ ...s.notice, borderColor: notice.ok ? "#4CAF82" : "#E57373", color: notice.ok ? "#4CAF82" : "#E57373" }}>
                        {notice.text}
                    </div>
                )}

                {/* List */}
                {loading ? (
                    <p style={{ ...s.text, textAlign: "center", padding: 60 }}>Loading…</p>
                ) : items.length === 0 ? (
                    <div style={{ ...s.card, textAlign: "center", color: "var(--dim)" }}>Nothing here right now.</div>
                ) : (
                    items.map((item) => {
                        const m = item.user || {};
                        const photo = m.profileImage?.find((p) => p.isPrimary)?.url || m.profileImage?.[0]?.url;
                        const href = websiteHref(item.parish?.website);
                        const st = STATUS[item.status] || { label: item.status, color: "var(--dim)" };
                        const isBusy = (a: string) => busy === `${item._id}:${a}`;

                        return (
                            <div key={item._id} style={s.card}>
                                <div style={s.cardGrid} className="pv-grid">
                                    {/* Member */}
                                    <div style={{ display: "flex", gap: 12 }}>
                                        {photo ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={photo} alt={m.firstname || ""} style={s.photo} />
                                        ) : (
                                            <div style={{ ...s.photo, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <i className="bi bi-person" style={{ color: "var(--dim)", fontSize: 24 }} />
                                            </div>
                                        )}
                                        <div style={{ minWidth: 0 }}>
                                            <div style={s.name}>
                                                {m.firstname || "—"}{" "}
                                                {m.photoVerification?.status === "Approved" && (
                                                    <i className="bi bi-patch-check-fill" style={{ color: "#1976D2", fontSize: 14 }} />
                                                )}
                                            </div>
                                            <div style={s.small}>{m.email}</div>
                                            <div style={s.small}>{[m.location?.city, m.location?.country].filter(Boolean).join(", ")}</div>
                                            <span style={{ ...s.pill, color: st.color, borderColor: st.color }}>{st.label}</span>
                                        </div>
                                    </div>

                                    {/* Parish */}
                                    <div style={{ minWidth: 0 }}>
                                        <div style={s.name}>⛪ {item.parish?.name}</div>
                                        <div style={s.small}>
                                            {[item.parish?.city, item.parish?.country].filter(Boolean).join(", ")}
                                            {item.parish?.priestName ? ` · ${item.parish.priestName}` : ""}
                                        </div>
                                        <div style={{ ...s.line, wordBreak: "break-all" }}>
                                            <i className="bi bi-envelope" /> {item.parish?.email}
                                        </div>
                                        <div style={{ ...s.line, wordBreak: "break-all" }}>
                                            <i className="bi bi-globe" />{" "}
                                            {href ? (
                                                <a href={href} target="_blank" rel="noreferrer" style={{ color: "var(--soft-blue)" }}>
                                                    {item.parish?.website}
                                                </a>
                                            ) : (
                                                <span style={{ color: "var(--dim)" }}>No website given</span>
                                            )}
                                        </div>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
                                            <span style={{ ...s.pill, ...(item.checks?.domainMatches ? s.ok : s.warn) }}>
                                                {item.checks?.domainMatches ? "✓ Email matches website" : "⚠ Email doesn't match website"}
                                            </span>
                                            {item.checks?.freeProvider && <span style={{ ...s.pill, ...s.warn }}>⚠ Free email provider</span>}
                                        </div>
                                        <div style={{ ...s.small, marginTop: 8 }}>
                                            Asked {when(item.createdAt)}
                                            {item.sentAt ? ` · Sent ${when(item.sentAt)}` : ""}
                                            {item.reminderSentAt ? ` · Reminder ${when(item.reminderSentAt)}` : ""}
                                            {item.status === "sent" && item.linkExpiresAt ? ` · Expires ${when(item.linkExpiresAt)}` : ""}
                                        </div>
                                        {item.response?.answer && (
                                            <div style={{ ...s.line, color: item.response.answer === "yes" ? "#4CAF82" : "#E57373" }}>
                                                {item.response.answer === "yes" ? "✅ Confirmed" : "❌ Declined"} by{" "}
                                                {item.response.responderName || "parish"}
                                                {item.response.responderRole ? ` (${item.response.responderRole})` : ""} ·{" "}
                                                {when(item.response.respondedAt)}
                                            </div>
                                        )}
                                        {item.review?.reason && <div style={{ ...s.small, color: "var(--amber)" }}>Note: {item.review.reason}</div>}
                                    </div>

                                    {/* Actions */}
                                    <div style={s.actions}>
                                        {item.status === "pending_review" && (
                                            <>
                                                <button style={{ ...s.btn, ...s.btnGreen }} disabled={!!busy} onClick={() => act(item, "approve")}>
                                                    {isBusy("approve") ? "Sending…" : "Approve & send"}
                                                </button>
                                                <button
                                                    style={{ ...s.btn, ...s.btnRed }}
                                                    disabled={!!busy}
                                                    onClick={() => setReasonFor({ id: item._id, action: "reject" })}
                                                >
                                                    Reject
                                                </button>
                                            </>
                                        )}
                                        {item.status === "confirmed" && (
                                            <button
                                                style={{ ...s.btn, ...s.btnRed }}
                                                disabled={!!busy}
                                                onClick={() => setReasonFor({ id: item._id, action: "revoke" })}
                                            >
                                                Revoke
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Reason box (reject / revoke) */}
                                {reasonFor?.id === item._id && (
                                    <div style={{ marginTop: 14 }}>
                                        <label style={s.small}>
                                            Reason ({reasonFor.action === "reject" ? "the member will see this" : "shown to the member"})
                                        </label>
                                        <textarea
                                            style={s.textarea}
                                            rows={2}
                                            maxLength={300}
                                            value={reason}
                                            placeholder={
                                                reasonFor.action === "reject"
                                                    ? "e.g. We couldn't find this email on the parish website."
                                                    : "e.g. The parish asked us to remove this confirmation."
                                            }
                                            onChange={(e) => setReason(e.target.value)}
                                        />
                                        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                                            <button
                                                style={{ ...s.btn, ...s.btnRed, flex: 1 }}
                                                disabled={!!busy}
                                                onClick={() => act(item, reasonFor.action, reason)}
                                            >
                                                {isBusy(reasonFor.action) ? "Saving…" : reasonFor.action === "reject" ? "Confirm reject" : "Confirm revoke"}
                                            </button>
                                            <button
                                                style={{ ...s.btn, ...s.btnGhost, flex: 1 }}
                                                onClick={() => {
                                                    setReasonFor(null);
                                                    setReason("");
                                                }}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}

                {/* Pagination */}
                {pages > 1 && (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 18 }}>
                        <button style={{ ...s.btn, ...s.btnGhost }} disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
                            ← Previous
                        </button>
                        <span style={s.small}>
                            Page {page} of {pages} · {total} total
                        </span>
                        <button style={{ ...s.btn, ...s.btnGhost }} disabled={page >= pages} onClick={() => setPage((p) => p + 1)}>
                            Next →
                        </button>
                    </div>
                )}
            </div>

            {/* Phones: stack the three columns */}
            <style>{`@media(max-width:860px){.pv-grid{grid-template-columns:1fr !important}}`}</style>
        </main>
    );
}

// ── Styles (website tokens from globals.css) ────────────────────────────────
const s: Record<string, CSSProperties> = {
    page: { minHeight: "100vh", background: "var(--bg)", padding: "40px 16px 60px" },
    wrap: { maxWidth: 1100, margin: "0 auto" },
    h1: { fontFamily: "'EB Garamond', Georgia, serif", fontSize: 32, color: "var(--white)", margin: "0 0 6px" },
    text: { fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.7, color: "var(--dim)", margin: 0 },
    code: { background: "var(--card)", padding: "2px 8px", borderRadius: 6, color: "var(--soft-blue)" },
    tabs: { display: "flex", gap: 8, overflowX: "auto", paddingBottom: 6, marginBottom: 16 },
    tab: {
        whiteSpace: "nowrap",
        padding: "8px 16px",
        borderRadius: 100,
        border: "1px solid rgba(26,58,106,0.8)",
        background: "transparent",
        color: "var(--dim)",
        fontFamily: "Inter, sans-serif",
        fontSize: 13,
        cursor: "pointer",
    },
    tabActive: { background: "var(--primary-soft)", borderColor: "var(--primary-soft)", color: "white" },
    notice: {
        border: "1px solid",
        borderRadius: 12,
        padding: "10px 14px",
        marginBottom: 14,
        fontFamily: "Inter, sans-serif",
        fontSize: 13,
        background: "var(--card)",
    },
    card: {
        background: "var(--card)",
        border: "1px solid rgba(26,58,106,0.6)",
        borderRadius: 18,
        padding: 18,
        marginBottom: 14,
    },
    cardGrid: { display: "grid", gridTemplateColumns: "260px 1fr 170px", gap: 20 },
    photo: { width: 64, height: 64, borderRadius: 12, objectFit: "cover", flexShrink: 0, background: "rgba(21,101,192,0.12)" },
    name: { fontFamily: "'EB Garamond', Georgia, serif", fontSize: 18, color: "var(--white)" },
    small: { fontFamily: "Inter, sans-serif", fontSize: 12, color: "var(--dim)", lineHeight: 1.6 },
    line: { fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--text)", marginTop: 4 },
    pill: {
        display: "inline-block",
        marginTop: 6,
        padding: "2px 10px",
        borderRadius: 100,
        border: "1px solid",
        fontFamily: "Inter, sans-serif",
        fontSize: 11,
    },
    ok: { color: "#4CAF82", borderColor: "rgba(76,175,130,0.5)" },
    warn: { color: "#FFCA28", borderColor: "rgba(255,202,40,0.5)" },
    actions: { display: "flex", flexDirection: "column", gap: 8 },
    btn: {
        minHeight: 40,
        padding: "0 14px",
        borderRadius: 12,
        fontFamily: "Inter, sans-serif",
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        border: "1px solid transparent",
    },
    btnGreen: { background: "#2E7D5B", color: "white" },
    btnRed: { background: "rgba(229,115,115,0.15)", color: "#E57373", borderColor: "rgba(229,115,115,0.45)" },
    btnGhost: { background: "transparent", color: "var(--soft-blue)", borderColor: "rgba(26,58,106,0.8)" },
    textarea: {
        width: "100%",
        marginTop: 6,
        borderRadius: 12,
        border: "1px solid rgba(26,58,106,0.8)",
        background: "rgba(13,27,51,0.95)",
        color: "var(--white)",
        padding: 10,
        fontFamily: "Inter, sans-serif",
        fontSize: 14,
        boxSizing: "border-box",
    },
};
"use client";
// ════════════════════════════════════════════════════════════════════════════
// app/parish-verify/[token]/ParishVerifyForm.tsx — the parish's answer form
//
// Shows who is asking (first name, photo, city), then:
//   Yes, they worship with us  → asks name + role + "I'm authorised"
//   No / I don't know them     → one tap, no details needed
// Plus "Don't contact this parish again" (opt-out).
//
// Posts to /api/parish-verify (our own Next.js route), which forwards it to
// the CatholicBond API. Buttons show a loader and can't be double-clicked.
// ════════════════════════════════════════════════════════════════════════════
import { useState, type CSSProperties } from "react";

type Props = {
    token: string;
    member: { firstname: string; photo: string | null; city: string; country: string };
    parish: { name: string; city: string; country: string };
    expiresAt: string;
    roles: string[];
    /** opened from the "don't contact us again" link */
    startWithOptOut?: boolean;
};

/** Friendly names for the roles the API accepts. */
const ROLE_LABELS: Record<string, string> = {
    priest: "Priest",
    deacon: "Deacon",
    secretary: "Parish secretary",
    administrator: "Parish administrator",
    other: "Other parish staff",
};

type Step = "ask" | "yes" | "optout" | "done";
type Done = "yes" | "no" | "optout";

export default function ParishVerifyForm({
    token,
    member,
    parish,
    expiresAt,
    roles,
    startWithOptOut = false,
}: Props) {
    const [step, setStep] = useState<Step>(startWithOptOut ? "optout" : "ask");
    const [done, setDone] = useState<Done | null>(null);
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [authorised, setAuthorised] = useState(false);
    const [busy, setBusy] = useState<"" | "yes" | "no" | "optout">("");
    const [error, setError] = useState("");

    const place = [member.city, member.country].filter(Boolean).join(", ");
    const until = new Date(expiresAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    /** Sends the answer / opt-out; shows the result or an error. */
    async function send(kind: "yes" | "no" | "optout") {
        if (busy) return;
        setError("");

        if (kind === "yes" && (!name.trim() || !role || !authorised)) {
            setError("Please add your name and role, and confirm you're authorised to answer for the parish.");
            return;
        }

        setBusy(kind);
        try {
            const res = await fetch("/api/parish-verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    kind === "optout"
                        ? { action: "optout", token }
                        : {
                            action: "respond",
                            token,
                            answer: kind,
                            responderName: name.trim(),
                            responderRole: role,
                            authorised,
                        }
                ),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setError(data?.message || "Something went wrong. Please try again.");
                return;
            }
            setDone(kind);
            setStep("done");
        } catch {
            setError("Couldn't reach our server. Please check your connection and try again.");
        } finally {
            setBusy("");
        }
    }

    // ── Finished ──────────────────────────────────────────────────────────────
    if (step === "done" && done) {
        const msg = {
            yes: {
                icon: "bi-check-circle-fill",
                color: "var(--green)",
                title: "Thank you for confirming",
                text: `We've let ${member.firstname} know that ${parish.name} has confirmed them. God bless you and your parish.`,
            },
            no: {
                icon: "bi-check-circle",
                color: "var(--soft-blue)",
                title: "Thank you, your answer is recorded",
                text: `${member.firstname} will be told the parish couldn't confirm this request. No further action is needed.`,
            },
            optout: {
                icon: "bi-envelope-x",
                color: "var(--amber)",
                title: "You won't hear from us again",
                text: "We've stopped this request and won't send verification requests to this address in future.",
            },
        }[done];
        return (
            <div style={{ textAlign: "center", padding: "12px 4px" }}>
                <i className={`bi ${msg.icon}`} style={{ fontSize: 42, color: msg.color }} />
                <h1 style={{ ...s.h1, marginTop: 14 }}>{msg.title}</h1>
                <p style={s.text}>{msg.text}</p>
            </div>
        );
    }

    // ── Opt-out confirmation ──────────────────────────────────────────────────
    if (step === "optout") {
        return (
            <div>
                <h1 style={s.h1}>Stop verification requests?</h1>
                <p style={{ ...s.text, marginBottom: 20 }}>
                    We won't send any more parishioner confirmation requests to this email address, and the
                    current request from {member.firstname} will be closed.
                </p>
                {error && <p style={s.error}>{error}</p>}
                <button style={{ ...s.btn, ...s.btnDanger }} disabled={!!busy} onClick={() => send("optout")}>
                    {busy === "optout" ? <Spinner /> : "Yes, stop requests"}
                </button>
                <button style={{ ...s.btn, ...s.btnGhost }} disabled={!!busy} onClick={() => setStep("ask")}>
                    Go back to the request
                </button>
            </div>
        );
    }

    // ── The request ───────────────────────────────────────────────────────────
    return (
        <div>
            <div style={s.eyebrow}>
                <span style={s.bar} /> A REQUEST FROM ONE OF YOUR PARISHIONERS
            </div>
            <h1 style={s.h1}>
                Does {member.firstname} worship at {parish.name}?
            </h1>
            <p style={{ ...s.text, marginBottom: 20 }}>
                {member.firstname} is a member of CatholicBond, a community for Catholic adults seeking
                marriage. They asked us to check with you that they're part of your parish, and gave their
                permission for us to contact you.
            </p>

            {/* Who is asking */}
            <div style={s.person}>
                {member.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={member.photo} alt={member.firstname} width={84} height={84} style={s.photo} />
                ) : (
                    <div style={{ ...s.photo, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <i className="bi bi-person" style={{ fontSize: 34, color: "var(--dim)" }} />
                    </div>
                )}
                <div>
                    <div style={s.personName}>{member.firstname}</div>
                    {place && <div style={s.personPlace}>{place}</div>}
                </div>
            </div>

            {step === "ask" && (
                <>
                    <button style={{ ...s.btn, ...s.btnPrimary }} disabled={!!busy} onClick={() => setStep("yes")}>
                        <i className="bi bi-check-lg" /> Yes, they worship with us
                    </button>
                    <button style={{ ...s.btn, ...s.btnGhost }} disabled={!!busy} onClick={() => send("no")}>
                        {busy === "no" ? <Spinner /> : "No / I don't know this person"}
                    </button>
                    {error && <p style={s.error}>{error}</p>}
                </>
            )}

            {step === "yes" && (
                <div style={{ marginTop: 6 }}>
                    <label style={s.label}>Your name</label>
                    <input
                        style={s.input}
                        value={name}
                        maxLength={100}
                        placeholder="e.g. Fr. John Murphy"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label style={s.label}>Your role</label>
                    <select style={s.input} value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">Choose your role</option>
                        {roles.map((r) => (
                            <option key={r} value={r}>
                                {ROLE_LABELS[r] || r}
                            </option>
                        ))}
                    </select>

                    <label style={s.check}>
                        <input
                            type="checkbox"
                            checked={authorised}
                            onChange={(e) => setAuthorised(e.target.checked)}
                            style={{ marginTop: 3, accentColor: "#1976D2" }}
                        />
                        <span>
                            I'm authorised by {parish.name} to confirm that {member.firstname} worships with us.
                        </span>
                    </label>

                    {error && <p style={s.error}>{error}</p>}

                    <button style={{ ...s.btn, ...s.btnPrimary }} disabled={!!busy} onClick={() => send("yes")}>
                        {busy === "yes" ? <Spinner /> : "Confirm"}
                    </button>
                    <button style={{ ...s.btn, ...s.btnGhost }} disabled={!!busy} onClick={() => setStep("ask")}>
                        Back
                    </button>
                </div>
            )}

            <p style={s.small}>
                This request is open until {until}. Your answer is only used to show a “Parish verified”
                badge on {member.firstname}&apos;s profile.{" "}
                <button style={s.linkBtn} onClick={() => setStep("optout")}>
                    Don&apos;t contact this parish again
                </button>
            </p>
        </div>
    );
}

/** Small spinner shown inside a button while sending. */
function Spinner() {
    return (
        <span
            aria-label="Sending"
            style={{
                width: 18,
                height: 18,
                border: "2px solid rgba(255,255,255,0.35)",
                borderTopColor: "#fff",
                borderRadius: "50%",
                display: "inline-block",
                animation: "pvspin 0.8s linear infinite",
            }}
        >
            <style>{`@keyframes pvspin{to{transform:rotate(360deg)}}`}</style>
        </span>
    );
}

// ── Styles (same look as the rest of the site) ──────────────────────────────
const s: Record<string, CSSProperties> = {
    eyebrow: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "1.6px",
        color: "var(--dim)",
        marginBottom: 12,
        fontFamily: "Inter, sans-serif",
    },
    bar: { width: 3, height: 14, background: "var(--primary-soft)", borderRadius: 2, display: "inline-block" },
    h1: {
        fontFamily: "'EB Garamond', Georgia, serif",
        fontSize: 26,
        lineHeight: 1.25,
        color: "var(--white)",
        margin: "0 0 10px",
    },
    text: { fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.7, color: "var(--dim)", margin: 0 },
    person: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        background: "rgba(13,27,51,0.95)",
        border: "1px solid rgba(26,58,106,0.50)",
        borderRadius: 16,
        padding: 14,
        marginBottom: 20,
    },
    photo: {
        width: 84,
        height: 84,
        borderRadius: "50%",
        objectFit: "cover",
        border: "3px solid #D4AF37",
        flexShrink: 0,
        background: "rgba(21,101,192,0.12)",
    },
    personName: { fontFamily: "'EB Garamond', Georgia, serif", fontSize: 22, color: "var(--white)" },
    personPlace: { fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--dim)", marginTop: 2 },
    btn: {
        width: "100%",
        minHeight: 50,
        borderRadius: 14,
        fontSize: 15,
        fontWeight: 600,
        fontFamily: "Inter, sans-serif",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginTop: 10,
        border: "none",
    },
    btnPrimary: {
        background: "linear-gradient(135deg, var(--primary-dark), var(--primary-soft))",
        color: "white",
        boxShadow: "0 6px 20px rgba(21,101,192,0.40)",
    },
    btnGhost: {
        background: "transparent",
        color: "var(--soft-blue)",
        border: "1px solid rgba(26,58,106,0.80)",
    },
    btnDanger: {
        background: "rgba(229,115,115,0.15)",
        color: "#E57373",
        border: "1px solid rgba(229,115,115,0.45)",
    },
    label: {
        display: "block",
        fontFamily: "Inter, sans-serif",
        fontSize: 13,
        color: "var(--dim)",
        margin: "14px 0 6px",
    },
    input: {
        width: "100%",
        minHeight: 46,
        borderRadius: 12,
        border: "1px solid rgba(26,58,106,0.80)",
        background: "rgba(13,27,51,0.95)",
        color: "var(--white)",
        padding: "0 14px",
        fontSize: 15,
        fontFamily: "Inter, sans-serif",
        boxSizing: "border-box",
    },
    check: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
        fontFamily: "Inter, sans-serif",
        fontSize: 14,
        lineHeight: 1.6,
        color: "var(--text)",
        margin: "16px 0 6px",
        cursor: "pointer",
    },
    error: {
        fontFamily: "Inter, sans-serif",
        fontSize: 13,
        color: "#E57373",
        margin: "12px 0 0",
    },
    small: {
        fontFamily: "Inter, sans-serif",
        fontSize: 12,
        lineHeight: 1.7,
        color: "var(--dim)",
        marginTop: 22,
        marginBottom: 0,
    },
    linkBtn: {
        background: "none",
        border: "none",
        padding: 0,
        color: "var(--dim)",
        textDecoration: "underline",
        cursor: "pointer",
        fontSize: 12,
        fontFamily: "Inter, sans-serif",
    },
};
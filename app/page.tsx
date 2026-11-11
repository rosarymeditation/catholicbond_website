import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CatholicBond | Catholic dating for marriage",
  description:
    "CatholicBond is a dating app for single Catholics who want to marry in the faith. Photo-verified profiles, parish verification, and a community that takes faith and marriage seriously.",
  alternates: { canonical: "https://www.catholicbond.com" },
};

// Structured data for search engines.
// Ratings are left out on purpose: only add an aggregateRating that matches
// your real App Store / Google Play rating, or Google may penalise the page.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "CatholicBond",
    operatingSystem: "iOS, Android",
    applicationCategory: "LifestyleApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  {
    "@context": "https://schema.org",
    "@type": "DatingService",
    name: "CatholicBond",
    description: "A dating app for single Catholics who want to marry in the faith.",
    url: "https://www.catholicbond.com",
    operatingArea: { "@type": "Country", name: "Worldwide" },
  },
];

const FAQS = [
  { q: "Is CatholicBond free?", a: "Yes. You can join, build your profile, match and message for free. Premium adds unlimited messaging, match requests, parish verification, read receipts and the gold cross badge." },
  { q: "What is parish verification?", a: "A way for your parish to confirm that you worship there. You give us your parish's details and permission to contact them. We check the details, email the parish office, and if they confirm, a Parish verified badge appears on your profile for 12 months. It's available to Premium members." },
  { q: "Who answers the parish email?", a: "Usually the parish priest or the parish secretary. They see your first name and photo and simply confirm whether you're part of the parish. They don't need an account, and we never add them to a mailing list." },
  { q: "Are profiles verified?", a: "Members can verify their photos with a live selfie, which adds a blue badge to their profile. We'd always suggest talking to verified members, and reporting anything that doesn't feel right." },
  { q: "How do you deal with scammers and fake profiles?", a: "Everyone agrees to our community promise when they join, including never asking for money. Our team reviews every report, and accounts that break the rules are removed." },
  { q: "Is CatholicBond available in my country?", a: "Yes, it's available worldwide on the App Store and Google Play, including the UK, Ireland, the US, Nigeria and across Latin America." },
  { q: "How is it different from other Catholic dating sites?", a: "Faith sits at the centre of every profile, and trust is built in: photo verification, parish verification and a promise everyone agrees to. You can also start for free, without a card." },
];

// FAQ data for search engines, built from the same list shown on the page
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

// ── Type & layout ─────────────────────────────────────────────────────────────
const serif = "'EB Garamond', Georgia, serif";
const sans = "Inter, sans-serif";

const s = {
  wrap: { maxWidth: 1080, margin: "0 auto", padding: "0 24px" },
  narrow: { maxWidth: 720, margin: "0 auto", padding: "0 24px" },
  h1: { fontFamily: serif, fontWeight: 500, fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.04, letterSpacing: "-0.02em", color: "var(--white)", margin: "0 0 24px" },
  h2: { fontFamily: serif, fontWeight: 500, fontSize: "clamp(32px, 4.2vw, 46px)", lineHeight: 1.1, letterSpacing: "-0.015em", color: "var(--white)", margin: "0 0 20px" },
  h3: { fontFamily: serif, fontWeight: 500, fontSize: 22, lineHeight: 1.25, color: "var(--white)", margin: "0 0 6px" },
  body: { fontFamily: sans, fontSize: 16.5, lineHeight: 1.7, color: "var(--text)", margin: "0 0 18px" },
  small: { fontFamily: sans, fontSize: 14.5, lineHeight: 1.65, color: "var(--dim)", margin: 0 },
  label: { fontFamily: sans, fontSize: 13, color: "var(--amber)", margin: "0 0 18px" },
  rule: { border: 0, borderTop: "1px solid rgba(26,58,106,0.55)", margin: 0 },
} satisfies Record<string, CSSProperties>;

function Section({ id, bg = "var(--bg)", children }: { id: string; bg?: string; children: ReactNode }) {
  return (
    <section id={id} className="sec" style={{ padding: "112px 0", background: bg }}>
      {children}
    </section>
  );
}

function StoreButtons() {
  return (
    <div className="store" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <a href="/go" style={{ background: "var(--white)", color: "#0A1628", padding: "13px 22px", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: sans }}>
        <i className="bi bi-apple" /> App Store
      </a>
      <a href="/go" style={{ color: "var(--white)", padding: "13px 22px", borderRadius: 10, fontSize: 15, fontWeight: 600, border: "1px solid rgba(238,244,255,0.25)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: sans }}>
        <i className="bi bi-google-play" /> Google Play
      </a>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {[...jsonLd, faqLd].map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Header />

      {/* ── HERO ── */}
      <section id="hero" style={{ padding: "150px 0 96px", background: "var(--bg)" }}>
        <div style={s.wrap}>
          <div className="two" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 64, alignItems: "center" }}>
            <div>
              <p style={s.label}>For Catholics discerning marriage</p>
              <h1 style={s.h1}>Meet someone who shares your faith, and your future.</h1>
              <p style={{ ...s.body, fontSize: 18, maxWidth: 520, color: "var(--dim)", marginBottom: 32 }}>
                CatholicBond is a dating app for single Catholics who hope to marry in the Church. Profiles are built around faith, members can verify their photos, and your parish can even confirm you worship there.
              </p>
              <StoreButtons />
              <p style={{ ...s.small, fontSize: 13.5, marginTop: 18 }}>Free to join · iPhone and Android · Worldwide</p>
            </div>

            <div className="hero-image" style={{ display: "flex", justifyContent: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/img/app.png" alt="CatholicBond app showing a Catholic member's profile on iPhone" width={320} height={640} style={{ maxWidth: 320, width: "100%", height: "auto", borderRadius: 28 }} fetchPriority="high" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <Section id="about" bg="var(--surface)">
        <div style={s.wrap}>
          <div className="two" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 72, alignItems: "center" }}>
            <Image src="/assets/img/catholic_couple.png" alt="A Catholic couple" width={600} height={520} style={{ width: "100%", height: "auto", borderRadius: 14, objectFit: "cover", maxHeight: 560 }} loading="lazy" />

            <div>
              <h2 style={s.h2}>Faith isn&apos;t a box to tick here. It&apos;s where things start.</h2>
              <p style={s.body}>
                On most apps, religion is one line on a long profile. On CatholicBond you can see whether someone goes to Mass, how they pray and what they hope for in family life before you ever say hello.
              </p>
              <p style={{ ...s.body, color: "var(--dim)" }}>
                We keep things calm and intentional. Everyone agrees to a short community promise when they join, and our team acts quickly on fake profiles, scams and anyone who doesn&apos;t treat others with respect.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── PARISH VERIFICATION ── */}
      <Section id="parish-verification">
        <div style={s.wrap}>
          <div style={{ maxWidth: 720 }}>
            <div>
              <p style={s.label}>New for Premium members</p>
              <h2 style={s.h2}>Let your parish vouch for you.</h2>
              <p style={{ ...s.body, marginBottom: 36 }}>
                Anyone can write &ldquo;practising Catholic&rdquo; on a profile. Parish verification lets your parish confirm it, and adds a <span style={{ color: "var(--amber)" }}>Parish verified</span> badge to your profile so the people you meet know your faith is lived, not just listed.
              </p>

              <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  ["Tell us your parish", "Your parish name, town, and the parish office email from its website. You give us permission to contact them."],
                  ["We check, then ask them", "Our team looks over the details first, then sends the parish office a short, private email with your first name and photo."],
                  ["Your parish answers", "The priest or parish secretary confirms with one tap. If they say yes, your badge goes live for 12 months."],
                ].map(([title, desc], i) => (
                  <li key={title} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 8, padding: "20px 0", borderTop: "1px solid rgba(26,58,106,0.55)" }}>
                    <span style={{ fontFamily: serif, fontSize: 22, color: "var(--amber)", lineHeight: 1.2 }}>{i + 1}</span>
                    <div>
                      <h3 style={{ ...s.h3, fontSize: 20 }}>{title}</h3>
                      <p style={s.small}>{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p style={{ ...s.small, fontSize: 13, marginTop: 20 }}>Parishes are never added to mailing lists, and their answer is only used for the badge.</p>
            </div>

          </div>
        </div>
      </Section>

      {/* ── FEATURES ── */}
      <Section id="features" bg="var(--surface)">
        <div style={s.wrap}>
          <h2 style={{ ...s.h2, maxWidth: 640 }}>What&apos;s in the app</h2>
          <p style={{ ...s.body, color: "var(--dim)", maxWidth: 560, marginBottom: 48 }}>Most of it is there to protect you. The rest is there to help a good conversation start.</p>

          <div className="cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 64 }}>
            {[
              ["Photo verification", "Take a live selfie and we match it to your photos. Verified profiles carry a blue badge."],
              ["Parish verification", "Premium members can ask their parish to confirm they worship there, shown with a gold badge."],
              ["Mutual matching", "Show interest in someone. If they feel the same, you match and can talk freely."],
              ["Match requests", "Premium members can send a direct request with one tap. The other person accepts or declines."],
              ["One message a day", "Free members get one new message a day, which tends to make each one count. Premium removes the limit."],
              ["Faith quiz badge", "Take a short quiz on the Catholic faith. Pass it and a badge appears on your profile."],
              ["Profile snooze", "Hide your profile from discovery whenever you need a break, and come back when you're ready."],
              ["Report and block", "Our team reviews every report. Fake profiles and scammers are removed."],
            ].map(([title, desc]) => (
              <div key={title} style={{ padding: "22px 0", borderTop: "1px solid rgba(26,58,106,0.55)" }}>
                <h3 style={s.h3}>{title}</h3>
                <p style={s.small}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section id="how">
        <div style={s.wrap}>
          <div className="two" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 72 }}>
            <div>
              <h2 style={s.h2}>Getting started</h2>
              <p style={{ ...s.body, color: "var(--dim)" }}>Setting up takes a few minutes. Getting to know someone takes as long as it takes.</p>
            </div>
            <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                ["Create your profile", "Sign up with your email, Google or Apple. Add photos and answer a few questions about your faith, your values and what you're looking for."],
                ["Get verified", "Verify your photos with a quick selfie. On Premium, you can also ask your parish to confirm you."],
                ["Meet and talk", "Browse Catholic singles by age, location and values. When interest is mutual, say hello and see where it leads."],
              ].map(([title, desc], i) => (
                <li key={title} style={{ display: "grid", gridTemplateColumns: "56px 1fr", padding: "24px 0", borderTop: "1px solid rgba(26,58,106,0.55)" }}>
                  <span style={{ fontFamily: serif, fontSize: 34, lineHeight: 1, color: "var(--dim)" }}>{i + 1}</span>
                  <div>
                    <h3 style={s.h3}>{title}</h3>
                    <p style={s.small}>{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* ── COMMUNITY PROMISE ── */}
      <Section id="community" bg="var(--surface)">
        <div style={s.narrow}>
          <h2 style={s.h2}>The promise everyone makes</h2>
          <p style={{ ...s.body, color: "var(--dim)", marginBottom: 36 }}>
            Before anyone joins, they agree to four things. It&apos;s short, and we take it seriously.
          </p>
          {[
            ["Be honest.", "Real photos, true details, real intentions."],
            ["Treat others with dignity.", "Kindness and respect, even when it isn't a match."],
            ["Keep it chaste and kind.", "Conversations worthy of the person you hope to marry."],
            ["Never ask for money.", "Asking for money or gifts means a permanent ban."],
          ].map(([title, desc]) => (
            <p key={title} style={{ fontFamily: serif, fontSize: 24, lineHeight: 1.4, color: "var(--white)", margin: 0, padding: "18px 0", borderTop: "1px solid rgba(26,58,106,0.55)" }}>
              {title} <span style={{ color: "var(--dim)" }}>{desc}</span>
            </p>
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section id="faq">
        <div style={s.narrow}>
          <h2 style={{ ...s.h2, marginBottom: 32 }}>Questions</h2>
          {FAQS.map(({ q, a }) => (
            <details key={q} className="faq" style={{ borderTop: "1px solid rgba(26,58,106,0.55)" }}>
              <summary style={{ listStyle: "none", cursor: "pointer", padding: "20px 0", display: "flex", justifyContent: "space-between", gap: 16, fontFamily: sans, fontSize: 17, fontWeight: 500, color: "var(--white)" }}>
                {q}
                <i className="bi bi-plus-lg" style={{ color: "var(--dim)", flexShrink: 0 }} />
              </summary>
              <p style={{ ...s.small, fontSize: 15.5, paddingBottom: 22, maxWidth: 620 }}>{a}</p>
            </details>
          ))}
          <hr style={s.rule} />
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section id="cta" bg="var(--surface)">
        <div style={s.wrap}>
          <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end" }}>
            <div>
              <h2 style={{ ...s.h2, marginBottom: 12 }}>Someone is looking for a person like you.</h2>
              <p style={{ ...s.body, color: "var(--dim)", margin: 0 }}>Download CatholicBond and meet Catholics who want what you want.</p>
            </div>
            <StoreButtons />
          </div>
        </div>
      </Section>

      <Footer />

      <style>{`
        body { font-family: 'Inter', sans-serif; }
        .faq summary::-webkit-details-marker { display: none; }
        .faq[open] summary i { transform: rotate(45deg); }
        .faq summary i { transition: transform .2s ease; }

        @media (max-width: 900px) {
          .two { grid-template-columns: 1fr !important; gap: 40px !important; }
          .cols { grid-template-columns: 1fr !important; }
          #hero { padding: 120px 0 72px !important; }
          .hero-image { order: -1; }
          .hero-image img { max-width: 240px !important; }
        }
        @media (max-width: 575px) {
          .sec { padding: 72px 0 !important; }
          .store a { flex: 1 1 auto; justify-content: center; }
        }
      `}</style>
    </>
  );
}
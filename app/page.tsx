import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CatholicBond — Find Love Rooted in Faith",
  description:
    "CatholicBond connects single Catholics seeking meaningful, Christ-centred relationships. Join a verified community of devout singles building love on a foundation of shared faith.",
  alternates: { canonical: "https://www.catholicbond.com" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "CatholicBond",
    operatingSystem: "iOS, Android",
    applicationCategory: "LifestyleApplication",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "2400" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is CatholicBond free?", acceptedAnswer: { "@type": "Answer", text: "Yes. CatholicBond is free to join and explore. Premium membership unlocks unlimited messaging and additional features." } },
      { "@type": "Question", name: "How is CatholicBond different from CatholicMatch?", acceptedAnswer: { "@type": "Answer", text: "CatholicBond offers photo verification, a faith quiz badge system, mutual matching, and a growing global community — with a free tier that lets you start connecting immediately." } },
      { "@type": "Question", name: "Is CatholicBond available on iPhone and Android?", acceptedAnswer: { "@type": "Answer", text: "Yes. CatholicBond is available on both iOS App Store and Google Play Store worldwide." } },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "DatingService",
    name: "CatholicBond",
    description: "A faith-based dating app for Catholic singles seeking serious relationships.",
    url: "https://www.catholicbond.com",
    operatingArea: { "@type": "Country", name: "Worldwide" },
  },
];

export default function HomePage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Header />

      {/* ── HERO ── */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 0 80px", position: "relative", overflow: "hidden", background: "var(--bg)" }}>
        <div style={{ position: "absolute", top: -200, right: -200, width: 700, height: 700, background: "radial-gradient(circle, rgba(21,101,192,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -100, left: -100, width: 500, height: 500, background: "radial-gradient(circle, rgba(21,101,192,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid">

            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(21,101,192,0.12)", border: "1px solid rgba(21,101,192,0.30)", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "var(--soft-blue)", fontWeight: 500, marginBottom: 28 }}>
                <span style={{ width: 6, height: 6, background: "var(--green)", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
                Faith-Centred Dating — Now Available Worldwide
              </div>

              <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.15, fontWeight: 700, color: "var(--white)", marginBottom: 20 }}>
                Find Love Built on{" "}
                <br />
                <span style={{ background: "linear-gradient(135deg, var(--primary-soft), var(--soft-blue))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Faith, Trust
                </span>
                <br />
                and Shared Values
              </h1>

              <p style={{ fontSize: 16, color: "var(--dim)", maxWidth: 480, lineHeight: 1.8, marginBottom: 36, fontFamily: "Inter, sans-serif" }}>
                CatholicBond connects devout Catholics seeking meaningful relationships grounded in Christ. Verified profiles, intentional conversations, and a community that understands what you are truly looking for.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="/go" style={{ background: "linear-gradient(135deg, var(--primary-dark), var(--primary-soft))", color: "white", padding: "14px 28px", borderRadius: 14, fontSize: 15, fontWeight: 600, textDecoration: "none", boxShadow: "0 6px 20px rgba(21,101,192,0.40)", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <i className="bi bi-apple" /> Download on App Store
                </a>
                <a href="/go" style={{ background: "transparent", color: "var(--soft-blue)", padding: "14px 28px", borderRadius: 14, fontSize: 15, fontWeight: 600, border: "1px solid rgba(26,58,106,0.80)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <i className="bi bi-google-play" /> Get on Google Play
                </a>
              </div>
            </div>

            <div className="hero-image" style={{ display: "flex", justifyContent: "center", position: "relative", minHeight: 300 }}>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(21,101,192,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/img/app.png" alt="CatholicBond dating app showing Catholic singles profiles on iPhone" width={340} height={680} style={{ maxWidth: 340, width: "100%", height: "auto", filter: "drop-shadow(0 30px 60px rgba(21,101,192,0.30))", borderRadius: 28 }} fetchPriority="high" />
            </div>
          </div>

          {/* Stats */}
          <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="stats-grid">
            {[
              { icon: "bi-people-fill", title: "120k+ Members", desc: "Faithful Catholics worldwide" },
              { icon: "bi-heart-fill", title: "10k+ Matches", desc: "Meaningful connections made" },
              { icon: "bi-chat-dots-fill", title: "500k+ Messages", desc: "Faith-centred conversations" },
              { icon: "bi-star-fill", title: "Rated 4.9 / 5", desc: "Loved by Catholic singles" },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "rgba(13,27,51,0.95)", border: "1px solid rgba(26,58,106,0.50)", borderRadius: 16, padding: 20, display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, background: "rgba(21,101,192,0.15)", border: "1px solid rgba(21,101,192,0.25)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 18, color: "var(--primary-soft)" }}>
                  <i className={`bi ${icon}`} />
                </div>
                <div>
                  <h4 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 16, color: "var(--white)", marginBottom: 2 }}>{title}</h4>
                  <p style={{ fontSize: 12, color: "var(--dim)", margin: 0, fontFamily: "Inter, sans-serif" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "100px 0", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid">
            <div style={{ position: "relative" }}>
              <Image src="/assets/img/catholic_couple.png" alt="Catholic couple who met on CatholicBond faith-based dating app" width={600} height={520} style={{ width: "100%", borderRadius: 24, objectFit: "cover", maxHeight: 520, border: "1px solid rgba(26,58,106,0.40)" }} loading="lazy" />
              <div style={{ position: "absolute", bottom: -20, left: -20, background: "var(--card)", border: "1px solid rgba(26,58,106,0.60)", borderRadius: 16, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.30)" }}>
                <div style={{ width: 40, height: 40, background: "rgba(76,175,130,0.15)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green)", fontSize: 18 }}>
                  <i className="bi bi-shield-check" />
                </div>
                <div>
                  <h5 style={{ fontSize: 15, color: "var(--white)", marginBottom: 2, fontFamily: "'EB Garamond', Georgia, serif" }}>Verified Community</h5>
                  <p style={{ fontSize: 12, color: "var(--dim)", margin: 0, fontFamily: "Inter, sans-serif" }}>Every member photo-verified</p>
                </div>
              </div>
            </div>

            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px", color: "var(--dim)", textTransform: "uppercase", marginBottom: 14, fontFamily: "Inter, sans-serif" }}>
                <div style={{ width: 3, height: 14, background: "var(--primary-soft)", borderRadius: 2 }} />
                ABOUT CATHOLICBOND
              </div>
              <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(28px,4vw,42px)", lineHeight: 1.2, color: "var(--white)", marginBottom: 16 }}>
                Faith-First Dating for<br />Devoted Catholics
              </h2>
              <p style={{ fontSize: 15, color: "var(--dim)", lineHeight: 1.8, maxWidth: 540, marginBottom: 28, fontFamily: "Inter, sans-serif" }}>
                CatholicBond is built for those who believe love grows strongest when rooted in shared faith. We created a space where Catholics can pursue genuine connection — without compromise, without rush, and without noise.
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {[
                  "Profiles built around Catholic values and faith journey",
                  "Photo-verified members for a safer, more authentic community",
                  "Intentional messaging designed to encourage real conversation",
                  "Faith quiz badges to signal your commitment and values",
                  "Free to join — start discovering matches today",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(26,58,106,0.25)", fontSize: 14, color: "var(--text)", fontFamily: "Inter, sans-serif" }}>
                    <div style={{ width: 20, height: 20, background: "rgba(76,175,130,0.15)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green)", fontSize: 11, flexShrink: 0, marginTop: 1 }}>
                      <i className="bi bi-check" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "100px 0", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px", color: "var(--dim)", textTransform: "uppercase", marginBottom: 14, fontFamily: "Inter, sans-serif" }}>
              <div style={{ width: 3, height: 14, background: "var(--primary-soft)", borderRadius: 2 }} />
              WHY CATHOLICBOND
              <div style={{ width: 3, height: 14, background: "var(--primary-soft)", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(28px,4vw,42px)", lineHeight: 1.2, color: "var(--white)", marginBottom: 16 }}>
              Everything You Need to<br />Connect with Confidence
            </h2>
            <p style={{ fontSize: 15, color: "var(--dim)", lineHeight: 1.8, maxWidth: 540, margin: "0 auto", fontFamily: "Inter, sans-serif" }}>
              Every feature is designed with your faith and your safety in mind.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 56 }} className="features-grid">
            {[
              { icon: "bi-shield-check", color: "rgba(21,101,192,0.15)", iconColor: "var(--primary-soft)", title: "Photo Verification", desc: "Every member verifies their identity with a selfie. No fake profiles, no catfishing — just real Catholics seeking real connection." },
              { icon: "bi-heart-fill", color: "rgba(76,175,130,0.15)", iconColor: "var(--green)", title: "Mutual Matching", desc: "When two members like each other a match is created. Matched users can message freely without any daily limits — pure, mutual interest." },
              { icon: "bi-patch-check-fill", color: "rgba(255,202,40,0.12)", iconColor: "var(--amber)", title: "Faith Quiz Badge", desc: "Pass our Catholic faith quiz to earn a badge displayed on your profile — a visible signal of your knowledge and commitment to the faith." },
              { icon: "bi-chat-heart-fill", color: "rgba(21,101,192,0.15)", iconColor: "var(--primary-soft)", title: "Intentional Messaging", desc: "Free members send one thoughtful message per day — encouraging quality over quantity. Premium members enjoy unlimited messaging." },
              { icon: "bi-eye-slash-fill", color: "rgba(76,175,130,0.15)", iconColor: "var(--green)", title: "Profile Snooze", desc: "Need a break? Snooze your profile at any time. You disappear from discovery until you are ready to return — full control, always." },
              { icon: "bi-star-fill", color: "rgba(255,202,40,0.12)", iconColor: "var(--amber)", title: "Premium Cross Badge", desc: "Upgrade to Premium and earn a gold cross badge on your profile — a signal of serious intent that helps you stand out in the community." },
            ].map(({ icon, color, iconColor, title, desc }) => (
              <div key={title} style={{ background: "var(--card)", border: "1px solid rgba(26,58,106,0.50)", borderRadius: 20, padding: "28px 24px", transition: "all 0.25s ease", position: "relative", overflow: "hidden" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 18, background: color }}>
                  <i className={`bi ${icon}`} style={{ color: iconColor }} />
                </div>
                <h4 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 17, color: "var(--white)", marginBottom: 10 }}>{title}</h4>
                <p style={{ fontSize: 13.5, color: "var(--dim)", lineHeight: 1.75, margin: 0, fontFamily: "Inter, sans-serif" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={{ padding: "100px 0", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px", color: "var(--dim)", textTransform: "uppercase", marginBottom: 14, fontFamily: "Inter, sans-serif" }}>
              <div style={{ width: 3, height: 14, background: "var(--primary-soft)", borderRadius: 2 }} />
              HOW IT WORKS
              <div style={{ width: 3, height: 14, background: "var(--primary-soft)", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(28px,4vw,42px)", lineHeight: 1.2, color: "var(--white)", marginBottom: 16 }}>
              Three Steps to Finding<br />Your Faith Partner
            </h2>
            <p style={{ fontSize: 15, color: "var(--dim)", lineHeight: 1.8, maxWidth: 540, margin: "0 auto", fontFamily: "Inter, sans-serif" }}>
              Getting started takes less than two minutes.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32, marginTop: 56, position: "relative" }} className="steps-grid">
            {[
              { n: "1", title: "Create Your Profile", desc: "Sign up with your email, share your faith journey, interests, and upload your best photos. The more you share, the better your matches." },
              { n: "2", title: "Verify & Discover", desc: "Complete photo verification to earn your blue badge. Then browse verified Catholic singles filtered by age, location, and values." },
              { n: "3", title: "Connect & Grow", desc: "Like profiles, create mutual matches, and start meaningful conversations. Let faith guide every step toward something truly special." },
            ].map(({ n, title, desc }) => (
              <div key={n} style={{ textAlign: "center", padding: "0 16px" }}>
                <div style={{ width: 64, height: 64, background: "linear-gradient(135deg, var(--primary-dark), var(--primary-soft))", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'EB Garamond', Georgia, serif", fontSize: 22, color: "white", margin: "0 auto 20px", boxShadow: "0 8px 24px rgba(21,101,192,0.40)" }}>
                  {n}
                </div>
                <h4 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 18, color: "var(--white)", marginBottom: 10 }}>{title}</h4>
                <p style={{ fontSize: 13.5, color: "var(--dim)", lineHeight: 1.75, fontFamily: "Inter, sans-serif" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" style={{ padding: "100px 0", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px", color: "var(--dim)", textTransform: "uppercase", marginBottom: 14, fontFamily: "Inter, sans-serif" }}>
              <div style={{ width: 3, height: 14, background: "var(--primary-soft)", borderRadius: 2 }} />
              STORIES OF FAITH
              <div style={{ width: 3, height: 14, background: "var(--primary-soft)", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(28px,4vw,42px)", lineHeight: 1.2, color: "var(--white)" }}>Real Connections,<br />Real Stories</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="features-grid">
            {[
              { quote: "I had almost given up on finding someone who truly shared my faith. CatholicBond changed everything. We met, talked for weeks, and now we attend Mass together every Sunday.", name: "Isabella M.", location: "São Paulo, Brazil", initial: "I" },
              { quote: "The photo verification gave me so much confidence. I knew every person I spoke to was real. I met my fiancée here six months ago and we are getting married in the Church.", name: "Michael T.", location: "Chicago, USA", initial: "M" },
              { quote: "What I love most is the intentionality. The men here take their time and write thoughtfully. It felt completely different from every other dating app I have tried.", name: "Sofía R.", location: "Guadalajara, Mexico", initial: "S" },
              { quote: "I was sceptical about Catholic dating apps but CatholicBond is genuinely different. The faith quiz badge helped me find someone who lives their faith, not just claims it.", name: "Lucas F.", location: "Rio de Janeiro, Brazil", initial: "L" },
              { quote: "As a Catholic in a big city it felt impossible to meet someone serious. Within two months on CatholicBond I met the woman I am going to marry. God is good.", name: "Daniel G.", location: "Los Angeles, USA", initial: "D" },
              { quote: "Me encantó que todos los perfiles están verificados. Conocí a mi novio aquí y compartimos la misma devoción a la Virgen de Guadalupe. Es una bendición.", name: "Valentina C.", location: "Mexico City, Mexico", initial: "V" },
            ].map(({ quote, name, location, initial }) => (
              <div key={name} style={{ background: "var(--card)", border: "1px solid rgba(26,58,106,0.50)", borderRadius: 20, padding: "28px 24px" }}>
                <div style={{ color: "var(--amber)", fontSize: 13, marginBottom: 14, letterSpacing: 2 }}>★★★★★</div>
                <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.8, fontStyle: "italic", marginBottom: 20, fontFamily: "Inter, sans-serif" }}>&ldquo;{quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg, var(--primary-dark), var(--primary-soft))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'EB Garamond', Georgia, serif", fontSize: 16, color: "white", flexShrink: 0 }}>
                    {initial}
                  </div>
                  <div>
                    <h5 style={{ fontSize: 14, color: "var(--white)", marginBottom: 2, fontFamily: "'EB Garamond', Georgia, serif" }}>{name}</h5>
                    <p style={{ fontSize: 11, color: "var(--dim)", margin: 0, fontFamily: "Inter, sans-serif" }}>{location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "100px 0", background: "var(--surface)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px", color: "var(--dim)", textTransform: "uppercase", marginBottom: 14, fontFamily: "Inter, sans-serif" }}>
              <div style={{ width: 3, height: 14, background: "var(--primary-soft)", borderRadius: 2 }} />
              FAQ
              <div style={{ width: 3, height: 14, background: "var(--primary-soft)", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(28px,4vw,42px)", lineHeight: 1.2, color: "var(--white)" }}>Frequently Asked<br />Questions</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: "Is CatholicBond better than CatholicMatch?", a: "CatholicBond offers photo verification on every profile, a Catholic faith quiz badge, mutual matching, and a free tier with no credit card required — making it more accessible and more trustworthy than traditional Catholic dating sites." },
              { q: "How much does CatholicBond cost?", a: "CatholicBond is free to download and join. Premium membership unlocks unlimited messaging, read receipts, and a verified cross badge." },
              { q: "Is CatholicBond available on iPhone and Android?", a: "Yes. CatholicBond is available on both the iOS App Store and Google Play Store, worldwide." },
              { q: "Are profiles on CatholicBond verified?", a: "Yes. Every member completes a photo verification step using a real-time selfie. This eliminates fake profiles and ensures every person you connect with is genuine." },
              { q: "Is CatholicBond available in Nigeria?", a: "Yes. CatholicBond has a large and growing community of Nigerian Catholic singles. We have dedicated support for users in Lagos, Abuja, Port Harcourt, and across Nigeria." },
            ].map(({ q, a }) => (
              <div key={q} itemScope itemProp="mainEntity" itemType="https://schema.org/Question" style={{ background: "var(--card)", border: "1px solid rgba(26,58,106,0.50)", borderRadius: 16, padding: "24px 28px" }}>
                <h3 itemProp="name" style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 17, color: "var(--white)", marginBottom: 10 }}>{q}</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" style={{ fontSize: 14, color: "var(--dim)", lineHeight: 1.8, margin: 0, fontFamily: "Inter, sans-serif" }}>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" style={{ padding: "100px 0", background: "var(--surface)", textAlign: "center" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ background: "linear-gradient(135deg, rgba(13,71,161,0.25), rgba(25,118,210,0.12))", border: "1px solid rgba(21,101,192,0.30)", borderRadius: 28, padding: "72px 40px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -150, left: "50%", transform: "translateX(-50%)", width: 500, height: 500, background: "radial-gradient(circle, rgba(21,101,192,0.15) 0%, transparent 65%)", pointerEvents: "none" }} />
            <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(28px,4vw,42px)", color: "var(--white)", marginBottom: 16 }}>
              Your Faithful Partner<br />Is Already Here
            </h2>
            <p style={{ fontSize: 16, color: "var(--dim)", maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.8, fontFamily: "Inter, sans-serif" }}>
              Join over 120,000 Catholics who chose intentional love over endless swiping. Download CatholicBond today.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              {[["bi-apple", "Download on the", "App Store"], ["bi-google-play", "Get it on", "Google Play"]].map(([icon, small, strong]) => (
                <a key={strong} href="/go" style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "rgba(13,27,51,0.80)", border: "1px solid rgba(26,58,106,0.70)", borderRadius: 14, padding: "12px 22px", color: "var(--white)", textDecoration: "none", minWidth: 160 }}>
                  <i className={`bi ${icon}`} style={{ fontSize: 24, color: "var(--soft-blue)" }} />
                  <div>
                    <small style={{ display: "block", fontSize: 11, color: "var(--dim)", lineHeight: 1, marginBottom: 2, fontFamily: "Inter, sans-serif" }}>{small}</small>
                    <strong style={{ fontSize: 15, fontFamily: "'EB Garamond', Georgia, serif" }}>{strong}</strong>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Responsive + animations */}
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

        body { font-family: 'Inter', sans-serif; }

        /* Tablet */
        @media(max-width:991px){
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:last-child { order: -1; }
          .hero-grid p { margin-left: auto; margin-right: auto; }
          .hero-grid .hero-buttons { justify-content: center; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .features-grid { grid-template-columns: repeat(2,1fr) !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
        }

        /* Mobile */
        @media(max-width:575px){
          /* Layout */
          .stats-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr !important; }

          /* Hero section */
          #hero { padding: 100px 0 60px !important; }
          .hero-badge { font-size: 11px !important; padding: 5px 12px !important; }
          .hero-buttons { flex-direction: column !important; align-items: center !important; gap: 10px !important; }
          .hero-buttons a { width: 100% !important; max-width: 300px !important; justify-content: center !important; }

          /* Hero image — smaller on mobile */
          .hero-image { min-height: 240px !important; }
          .hero-image img { max-width: 200px !important; }

          /* Sections padding */
          section { padding: 60px 0 !important; }

          /* CTA box */
          .cta-inner { padding: 40px 20px !important; }

          /* App download buttons */
          .app-buttons { flex-direction: column !important; align-items: center !important; }
          .app-buttons a { width: 100% !important; max-width: 260px !important; }

          /* FAQ cards */
          .faq-card { padding: 18px 16px !important; }

          /* Testimonial grid */
          .testimonials-grid { grid-template-columns: 1fr !important; }

          /* Steps */
          .steps-grid { gap: 40px !important; }

          /* Feature cards */
          .feature-card { padding: 20px 18px !important; }
        }
      `}</style>
    </>
  );
}
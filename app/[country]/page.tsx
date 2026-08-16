import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { countries } from "@/lib/countries";

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: slug } = await params;
  const c = countries.find((c) => c.slug === slug);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: c.keywords,
    alternates: { canonical: `https://www.catholicbond.com/${slug}` },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `https://www.catholicbond.com/${slug}`,
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { country: slug } = await params;
  const c = countries.find((c) => c.slug === slug);
  if (!c) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DatingService",
    name: `CatholicBond ${c.name}`,
    description: c.metaDescription,
    url: `https://www.catholicbond.com/${slug}`,
    areaServed: { "@type": "Country", name: c.schemaArea },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "2400" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      {/* Hero */}
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", padding: "140px 0 80px", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -200, right: -200, width: 700, height: 700, background: "radial-gradient(circle, rgba(21,101,192,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(21,101,192,0.12)", border: "1px solid rgba(21,101,192,0.30)", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "var(--soft-blue)", fontWeight: 500, marginBottom: 28, fontFamily: "Inter, sans-serif" }}>
            {c.flag} {c.name} — {c.catholicPop}
          </div>
          <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(32px,5vw,54px)", lineHeight: 1.15, fontWeight: 700, color: "var(--white)", marginBottom: 20, maxWidth: 760 }}>
            {c.headline.split("—")[0]}—{" "}
            <span style={{ background: "linear-gradient(135deg, var(--primary-soft), var(--soft-blue))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {c.headline.split("—")[1]}
            </span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--dim)", maxWidth: 620, lineHeight: 1.8, marginBottom: 36, fontFamily: "Inter, sans-serif" }}>
            {c.description}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="/go" style={{ background: "linear-gradient(135deg, var(--primary-dark), var(--primary-soft))", color: "white", padding: "14px 28px", borderRadius: 14, fontSize: 15, fontWeight: 600, textDecoration: "none", boxShadow: "0 6px 20px rgba(21,101,192,0.40)", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif" }}>
              <i className="bi bi-download" /> Download Free
            </a>
            <a href="/go" style={{ background: "transparent", color: "var(--soft-blue)", padding: "14px 28px", borderRadius: 14, fontSize: 15, fontWeight: 600, border: "1px solid rgba(26,58,106,0.80)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif" }}>
              <i className="bi bi-google-play" /> Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section style={{ padding: "80px 0", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(24px,3vw,36px)", color: "var(--white)", marginBottom: 12 }}>
            Why {c.name} Catholics Choose CatholicBond
          </h2>
          <p style={{ fontSize: 15, color: "var(--dim)", maxWidth: 600, lineHeight: 1.8, marginBottom: 48, fontFamily: "Inter, sans-serif" }}>
            A faith-centred community that understands your culture, your values, and your call to holy matrimony.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {c.whyPoints.map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "var(--card)", border: "1px solid rgba(26,58,106,0.50)", borderRadius: 20, padding: "28px 24px" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 16, background: "rgba(21,101,192,0.15)", color: "var(--primary-soft)" }}>
                  <i className={`bi ${icon}`} />
                </div>
                <h3 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 17, color: "var(--white)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--dim)", lineHeight: 1.75, margin: 0, fontFamily: "Inter, sans-serif" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(24px,3vw,36px)", color: "var(--white)", marginBottom: 12 }}>
            Catholic Singles Across {c.name}
          </h2>
          <p style={{ fontSize: 15, color: "var(--dim)", maxWidth: 560, lineHeight: 1.8, marginBottom: 40, fontFamily: "Inter, sans-serif" }}>
            CatholicBond connects you with verified Catholic singles in every major city.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {c.cities.map((city) => (
              <div key={city} style={{ background: "rgba(13,27,51,0.80)", border: "1px solid rgba(26,58,106,0.50)", borderRadius: 100, padding: "8px 20px", fontSize: 14, color: "var(--text)", fontFamily: "Inter, sans-serif" }}>
                <i className="bi bi-geo-alt-fill" style={{ color: "var(--primary-soft)", marginRight: 6 }} />
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial if available */}
      {c.testimonial && (
        <section style={{ padding: "80px 0", background: "var(--surface)" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
            <div style={{ background: "var(--card)", border: "1px solid rgba(26,58,106,0.50)", borderRadius: 24, padding: "40px 36px" }}>
              <div style={{ color: "var(--amber)", fontSize: 14, marginBottom: 16, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ fontSize: 17, color: "var(--text)", lineHeight: 1.85, fontStyle: "italic", marginBottom: 24, fontFamily: "'EB Garamond', Georgia, serif" }}>
                &ldquo;{c.testimonial.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--primary-dark), var(--primary-soft))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'EB Garamond', Georgia, serif", fontSize: 18, color: "white" }}>{c.testimonial.initial}</div>
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontSize: 14, color: "var(--white)", margin: 0, fontFamily: "'EB Garamond', Georgia, serif" }}>{c.testimonial.name}</p>
                  <p style={{ fontSize: 12, color: "var(--dim)", margin: 0, fontFamily: "Inter, sans-serif" }}>{c.testimonial.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: "80px 0", background: c.testimonial ? "var(--bg)" : "var(--surface)", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(26px,4vw,40px)", color: "var(--white)", marginBottom: 16 }}>
            Join {c.name}&apos;s Catholic Dating Community
          </h2>
          <p style={{ fontSize: 16, color: "var(--dim)", lineHeight: 1.8, marginBottom: 36, fontFamily: "Inter, sans-serif" }}>
            Thousands of {c.name} Catholics are already on CatholicBond. Download the app free today and start your faith-filled journey to love.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a href="/go" style={{ background: "linear-gradient(135deg, var(--primary-dark), var(--primary-soft))", color: "white", padding: "14px 28px", borderRadius: 14, fontSize: 15, fontWeight: 600, textDecoration: "none", fontFamily: "Inter, sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <i className="bi bi-apple" /> App Store
            </a>
            <a href="/go" style={{ background: "transparent", color: "var(--soft-blue)", padding: "14px 28px", borderRadius: 14, fontSize: 15, fontWeight: 600, border: "1px solid rgba(26,58,106,0.80)", textDecoration: "none", fontFamily: "Inter, sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <i className="bi bi-google-play" /> Google Play
            </a>
          </div>
          <p style={{ marginTop: 24, fontSize: 13, color: "var(--dim)", fontFamily: "Inter, sans-serif" }}>
            <Link href="/" style={{ color: "var(--soft-blue)", textDecoration: "none" }}>← Back to CatholicBond Home</Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

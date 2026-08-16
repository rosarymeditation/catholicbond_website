import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Catholic Dating Blog — Tips, Faith & Relationships",
  description:
    "Read expert advice on Catholic dating, faith-based relationships, discerning your vocation, and finding a spouse who shares your values.",
  alternates: { canonical: "https://www.catholicbond.com/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <section style={{ minHeight: "100vh", padding: "140px 0 80px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px", color: "var(--dim)", textTransform: "uppercase", marginBottom: 14, fontFamily: "Inter, sans-serif" }}>
              <div style={{ width: 3, height: 14, background: "var(--primary-soft)", borderRadius: 2 }} />
              CATHOLICBOND BLOG
            </div>
            <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.15, color: "var(--white)", marginBottom: 16 }}>
              Faith, Love &amp; Relationships
            </h1>
            <p style={{ fontSize: 16, color: "var(--dim)", maxWidth: 540, lineHeight: 1.8, fontFamily: "Inter, sans-serif" }}>
              Practical guides and spiritual reflections for Catholics navigating love, dating, and the call to marriage.
            </p>
          </div>

          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ fontSize: 16, color: "var(--dim)", fontFamily: "Inter, sans-serif" }}>
                Articles coming soon. Check back shortly.
              </p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))", gap: 24 }}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <article style={{ background: "var(--card)", border: "1px solid rgba(26,58,106,0.50)", borderRadius: 20, padding: "28px 24px", height: "100%", transition: "all 0.25s ease", display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 12, color: "var(--dim)", fontFamily: "Inter, sans-serif" }}>
                      <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
                      <span>·</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 20, color: "var(--white)", lineHeight: 1.3 }}>{post.title}</h2>
                    <p style={{ fontSize: 13.5, color: "var(--dim)", lineHeight: 1.75, margin: 0, fontFamily: "Inter, sans-serif", flexGrow: 1 }}>{post.description}</p>
                    <span style={{ fontSize: 13, color: "var(--primary-soft)", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>
                      Read article →
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

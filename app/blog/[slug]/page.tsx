import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPost, getAllPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://www.catholicbond.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.catholicbond.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "CatholicBond" },
    publisher: {
      "@type": "Organization",
      name: "CatholicBond",
      url: "https://www.catholicbond.com",
    },
    mainEntityOfPage: `https://www.catholicbond.com/blog/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <article style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: 100 }}>

        {/* Hero */}
        <div style={{ background: "var(--surface)", padding: "60px 0 48px", borderBottom: "1px solid rgba(26,58,106,0.40)" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
            <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--dim)", textDecoration: "none", marginBottom: 28, fontFamily: "Inter, sans-serif" }}>
              <i className="bi bi-arrow-left" /> All Articles
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 12, color: "var(--dim)", marginBottom: 20, fontFamily: "Inter, sans-serif" }}>
              <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span style={{ width: 3, height: 3, background: "var(--dim)", borderRadius: "50%", display: "inline-block" }} />
              <span>{post.readTime} min read</span>
            </div>
            <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(28px, 5vw, 46px)", lineHeight: 1.2, color: "var(--white)", marginBottom: 16 }}>
              {post.title}
            </h1>
            <p style={{ fontSize: 17, color: "var(--dim)", lineHeight: 1.8, margin: 0, fontFamily: "Inter, sans-serif" }}>
              {post.description}
            </p>
          </div>
        </div>

        {/* Body */}
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px 80px" }}>
          <div className="prose-content">
            <MDXRemote source={post.content} />
          </div>

          {/* CTA at end of every post */}
          <div style={{ marginTop: 64, background: "linear-gradient(135deg, rgba(13,71,161,0.25), rgba(25,118,210,0.12))", border: "1px solid rgba(21,101,192,0.30)", borderRadius: 24, padding: "40px 32px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 26, color: "var(--white)", marginBottom: 12 }}>
              Ready to Find Your Faith Partner?
            </h3>
            <p style={{ fontSize: 15, color: "var(--dim)", lineHeight: 1.8, maxWidth: 460, margin: "0 auto 28px", fontFamily: "Inter, sans-serif" }}>
              Join over 120,000 Catholic singles on CatholicBond. Photo-verified profiles, faith quiz badges, and a community built on shared values.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <a href="/go" style={{ background: "linear-gradient(135deg, var(--primary-dark), var(--primary-soft))", color: "white", padding: "12px 24px", borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif" }}>
                <i className="bi bi-apple" /> App Store
              </a>
              <a href="/go" style={{ background: "transparent", color: "var(--soft-blue)", padding: "12px 24px", borderRadius: 12, fontSize: 14, fontWeight: 600, border: "1px solid rgba(26,58,106,0.80)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif" }}>
                <i className="bi bi-google-play" /> Google Play
              </a>
            </div>
          </div>

          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link href="/blog" style={{ fontSize: 14, color: "var(--primary-soft)", textDecoration: "none", fontFamily: "Inter, sans-serif" }}>
              ← Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <Footer />

      {/* Prose styles */}
      <style>{`
        .prose-content {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: var(--text);
          line-height: 1.85;
        }
        .prose-content h2 {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(22px, 3vw, 30px);
          color: var(--white);
          margin: 48px 0 16px;
          line-height: 1.25;
        }
        .prose-content h3 {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(18px, 2.5vw, 24px);
          color: var(--white);
          margin: 36px 0 12px;
        }
        .prose-content p {
          margin-bottom: 20px;
          color: var(--text);
        }
        .prose-content ul, .prose-content ol {
          padding-left: 24px;
          margin-bottom: 20px;
        }
        .prose-content li {
          margin-bottom: 8px;
          color: var(--text);
        }
        .prose-content strong {
          color: var(--white);
          font-weight: 600;
        }
        .prose-content em {
          color: var(--soft-blue);
        }
        .prose-content blockquote {
          border-left: 3px solid var(--primary-soft);
          padding: 16px 24px;
          margin: 28px 0;
          background: rgba(21,101,192,0.08);
          border-radius: 0 12px 12px 0;
          font-style: italic;
          color: var(--soft-blue);
        }
        .prose-content a {
          color: var(--primary-soft);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .prose-content hr {
          border-color: rgba(26,58,106,0.40);
          margin: 40px 0;
        }
      `}</style>
    </>
  );
}

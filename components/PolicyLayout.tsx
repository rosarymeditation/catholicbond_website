import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface PolicyLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, subtitle, lastUpdated, children }: PolicyLayoutProps) {
  return (
    <>
      <Header />
      <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: 100, paddingBottom: 80 }}>

        {/* Page header */}
        <div style={{ background: "var(--surface)", borderBottom: "1px solid rgba(26,58,106,0.40)", padding: "48px 0 36px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--dim)", textDecoration: "none", marginBottom: 24, fontFamily: "Inter, sans-serif" }}>
              <i className="bi bi-arrow-left" /> Back to Home
            </Link>
            <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", color: "var(--white)", marginBottom: 8, lineHeight: 1.2 }}>{title}</h1>
            {subtitle && <p style={{ fontSize: 16, color: "var(--soft-blue)", fontFamily: "'EB Garamond', Georgia, serif", marginBottom: 8 }}>{subtitle}</p>}
            <p style={{ fontSize: 13, color: "var(--dim)", fontFamily: "Inter, sans-serif", margin: 0 }}>{lastUpdated}</p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 0" }}>
          {children}
        </div>
      </main>
      <Footer />

      <style>{`
        .policy-section { margin-bottom: 48px; }
        .policy-section p { font-size: 15px; color: var(--text); line-height: 1.85; margin-bottom: 16px; font-family: Inter, sans-serif; }
        .policy-section h2 { font-family: 'EB Garamond', Georgia, serif; font-size: clamp(20px, 3vw, 26px); color: var(--white); margin-bottom: 16px; margin-top: 0; padding-top: 8px; border-top: 1px solid rgba(26,58,106,0.30); }
        .policy-section:first-child h2 { border-top: none; padding-top: 0; }
        .policy-section h3 { font-family: 'EB Garamond', Georgia, serif; font-size: 18px; color: var(--soft-blue); margin: 24px 0 10px; }
        .policy-section ul, .policy-section ol { padding-left: 20px; margin-bottom: 16px; }
        .policy-section li { font-size: 15px; color: var(--text); line-height: 1.8; margin-bottom: 8px; font-family: Inter, sans-serif; }
        .policy-section strong { color: var(--white); }
        .policy-section a { color: var(--primary-soft); text-underline-offset: 3px; }
        .policy-section a:hover { color: var(--soft-blue); }
        .policy-intro { font-size: 15px; color: var(--text); line-height: 1.85; margin-bottom: 40px; font-family: Inter, sans-serif; padding-bottom: 32px; border-bottom: 1px solid rgba(26,58,106,0.30); }
        .policy-intro p { margin-bottom: 14px; }
        .data-table { width: 100%; border-collapse: collapse; margin: 16px 0; }
        .data-table th, .data-table td { border: 1px solid rgba(26,58,106,0.50); padding: 12px 14px; text-align: left; font-size: 14px; font-family: Inter, sans-serif; }
        .data-table th { background: rgba(13,27,51,0.80); color: var(--soft-blue); font-weight: 600; }
        .data-table td { background: rgba(13,27,51,0.40); color: var(--text); }
        .data-table td strong { color: var(--white); }
        .highlight-box { background: rgba(21,101,192,0.08); border-left: 3px solid var(--primary-soft); padding: 16px 20px; margin: 24px 0; border-radius: 0 12px 12px 0; }
        .highlight-box h3 { font-family: 'EB Garamond', Georgia, serif; font-size: 17px; color: var(--white); margin: 0 0 8px; }
        .highlight-box p { font-size: 14px; color: var(--text); margin: 0; font-family: Inter, sans-serif; line-height: 1.75; }
        @media(max-width:768px){ .data-table { display: block; overflow-x: auto; } }
      `}</style>
    </>
  );
}

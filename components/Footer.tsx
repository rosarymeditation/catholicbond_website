import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid rgba(26,58,106,0.40)", padding: "64px 0 32px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Image src="/assets/img/logo.png" alt="CatholicBond" width={36} height={36} />
              <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 18, fontWeight: 700, color: "var(--white)" }}>CatholicBond</span>
            </div>
            <p style={{ fontSize: 13.5, color: "var(--dim)", lineHeight: 1.7, marginBottom: 16 }}>
              Faith-based connections for Catholics worldwide. Built with love and guided by grace.
            </p>
            <p style={{ fontSize: 13, color: "var(--dim)" }}>
              <i className="bi bi-envelope" style={{ color: "var(--primary-soft)", marginRight: 8 }} />
              support@catholicbond.com
            </p>
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", color: "var(--soft-blue)", marginBottom: 16 }}>Legal</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[["terms", "Terms of Use"], ["privacy-policy", "Privacy Policy"], ["cookies-policy", "Cookies"]].map(([slug, label]) => (
                <li key={slug} style={{ marginBottom: 10 }}>
                  <Link href={`/${slug}`} style={{ fontSize: 13.5, color: "var(--dim)", textDecoration: "none" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", color: "var(--soft-blue)", marginBottom: 16 }}>Community</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[["community-guidelines", "Guidelines"], ["safety-guidelines", "Safety"], ["blog", "Blog"], ["catholic-dating-usa", "United States"], ["catholic-dating-mexico", "Mexico"], ["catholic-dating-brazil", "Brazil"]].map(([slug, label]) => (
                <li key={slug} style={{ marginBottom: 10 }}>
                  <Link href={`/${slug}`} style={{ fontSize: 13.5, color: "var(--dim)", textDecoration: "none" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Buttons */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", color: "var(--soft-blue)", marginBottom: 16 }}>Get the App</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 220 }}>
              {[["bi-apple", "Download on the", "App Store"], ["bi-google-play", "Get it on", "Google Play"]].map(([icon, small, strong]) => (
                <a key={strong} href="/go" style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "rgba(13,27,51,0.80)", border: "1px solid rgba(26,58,106,0.70)", borderRadius: 14, padding: "12px 22px", color: "var(--white)", textDecoration: "none" }}>
                  <i className={`bi ${icon}`} style={{ fontSize: 24, color: "var(--soft-blue)" }} />
                  <div>
                    <small style={{ display: "block", fontSize: 11, color: "var(--dim)", lineHeight: 1, marginBottom: 2 }}>{small}</small>
                    <strong style={{ fontSize: 15, fontFamily: "'EB Garamond', Georgia, serif" }}>{strong}</strong>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        <hr style={{ borderColor: "rgba(26,58,106,0.40)", margin: "48px 0 24px" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13, color: "var(--dim)", margin: 0 }}>
            &copy; {new Date().getFullYear()} <strong style={{ color: "var(--white)" }}>CatholicBond</strong>. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: "var(--dim)", margin: 0 }}>
            Built with <i className="bi bi-heart-fill" style={{ color: "#E57373" }} /> and faith
          </p>
        </div>
      </div>
    </footer>
  );
}

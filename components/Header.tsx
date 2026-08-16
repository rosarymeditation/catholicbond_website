"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "16px 0",
        background: scrolled
          ? "rgba(6,11,24,0.95)"
          : "rgba(6,11,24,0.85)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(26,58,106,0.40)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/assets/img/logo.png" alt="CatholicBond" width={36} height={36} style={{ objectFit: "contain" }} />
          <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 18, fontWeight: 700, color: "var(--white)", letterSpacing: "0.3px" }}>
            CatholicBond
          </span>
        </Link>

        {/* Nav */}
        <ul style={{ display: "flex", alignItems: "center", gap: 36, listStyle: "none", margin: 0, padding: 0 }} className="nav-hide-mobile">
          {[["#hero", "Home"], ["#about", "About"], ["#features", "Features"], ["#how", "How It Works"], ["/blog", "Blog"]].map(([href, label]) => (
            <li key={href}>
              <Link href={href} style={{ fontSize: 14, color: "var(--dim)", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--dim)")}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/go"
          style={{
            background: "linear-gradient(135deg, var(--primary-dark), var(--primary-soft))",
            color: "white",
            padding: "10px 22px",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(21,101,192,0.35)",
            transition: "all 0.2s ease",
          }}
        >
          Get the App
        </a>
      </div>

      <style>{`.nav-hide-mobile { display: flex !important; } @media(max-width:991px){.nav-hide-mobile{display:none!important;}}`}</style>
    </header>
  );
}

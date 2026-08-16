import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.catholicbond.com"),
  title: {
    default: "CatholicBond — Find Love Rooted in Faith",
    template: "%s | CatholicBond",
  },
  description:
    "CatholicBond connects single Catholics seeking meaningful, Christ-centred relationships. Join a verified community of devout singles building love on a foundation of shared faith.",
  keywords: [
    "Catholic dating app",
    "Catholic singles",
    "Christian dating",
    "faith-based relationships",
    "Catholic marriage",
    "devout singles",
  ],
  openGraph: {
    title: "CatholicBond — Find Love Rooted in Faith",
    description:
      "Connect with Catholic singles who share your values. Verified profiles, faith-based matching, and a community built on trust.",
    url: "https://www.catholicbond.com",
    siteName: "CatholicBond",
    images: [{ url: "/assets/img/social-preview.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CatholicBond — Find Love Rooted in Faith",
    description:
      "The safest way for Catholic singles to meet. Photo-verified profiles and faith-focused compatibility.",
    images: ["/assets/img/social-twitter-preview.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.catholicbond.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch + preconnect for fonts */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Fonts — display=swap prevents render blocking */}
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Bootstrap icons — load async so it never blocks render */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          media="print"
          // @ts-expect-error onload trick for async CSS
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
        </noscript>

        {/* Preload hero app image — biggest LCP element */}
        <link
          rel="preload"
          as="image"
          href="/assets/img/app.png"
          fetchPriority="high"
        />

        {/* Favicons */}
        <link rel="icon" href="/assets/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />

        {/* Theme colour for mobile browser chrome */}
        <meta name="theme-color" content="#060B18" />
      </head>
      <body>{children}</body>
    </html>
  );
}

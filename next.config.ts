// import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";

// const nextConfig: NextConfig = {
//   compress: true,
//   images: {
//     unoptimized: true,
//     formats: ["image/avif", "image/webp"],
//     deviceSizes: [390, 640, 828, 1080, 1200],
//     imageSizes: [64, 128, 256, 340],
//     minimumCacheTTL: 31536000,
//   },
//   async headers() {
//     return [
//       {
//         source: "/assets/:path*",
//         headers: isProd
//           ? [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }]
//           : [],
//       },
//       {
//         source: "/_next/static/:path*",
//         headers: isProd
//           ? [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }]
//           : [],
//       },
//       {
//         source: "/:path*",
//         headers: [
//           { key: "X-Content-Type-Options", value: "nosniff" },
//           { key: "X-Frame-Options", value: "DENY" },
//           { key: "X-XSS-Protection", value: "1; mode=block" },
//           { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
//         ],
//       },
//     ];
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 828, 1080, 1200],
    imageSizes: [64, 128, 256, 340],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "X-XSS-Protection", value: "1; mode=block" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    ];

    const cacheHeaders = [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
    ];

    const routes = [
      { source: "/:path*", headers: securityHeaders },
    ];

    if (isProd) {
      routes.push(
        { source: "/assets/:path*", headers: cacheHeaders },
        { source: "/_next/static/:path*", headers: cacheHeaders }
      );
    }

    return routes;
  },
};

export default nextConfig;
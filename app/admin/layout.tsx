// ════════════════════════════════════════════════════════════════════════════
// app/admin/layout.tsx — wraps every /admin page
// Keeps admin pages out of Google and other search engines.
// ════════════════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Admin · CatholicBond",
    robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
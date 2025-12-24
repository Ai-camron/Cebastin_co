import type { Metadata } from "next";

import "./globals.css";
import { env } from "@/env";

export const metadata: Metadata = {
  title: "Cebastian Co",
  description: "Original designed streetwear where the many can be themselves.",
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}

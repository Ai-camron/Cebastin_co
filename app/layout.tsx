import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart-context";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { CommandSearch } from "@/components/command-search";

export const metadata: Metadata = {
  title: "Cebastian Co - Original Designed Streetwear",
  description: "Original designed streetwear where the many can be them and only be them with styles that reflect the insane but sane.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col" style={{ fontFamily: "'Exo 2', system-ui, sans-serif" }}>
        <CartProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <CommandSearch />
        </CartProvider>
      </body>
    </html>
  );
}

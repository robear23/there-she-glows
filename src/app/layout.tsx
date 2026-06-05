import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "On The Glow | Mobile Spray Tanning Newcastle",
  description: "Professional mobile spray tanning by Jessica Murphy, delivered to your door in Newcastle upon Tyne. Natural, beautiful, lasting colour — no salon required.",
  keywords: "mobile spray tan Newcastle, spray tanning Newcastle upon Tyne, mobile tanning service, Jessica Murphy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

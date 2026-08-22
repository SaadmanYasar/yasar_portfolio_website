import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yasar — Project Portfolio",
  description:
    "Selected projects by Saadman Yasar across optics, embedded systems, intelligent sensing, and predictive control.",
  openGraph: {
    title: "Yasar — Project Portfolio",
    description: "I build optical systems that think ahead.",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasar — Project Portfolio",
    description: "I build optical systems that think ahead.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://burjjstorre.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "برج المبدع للأثاث المنزلي | جودة وأسعار لا تُنافس",
    template: "%s | برج المبدع",
  },
  description:
    "برج المبدع للأثاث المنزلي — أحدث المفروشات والأثاث بأفضل الأسعار وضمان الجودة.",
  keywords: [
    "برج المبدع",
    "برج المبدع للأثاث المنزلي",
    "أثاث منزلي",
    "مفروشات",
    "غرف نوم",
    "غرف معيشة",
    "أثاث مكتبي",
    "تسوق إلكتروني",
    "أفضل سعر",
    "ماركات عالمية",
  ],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteUrl,
    siteName: "برج المبدع للأثاث المنزلي",
    title: "برج المبدع للأثاث المنزلي | جودة وأسعار لا تُنافس",
    description:
      "أحدث المفروشات والأثاث المنزلي بأفضل الأسعار — تسوق الآن من برج المبدع.",
    images: [
      {
        url: `${siteUrl}/logo.webp`,
        width: 1200,
        height: 630,
        alt: "برج المبدع للأثاث المنزلي",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "برج المبدع للأثاث المنزلي | جودة وأسعار لا تُنافس",
    description:
      "أحدث المفروشات والأثاث المنزلي بأفضل الأسعار — تسوق الآن من برج المبدع.",
    images: [`${siteUrl}/logo.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1a237e" />
      </head>
      <body className="bg-surface text-on-surface">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

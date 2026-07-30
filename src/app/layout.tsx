import type { Metadata, Viewport } from "next";
import { Geist, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import { themeInitScript } from "@components/chrome/ThemeToggle";
import { ScrollProgress } from "@components/chrome/ScrollProgress";
import { BackToTop } from "@components/chrome/BackToTop";
import { CommandPalette } from "@components/chrome/CommandPalette";
import { NavigationProgress } from "@components/chrome/NavigationProgress";
import { KeyboardShortcuts } from "@components/chrome/KeyboardShortcuts";
import { RouteTransition } from "@components/chrome/RouteTransition";
import { FloatingBackground } from "@components/effects/FloatingBackground";
import { JsonLd } from "@components/seo/JsonLd";
import { seo } from "@data/seo";
import { profile } from "@data/profile";
import { absoluteUrl, getSiteOrigin } from "@lib/seo";
import {
  buildOrganizationSchema,
  buildPersonSchema,
  buildWebSiteSchema,
} from "@lib/schema";

/** Single UI font + display face for brand/hero hierarchy (CWV-friendly). */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["600", "700"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05070a" },
    { media: "(prefers-color-scheme: light)", color: "#f6f7f9" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteOrigin()),
  title: {
    default: seo.title,
    template: `%s | ${profile.brand}`,
  },
  description: seo.description,
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: profile.brand,
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl(seo.ogImage),
        width: seo.ogImageWidth,
        height: seo.ogImageHeight,
        alt: seo.ogImageAlt,
        type: "image/jpeg",
      },
    ],
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    ...(seo.twitterHandle.trim()
      ? { creator: seo.twitterHandle, site: seo.twitterHandle }
      : {}),
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: absoluteUrl(seo.ogImage),
        alt: seo.ogImageAlt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  applicationName: seo.applicationName,
  creator: seo.creator,
  publisher: seo.publisher,
  authors: [
    {
      name: profile.name,
      url: absoluteUrl("/about"),
    },
  ],
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      "en-US": absoluteUrl("/"),
    },
  },
};

const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    buildWebSiteSchema(),
    buildOrganizationSchema(),
    buildPersonSchema(),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className={`${geistSans.variable} ${syne.variable} antialiased`}>
        <JsonLd data={siteGraph} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <NavigationProgress />
        <FloatingBackground />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <RouteTransition>{children}</RouteTransition>
        </main>
        <Footer />
        <BackToTop />
        <CommandPalette />
        <KeyboardShortcuts />
      </body>
    </html>
  );
}

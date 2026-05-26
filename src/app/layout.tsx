import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Fraunces } from "next/font/google";
import "./globals.css";
import LandingScreen from "@/components/LandingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RenovationBar from "@/components/RenovationBar";
import NightModeToggle from "@/components/NightModeToggle";
import { ThemeProvider } from "@/lib/theme-context";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces-google",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aldovia.in"),
  title: {
    default: "Aldovia Resort & Convention | Luxury Stay, Dining and Events in Bangalore",
    template: "%s | Aldovia Resort & Convention",
  },
  description:
    "Seventy acres of grace, ten minutes from Kempegowda International Airport. Aldovia Resort & Convention. Where Grace Finds You.",
  applicationName: "Aldovia",
  authors: [{ name: "The Asylum" }],
  keywords: [
    "Aldovia Resort",
    "Bangalore Resort",
    "Devanahalli Resort",
    "Convention Center Bangalore",
    "Wedding Venue Bangalore",
    "Luxury Hotel near Airport",
    "Clarks Exotica",
  ],
  openGraph: {
    title: "Aldovia Resort & Convention",
    description: "Where Grace Finds You. Seventy acres near Bangalore.",
    url: "https://aldovia.in",
    siteName: "Aldovia Resort & Convention",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldovia Resort & Convention",
    description: "Where Grace Finds You. Seventy acres near Bangalore.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${fraunces.variable}`}>
      <body className="bg-cream-bg text-brown-text font-sans">
        <ThemeProvider>
          <LandingScreen />
          <Navbar />
          <RenovationBar />
          <main>{children}</main>
          <Footer />
          <NightModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}

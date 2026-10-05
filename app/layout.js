import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair-display",
  display: "swap",
});

const siteTitle = "Mu'ādh ibn Jabal Institute — Islamic Education in Abeokuta";

const siteDescription =
  "Mu'ādh ibn Jabal Institute offers structured Islamic education in Abeokuta, Ogun State — Qur'an memorization (Hifz), proper Tajweed, Islamic Studies, Arabic classes, character building and good manners — in person at Kamadupe Masjid, Adeun, and online.";

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: "Mu'ādh ibn Jabal Institute",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    siteName: "Mu'ādh ibn Jabal Institute",
    locale: "en_NG",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#1a0e0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";
import { Cormorant_Garamond, IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const siteTitle = "Mu'ādh ibn Jabal Institute — Islamic Education in Abeokuta";

const siteDescription =
  "Mu'ādh ibn Jabal Institute offers structured Islamic education in Abeokuta, Ogun State. Programs include Qur'an memorization (Hifz), proper Tajweed, Islamic Studies, and Arabic classes, with physical learning at Kamadupe Masjid, Adeun, and online learning for distance students.";

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
    <html lang="en" className={`${ibmPlexSans.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}

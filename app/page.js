import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import HifzFeature from "./components/HifzFeature";
import Journey from "./components/Journey";
import Learning from "./components/Learning";
import Character from "./components/Character";
import Parents from "./components/Parents";
import Location from "./components/Location";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

/**
 * Mu'ādh ibn Jabal Institute — single page.
 *
 * Cream is the canvas; dark chocolate is the ink. The page is
 * mostly warm cream, and the two dark movements (Hifz and
 * Character) are the moments that carry the most weight:
 *
 *   cream hero → cream about → cream programs → dark HIFZ →
 *   cream journey → cream learning → dark CHARACTER →
 *   cream parents → cream location → cream cta → dark footer
 */
export default function Home() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:min-h-[44px] focus:items-center focus:bg-chocolate-950 focus:px-5 focus:text-sm focus:text-cream-50"
      >
        Skip to content
      </a>

      <Navigation />

      <main id="main">
        <Hero />
        <About />
        <Programs />
        <HifzFeature />
        <Journey />
        <Learning />
        <Character />
        <Parents />
        <Location />
        <FinalCta />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

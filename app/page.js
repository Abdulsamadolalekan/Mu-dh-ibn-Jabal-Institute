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
 * The section rhythm alternates dark chocolate and cream so the
 * page reads as a sequence of composed movements rather than one
 * flat field:
 *
 *   dark hero → cream about → dark programs → cream hifz →
 *   dark journey → cream learning → dark character →
 *   cream parents → dark location → cream cta → dark footer
 */
export default function Home() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:min-h-[44px] focus:items-center focus:bg-cream-50 focus:px-5 focus:text-sm focus:text-chocolate-950"
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

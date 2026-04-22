import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { TagFormats } from './components/TagFormats';
import { GetStarted } from './components/GetStarted';
import { Footer } from './components/Footer';

/**
 * Root application component.
 * Composed of semantic landmark sections for accessibility:
 *   <nav> → <header> → <main> → <footer>
 *
 * Each section handles its own scroll-triggered animations via Framer Motion.
 */
export default function App() {
  return (
    <>
      {/* Skip-to-content link for keyboard/screen reader users */}
      <a href="#features" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <Hero />

      <main>
        <Features />
        <Screenshots />
        <TagFormats />
        <GetStarted />
      </main>

      <Footer />
    </>
  );
}

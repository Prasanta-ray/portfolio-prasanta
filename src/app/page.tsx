import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Ventures from "@/components/Ventures";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Journal from "@/components/Journal";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyber-accent focus:text-cyber-dark focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <About />
        <Ventures />
        <Projects />
        <Skills />
        <Timeline />
        <Journal />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}

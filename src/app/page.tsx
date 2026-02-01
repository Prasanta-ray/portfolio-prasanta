import Hero from "@/components/Hero";
import Ventures from "@/components/Ventures";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Journal from "@/components/Journal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Ventures />
      <Projects />
      <Timeline />
      <Journal />
      <Footer />
    </main>
  );
}

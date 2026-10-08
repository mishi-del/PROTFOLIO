import Hero from "@/components/hero-new";
import Journey from "@/components/journey";
import Navbar from "@/components/nabvar-new";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import CreativeLab from "@/components/creative-lab";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-primary text-ink">
      <Navbar />
      <Hero />
      <Journey />
      <Projects />
      <Skills />
      <CreativeLab />
      <About />
      <Contact />
    </main>
  );
}

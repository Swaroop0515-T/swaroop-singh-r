import Hero from "../components/hero/Hero";
import Skills from "../components/skills/Skills";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import Certifications from "../components/certifications/Certifications";
import Contact from "../components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

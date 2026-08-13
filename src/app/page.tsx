import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Credentials from "@/components/Credentials";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="flex flex-col w-full">

      {/* 01: Hero & Profile Section */}
      <ScrollReveal once>
        <Hero />
      </ScrollReveal>

      {/* 02: Professional Record (Experience) */}
      <ScrollReveal>
        <Experience />
      </ScrollReveal>

      {/* 03: Engineering Projects */}
      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      {/* 04: Education & Credentials */}
      <ScrollReveal>
        <Credentials />
      </ScrollReveal>

      {/* 05: Contact / Title Block */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>

    </main>
  );
}
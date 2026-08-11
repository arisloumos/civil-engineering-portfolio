import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Credentials from "@/components/Credentials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* 01: Hero & Profile Section */}
      <Hero />
      
      {/* 02: Professional Record (Experience) */}
      <Experience />
      
      {/* 03: Engineering Projects */}
      <Projects />
      
      {/* 04: Education & Credentials */}
      <Credentials />
      
      {/* 05: Contact / Title Block */}
      <Footer />
    </main>
  );
}
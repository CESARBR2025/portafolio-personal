import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Nav />
      
      <div className="relative">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600/15 blur-[120px] animate-blob" />
          <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-blob animation-delay-600" />
          <div className="absolute -bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px] animate-blob animation-delay-800" />
        </div>
        <div className="fixed inset-0 bg-grid opacity-[0.15] pointer-events-none" />

        <main>
          <Hero />
          <About />
          <Journey />
          <Projects />
          <Contact />
        </main>
        <Footer />

        <BackToTop />
      </div>
    </>
  );
}

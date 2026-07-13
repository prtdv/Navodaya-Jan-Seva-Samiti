import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OurWork from "./components/OurWork";
import Gallery from "./components/Gallery";
import Stories from "./components/Stories";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary font-sans antialiased selection:bg-brand-secondary/40 selection:text-brand-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <OurWork />
        <Gallery />
        <Stories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

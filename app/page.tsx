import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Recognition from "./components/Recognition";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Recognition />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </>
  );
}

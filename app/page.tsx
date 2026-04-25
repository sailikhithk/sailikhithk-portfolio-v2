import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutAndTechStack from "./components/AboutAndTechStack";
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
      <AboutAndTechStack />
      <Recognition />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </>
  );
}

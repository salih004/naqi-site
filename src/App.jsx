import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Curriculum from "./components/Curriculum";
import EnrollmentCTA from "./components/EnrollmentCTA";
import Footer from "./components/Footer";
import AboutNAQI from "./components/About";
import Enrollment from "./components/Enrollment";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Curriculum />
      <Enrollment />
      <EnrollmentCTA />
      <Footer />
    </>
  );
}

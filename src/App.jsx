import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Curriculum from "./components/Curriculum";
import Enrollment from "./components/Enrollment";
import EnrollmentCTA from "./components/EnrollmentCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Global navigation landmark */}
      <header>
        <Navbar />
      </header>

      {/* Primary page content */}
      <main id="main-content">
        <Hero />

        <section id="about" aria-labelledby="about-heading">
          <h2 id="about-heading" className="sr-only">
            About Noor Al-Qur’an Institute
          </h2>
          <About />
        </section>

        <section id="curriculum" aria-labelledby="curriculum-heading">
          <h2 id="curriculum-heading" className="sr-only">
            Qur’an Curriculum and Learning Path
          </h2>
          <Curriculum />
        </section>

        <section id="enrollment" aria-labelledby="enrollment-heading">
          <h2 id="enrollment-heading" className="sr-only">
            Enrollment and Registration Information
          </h2>
          <Enrollment />
        </section>

        <section aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="sr-only">
            Begin Your Qur’an Learning Journey
          </h2>
          <EnrollmentCTA />
        </section>
      </main>

      {/* Site footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

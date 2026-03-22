import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuItems = ["About", "Curriculum", "Enrollment"];

const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 120);
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="sticky top-0 z-50"
      style={{ backgroundColor: "#2F4F3E" }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Gold accent rule at top */}
      <div style={{ height: 2, backgroundColor: "#C9A24D" }} />

      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="flex justify-between items-center" style={{ height: 66 }}>

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); setIsOpen(false); }}
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          >
            <img
              src="/images/t-1.png"
              alt="Noor Al-Qur'an Institute"
              style={{ height: 46, width: "auto", objectFit: "contain" }}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center" style={{ gap: "2.5rem" }}>
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); scrollTo(`#${item.toLowerCase()}`); }}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.63rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(247,242,234,0.75)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A24D")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,242,234,0.75)")}
              >
                {item}
              </a>
            ))}

            <a
              href="#apply"
              onClick={(e) => { e.preventDefault(); scrollTo("#apply"); }}
              style={{
                backgroundColor: "#C9A24D",
                color: "#2F4F3E",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "0.63rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                padding: "0.6rem 1.5rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Apply
            </a>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#F7F2EA", padding: 4 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X style={{ width: 22, height: 22 }} /> : <Menu style={{ width: 22, height: 22 }} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden", borderTop: "1px solid rgba(201,162,77,0.2)" }}
          >
            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(`#${item.toLowerCase()}`); setIsOpen(false); }}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.63rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(247,242,234,0.8)",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </a>
              ))}
              <a
                href="#apply"
                onClick={(e) => { e.preventDefault(); scrollTo("#apply"); setIsOpen(false); }}
                style={{
                  backgroundColor: "#C9A24D",
                  color: "#2F4F3E",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.63rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  padding: "0.75rem 1.5rem",
                  textDecoration: "none",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Youtube } from "lucide-react";
import emailjs from "@emailjs/browser";

const scrollTo = (id) =>
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Enrollment", href: "#enrollment" },
  { label: "Apply", href: "#apply" },
];

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID  = "service_1c7lvx8";
    const PUBLIC_KEY  = "jnQYUiNEakrBc9Sl9";
    const AUTO_REPLY  = "template_mqfnbai";   // sends confirmation to the user
    const INQUIRY     = "template_6lei6is"; // ← paste your new template ID here

    Promise.all([
      // 1. Auto-reply to the user
      emailjs.sendForm(SERVICE_ID, AUTO_REPLY, e.target, PUBLIC_KEY),
      // 2. Inquiry notification to the institute
      emailjs.sendForm(SERVICE_ID, INQUIRY,    e.target, PUBLIC_KEY),
    ])
      .then(() => {
        setConfirmation("Your message has been sent successfully.");
        setIsSubmitting(false);
        e.target.reset();
        setTimeout(() => {
          setIsOpen(false);
          setConfirmation("");
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
        setConfirmation("Something went wrong. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <footer style={{ backgroundColor: "#2B2B2B", color: "#F7F2EA" }}>
      {/* Gold rule at top */}
      <div style={{ height: 1, backgroundColor: "#C9A24D" }} />

      <div
        style={{ maxWidth: "72rem", margin: "0 auto", padding: "4rem 1.5rem 3rem" }}
      >
        {/* Four-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div>
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
              style={{ display: "inline-block", marginBottom: "1rem" }}
            >
              <img
                src="/images/t-1.png"
                alt="NAQI"
                style={{ height: 54, width: "auto", objectFit: "contain" }}
              />
            </a>
            <p
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#C9A24D",
                margin: "0 0 0.25rem",
              }}
            >
              Noor Al-Qur'an Institute
            </p>
            <p
              style={{
                fontFamily: "EB Garamond, serif",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "rgba(247,242,234,0.5)",
                margin: "0 0 1.5rem",
              }}
            >
              Teaching the Qur'an with Mastery
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              {[
                {
                  href: "https://www.facebook.com/p/Noor-Al-Quran-61587247102906/",
                  Icon: Facebook,
                },
                {
                  href: "https://www.youtube.com/@NoorAl-QuranInstitute",
                  Icon: Youtube,
                },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(247,242,234,0.4)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C9A24D")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(247,242,234,0.4)")
                  }
                >
                  <Icon style={{ width: 18, height: 18 }} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C9A24D",
                margin: "0 0 1.25rem",
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navLinks.map(({ label, href }) => (
                <li key={label} style={{ marginBottom: "0.75rem" }}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                    style={{
                      fontFamily: "EB Garamond, serif",
                      fontSize: "1rem",
                      color: "rgba(247,242,234,0.65)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#C9A24D")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(247,242,234,0.65)")
                    }
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C9A24D",
                margin: "0 0 1.25rem",
              }}
            >
              Contact
            </h4>

            {[
              { label: "Phone", value: "+1 (612) 494-6469", href: "tel:+16124946469" },
              {
                label: "Email",
                value: "noor.alquran.institute.usa@gmail.com",
                href: "mailto:noor.alquran.institute.usa@gmail.com",
              },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: "1rem" }}>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(247,242,234,0.3)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.label}
                </div>
                <a
                  href={item.href}
                  style={{
                    fontFamily: "EB Garamond, serif",
                    fontSize: "0.95rem",
                    color: "rgba(247,242,234,0.65)",
                    textDecoration: "none",
                    wordBreak: "break-word",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C9A24D")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(247,242,234,0.65)")
                  }
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>

          {/* Get in touch CTA */}
          <div>
            <h4
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C9A24D",
                margin: "0 0 1.25rem",
              }}
            >
              Get In Touch
            </h4>
            <p
              style={{
                fontFamily: "EB Garamond, serif",
                fontSize: "1rem",
                color: "rgba(247,242,234,0.65)",
                lineHeight: 1.75,
                margin: "0 0 1.25rem",
              }}
            >
              Have a question? We are happy to help you get started.
            </p>
            <motion.button
              onClick={() => { setIsOpen(true); setConfirmation(""); }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgba(201,162,77,0.6)",
                color: "#C9A24D",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "0.62rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                padding: "0.7rem 1.4rem",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>

        {/* Bottom rule + copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(247,242,234,0.08)",
            paddingTop: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.58rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(247,242,234,0.28)",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Noor Al-Qur'an Institute. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Contact Modal */}
      {isOpen && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            padding: "1.5rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            style={{
              backgroundColor: "#F7F2EA",
              padding: "2.5rem",
              maxWidth: 440,
              width: "100%",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold top rule */}
            <div style={{ height: 2, backgroundColor: "#C9A24D", marginBottom: "2rem" }} />

            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#2F4F3E",
                margin: "0 0 1.5rem",
              }}
            >
              Contact Us
            </h3>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {[
                { name: "user_name", type: "text", placeholder: "Your Name" },
                { name: "email", type: "email", placeholder: "Your Email" },
              ].map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  style={{
                    fontFamily: "EB Garamond, serif",
                    fontSize: "1rem",
                    padding: "0.75rem 1rem",
                    border: "1px solid rgba(47,79,62,0.2)",
                    backgroundColor: "white",
                    color: "#2B2B2B",
                    outline: "none",
                  }}
                />
              ))}
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                style={{
                  fontFamily: "EB Garamond, serif",
                  fontSize: "1rem",
                  padding: "0.75rem 1rem",
                  border: "1px solid rgba(47,79,62,0.2)",
                  backgroundColor: "white",
                  color: "#2B2B2B",
                  outline: "none",
                  resize: "vertical",
                }}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: "#C9A24D",
                  color: "#2F4F3E",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "0.9rem",
                  border: "none",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.6 : 1,
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {confirmation && (
              <p
                style={{
                  fontFamily: "EB Garamond, serif",
                  fontSize: "1rem",
                  color: "#2F4F3E",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                {confirmation}
              </p>
            )}

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                fontSize: "1.4rem",
                color: "#2B2B2B",
                cursor: "pointer",
                lineHeight: 1,
                opacity: 0.5,
              }}
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </footer>
  );
}
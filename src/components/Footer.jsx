import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_jop0u6c",
        "template_mb5hz2a",
        e.target,
        "25ofUl9MzkV5o3bpk"
      )
      .then(
        () => {
          setConfirmation("Your inquiry has been sent successfully!");
          setIsSubmitting(false);
          e.target.reset();
          setTimeout(() => {
            setIsOpen(false);
            setConfirmation("");
          }, 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setConfirmation("Oops! Something went wrong. Please try again later.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <footer className="bg-[#2B2B2B] text-cream py-12 px-6 relative">
      <div className="max-w-3xl mx-auto text-center">

        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <motion.a
            href="#hero"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(212,175,55,0.45)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="inline-block"
          >
            <img
              src="public/images/test1.png"
              alt="NAQI Logo"
              className="h-16 w-auto"
            />
          </motion.a>
        </div>

        {/* Institute Info */}
        <p className="text-gold font-semibold text-lg mb-1">Noor Al-Qur’an Institute (NAQI)</p>
        <p className="text-sm italic text-cream/90 mb-6">Teaching the Qur’an with Mastery</p>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-2 mb-6">
          <a href="tel:+16124946469" className="text-cream/80 hover:text-gold transition-colors">
            Phone: +1 (612) 494-6469
          </a>
          <a href="mailto:noor.alquran.institute.usa@gmail.com" className="text-cream/80 hover:text-gold transition-colors">
            Email: noor.alquran.institute.usa@gmail.com
          </a>
        </div>

        {/* Quick Navigation Links */}
        <div className="flex justify-center gap-6 mb-6 text-sm">
          <a href="#curriculum" className="hover:text-gold transition-colors">Curriculum</a>
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#apply" className="hover:text-gold transition-colors">Apply</a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        {/* Contact Us Button */}
        <motion.button
          onClick={() => { setIsOpen(true); setConfirmation(""); }}
          className="inline-block px-6 py-3 bg-gold text-deep-emerald font-semibold rounded-lg shadow hover:bg-soft-gold-highlight hover:text-2F4F3E transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Contact Us
        </motion.button>

        {/* Footer Bottom */}
        <div className="border-t border-cream/20 pt-4 text-xs text-cream/70 mt-10">
          © {new Date().getFullYear()} NAQI INSTITUTE. ALL RIGHTS RESERVED.
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <motion.div
            className="bg-warm-cream text-deep-emerald rounded-xl p-8 max-w-md w-full shadow-lg relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4 text-center">Contact Us</h3>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                className="p-3 rounded border border-muted-olive text-black placeholder-muted-olive focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="p-3 rounded border border-muted-olive text-black placeholder-muted-olive focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="p-3 rounded border border-muted-olive text-black placeholder-muted-olive focus:outline-none focus:ring-2 focus:ring-gold"
                rows={4}
                required
              ></textarea>
              <p className="text-xs text-deep-emerald/80">We respect your privacy. Your information is secure.</p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gold text-deep-emerald font-semibold rounded-lg py-2 hover:bg-soft-gold-highlight transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Confirmation Message */}
            {confirmation && (
              <p className="mt-4 text-center text-sm text-deep-emerald font-semibold">
                {confirmation}
              </p>
            )}

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-2xl font-bold text-deep-emerald hover:text-2B2B2B transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </footer>
  );
}

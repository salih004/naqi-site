import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Curriculum", "Enrollment", "About"];

  // Smooth scroll helper - Fixed for mobile
  const scrollToSection = (id) => {
    // Close mobile menu first
    setIsOpen(false);
    
    // Wait for menu animation to complete, then scroll
    setTimeout(() => {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Small delay to let mobile menu close
  };

  return (
    <motion.nav
      className="sticky top-0 bg-emerald text-cream px-4 md:px-8 py-4 z-50 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/navbar.png')" }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="flex items-center flex-shrink-0"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#hero");
          }}
        >
          <motion.img
            src="/images/t-1.png"
            alt="Noor Al-Qur'an Institute"
            className="h-14 md:h-16 w-auto -mt-1 md:-mt-2 object-contain"
            whileHover={{
              scale: 1.08,
              y: -2,
              filter: "drop-shadow(0px 0px 12px rgba(201,162,77,0.65)) brightness(1.05)",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
          />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative"
              whileHover="hover"
              initial="rest"
              animate="rest"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(`#${item.toLowerCase()}`);
              }}
            >
              <span>{item}</span>
              <motion.span
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute left-0 -bottom-1 h-[1.5px] w-full bg-gold origin-left"
              />
            </motion.a>
          ))}

          {/* Apply CTA */}
          <motion.a
            href="#apply"
            className="px-4 py-2 rounded-md border border-gold text-2F4F3E bg-gold font-semibold"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#apply");
            }}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0px 8px 15px rgba(201,162,77,0.4)",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            Apply
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-cream"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-4 pt-4 pb-2">
              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-gold transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(`#${item.toLowerCase()}`);
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.a>
              ))}

              <motion.a
                href="#apply"
                className="text-sm font-medium px-4 py-2 rounded-md border border-gold text-2F4F3E bg-gold text-center"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#apply");
                }}
                whileTap={{ scale: 0.98 }}
              >
                Apply
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
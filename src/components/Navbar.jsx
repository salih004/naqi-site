import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Curriculum", "Enrollment", "About"];

  return (
    <motion.nav
      className="sticky top-0 bg-emerald text-cream px-4 md:px-8 py-4 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="flex items-center flex-shrink-0"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(false)}
        >
          <img
            src="public/images/test1.png"
            alt="Noor Al-Qur'an Institute"
            className="h-8 md:h-9 w-auto"
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
            className="px-4 py-2 rounded-md border border-gold text-gold"
            whileHover={{
              backgroundColor: "#C9A24D",
              color: "#2F4F3E",
            }}
            transition={{ duration: 0.25 }}
          >
            Apply
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-cream"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
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
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#apply"
                className="text-sm font-medium px-4 py-2 rounded-md border border-gold text-gold hover:bg-gold hover:text-emerald transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Apply
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
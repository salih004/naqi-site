import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="sticky top-0 bg-emerald text-cream px-8 py-4 flex justify-between items-center z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.a
        href="#hero"
        className="flex items-center"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src="/naqi-site/images/test1.png"
          alt="Noor Al-Qur’an Institute"
          className="h-12 md:h-16 w-auto" // responsive: h-12 mobile, h-16 desktop
        />
      </motion.a>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8 text-sm font-medium">
        {["Curriculum", "Enrollment", "About"].map((item) => (
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
    </motion.nav>
  );
}

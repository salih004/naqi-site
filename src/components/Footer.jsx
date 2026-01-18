import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald text-cream py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <motion.a
            href="/" // home link
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
              src="/images/Favi.png"
              alt="NAQI Logo"
              className="h-16 w-auto"
            />
          </motion.a>
        </div>

        {/* Text */}
        <p className="text-gold font-semibold text-lg mb-1">
          Noor Al-Qur’an Institute (NAQI)
        </p>

        <p className="text-sm italic text-cream/90 mb-2">
          Teaching the Qur’an with Mastery
        </p>

        {/* Phone */}
        <a
          href="tel:+16124946469"
          className="flex items-center justify-center gap-2 text-sm mb-1 inline-block transition-transform transform hover:scale-105 hover:text-gold/80"
        >
          <Phone className="w-4 h-4 text-gold" />
          +1 (612) 494-6469
        </a>

        {/* Email */}
        <a
          href="mailto:noor.alquran.institute.usa@gmail.com"
          className="flex items-center justify-center gap-2 text-sm mb-4 inline-block text-gold underline hover:text-gold/80 transition-colors"
        >
          <Mail className="w-4 h-4" />
          noor.alquran.institute.usa@gmail.com
        </a>

        <div className="border-t border-cream/20 pt-4 text-xs text-cream/70">
          © {new Date().getFullYear()} NAQI. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

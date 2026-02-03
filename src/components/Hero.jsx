import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* Background Image – very subtle parallax + breathing */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/blank.png')" }}
        initial={{ scale: 1.03, y: 0 }}
        animate={{ scale: [1.03, 1, 1.03], y: [0, -8, 0] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft Ivory → Emerald Overlay (lighter than before) */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-emerald/25 to-emerald/45" />

      {/* Gold Ambient Glow – slow & meditative */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-gold/10 blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.25, 0.4, 0.25] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        {/* H1 – gentle rise */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-6xl text-gold font-bold tracking-tight px-4"
        >
          Noor Al-Qur&apos;an Institute
        </motion.h1>

        {/* H2 – soft reveal */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1, ease: "easeOut" }}
          className="mt-5 md:mt-7 text-xl sm:text-2xl md:text-4xl font-medium tracking-wide text-cream font-serif px-4"
        >
          Teaching the Qur&apos;an with Mastery
        </motion.h2>

        {/* Context / SEO Block – calm fade */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="
            mt-5 sm:mt-6 md:mt-8
            px-5 sm:px-6
            py-4 sm:py-5
            rounded-lg
            bg-emerald/30
            backdrop-blur-sm
          "
        >
          <h3 className="text-base sm:text-lg font-semibold text-emerald mb-2">
            Online Qur’an Classes for Adults & College Students
          </h3>

          <p className="text-sm sm:text-base leading-snug sm:leading-relaxed text-cream/90">
            Noor Al-Qur’an Institute (NAQI) offers structured online Qur’an classes for adults and college students focused on accurate recitation, applied Tajwīd, and steady memorization. Classes are level-based and instructor-led, emphasizing consistency, clear feedback, and strong foundations to support meaningful, lasting growth with the Qur’an.
          </p>
        </motion.div>

        {/* CTA – respectful micro-interaction */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-7 md:mt-9 inline-block rounded-md bg-gold px-8 md:px-10 py-3 md:py-4 text-sm md:text-base text-emerald font-semibold shadow-md hover:shadow-lg transition-shadow"
        >
          Begin Your Journey
        </motion.a>
      </div>
    </section>
  );
}

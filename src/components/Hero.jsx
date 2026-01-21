import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/naqi-site/images/background.png')" }}
        initial={{ scale: 1.08 }}
        animate={{ scale: [1.08, 1, 1.08], y: [0, -14, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald/70 via-emerald/60 to-emerald/80" />

      {/* Floating Light Accent */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-6xl text-gold font-bold tracking-tight"
        >
          Noor Al-Qur’an Institute
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          className="
    mt-8
    text-2xl md:text-4xl
    font-medium
    tracking-wide
    text-cream
    font-serif
  "
        >
          Teaching the Qur’an with Mastery
        </motion.h2>


        {/* CTA */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-block rounded-md bg-gold px-10 py-4 text-emerald font-semibold shadow-lg hover:shadow-xl transition-shadow"
        >
          Begin Your Journey
        </motion.a>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { BookOpen, Layers, Sparkles } from "lucide-react";

export default function Curriculum() {
  const icons = {
    Reading: BookOpen,
    Memorization: Layers,
    Tajweed: Sparkles,
  };

  const tracks = ["Reading", "Memorization", "Tajweed"];

  // Card animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const iconVariants = {
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="curriculum" className="py-24 px-6 max-w-6xl mx-auto min-h-screen scroll-mt-24">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl text-emerald font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Curriculum Tracks
      </motion.h2>

      {/* Image container */}
      <motion.div
        className="relative mx-auto max-w-4xl mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 1 }}
      >
        <img
          src="/images/tracks.png"
          alt="Curriculum Tracks"
          className="w-full rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Track Cards */}
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        {tracks.map((track, i) => {
          const Icon = icons[track];
          return (
            <motion.div
              key={track}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
              whileTap={{ scale: 0.97 }}
              className="border border-gold p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-gold"
              tabIndex={0}
            >
              {/* Icon with continuous animation */}
              <motion.div className="flex justify-center mb-3" variants={iconVariants} animate="animate">
                <Icon className="w-7 h-7 text-gold" />
              </motion.div>

              <h3 className="text-xl text-emerald font-semibold text-center">{track}</h3>
              <p className="mt-4 text-sm text-center">
                Structured academic instruction designed for clarity and mastery.
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

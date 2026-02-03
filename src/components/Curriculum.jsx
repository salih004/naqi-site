import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Layers, Sparkles, Quote } from "lucide-react";

export default function Curriculum() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [canHover, setCanHover] = useState(false);

  // Detect hover capability (desktop vs mobile)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanHover(window.matchMedia("(hover: hover)").matches);
    }
  }, []);

  const icons = {
    Reading: BookOpen,
    Memorization: Layers,
    Tajweed: Sparkles,
  };

  const tracks = ["Reading", "Memorization", "Tajweed"];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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

  const bulletVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const trackBullets = {
    Reading: [
      "Develop Qur'an reading fluency without memorization or advanced Tajweed study",
      "Focus on Arabic letter recognition and proper pronunciation",
      "Improve reading accuracy and fluency",
      <span key="r" className="font-semibold text-gold">
        Optional add-on: Tajweed Track
      </span>,
    ],
    Memorization: [
      "Memorize portions of the Qur'an according to student's pace",
      "Includes guided memorization plans and revision",
      "Maintain accuracy during recitation",
      <span key="m" className="font-semibold text-gold">
        Optional add-on: Tajweed Track
      </span>,
    ],
    Tajweed: [
      "Study Qur'anic recitation rules (ʿIlm al-Tajwīd) and apply them correctly",
      "Covers articulation points (Makharij) and letter characteristics (Sifat)",
      "Learn foundational Tajweed rules",
      <span key="t" className="font-semibold text-gold">
        Choose a practical pathway: Tajweed with Reading or Memorization
      </span>,
    ],
  };

  const studentTestimonial = {
    name: "Hussein S",
    track: "Reading & Tajweed Tracks",
    testimonial:
      "The combination of Reading and Tajweed tracks has transformed my Qur'an recitation. I went from struggling with basic pronunciation to confidently applying Tajweed rules in my daily reading.",
    image: "/images/fc.png",
  };

  return (
    <section
      id="curriculum"
      className="py-24 px-6 max-w-6xl mx-auto min-h-screen scroll-mt-24"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl text-emerald font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Curriculum Tracks
      </motion.h2>

      {/* Image */}
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

      {/* Track cards */}
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        {tracks.map((track, index) => {
          const Icon = icons[track];

          return (
            <div key={track}>
              <motion.div
                variants={cardVariants}
                whileHover={
                  canHover
                    ? {
                        scale: 1.05,
                        y: -5,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                      }
                    : undefined
                }
                whileTap={{ scale: 0.97 }}
                className="border border-gold p-6 bg-white rounded-lg shadow transition-shadow focus-within:ring-2 focus-within:ring-gold"
                tabIndex={0}
              >
                <motion.div
                  className="flex justify-center mb-3"
                  variants={iconVariants}
                  animate="animate"
                >
                  <Icon className="w-7 h-7 text-gold" />
                </motion.div>

                <h3 className="text-xl text-emerald font-semibold text-center">
                  {track}
                </h3>

                <ul className="mt-4 text-sm text-emerald/80 leading-relaxed list-disc pl-5 space-y-2">
                  {trackBullets[track].map((bullet, i) => (
                    <motion.li
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 }}
                    >
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Testimonial section */}
              {index === 0 && (
                <div className="md:col-span-3">
                  <motion.div
                    className="my-16 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    onMouseEnter={
                      canHover ? () => setIsExpanded(true) : undefined
                    }
                    onMouseLeave={
                      canHover ? () => setIsExpanded(false) : undefined
                    }
                  >
                    {/* Clickable header */}
                    <div
                      className="text-center mb-6 cursor-pointer select-none"
                      onClick={
                        !canHover
                          ? () => setIsExpanded(prev => !prev)
                          : undefined
                      }
                    >
                      <h3 className="text-2xl md:text-3xl text-emerald font-semibold mb-2">
                        Curious to know a NAQI student's experience?
                      </h3>
                      <p className="text-gold text-sm font-medium">
                        {canHover
                          ? isExpanded
                            ? "Reading testimonial..."
                            : "Hover to read"
                          : isExpanded
                          ? "Tap to collapse"
                          : "Tap to read"}
                      </p>
                    </div>

                    {/* Expandable content */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="overflow-hidden pointer-events-none"
                    >
                      <div className="relative bg-gradient-to-br from-emerald/5 to-gold/5 border-l-4 border-gold rounded-xl p-8 shadow-md">
                        <div className="absolute -top-4 -left-4 bg-gold rounded-full p-3 shadow-lg">
                          <Quote className="w-6 h-6 text-white" />
                        </div>

                        <p className="text-emerald/90 text-lg italic leading-relaxed mb-6 pt-2">
                          “{studentTestimonial.testimonial}”
                        </p>

                        <div className="flex items-center gap-4">
                          {studentTestimonial.image && (
                            <img
                              src={studentTestimonial.image}
                              alt={studentTestimonial.name}
                              className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                            />
                          )}
                          <div>
                            <p className="text-emerald font-semibold text-lg">
                              {studentTestimonial.name}
                            </p>
                            <p className="text-gold text-sm font-medium">
                              {studentTestimonial.track}
                            </p>
                            <p className="text-emerald/60 text-xs">
                              NAQI Student
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

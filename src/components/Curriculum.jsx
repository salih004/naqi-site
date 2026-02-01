import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Layers, Sparkles, Quote } from "lucide-react";

export default function Curriculum() {
  const [isExpanded, setIsExpanded] = useState(false);

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

  // Bullet point animation
  const bulletVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Curriculum bullet points with bold & gold parts
  const trackBullets = {
    Reading: [
      "Develop Qur'an reading fluency without memorization or advanced Tajweed study",
      "Focus on Arabic letter recognition and proper pronunciation",
      "Improve reading accuracy and fluency",
      <span key="reading-addon" className="font-semibold text-gold">Optional add-on: Tajweed Track</span>,
    ],
    Memorization: [
      "Memorize portions of the Qur'an according to student's pace",
      "Includes guided memorization plans and revision",
      "Maintain accuracy during recitation",
      <span key="memorization-addon" className="font-semibold text-gold">Optional add-on: Tajweed Track</span>,
    ],
    Tajweed: [
      "Study Qur'anic recitation rules (ʿIlm al-Tajwīd) and apply them correctly",
      "Covers articulation points (Makharij) and letter characteristics (Sifat)",
      "Learn foundational Tajweed rules",
      <span key="tajweed-pathway" className="font-semibold text-gold">Choose a practical pathway: Tajweed with Reading or Tajweed with Memorization</span>,
    ],
  };

  // Your student's testimonial data - UPDATE THIS with real information
  const studentTestimonial = {
    name: "Hussein S", // Replace with actual student name
    track: "Reading & Tajweed Tracks",
    testimonial: "The combination of Reading and Tajweed tracks has transformed my Qur'an recitation. I went from struggling with basic pronunciation to confidently applying Tajweed rules in my daily reading. The structured approach and patient guidance made all the difference!",
    image: "/images/fc.png" // Uncomment and add path if you have a student photo
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
        {tracks.map((track, index) => {
          const Icon = icons[track];
          return (
            <div key={track}>
              <motion.div
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

                {/* Bullet points */}
                <ul className="mt-4 text-sm text-emerald/80 leading-relaxed list-disc list-outside pl-5 space-y-2">
                  {trackBullets[track].map((bullet, bulletIndex) => (
                    <motion.li
                      key={bulletIndex}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: bulletIndex * 0.15 }}
                    >
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Testimonial appears after Reading card */}
              {index === 0 && (
                <div className="md:col-span-3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="my-16 max-w-4xl mx-auto"
                    onMouseEnter={() => setIsExpanded(true)}
                    onMouseLeave={() => setIsExpanded(false)}
                  >
                    {/* Heading - Always Visible */}
                    <motion.div
                      className="text-center mb-6 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-2xl md:text-3xl text-emerald font-semibold mb-2">
                        Curious to know a NAQI student's experience?
                      </h3>
                      <p className="text-gold text-sm font-medium">
                        {isExpanded ? "Reading testimonial..." : "Hover to read"}
                      </p>
                    </motion.div>

                    {/* Testimonial Card - Expands on Hover */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="relative bg-gradient-to-br from-emerald/5 to-gold/5 border-l-4 border-gold rounded-xl p-8 shadow-md">
                        {/* Quote Icon */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ 
                            scale: isExpanded ? 1 : 0,
                            rotate: isExpanded ? 0 : -180
                          }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="absolute -top-4 -left-4 bg-gold rounded-full p-3 shadow-lg"
                        >
                          <Quote className="w-6 h-6 text-white" />
                        </motion.div>

                        {/* Testimonial Text */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isExpanded ? 1 : 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="text-emerald/90 text-lg italic leading-relaxed mb-6 pt-2"
                        >
                          "{studentTestimonial.testimonial}"
                        </motion.p>

                        {/* Student Info */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: isExpanded ? 1 : 0,
                            x: isExpanded ? 0 : -20
                          }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="flex items-center gap-4"
                        >
                          {studentTestimonial.image && (
                            <img
                              src={studentTestimonial.image}
                              alt={studentTestimonial.name}
                              className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                            />
                          )}
                          <div className="flex-1">
                            <p className="text-emerald font-semibold text-lg">{studentTestimonial.name}</p>
                            <p className="text-gold text-sm font-medium">{studentTestimonial.track}</p>
                            <p className="text-emerald/60 text-xs mt-0.5">NAQI Student</p>
                          </div>
                        </motion.div>
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
import { motion } from "framer-motion";

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      style={{ backgroundColor: "#2F4F3E" }}
    >
      {/* Subtle Islamic-inspired geometric trellis pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(201,162,77,0.04) 0,
              rgba(201,162,77,0.04) 1px,
              transparent 0,
              transparent 50%
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(201,162,77,0.04) 0,
              rgba(201,162,77,0.04) 1px,
              transparent 0,
              transparent 50%
            )
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial glow — slow, meditative */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,162,77,0.07) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom fade to cream */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: "8rem", background: "linear-gradient(to top, #F7F2EA, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto py-20">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ display: "block", width: 40, height: 1, backgroundColor: "rgba(201,162,77,0.55)" }} />
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#E5C77A",
              whiteSpace: "nowrap",
            }}
          >
            Est. August 2025
          </span>
          <span style={{ display: "block", width: 40, height: 1, backgroundColor: "rgba(201,162,77,0.55)" }} />
        </motion.div>

        {/* Logo */}
        <motion.img
          src="/images/t-1.png"
          alt="Noor Al-Qur'an Institute"
          style={{ height: 96, width: "auto", objectFit: "contain", display: "block", margin: "0 auto 2rem" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        />

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            fontFamily: "Playfair Display, serif",
            color: "#C9A24D",
            fontSize: "clamp(2rem, 5.5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.18,
            margin: 0,
          }}
        >
          Noor Al-Qur'an Institute
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
          style={{
            width: 72,
            height: 1,
            backgroundColor: "#C9A24D",
            margin: "1.5rem auto",
            transformOrigin: "center",
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          style={{
            fontFamily: "Playfair Display, serif",
            fontStyle: "italic",
            color: "#F7F2EA",
            fontSize: "clamp(1.1rem, 2.5vw, 1.65rem)",
            fontWeight: 400,
            margin: "0 0 1.75rem",
          }}
        >
          Teaching the Qur'an with Mastery
        </motion.p>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{
            fontFamily: "EB Garamond, serif",
            color: "rgba(247,242,234,0.85)",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            lineHeight: 1.9,
            maxWidth: 560,
            margin: "0 auto 2.5rem",
          }}
        >
          Structured online Qur'an classes for adults and college students —
          grounded in accurate recitation, applied Tajwīd, and purposeful
          memorization, delivered with scholarly care and personal attention.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
        >
          <motion.a
            href="#apply"
            onClick={(e) => { e.preventDefault(); scrollTo("#apply"); }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              backgroundColor: "#C9A24D",
              color: "#2F4F3E",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.9rem 2.5rem",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Register Now
          </motion.a>

          <motion.a
            href="#curriculum"
            onClick={(e) => { e.preventDefault(); scrollTo("#curriculum"); }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              border: "1px solid rgba(201,162,77,0.5)",
              color: "#F7F2EA",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.9rem 2.5rem",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            View Curriculum
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
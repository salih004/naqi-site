import { motion } from "framer-motion";

export default function EnrollmentCTA() {
  return (
    <section
      id="apply"
      className="py-24 text-center bg-[#F7F2EA]"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl text-gold font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Register to Start Your Journey!
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mb-8 max-w-2xl mx-auto text-sm md:text-base text-emerald/80"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        We’re excited to welcome you to NAQI! After submitting your registration, our team will review it, schedule your orientation, and guide you to begin your Qur’an learning journey.
      </motion.p>

      {/* Embedded Google Form */}
      <motion.div
        className="w-full max-w-3xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl hover:-translate-y-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <iframe
          src="https://forms.gle/XaL3TuzsVstFppGu7"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="rounded-lg"
        >
          Loading…
        </iframe>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FileText, Eye, Mail, Calendar, CheckCircle, Award } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register Online",
    description:
      "Submit your registration through NAQI's website via Google Forms.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Review & Approval",
    description:
      "The admin team reviews each submission carefully. Approved students are invited to proceed.",
    icon: Eye,
  },
  {
    number: "03",
    title: "Receive Confirmation",
    description:
      "Approved students receive a confirmation email outlining all next steps.",
    icon: Mail,
  },
  {
    number: "04",
    title: "Schedule Orientation",
    description:
      "Students are scheduled for a personalized one-on-one orientation session.",
    icon: Calendar,
  },
  {
    number: "05",
    title: "Complete Enrollment",
    description:
      "During orientation, students review program details and sign the official enrollment form.",
    icon: CheckCircle,
  },
  {
    number: "06",
    title: "Begin Your Journey",
    description:
      "After final acceptance, students begin their Qur'an learning journey with NAQI.",
    icon: Award,
  },
];

export default function Enrollment() {
  return (
    <section
      id="enrollment"
      className="scroll-mt-24"
      style={{ backgroundColor: "#F7F2EA", padding: "6rem 1.5rem" }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#C9A24D",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            03 / Enrollment
          </span>
          <div style={{ flex: 1, height: 1, backgroundColor: "rgba(201,162,77,0.3)" }} />
        </motion.div>

        {/* Heading + description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#2F4F3E",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Enrollment Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "EB Garamond, serif",
              fontSize: "1.1rem",
              lineHeight: 1.9,
              color: "#2B2B2B",
              margin: 0,
            }}
          >
            Our enrollment process is designed to be clear, transparent, and
            supportive — ensuring every student begins their learning journey
            with confidence and clarity.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ border: "1px solid rgba(201,162,77,0.2)" }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isBottom = i >= steps.length - 2;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                style={{
                  backgroundColor: "#F7F2EA",
                  padding: "2.5rem",
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  borderRight:
                    i % 2 === 0 ? "1px solid rgba(201,162,77,0.2)" : "none",
                  borderBottom: !isBottom
                    ? "1px solid rgba(201,162,77,0.2)"
                    : "none",
                }}
              >
                {/* Large faint number */}
                <div style={{ flexShrink: 0, paddingTop: "0.2rem" }}>
                  <div
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "2.8rem",
                      fontWeight: 700,
                      color: "rgba(201,162,77,0.2)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                <div>
                  {/* Icon + title */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      marginBottom: "0.65rem",
                    }}
                  >
                    <Icon
                      style={{ width: 15, height: 15, color: "#C9A24D", flexShrink: 0 }}
                    />
                    <h3
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: "#2F4F3E",
                        margin: 0,
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontFamily: "EB Garamond, serif",
                      fontSize: "1rem",
                      color: "#2B2B2B",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontFamily: "EB Garamond, serif",
            fontStyle: "italic",
            fontSize: "1rem",
            color: "#6F7F63",
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          Questions about enrollment? Reach us at{" "}
          <a
            href="mailto:noor.alquran.institute.usa@gmail.com"
            style={{ color: "#C9A24D", textDecoration: "none" }}
          >
            noor.alquran.institute.usa@gmail.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
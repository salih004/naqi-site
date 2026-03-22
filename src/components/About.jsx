import { motion } from "framer-motion";

const pillars = [
  {
    numeral: "I",
    title: "Our Mission",
    points: [
      "Guide students to master Qur'an recitation with confidence",
      "Make Qur'an learning accessible and deeply personalized",
      "Cultivate character shaped by Qur'anic teachings",
    ],
  },
  {
    numeral: "II",
    title: "Who We Serve",
    points: [
      "College students balancing academics and faith",
      "Working professionals seeking structured learning",
      "Adults at any level seeking Qur'an proficiency",
    ],
  },
  {
    numeral: "III",
    title: "Our Approach",
    points: [
      "One-on-one online instruction, individually tailored",
      "Flexible scheduling designed around your life",
      "Focus on Tajwīd, reading fluency, and memorization",
      "Consistent feedback for measurable, lasting mastery",
    ],
  },
];

const keyFacts = [
  { value: "3", label: "Curriculum Tracks" },
  { value: "1-on-1", label: "Personalized Instruction" },
  { value: "Flexible", label: "Schedule, Your Pace" },
];

export default function About() {
  return (
    <section
      id="about"
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
            01 / About NAQI
          </span>
          <div style={{ flex: 1, height: 1, backgroundColor: "rgba(201,162,77,0.3)" }} />
        </motion.div>

        {/* Two-column header: Heading + key facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-20 items-start">

          {/* Left: heading + description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                color: "#2F4F3E",
                lineHeight: 1.2,
                margin: "0 0 1.5rem",
              }}
            >
              Noor Al-Qur'an<br />Institute
            </h2>
            <p
              style={{
                fontFamily: "EB Garamond, serif",
                fontSize: "1.1rem",
                lineHeight: 1.95,
                color: "#2B2B2B",
                margin: 0,
              }}
            >
              Founded in August 2025, Noor Al-Qur'an Institute (NAQI) was
              established to serve adults and college students seeking
              structured, one-on-one Qur'an learning. Our curriculum is built
              on the foundations of proper recitation, applied Tajwīd, and
              meaningful memorization — delivered with scholarly rigor and
              personal care.
            </p>
          </motion.div>

          {/* Right: key facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              style={{
                borderLeft: "1px solid rgba(201,162,77,0.3)",
                paddingLeft: "2.5rem",
              }}
            >
              {keyFacts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  style={{
                    marginBottom: i < keyFacts.length - 1 ? "2rem" : 0,
                    paddingBottom: i < keyFacts.length - 1 ? "2rem" : 0,
                    borderBottom:
                      i < keyFacts.length - 1
                        ? "1px solid rgba(201,162,77,0.18)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "2.4rem",
                      fontWeight: 700,
                      color: "#C9A24D",
                      lineHeight: 1,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {fact.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.62rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#6F7F63",
                    }}
                  >
                    {fact.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Three Roman-numeral pillars */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: "1px solid rgba(201,162,77,0.3)" }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                padding: "2.5rem",
                borderRight:
                  i < pillars.length - 1
                    ? "1px solid rgba(201,162,77,0.2)"
                    : "none",
              }}
            >
              {/* Faint numeral */}
              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "3.5rem",
                  fontWeight: 700,
                  color: "rgba(201,162,77,0.14)",
                  lineHeight: 1,
                  marginBottom: "0.75rem",
                  userSelect: "none",
                }}
              >
                {pillar.numeral}
              </div>

              {/* Title with rule */}
              <h3
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: "#2F4F3E",
                  margin: "0 0 1rem",
                  paddingBottom: "0.8rem",
                  borderBottom: "1px solid rgba(201,162,77,0.28)",
                }}
              >
                {pillar.title}
              </h3>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    style={{
                      fontFamily: "EB Garamond, serif",
                      fontSize: "1rem",
                      color: "#2B2B2B",
                      lineHeight: 1.8,
                      marginBottom: "0.4rem",
                      paddingLeft: "1.25rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#C9A24D",
                        fontWeight: 300,
                      }}
                    >
                      —
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
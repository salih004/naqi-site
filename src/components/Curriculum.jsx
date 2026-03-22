import { motion } from "framer-motion";
import { BookOpen, Layers, Sparkles, Quote } from "lucide-react";

const tracks = [
  {
    numeral: "I",
    id: "Reading",
    icon: BookOpen,
    title: "Reading Track",
    subtitle: "Qur'an Fluency & Pronunciation",
    points: [
      "Develop Qur'an reading fluency from any starting level",
      "Master Arabic letter recognition and proper pronunciation",
      "Build reading accuracy through guided, structured practice",
    ],
    addon: "Optional add-on: Tajweed Track",
  },
  {
    numeral: "II",
    id: "Memorization",
    icon: Layers,
    title: "Memorization Track",
    subtitle: "Hifz & Sustained Retention",
    points: [
      "Memorize Qur'an portions according to your individual pace",
      "Structured memorization plans with consistent revision",
      "Maintain recitation accuracy throughout the process",
    ],
    addon: "Optional add-on: Tajweed Track",
  },
  {
    numeral: "III",
    id: "Tajweed",
    icon: Sparkles,
    title: "Tajweed Track",
    subtitle: "ʿIlm al-Tajwīd & Applied Rules",
    points: [
      "Study the rules of Qur'anic recitation (ʿIlm al-Tajwīd)",
      "Master articulation points (Makharij) and letter characteristics (Sifat)",
      "Apply Tajweed rules to reading or memorization contexts",
    ],
    addon: "Pair with: Reading or Memorization Track",
  },
];

export default function Curriculum() {
  return (
    <section
      id="curriculum"
      className="scroll-mt-24"
      style={{ backgroundColor: "#2F4F3E", padding: "6rem 1.5rem" }}
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
              color: "#E5C77A",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            02 / Curriculum
          </span>
          <div style={{ flex: 1, height: 1, backgroundColor: "rgba(201,162,77,0.3)" }} />
        </motion.div>

        {/* Heading block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#F7F2EA",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Curriculum Tracks
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
              color: "rgba(247,242,234,0.75)",
              margin: 0,
            }}
          >
            Three structured pathways, each designed to meet you where you are
            and guide you toward Qur'anic proficiency at your own pace.
          </motion.p>
        </div>

        {/* Track panels */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ border: "1px solid rgba(201,162,77,0.2)" }}
        >
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                style={{
                  backgroundColor: "rgba(15, 38, 27, 0.75)",
                  padding: "2.5rem",
                  borderRight:
                    i < tracks.length - 1
                      ? "1px solid rgba(201,162,77,0.15)"
                      : "none",
                }}
              >
                {/* Numeral + icon row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "3.5rem",
                      fontWeight: 700,
                      color: "rgba(201,162,77,0.18)",
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    {track.numeral}
                  </span>
                  <Icon
                    style={{
                      width: 20,
                      height: 20,
                      color: "#C9A24D",
                      marginTop: "0.5rem",
                      flexShrink: 0,
                    }}
                  />
                </div>

                {/* Gold accent line */}
                <div
                  style={{
                    width: "2rem",
                    height: 2,
                    backgroundColor: "#C9A24D",
                    marginBottom: "1rem",
                  }}
                />

                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#F7F2EA",
                    margin: "0 0 0.3rem",
                  }}
                >
                  {track.title}
                </h3>

                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#C9A24D",
                    margin: "0 0 1.5rem",
                  }}
                >
                  {track.subtitle}
                </p>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
                  {track.points.map((point) => (
                    <li
                      key={point}
                      style={{
                        fontFamily: "EB Garamond, serif",
                        fontSize: "1rem",
                        color: "rgba(247,242,234,0.8)",
                        lineHeight: 1.8,
                        marginBottom: "0.4rem",
                        paddingLeft: "1.2rem",
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

                {/* Add-on callout */}
                <div
                  style={{
                    borderTop: "1px solid rgba(201,162,77,0.2)",
                    paddingTop: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "EB Garamond, serif",
                      fontStyle: "italic",
                      fontSize: "0.95rem",
                      color: "#E5C77A",
                    }}
                  >
                    {track.addon}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Curriculum tracks image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginTop: "3rem" }}
        >
          <img
            src="/images/tracks.png"
            alt="Curriculum Track Overview"
            style={{
              width: "100%",
              display: "block",
              opacity: 0.9,
              border: "1px solid rgba(201,162,77,0.2)",
            }}
          />
        </motion.div>

        {/* Editorial pull-quote — student testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            marginTop: "5rem",
            borderLeft: "3px solid #C9A24D",
            paddingLeft: "2.5rem",
            maxWidth: "44rem",
          }}
        >
          <Quote
            style={{
              width: 26,
              height: 26,
              color: "#C9A24D",
              marginBottom: "1rem",
              opacity: 0.7,
            }}
          />
          <p
            style={{
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              fontSize: "1.2rem",
              color: "#F7F2EA",
              lineHeight: 1.8,
              margin: "0 0 1.5rem",
            }}
          >
            "The combination of Reading and Tajweed tracks transformed my
            Qur'an recitation. I went from struggling with basic pronunciation
            to confidently applying Tajweed rules in my daily reading."
          </p>
          <div>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#C9A24D",
                margin: "0 0 0.2rem",
              }}
            >
              Hussein S.
            </p>
            <p
              style={{
                fontFamily: "EB Garamond, serif",
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: "rgba(247,242,234,0.55)",
                margin: 0,
              }}
            >
              Reading & Tajweed Tracks — NAQI Student
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
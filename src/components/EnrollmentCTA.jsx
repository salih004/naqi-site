import { motion } from "framer-motion";

export default function EnrollmentCTA() {
  return (
    <section
      id="apply"
      style={{ backgroundColor: "#2F4F3E", padding: "6rem 1.5rem" }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
            04 / Registration
          </span>
          <div style={{ flex: 1, height: 1, backgroundColor: "rgba(201,162,77,0.3)" }} />
        </motion.div>

        {/* Two-column: info left, form right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                color: "#C9A24D",
                lineHeight: 1.2,
                margin: "0 0 1.5rem",
              }}
            >
              Begin Your<br />Learning Journey
            </h2>

            <p
              style={{
                fontFamily: "EB Garamond, serif",
                fontSize: "1.1rem",
                lineHeight: 1.95,
                color: "rgba(247,242,234,0.82)",
                margin: "0 0 2.5rem",
              }}
            >
              We are honored to welcome you to NAQI. After submitting your
              registration, our team will review it promptly, schedule your
              orientation, and guide you to begin your Qur'an learning journey
              with confidence.
            </p>

            {/* Divider */}
            <div
              style={{
                borderTop: "1px solid rgba(201,162,77,0.25)",
                paddingTop: "2rem",
              }}
            >
              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#C9A24D",
                  margin: "0 0 1.25rem",
                }}
              >
                Contact Information
              </p>

              {[
                {
                  label: "Phone",
                  value: "+1 (612) 494-6469",
                  href: "tel:+16124946469",
                },
                {
                  label: "Email",
                  value: "noor.alquran.institute.usa@gmail.com",
                  href: "mailto:noor.alquran.institute.usa@gmail.com",
                },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: "1rem" }}>
                  <span
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.58rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(247,242,234,0.35)",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "EB Garamond, serif",
                      fontSize: "1rem",
                      color: "rgba(247,242,234,0.8)",
                      textDecoration: "none",
                    }}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column: embedded form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              backgroundColor: "#F7F2EA",
              padding: "4px",
              border: "1px solid rgba(201,162,77,0.25)",
            }}
          >
            <iframe
              src="https://forms.gle/XaL3TuzsVstFppGu7"
              width="100%"
              height="720"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              style={{ display: "block" }}
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { FileText, Eye, Mail, Calendar, CheckCircle, Award } from "lucide-react";

const enrollmentSteps = [
  {
    step: 1,
    title: "Register Online",
    description: "Students submit their registration through NAQI’s website via Google Forms.",
    bgColor: "#C9A24D",
    iconColor: "#2B2B2B",
    icon: FileText,
  },
  {
    step: 2,
    title: "Review & Approval",
    description:
      "The admin team reviews each submission carefully. Once approved, students are invited to proceed.",
    bgColor: "#2F4F3E",
    iconColor: "#F7F2EA",
    icon: Eye,
  },
  {
    step: 3,
    title: "Receive Confirmation",
    description: "Approved students receive a confirmation email with next steps.",
    bgColor: "#E5C77A",
    iconColor: "#2F4F3E",
    icon: Mail,
  },
  {
    step: 4,
    title: "Schedule Orientation",
    description: "Students are scheduled for a personalized orientation session.",
    bgColor: "#6F7F63",
    iconColor: "#F7F2EA",
    icon: Calendar,
  },
  {
    step: 5,
    title: "Complete Enrollment",
    description:
      "During orientation, students review the program details and sign the official enrollment form.",
    bgColor: "#C9A24D",
    iconColor: "#2B2B2B",
    icon: CheckCircle,
  },
  {
    step: 6,
    title: "Begin Learning Journey",
    description:
      "After final acceptance, students start their Qur’an learning journey with NAQI.",
    bgColor: "#2F4F3E",
    iconColor: "#F7F2EA",
    icon: Award,
  },
];

const timelineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Enrollment() {
  return (
    <section
      id="enrollment"
      className="py-24 px-6 scroll-mt-24"
      style={{ backgroundColor: "#6F7F63" }} // Muted Olive
    >
      <motion.h2
        className="text-3xl md:text-4xl text-2F4F3E font-bold mb-16 text-center"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Enrollment Process
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        <div
          className="absolute left-1/2 -translate-x-1/2 h-full w-px"
          style={{ backgroundColor: "#C9A24D" }}
        />

        <div className="flex flex-col space-y-16">
          {enrollmentSteps.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.step}
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="w-1/2">
                  {isLeft && (
                    <div className="pr-16">
                      <div
                        className="p-6 rounded-xl shadow-md text-left border"
                        style={{
                          borderColor: "#C9A24D",
                          backgroundColor: "#F7F2EA",
                        }}
                      >
                        <h4 className="text-sm font-semibold text-2F4F3E mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-2B2B2B leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 z-20 p-4 rounded-full shadow-lg"
                  style={{
                    backgroundColor: item.bgColor,
                    color: item.iconColor,
                    border: "2px solid #C9A24D",
                  }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>

                <div className="w-1/2">
                  {!isLeft && (
                    <div className="pl-16">
                      <div
                        className="p-6 rounded-xl shadow-md text-left border"
                        style={{
                          borderColor: "#C9A24D",
                          backgroundColor: "#F7F2EA",
                        }}
                      >
                        <h4 className="text-sm font-semibold text-2F4F3E mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-2B2B2B leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.p
        className="mt-20 text-center text-sm text-2B2B2B max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        NAQI’s enrollment process is designed to be clear, transparent, and supportive, ensuring every student enters their learning journey confidently.
      </motion.p>
    </section>
  );
}

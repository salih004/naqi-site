import { motion } from "framer-motion";
import { FileText, Eye, Mail, Calendar, CheckCircle, Award } from "lucide-react";

const enrollmentSteps = [
  {
    step: 1,
    title: "Registration via Website",
    description: "Students register through our website using Google Forms.",
    icon: FileText,
    color: "bg-gold",
  },
  {
    step: 2,
    title: "Registration Review",
    description:
      "Submitted registrations are carefully reviewed by the admin team and once accepted, students begin their learning journey with NAQI.",
    icon: Eye,
    color: "bg-emerald",
  },
  {
    step: 3,
    title: "Confirmation Email",
    description: "Accepted students receive a confirmation email.",
    icon: Mail,
    color: "bg-blue-500",
  },
  {
    step: 4,
    title: "Schedule Orientation",
    description: "Students are scheduled for orientation sessions.",
    icon: Calendar,
    color: "bg-purple-500",
  },
  {
    step: 5,
    title: "Final Acceptance",
    description:
      "During orientation, students review details and sign the enrollment form.",
    icon: CheckCircle,
    color: "bg-pink-500",
  },
  {
    step: 6,
    title: "Start Learning Journey",
    description:
      "Once accepted, students begin their learning journey with NAQI.",
    icon: Award,
    color: "bg-emerald",
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
      className="py-24 bg-white px-6 scroll-mt-24"
    >
      <motion.h2
        className="text-3xl md:text-4xl text-emerald font-bold mb-16 text-center"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Enrollment Process
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gray-200" />

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
                {/* Left Card */}
                <div className="w-1/2">
                  {isLeft && (
                    <div className="pr-16">
                      <div className="bg-gray-50 p-6 rounded-xl shadow-md text-left">
                        <h4 className="text-sm font-semibold text-emerald mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-charcoal leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Icon */}
                <motion.div
                  className={`absolute left-1/2 -translate-x-1/2 z-20 p-4 rounded-full ${item.color} text-white shadow-lg`}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>

                {/* Right Card */}
                <div className="w-1/2">
                  {!isLeft && (
                    <div className="pl-16">
                      <div className="bg-gray-50 p-6 rounded-xl shadow-md text-left">
                        <h4 className="text-sm font-semibold text-emerald mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-charcoal leading-relaxed">
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
        className="mt-20 text-center text-sm text-charcoal max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Our enrollment process is designed to be clear, transparent, and
        supportive—guiding every student smoothly into their learning journey.
      </motion.p>
    </section>
  );
}

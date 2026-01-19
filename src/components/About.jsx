import { motion } from "framer-motion";
import { BookOpen, Users, Sparkles } from "lucide-react";

export default function AboutNAQI() {
    const items = [
        {
            title: "Our Mission",
            text: [
                "Guide students to master Qur’an recitation confidently",
                "Make Qur’an learning accessible and personalized",
                "Cultivate character that reflects Qur’anic teachings in daily life"
            ],
            icon: BookOpen,
        },
        {
            title: "Who We Serve",
            text: [
                "College students",
                "Working professionals",
                "Adults seeking Qur’an learning online"
            ],
            icon: Users,
        },
        {
            title: "Our Approach",
            text: [
                "One-on-one online instruction",
                "Tailored to each student’s schedule",
                "Focus on tajwīd, guided reading, and memorization",
                "Continuous feedback for mastery"
            ],
            icon: Sparkles,
        },
    ];

    // Animation variants
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const iconVariants = {
        animate: { y: [0, -6, 0], transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" } },
    };

    const bulletVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section
            id="about"
            className="bg-gradient-to-br from-emerald/20 via-emerald/10 to-emerald/20 text-emerald px-6 py-24 md:px-12 min-h-screen scroll-mt-24"
        >
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        About Noor Al-Qur’an Institute
                    </h2>
                    <p className="max-w-2xl mx-auto text-sm md:text-base text-emerald/80">
                        Founded with the intention of teaching the Qur’an with mastery—combining sincerity, discipline, and flexibility for modern lives.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-60px" }}
                >
                    {items.map((item) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                variants={cardVariants}
                                whileHover={{ y: -6, scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="rounded-2xl border border-emerald/20 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                {/* Icon animation */}
                                <motion.div
                                    className="mb-4 flex justify-center"
                                    variants={iconVariants}
                                    animate="animate"
                                >
                                    <Icon className="w-9 h-9 text-gold" />
                                </motion.div>

                                <h3 className="text-lg font-semibold mb-4 text-emerald text-center">
                                    {item.title}
                                </h3>

                                {/* Animated bullet points */}
                                <ul className="text-sm text-emerald/80 leading-relaxed list-disc list-outside pl-5 space-y-2">
                                    {item.text.map((point, index) => (
                                        <motion.li
                                            key={index}
                                            variants={bulletVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ delay: index * 0.15 }}
                                        >
                                            {point}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

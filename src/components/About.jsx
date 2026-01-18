import { motion } from "framer-motion";
import { BookOpen, Users, Sparkles } from "lucide-react";

export default function AboutNAQI() {
    const items = [
        {
            title: "Our Mission",
            text: "To nurture a strong, lasting connection with the Qur’an through precise recitation, sound understanding, and consistent practice.",
            icon: BookOpen,
        },
        {
            title: "Who We Serve",
            text: "College students, working professionals, and adults seeking structured, flexible, and personalized Qur’an learning.",
            icon: Users,
        },
        {
            title: "Our Approach",
            text: "One-on-one online instruction, rooted in tajwīd and tadabbur, guided by sincerity, discipline, and spiritual growth.",
            icon: Sparkles,
        },
    ];

    /* Container + card animation */
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    /* Continuous icon animation */
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

    return (
        <section
            id="about"
            className="bg-cream text-emerald px-6 py-24 md:px-12 min-h-screen scroll-mt-24"
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
                        A Qur’an-centered institute dedicated to teaching with clarity,
                        mastery, and sincerity—designed for modern, busy lives.
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
                                className="rounded-2xl border border-emerald/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                {/* Icon (continuous animation) */}
                                <motion.div
                                    className="mb-4 flex justify-center"
                                    variants={iconVariants}
                                    animate="animate"
                                >
                                    <Icon className="w-9 h-9 text-gold" />
                                </motion.div>

                                <h3 className="text-lg font-semibold mb-2 text-emerald text-center">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-emerald/80 leading-relaxed text-center">
                                    {item.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Heart, Palette, Sparkles, Star } from "lucide-react";
import FloatingElements from "@/components/ui/FloatingElements";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

const values = [
  {
    icon: Heart,
    title: "Passion in Craft",
    description: "Every character, every pixel, crafted with genuine care and passion.",
    color: "#d70025",
  },
  {
    icon: Palette,
    title: "Hand-Drawn Art",
    description: "Original artwork that brings warmth and personality to every game.",
    color: "#FFB347",
  },
  {
    icon: Sparkles,
    title: "Magical Worlds",
    description: "Immersive experiences that spark joy and ignite imagination.",
    color: "#7EC8E3",
  },
  {
    icon: Star,
    title: "Original IPs",
    description: "Building an original world that connectes together in magical ways",
    color: "#9B59B6",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-14 md:py-18 bg-rojeh-cream overflow-x-hidden">
      <FloatingElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16 md:mb-20 overflow-visible"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-fredoka)] text-4xl sm:text-5xl md:text-6xl font-bold text-rojeh-charcoal mb-6 leading-tight md:leading-snug overflow-visible"
          >
            We don&apos;t make games.
            <br />
            <span className="text-rojeh-red">We draw dreams.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            At Rojeh Games, we believe video games are an art form. Every character is
            hand-drawn, every world is crafted with care, and every experience is
            designed to bring joy. Inspired by the golden age of Nintendo and the warmth
            of childhood imagination, we create games that feel like a hug from an old
            friend.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow text-center group"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${value.color}15` }}
              >
                <value.icon
                  className="w-8 h-8 transition-transform group-hover:scale-110"
                  style={{ color: value.color }}
                />
              </motion.div>
              <h3 className="font-[family-name:var(--font-fredoka)] text-xl font-bold text-rojeh-charcoal mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

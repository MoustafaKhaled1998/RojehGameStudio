"use client";

import { motion } from "framer-motion";
import GameCard from "@/components/ui/GameCard";
import { GAMES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";
import FloatingElements from "@/components/ui/FloatingElements";

export default function GamesSection() {
  return (
    <section id="games" className="relative py-14 md:py-18 overflow-hidden">
      {/* Floating Elements */}
      <FloatingElements />

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rojeh-pink/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rojeh-blue/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-fredoka)] text-4xl sm:text-5xl md:text-6xl font-bold text-rojeh-charcoal mb-6"
          >
            Adventures <span className="text-rojeh-red">Await</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover our collection of handcrafted games, each one a unique world
            waiting to be explored.
          </motion.p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {GAMES.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>

        {/* More Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-lg">
            More magical adventures are being crafted...{" "}
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-rojeh-red font-semibold"
            >
              Stay tuned!
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

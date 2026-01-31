"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/hero-bg.jpeg"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          className="mb-8 inline-block"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 md:w-32 md:h-32"
          >
            <Image
              src="/logo.svg"
              alt="Rojeh Games Logo"
              width={128}
              height={128}
              className="w-full h-full rounded-3xl"
            />
          </motion.div>
        </motion.div>

        {/* Studio Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-[family-name:var(--font-title)] text-4xl sm:text-5xl md:text-7xl font-bold text-dark mb-4 tracking-tight"
        >
          ROJEH<span className="text-rojeh-red"> GAMES</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl text-dark/90 font-light mb-8 max-w-2xl mx-auto"
        >
          Where Every Pixel is Drawn with{" "}
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block text-rojeh-red font-semibold"
          >
            Love
          </motion.span>
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-dark/70 text-base font-medium md:text-lg max-w-xl mx-auto mb-12"
        >
          Handcrafted indie games with beautiful art, cute characters, and
          heartwarming adventures
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#games"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-rojeh-red text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-rojeh-red/30 hover:bg-red-600 transition-colors"
          >
            Explore Our Games
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-bold border-2 border-white/30 hover:bg-white/30 transition-colors"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}

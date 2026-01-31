"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";
import FloatingElements from "@/components/ui/FloatingElements";

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-14 md:py-18 bg-rojeh-cream overflow-hidden">
      {/* Floating Elements */}
      <FloatingElements />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d70025 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

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
            Handcrafted With <span className="text-rojeh-red">Love</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            A glimpse into the beautiful worlds we create. Every brushstroke tells a
            story.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="gallery-grid"
        >
          {GALLERY_IMAGES.slice(0, 7).map((image, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="gallery-item relative overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-xl md:text-2xl text-rojeh-charcoal/70 italic font-[family-name:var(--font-fredoka)]">
            "Every pixel is a brushstroke in our digital canvas"
          </p>
        </motion.div>
      </div>
    </section>
  );
}

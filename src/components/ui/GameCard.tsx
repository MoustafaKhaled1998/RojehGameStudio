"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "./Badge";
import { Game } from "@/lib/constants";
import { Apple, Play } from "lucide-react";

interface GameCardProps {
  game: Game;
  index: number;
}

export default function GameCard({ game, index }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{
        y: -8,
        rotate: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
      style={{
        boxShadow: `0 8px 40px ${game.accentColor}40, 0 4px 20px rgba(0,0,0,0.1)`,
      }}
    >
      {/* Image Container */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <Image
          src={game.image}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${game.accentColor}40, transparent)`,
          }}
        />
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant={game.status === "available" ? "available" : "coming-soon"}>
            {game.status === "available" ? "Available Now" : "Coming Soon"}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-fredoka)] text-xl sm:text-2xl font-bold text-rojeh-charcoal mb-2">
          {game.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
          {game.description}
        </p>
        {game.tagline && (
          <p
            className="text-sm font-semibold italic mb-4"
            style={{ color: game.accentColor }}
          >
            "{game.tagline}"
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          {game.status === "available" ? (
            <>
              {game.appStoreUrl && (
                <motion.a
                  href={game.appStoreUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-rojeh-charcoal text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-black transition-colors"
                >
                  <Apple size={16} />
                  App Store
                </motion.a>
              )}
              {game.playStoreUrl && (
                <motion.a
                  href={game.playStoreUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors"
                >
                  <Play size={16} fill="white" />
                  Google Play
                </motion.a>
              )}
            </>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

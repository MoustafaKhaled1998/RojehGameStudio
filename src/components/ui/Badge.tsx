"use client";

import { motion } from "framer-motion";

interface BadgeProps {
  variant: "available" | "coming-soon";
  children: React.ReactNode;
}

export default function Badge({ variant, children }: BadgeProps) {
  const variants = {
    available: "bg-emerald-500 text-white",
    "coming-soon": "bg-rojeh-red text-white",
  };

  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${variants[variant]}`}
    >
      {variant === "available" && (
        <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
      )}
      {children}
    </motion.span>
  );
}

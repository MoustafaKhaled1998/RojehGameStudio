"use client";

import { motion } from "framer-motion";
import { buttonHover, buttonTap } from "@/lib/motion-variants";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-rojeh-red text-white hover:bg-red-700 focus:ring-rojeh-red shadow-lg shadow-rojeh-red/25",
    secondary:
      "bg-rojeh-orange text-rojeh-charcoal hover:bg-amber-400 focus:ring-rojeh-orange shadow-lg shadow-rojeh-orange/25",
    outline:
      "border-2 border-rojeh-red text-rojeh-red hover:bg-rojeh-red hover:text-white focus:ring-rojeh-red",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileHover={buttonHover}
        whileTap={buttonTap}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      whileHover={buttonHover}
      whileTap={buttonTap}
    >
      {children}
    </motion.button>
  );
}

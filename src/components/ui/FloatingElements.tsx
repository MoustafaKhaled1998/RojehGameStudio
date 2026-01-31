"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Heart, Sparkles, Gamepad2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const iconTypes = [
  { Icon: Star, color: "text-rojeh-orange", size: 28 },
  { Icon: Heart, color: "text-rojeh-pink", size: 23 },
  { Icon: Sparkles, color: "text-rojeh-blue", size: 32 },
  { Icon: Gamepad2, color: "text-rojeh-red", size: 30 },
];

interface FloatingElement {
  id: number;
  iconIndex: number;
  x: number;
  y: number;
  side: "left" | "right";
}

interface FloatingElementsProps {
  className?: string;
}

const generateRandomPosition = (side: "left" | "right"): { x: number; y: number } => {
  const x = side === "left" ? Math.random() * 8 : 92 + Math.random() * 8;
  const y = 10 + Math.random() * 80;
  return { x, y };
};

export default function FloatingElements({ className = "" }: FloatingElementsProps) {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const idCounterRef = useRef(0);

  useEffect(() => {
    const addElement = () => {
      const side: "left" | "right" = Math.random() > 0.5 ? "left" : "right";
      const { x, y } = generateRandomPosition(side);
      const iconIndex = Math.floor(Math.random() * iconTypes.length);
      const id = idCounterRef.current++;

      const newElement: FloatingElement = {
        id,
        iconIndex,
        x,
        y,
        side,
      };

      setElements((prev) => [...prev, newElement]);

      // Remove element after animation completes (fade in + visible + fade out)
      setTimeout(() => {
        setElements((prev) => prev.filter((el) => el.id !== id));
      }, 8000);
    };

    // Add initial elements with staggered timing
    const initialDelays = [0, 1500, 3000, 4500];
    const timeouts = initialDelays.map((delay) => setTimeout(addElement, delay));

    // Continue adding elements periodically
    const interval = setInterval(addElement, 1800);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <AnimatePresence>
        {elements.map((el) => {
          const iconType = iconTypes[el.iconIndex];
          return (
            <motion.div
              key={el.id}
              className={`absolute ${iconType.color}`}
              style={{
                left: `${el.x}%`,
                top: `${el.y}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.4, 0.4, 0],
                scale: [0, 1, 1, 0.8],
                y: [0, -20, -40, -60],
                rotate: [0, 15, -15, 0],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 8,
                times: [0, 0.15, 0.75, 1],
                ease: "easeInOut",
              }}
            >
              <iconType.Icon size={iconType.size} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

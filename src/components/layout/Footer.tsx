"use client";

import { motion } from "framer-motion";
import {
  Gamepad2,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
  Heart,
  Star,
} from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const socialIcons = [
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
  { icon: MessageCircle, href: SOCIAL_LINKS.discord, label: "Discord" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-rojeh-charcoal text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-rojeh-red via-rojeh-orange to-rojeh-blue" />

      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 right-10 text-rojeh-red/20"
      >
        <Star size={40} fill="currentColor" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-10 text-rojeh-orange/20"
      >
        <Gamepad2 size={50} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <motion.a
              href="#home"
              className="flex items-center gap-3 mb-6 group"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 bg-rojeh-red rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-rojeh-red/30 transition-shadow">
                <Gamepad2 className="w-7 h-7 text-white" />
              </div>
              <span className="font-[family-name:var(--font-fredoka)] text-2xl font-bold">
                Rojeh<span className="text-rojeh-red">Games</span>
              </span>
            </motion.a>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              An indie game studio dedicated to creating beautiful, hand-drawn games
              with heart. Every pixel crafted with love, every world designed to bring
              joy.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-rojeh-red hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-fredoka)] text-lg font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#d70025" }}
                    className="text-gray-400 hover:text-rojeh-red transition-colors inline-block"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-fredoka)] text-lg font-bold mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="mailto:rojehmaher@rojehgames.com"
                  className="hover:text-rojeh-red transition-colors"
                >
                  rojehmaher@rojehgames.com
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-rojeh-red transition-colors"
                >
                  Contact Form
                </a>
              </li>
            </ul>

            {/* App Store Badges */}
            <div className="mt-6 flex flex-col gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-sm">App Store</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="text-sm">Google Play</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            ©Rojeh Games.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="/policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

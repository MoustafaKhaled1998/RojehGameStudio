"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Mail } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";
import FloatingElements from "@/components/ui/FloatingElements";

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) throw new Error("Failed to send");

      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFF9F0 0%, #FFE5EC 50%, #FFF9F0 100%)",
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-rojeh-red/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-rojeh-orange/10 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rojeh-blue/10 rounded-full blur-xl" />

      {/* Floating Elements */}
      <FloatingElements />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl text-center"
        >
          {/* Icon */}
          <motion.div
            variants={fadeInUp}
            className="w-20 h-20 bg-rojeh-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Mail className="w-10 h-10 text-rojeh-red" />
            </motion.div>
          </motion.div>

          {/* Header */}
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-fredoka)] text-3xl sm:text-4xl md:text-5xl font-bold text-rojeh-charcoal mb-4"
          >
            Get in <span className="text-rojeh-red">Touch with Us</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-lg mb-8 max-w-xl mx-auto"
          >
            Have a question, feedback, or just want to say hello? We&apos;d love to hear from you!
          </motion.p>

          {/* Form */}
          <motion.div variants={fadeInUp}>
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col gap-4 max-w-md mx-auto"
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-6 py-4 rounded-full border-2 border-rojeh-pink focus:border-rojeh-red focus:outline-none transition-colors text-rojeh-charcoal placeholder:text-gray-400"
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-6 py-4 rounded-full border-2 border-rojeh-pink focus:border-rojeh-red focus:outline-none transition-colors text-rojeh-charcoal placeholder:text-gray-400"
                    required
                  />
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-rojeh-pink focus:border-rojeh-red focus:outline-none transition-colors text-rojeh-charcoal placeholder:text-gray-400 resize-none"
                    required
                  />
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-rojeh-red text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-rojeh-red/25 hover:bg-red-600 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center"
                  >
                    <Check className="w-8 h-8 text-emerald-600" />
                  </motion.div>
                  <p className="text-xl font-semibold text-rojeh-charcoal">
                    Message sent!
                  </p>
                  <p className="text-gray-600">
                    We&apos;ll get back to you as soon as possible!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="text-rojeh-red font-semibold hover:underline mt-2"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Response Note */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-sm mt-6"
          >
            We&apos;ll respond to your message within 24-48 hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

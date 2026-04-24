"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,43,0.3) 0%, transparent 70%)",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Star field */}
      {mounted && (
        <div className="absolute inset-0" aria-hidden="true">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.1,
                animation: `pulse-glow ${2 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="text-sm uppercase tracking-[0.4em] text-neon-blue mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ✦ Cosmic Hydration Redefined
          </motion.p>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tight mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block gradient-text-mixed">Nano</span>
          <span className="block text-white mt-2">Banana</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Engineered at the molecular level. Delivered from the cosmos.
          <br />
          <span className="text-neon-orange font-medium">
            The juice that defies gravity.
          </span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            id="hero-cta-primary"
            className="group relative px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider overflow-hidden transition-all duration-500"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-orange opacity-100 group-hover:opacity-90 transition-opacity" />
            <span className="absolute inset-0 bg-gradient-to-r from-neon-orange to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <span className="relative z-10 text-white">Explore the Drop</span>
          </button>
          <button
            id="hero-cta-secondary"
            className="px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all duration-300"
          >
            Watch Journey ↓
          </button>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-xs text-gray-500 uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-neon-blue rounded-full mt-1.5"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

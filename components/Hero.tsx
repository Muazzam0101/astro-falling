"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-8 py-16 border-b-8 border-black"
    >
      {/* Abstract decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-8 border-[#FF5E00] rotate-12 opacity-50" />
      <div className="absolute bottom-20 right-10 w-64 h-8 bg-white -rotate-6 opacity-30" />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-[#FF5E00] rotate-45" />
      <div className="absolute bottom-1/3 left-1/6 w-20 h-20 border-4 border-white rotate-[30deg] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-[#FF5E00] text-black px-4 py-1 border-4 border-white font-black text-xl mb-6 -rotate-2 uppercase"
        >
          DROP 01 — INTERACTIVE SHOWCASE
        </motion.div>

        <motion.h1
          className="font-black text-white text-[14vw] md:text-[12vw] leading-[0.85] uppercase mb-8 tracking-tighter"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          RAW<br />
          <span className="text-[#FF5E00]">STRUCTURE</span>
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#astronaut-scroll"
            className="group relative bg-[#FF5E00] text-black border-4 border-black px-12 py-6 text-xl md:text-2xl font-black uppercase tracking-widest neo-shadow-white hover:-translate-x-1 hover:-translate-y-1 transition-all active:translate-x-2 active:translate-y-2 active:shadow-none"
          >
            INITIALIZE SEQUENCE ↓
          </a>
          <p className="max-w-md text-white/80 text-lg md:text-xl font-medium border-l-4 border-[#FF5E00] pl-6 uppercase">
            It is not a typical website. It’s a live interactive experience demonstrating advanced web design and storytelling.
          </p>
        </motion.div>

        {/* Stats badges */}
        <motion.div
          className="flex flex-wrap gap-6 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="border-4 border-white p-4 neo-shadow-orange -rotate-2 bg-black">
            <span className="font-black text-white text-lg uppercase">60 FPS ENGINE</span>
          </div>
          <div className="border-4 border-white p-4 neo-shadow-white rotate-2 bg-[#FF5E00] text-black">
            <span className="font-black text-lg uppercase">NO COMPROMISE</span>
          </div>
          <div className="border-4 border-white p-4 neo-shadow-orange rotate-1 bg-black hidden md:block">
            <span className="font-black text-white text-lg uppercase">WEBGL NATIVE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

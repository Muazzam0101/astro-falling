"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="bg-white py-24 md:py-32 border-b-8 border-black px-8 md:px-16 relative overflow-hidden">
      {/* Decorative stickers */}
      <div className="absolute top-8 left-8 bg-black text-white px-6 py-2 border-4 border-white font-black uppercase -rotate-12 hidden md:block">
        NO REGRETS
      </div>
      <div className="absolute bottom-8 right-8 bg-white text-black px-6 py-2 border-4 border-black font-black uppercase rotate-6 hidden md:block">
        GO HARD
      </div>

      <div ref={ref} className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          className="font-black text-[48px] md:text-[80px] lg:text-[100px] leading-[0.95] uppercase mb-12 text-black tracking-tighter"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          ARE YOU READY<br />
          TO JOIN THE{" "}
          <span className="bg-[#FF5E00] text-white px-4">DROP</span>?
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-8 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2" />
            <button className="relative bg-[#FF5E00] text-white border-8 border-black px-12 py-6 font-black text-xl md:text-2xl uppercase hover:translate-x-1 hover:translate-y-1 transition-all active:translate-x-2 active:translate-y-2">
              RESERVE YOUR SPOT →
            </button>
          </div>

          <div className="bg-black text-white p-6 border-8 border-black rotate-1">
            <p className="font-black uppercase text-sm tracking-widest">
              SECURE YOUR SPOT IN<br />THE NEXT LUNAR DROP.
            </p>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {["NASA APPROVED", "ZERO GRAVITY TESTED", "CARBON NEUTRAL"].map((badge) => (
            <div
              key={badge}
              className="bg-white border-4 border-black px-4 py-2 font-black text-sm uppercase tracking-widest neo-shadow-sm"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

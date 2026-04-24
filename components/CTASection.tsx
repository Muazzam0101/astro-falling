"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="relative py-32 md:py-48 px-6 overflow-hidden">
      {/* Background orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,43,0.3) 0%, transparent 50%)",
        }}
      />

      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="text-xs uppercase tracking-[0.5em] text-neon-blue mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ✦ Ready for Launch?
          </motion.p>

          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Join the
            <br />
            <span className="gradient-text-mixed">Cosmic Drop</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Be among the first to experience Nano Banana. Limited batches
            available each lunar cycle. Reserve your spot in the orbital queue.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* Primary CTA */}
            <motion.button
              id="cta-reserve"
              className="group relative px-10 py-5 rounded-full text-base font-bold uppercase tracking-wider overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neon-blue via-purple-500 to-neon-orange" />
              <span className="absolute inset-[2px] bg-surface-900 rounded-full" />
              <span className="absolute inset-[2px] bg-gradient-to-r from-neon-blue/10 to-neon-orange/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 gradient-text-mixed">
                Reserve Now →
              </span>
            </motion.button>

            {/* Secondary */}
            <motion.button
              id="cta-learn-more"
              className="px-10 py-5 rounded-full text-base font-medium uppercase tracking-wider text-gray-400 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            {["NASA Approved", "Zero Gravity Tested", "Carbon Neutral"].map(
              (badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-blue/60" />
                  {badge}
                </div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

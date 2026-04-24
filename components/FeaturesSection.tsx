"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="bg-[#FF5E00] py-24 md:py-32 border-b-8 border-black">
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large feature card */}
          <motion.div
            className="md:col-span-8 bg-white border-8 border-black p-8 md:p-12 neo-shadow hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-6xl mb-6 block">⚡</span>
            <h3 className="font-black text-headline-lg uppercase mt-4 leading-tight text-black">
              NANO-ENGINEERED<br />PRECISION
            </h3>
            <p className="text-body-lg text-black mt-4 max-w-lg font-medium">
              EACH MOLECULE IS PRECISELY CALIBRATED FOR MAXIMUM ABSORPTION. OUR PROPRIETARY NANO-TECH ENSURES EVERY SIP DELIVERS COSMIC-LEVEL NUTRITION.
            </p>
          </motion.div>

          {/* Side stat card */}
          <motion.div
            className="md:col-span-4 bg-black text-white border-8 border-black p-8 md:p-12 neo-shadow-orange flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-6xl mb-6 block">⚛️</span>
            <div>
              <h3 className="font-black text-headline-md uppercase mb-4 text-[#FF5E00]">SPACE-GRADE</h3>
              <p className="text-body-md opacity-80 font-medium">
                TESTED IN ZERO-GRAVITY ENVIRONMENTS. THE SAME FORMULA TRUSTED BY ASTRONAUTS.
              </p>
            </div>
            <div className="mt-8 border-t-4 border-white pt-6">
              <span className="font-black text-5xl">10B+</span>
              <div className="font-bold uppercase text-sm text-[#FF5E00] mt-1">NANO-PARTICLES</div>
            </div>
          </motion.div>

          {/* Bottom row */}
          <motion.div
            className="md:col-span-4 bg-black text-white border-8 border-black p-8 neo-shadow -rotate-1 hover:rotate-0 transition-all"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-black text-headline-md uppercase text-[#FF5E00] mb-4">BIO-ADAPTIVE</h4>
            <p className="text-body-md opacity-80 font-medium">
              OUR AI-DRIVEN MOLECULAR STRUCTURE ADAPTS TO YOUR BODY&apos;S UNIQUE HYDRATION NEEDS.
            </p>
            <div className="mt-6 flex gap-2">
              <div className="w-8 h-8 bg-white border-2 border-white"></div>
              <div className="w-8 h-8 bg-[#FF5E00] border-2 border-white"></div>
              <div className="w-8 h-8 bg-black border-2 border-white"></div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-4 bg-white border-8 border-black p-8 flex items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="text-[80px] font-black text-black leading-none">10×</div>
              <div className="font-bold uppercase text-[#FF5E00] border-t-4 border-black pt-2 mt-2 tracking-widest text-sm">
                FASTER HYDRATION
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-4 bg-white border-8 border-black p-8 neo-shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-6xl mb-4 block">🧬</span>
            <h4 className="font-black text-xl uppercase mb-2">QUANTUM NUTRITION</h4>
            <p className="text-body-md opacity-70 font-medium">
              PERSONALIZED AT THE MOLECULAR LEVEL. EVERY DROP CALIBRATED TO YOU.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

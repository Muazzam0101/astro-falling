"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "⚛️",
    title: "Nano-Engineered",
    description:
      "Each molecule is precisely calibrated for maximum absorption. Our proprietary nano-tech ensures every sip delivers cosmic-level nutrition.",
  },
  {
    icon: "🌌",
    title: "Space-Grade Quality",
    description:
      "Tested in zero-gravity environments and approved by interstellar nutritionists. The same formula trusted by astronauts on deep space missions.",
  },
  {
    icon: "⚡",
    title: "Instant Hydration",
    description:
      "Nano-particles penetrate cells 10x faster than conventional beverages. Feel the cosmic energy surge within nanoseconds.",
  },
  {
    icon: "🧬",
    title: "Bio-Adaptive Formula",
    description:
      "Our AI-driven molecular structure adapts to your body's unique hydration needs. Personalized nutrition, at the quantum level.",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-32 md:py-48 px-6">
      {/* Parallax accent */}
      <div
        className="absolute top-1/3 right-0 w-[300px] h-[600px] opacity-[0.03]"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(255,107,43,0.5), transparent)",
        }}
      />

      <div ref={sectionRef} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-neon-orange mb-4">
            ◆ Why Nano Banana
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Beyond{" "}
            <span className="gradient-text-blue">Ordinary</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-light">
            Not just juice. A quantum leap in beverage technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass rounded-2xl p-8 md:p-10 group hover:border-white/15 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at top left, rgba(0,212,255,0.03) 0%, transparent 60%)"
                }}
              />

              <div className="relative z-10">
                <div className="text-4xl mb-5">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

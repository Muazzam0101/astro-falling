"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    id: "cosmic-original",
    name: "Cosmic Original",
    tagline: "Pure banana essence, zero gravity.",
    description:
      "Our flagship formula. Molecular-distilled banana juice with electrolyte nanoparticles for instant cosmic hydration.",
    color: "#FFD93D",
    gradient: "from-yellow-400 to-orange-400",
    stats: [
      { label: "Potassium", value: "420mg" },
      { label: "Nano-particles", value: "10B+" },
      { label: "Gravity Level", value: "0.0g" },
    ],
  },
  {
    id: "nebula-berry",
    name: "Nebula Berry",
    tagline: "Banana × Berry supernova fusion.",
    description:
      "Dark matter berries collide with nano-banana in an explosion of antioxidants. The taste of a dying star, reborn.",
    color: "#A855F7",
    gradient: "from-purple-500 to-pink-500",
    stats: [
      { label: "Antioxidants", value: "∞" },
      { label: "Berry Fusion", value: "99.9%" },
      { label: "Dark Matter", value: "12mg" },
    ],
  },
  {
    id: "solar-mango",
    name: "Solar Mango",
    tagline: "Sun-forged tropical plasma.",
    description:
      "Harvested from the solar corona. Mango plasma infused with banana nanobots for the ultimate tropical experience.",
    color: "#FF6B2B",
    gradient: "from-orange-500 to-red-500",
    stats: [
      { label: "Solar Energy", value: "1.2kJ" },
      { label: "Mango Plasma", value: "100%" },
      { label: "Temperature", value: "Sub-zero" },
    ],
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id={`product-${product.id}`}
      className="relative group"
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="glass-strong rounded-2xl p-8 md:p-10 relative overflow-hidden hover:border-white/20 transition-all duration-500">
        {/* Background glow */}
        <div
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle, ${product.color} 0%, transparent 70%)`,
          }}
        />

        {/* Accent line */}
        <div
          className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${product.gradient} opacity-50`}
        />

        <div className="relative z-10">
          {/* Number */}
          <span className="text-7xl md:text-8xl font-black opacity-5 absolute -top-4 -left-2 select-none">
            0{index + 1}
          </span>

          {/* Title */}
          <h3
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: product.color }}
          >
            {product.name}
          </h3>

          <p className="text-white/40 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
            {product.tagline}
          </p>

          <p className="text-gray-400 leading-relaxed mb-8 max-w-md font-light">
            {product.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {product.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: product.color }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            className={`group/btn px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider border transition-all duration-300`}
            style={{
              borderColor: `${product.color}33`,
              color: product.color,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${product.color}15`;
              e.currentTarget.style.borderColor = `${product.color}66`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = `${product.color}33`;
            }}
          >
            Add to Orbit →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductSection() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section id="products" className="relative py-32 md:py-48 px-6">
      {/* Background gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-5"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,212,255,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          ref={headingRef}
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 40 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-neon-blue mb-4">
            ◆ The Collection
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Choose Your{" "}
            <span className="gradient-text-orange">Flavor Orbit</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-light">
            Three cosmic formulations. Infinite hydration possibilities.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

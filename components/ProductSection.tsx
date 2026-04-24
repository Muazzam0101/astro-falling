"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    id: "cosmic-original",
    name: "COSMIC ORIGINAL",
    tagline: "PURE BANANA ESSENCE",
    description: "MOLECULAR-DISTILLED BANANA JUICE WITH ELECTROLYTE NANOPARTICLES FOR INSTANT COSMIC HYDRATION.",
    price: "$29",
    color: "bg-[#FF5E00]",
    textColor: "text-white",
    priceColor: "text-black",
    btnBg: "bg-white text-black",
    badge: "HOT",
    rotate: "rotate-1",
  },
  {
    id: "nebula-berry",
    name: "NEBULA BERRY",
    tagline: "BANANA × BERRY FUSION",
    description: "DARK MATTER BERRIES COLLIDE WITH NANO-BANANA IN AN EXPLOSION OF ANTIOXIDANTS.",
    price: "$34",
    color: "bg-white",
    textColor: "text-black",
    priceColor: "text-[#FF5E00]",
    btnBg: "bg-[#FF5E00] text-white",
    badge: "NEW",
    rotate: "-rotate-1",
  },
  {
    id: "solar-mango",
    name: "SOLAR MANGO",
    tagline: "SUN-FORGED PLASMA",
    description: "MANGO PLASMA INFUSED WITH BANANA NANOBOTS FOR THE ULTIMATE TROPICAL EXPERIENCE.",
    price: "$32",
    color: "bg-[#FF5E00]",
    textColor: "text-white",
    priceColor: "text-black",
    btnBg: "bg-white text-black",
    badge: null,
    rotate: "rotate-2",
  },
];

export default function ProductSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="bg-white py-24 md:py-32 px-8 md:px-16 border-b-8 border-black">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-black text-white px-4 py-2 font-black text-sm uppercase tracking-widest inline-block mb-4 neo-shadow-sm">
            THE COLLECTION
          </span>
          <h2 className="font-black text-headline-lg uppercase mt-4 text-black">
            CHOOSE YOUR <span className="bg-[#FF5E00] text-white px-3">FLAVOR</span> ORBIT
          </h2>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`${product.color} border-8 border-black p-8 neo-shadow-lg relative ${product.rotate} hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all`}
            >
              {/* Badge */}
              {product.badge && (
                <div className={`absolute -top-4 -left-4 ${product.badge === "HOT" ? "bg-white text-black" : "bg-[#FF5E00] text-white"} border-4 border-black px-4 py-1 font-black text-sm rotate-[-12deg] z-10`}>
                  {product.badge}
                </div>
              )}

              <div className="mb-4">
                <span className={`${product.textColor} font-black text-sm uppercase tracking-widest opacity-70`}>
                  {product.tagline}
                </span>
              </div>

              <h3 className={`font-black text-headline-md uppercase mb-2 ${product.textColor}`}>
                {product.name}
              </h3>

              <p className={`text-body-md mb-6 ${product.textColor} opacity-80 font-medium`}>
                {product.description}
              </p>

              <div className={`text-[64px] font-black leading-none mb-6 ${product.priceColor}`}>
                {product.price}
              </div>

              <button className={`w-full ${product.btnBg} border-4 border-black py-4 font-black text-xl uppercase neo-hover neo-active transition-all`}>
                ADD TO ORBIT
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

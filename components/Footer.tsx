"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="relative py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-bold gradient-text-mixed">
              Nano Banana
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Premium Cosmic Hydration
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            {["Products", "Story", "Science", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-500 hover:text-neon-blue transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            © 2026 Nano Banana. All rights across the galaxy.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

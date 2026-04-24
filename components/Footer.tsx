"use client";

export default function Footer() {
  return (
    <footer className="bg-black border-t-8 border-black w-full px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-black text-[#FF5E00] uppercase tracking-tighter">NANO.BANANA</span>
        <p className="font-bold uppercase tracking-widest text-[10px] text-white/50">
          © 2026 NANO BANANA. RAW COSMIC JUICE. ALL RIGHTS RESERVED.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {["PRODUCTS", "STORY", "SCIENCE", "DISCORD"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-white hover:text-[#FF5E00] font-bold uppercase text-sm tracking-widest transition-colors hover:italic"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="text-[#FF5E00] font-bold uppercase text-xs tracking-widest">
        BUILT DIFFERENT.
      </div>
    </footer>
  );
}

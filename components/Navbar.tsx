"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-8 md:px-16 py-6 bg-white border-b-8 border-black neo-shadow">
      <div className="text-2xl md:text-3xl font-black text-black uppercase tracking-tighter border-4 border-black px-4 py-1 neo-shadow-sm">
        NANO.BANANA
      </div>
      <div className="hidden md:flex items-center gap-4">
        <a href="#astronaut-scroll" className="bg-[#FF5E00] text-white font-bold px-4 py-2 border-4 border-black neo-shadow-sm neo-hover neo-active transition-all uppercase tracking-tighter">
          EXPERIENCE
        </a>
        <a href="#products" className="text-black font-bold px-4 py-2 border-4 border-transparent hover:bg-[#FF5E00] hover:text-white hover:border-black transition-all uppercase tracking-tighter">
          PRODUCTS
        </a>
        <a href="#features" className="text-black font-bold px-4 py-2 border-4 border-transparent hover:bg-[#FF5E00] hover:text-white hover:border-black transition-all uppercase tracking-tighter">
          FEATURES
        </a>
      </div>
      <button className="bg-black text-white px-6 py-2 font-black uppercase border-4 border-black hover:bg-[#FF5E00] transition-all neo-active tracking-tighter">
        ORDER NOW
      </button>
    </nav>
  );
}

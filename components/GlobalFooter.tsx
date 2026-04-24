"use client";

import Link from "next/link";

export default function GlobalFooter() {
  return (
    <footer className="bg-white border-t-8 border-black w-full px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-8 mt-24">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <span className="text-2xl font-black text-black uppercase tracking-tighter italic">NEOPROD</span>
        <p className="font-epilogue font-bold uppercase tracking-widest text-sm text-black">
          © 2024 RAW STRUCTURAL HONESTY. ALL RIGHTS RESERVED.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        <Link href="#" className="font-epilogue font-bold uppercase tracking-widest text-sm text-black border-4 border-transparent px-2 py-1 hover:bg-[#FF5E00] hover:text-black hover:border-black transition-all">Privacy Policy</Link>
        <Link href="#" className="font-epilogue font-bold uppercase tracking-widest text-sm text-black border-4 border-transparent px-2 py-1 hover:bg-[#FF5E00] hover:text-black hover:border-black transition-all">Terms of Service</Link>
        <Link href="#" className="font-epilogue font-bold uppercase tracking-widest text-sm text-black border-4 border-transparent px-2 py-1 hover:bg-[#FF5E00] hover:text-black hover:border-black transition-all">Github</Link>
        <Link href="#" className="font-epilogue font-bold uppercase tracking-widest text-sm text-black border-4 border-transparent px-2 py-1 hover:bg-[#FF5E00] hover:text-black hover:border-black transition-all">Status</Link>
      </div>
    </footer>
  );
}

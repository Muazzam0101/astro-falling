"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    const baseClasses = "font-bold px-4 py-1 transition-all border-4 uppercase tracking-tighter";
    
    if (isActive) {
      return `${baseClasses} bg-[#FF5E00] text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`;
    }
    return `${baseClasses} text-black border-transparent hover:bg-black hover:text-white hover:border-black hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`;
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-8 py-6 bg-white border-b-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-3xl font-black text-black italic uppercase tracking-tighter border-4 border-black px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FF5E00] hover:text-white transition-colors">
          NEOPROD
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/products" className={getLinkClasses("/products")}>Capabilities</Link>
          <Link href="/story" className={getLinkClasses("/story")}>Showcase</Link>
          <Link href="/about" className={getLinkClasses("/about")}>Manifesto</Link>
          <Link href="/contact" className={getLinkClasses("/contact")}>Contact</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-black font-bold uppercase px-4 py-1 border-4 border-transparent hover:border-black hover:bg-black hover:text-white transition-all">Login</button>
        <button className="bg-[#FF5E00] text-black font-bold uppercase px-6 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform active:translate-x-0 active:translate-y-0">
          Join System
        </button>
      </div>
    </nav>
  );
}

"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <header className="bg-black text-white min-h-[80vh] flex flex-col justify-center items-center px-8 md:px-12 py-32 text-center border-b-8 border-black">
        <h1 className="font-display text-[10vw] leading-[0.9] uppercase mb-8 font-black">BUILT TO DISRUPT</h1>
        <p className="font-display text-2xl md:text-3xl max-w-4xl text-[#FF5E00] italic font-black uppercase">
          RAW STRUCTURAL HONESTY. AGGRESSIVE VISUAL CLARITY. THE NEW STANDARD OF DIGITAL ARCHITECTURE.
        </p>
        <div className="mt-16 flex flex-col md:flex-row gap-8">
          <div className="border-4 border-white p-6 shadow-[8px_8px_0px_0px_#FF5E00] -rotate-2 bg-black">
            <span className="font-black text-2xl uppercase">EST. 2026</span>
          </div>
          <div className="border-4 border-white p-6 shadow-[8px_8px_0px_0px_#FFFFFF] rotate-2 bg-[#FF5E00] text-black">
            <span className="font-black text-2xl uppercase">NO COMPROMISE</span>
          </div>
        </div>
      </header>

      {/* Manifesto Section */}
      <section className="bg-black text-white py-32 px-8 md:px-12 border-b-8 border-black overflow-hidden relative">
        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          <div className="-rotate-1 bg-white text-black p-8 border-4 border-[#FF5E00] inline-block shadow-[8px_8px_0px_0px_#FF5E00]">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase m-0 font-black">THE MANIFESTO</h2>
          </div>
          <div className="space-y-4">
            <p className="font-display text-4xl md:text-6xl uppercase leading-none rotate-1 font-black">
              WE REJECT THE <span className="text-[#FF5E00]">SOFTNESS</span> OF MODERN DESIGN.
            </p>
            <p className="font-display text-3xl md:text-5xl uppercase leading-none -rotate-1 text-zinc-500 font-black mt-4">
              NO GRADIENTS. NO BLURS. NO COWARDICE.
            </p>
            <p className="font-display text-4xl md:text-6xl uppercase leading-none rotate-2 font-black mt-8 block">
              ONLY <span className="border-b-8 border-[#FF5E00] pb-2">STRUCTURE</span>. ONLY TRUTH.
            </p>
          </div>
          <div className="pt-16">
            <button className="bg-white text-black border-4 border-black px-12 py-6 font-black text-2xl uppercase shadow-[8px_8px_0px_0px_#FF5E00] hover:translate-x-1 hover:translate-y-1 transition-transform">
              JOIN THE RESISTANCE
            </button>
          </div>
        </div>
        <div className="absolute top-1/4 right-0 w-64 h-64 border-8 border-[#FF5E00] rotate-45 opacity-20 pointer-events-none"></div>
      </section>

      {/* Mission/Team Asymmetrical Grid */}
      <section className="bg-white py-32 px-8 md:px-12 border-b-8 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left: Big Text */}
            <div className="lg:w-1/2">
              <h2 className="font-display text-[60px] md:text-[80px] leading-none uppercase mb-12 font-black">OUR MISSION</h2>
              <div className="space-y-8">
                <p className="text-xl md:text-2xl font-medium text-black border-l-8 border-[#FF5E00] pl-8 py-2">
                  NEOPROD exists to provide a sanctuary for those who value clarity over comfort. We build tools that don't hide their internal workings but celebrate them.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                  <div className="bg-zinc-100 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-black text-5xl md:text-6xl block mb-4 text-[#FF5E00]">99%</span>
                    <span className="font-black uppercase text-sm tracking-widest">UPTIME HONESTY</span>
                  </div>
                  <div className="bg-[#FF5E00] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white">
                    <span className="font-black text-5xl md:text-6xl block mb-4 text-black">0%</span>
                    <span className="font-black uppercase text-sm tracking-widest text-black">DECORATIVE WASTE</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Visual Chaos */}
            <div className="lg:w-1/2 relative min-h-[500px] mt-16 lg:mt-0">
              <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-[#FF5E00] border-8 border-black z-10 rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img className="w-full h-full object-cover grayscale" alt="Modern portrait with sharp dramatic lighting and high contrast" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLXr15DmKJTDcKNGGfWNJ8Usgbq8NLHiar093xKs4VQ9j68bOY6z8NoTMrxHwmhc4tZGP_WakRCpB53nYTd39tHBWnAZFCJ89Ey4bOeDJ3umR022h-X1AxZMwNPWoD29CjDKLdwtQm_jHgsetjGo1hXvKxGDGaGpVR_ySXDiHpPRoNbaFMOVUKToMgwuoJUUDb-7EViX8UKnsNNLkvd-l4g2DLAozqQ8AATUAaTcVvA3UYf1MCkarnth31UTDPh_PmPzyqnIQ-ZJY" />
              </div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white border-8 border-black z-20 -rotate-6 shadow-[8px_8px_0px_0px_#FF5E00] flex items-center justify-center p-8">
                <p className="font-black text-3xl uppercase text-center italic leading-tight">"WE DON'T FOLLOW TRENDS. WE DESTROY THEM."</p>
              </div>
              <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-black border-4 border-white rotate-45 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#FF5E00] py-32 px-8 md:px-12 border-b-8 border-black text-center">
        <h2 className="font-display text-5xl md:text-6xl font-black uppercase mb-12">READY TO DISRUPT?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          <input 
            className="w-full bg-white border-8 border-black p-6 font-black text-xl md:text-2xl uppercase focus:outline-none placeholder:text-zinc-400 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all" 
            placeholder="ENTER YOUR EMAIL" 
            type="email" 
          />
          <button className="w-full md:w-auto whitespace-nowrap bg-black text-white border-8 border-black px-12 py-6 font-black text-xl md:text-2xl uppercase shadow-[8px_8px_0px_0px_#FFFFFF] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#FFFFFF] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none">
            SECURE ACCESS
          </button>
        </div>
      </section>
    </div>
  );
}

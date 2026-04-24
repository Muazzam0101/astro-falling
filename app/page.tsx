import AstronautScroll from "@/components/AstronautScroll";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />
      
      {/* Astronaut Animation */}
      <AstronautScroll />
      
      {/* Initial Marquee */}
      <Marquee />

      {/* Capabilities Section */}
      <section className="bg-white py-24 px-8 border-b-8 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="bg-black text-white px-4 py-2 font-black text-sm uppercase tracking-widest mb-4 inline-block">CAPABILITIES</span>
            <h2 className="font-display text-black text-headline-lg uppercase mt-4">ENGINEERED FOR IMPACT</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-[#FF5E00] text-black px-6 py-2 font-black border-b-4 border-l-4 border-black group-hover:rotate-3 transition-transform">
                NEW
              </div>
              <span className="text-6xl mb-6 block">⚡</span>
              <h3 className="font-display text-headline-md uppercase mb-4 text-black">MOMENTUM DRIVEN FLOWS</h3>
              <p className="font-body-lg text-black/70 mb-8 max-w-xl">Our interface architecture eliminates cognitive friction by utilizing high-contrast visual anchors that guide the eye exactly where it needs to be.</p>
              <img className="w-full h-64 object-cover border-4 border-black grayscale brightness-50" alt="abstract shape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARujhMZG_Isa4-toAkRmNnfpY7yz6LWiez9BvFXzZNbWiYdJiHzfvhcJSJavXAFlan-UHauhnEecPEyMbuTaO_PXTdtpVOkfPw9Xi0MampE__Bry_LxhaawTr9IqphdLIchrIK1FKUj3vMKU1NC1myuXdd0vO6IVEjvDpar8-yOgTMYx2NOX2amtjfmeAHooTDqCMQ4yiIYAIKFvuKb-4nSxbDRQ2FDurjBeW3LGv5RqOUPW6FKF7vmv_Yj89h5mQ74hphKN8j8BE" />
            </div>
            
            <div className="md:col-span-4 bg-[#FF5E00] border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div>
                <span className="text-6xl mb-6 text-black block">💻</span>
                <h3 className="font-display text-headline-md uppercase text-black mb-4">DEV FIRST<br/>CORE</h3>
              </div>
              <p className="font-body-md text-black font-bold uppercase">API-CENTRIC INFRASTRUCTURE BUILT FOR RADICAL SCALE.</p>
            </div>
            
            <div className="md:col-span-5 bg-black text-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_#FF5E00] flex flex-col justify-center relative">
              <div className="absolute -top-4 -left-4 bg-white text-black border-4 border-black px-4 py-1 font-black -rotate-6">
                RAW
              </div>
              <h3 className="font-display text-headline-md uppercase mb-4 text-white">ZERO BLOAT</h3>
              <p className="font-body-md text-white/70">No blurs. No gradients. Just pure functional elements arranged for maximum clarity and speed.</p>
            </div>
            
            <div className="md:col-span-7 border-8 border-black p-8 flex flex-col md:flex-row gap-8 items-center bg-[#fff8f6] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex-1">
                <h3 className="font-display text-headline-md uppercase mb-4 text-black">BRUTALIST ANALYITCS</h3>
                <p className="font-body-md text-black/70">Metrics that don't hide behind soft charts. Hard data delivered with hard edges.</p>
              </div>
              <div className="w-full md:w-48 h-48 bg-black flex items-center justify-center border-4 border-black">
                <span className="text-[#FF5E00] font-black text-6xl">99%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="bg-black py-24 overflow-hidden border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 mt-8">
          <div className="relative">
            <div className="absolute -top-8 -left-4 text-[#FF5E00] font-black text-8xl opacity-30 select-none">01</div>
            <div className="relative border-4 border-white p-8 shadow-[8px_8px_0px_0px_#FF5E00] bg-black">
              <p className="text-white font-display text-[64px] leading-none mb-2">500K+</p>
              <p className="text-[#FF5E00] font-black uppercase tracking-widest">ACTIVE DEPLOYMENTS</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-4 text-[#FF5E00] font-black text-8xl opacity-30 select-none">02</div>
            <div className="relative border-4 border-white p-8 shadow-[8px_8px_0px_0px_#FF5E00] bg-black">
              <p className="text-white font-display text-[64px] leading-none mb-2">12ms</p>
              <p className="text-[#FF5E00] font-black uppercase tracking-widest">AVG RESPONSE TIME</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-4 text-[#FF5E00] font-black text-8xl opacity-30 select-none">03</div>
            <div className="relative border-4 border-white p-8 shadow-[8px_8px_0px_0px_#FF5E00] bg-black">
              <p className="text-white font-display text-[64px] leading-none mb-2">24/7</p>
              <p className="text-[#FF5E00] font-black uppercase tracking-widest">CORE AVAILABILITY</p>
            </div>
          </div>
        </div>
      </section>

      {/* High Contrast CTA */}
      <section className="bg-[#FF5E00] py-32 border-b-8 border-black px-8">
        <div className="max-w-7xl mx-auto text-center py-12 relative">
          <div className="absolute top-0 left-0 bg-black text-white px-6 py-2 border-4 border-white font-black uppercase -rotate-12">NO REGRETS</div>
          <div className="absolute bottom-0 right-0 bg-white text-black px-6 py-2 border-4 border-black font-black uppercase rotate-6 hidden md:block">GO HARD</div>
          <h2 className="font-display text-black text-[10vw] md:text-[8vw] leading-none uppercase mb-12 tracking-tighter">
            READY TO <br /> <span className="bg-black text-white px-4 py-2 mt-4 inline-block">DISRUPT?</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
            <button className="bg-black text-white border-8 border-black px-16 py-8 text-2xl md:text-3xl font-black uppercase hover:-translate-x-1 hover:-translate-y-1 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] transition-all active:translate-x-2 active:translate-y-2 active:shadow-none">
              START THE ENGINE
            </button>
            <button className="bg-white text-black border-8 border-black px-16 py-8 text-2xl md:text-3xl font-black uppercase hover:-translate-x-1 hover:-translate-y-1 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-2 active:translate-y-2 active:shadow-none">
              READ MANIFESTO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

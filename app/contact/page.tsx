"use client";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#fff8f6]">
      <main className="max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10 pointer-events-none">
          <div className="text-[30vw] md:text-[300px] font-black leading-none uppercase select-none text-black">RAW</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
          {/* Headline Section */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="inline-block bg-black text-white px-4 py-2 font-black text-xl uppercase w-fit transform -rotate-2 border-4 border-black shadow-[4px_4px_0px_0px_#FF5E00]">
              LET'S TALK
            </div>
            
            <h1 className="font-display text-[80px] md:text-[100px] uppercase leading-[0.9] text-black font-black">
              DON'T BE <span className="text-[#FF5E00]">SHY.</span><br />SAY HI.
            </h1>
            
            <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative mt-8">
              <p className="font-medium text-xl md:text-2xl mb-8 leading-relaxed">
                WE BUILD DIGITAL EXPERIENCES THAT PUNCTURE THE BOREDOM OF THE MODERN WEB.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-4xl block font-black">mail</span>
                  <span className="font-black text-xl md:text-2xl uppercase tracking-tighter">HELLO@NEOPROD.CON</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-4xl block font-black">location_on</span>
                  <span className="font-black text-xl md:text-2xl uppercase tracking-tighter">LONDON / BERLIN / NYC</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-[#FF5E00] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-black text-white text-4xl mb-2">24/7</div>
                <div className="font-bold text-black uppercase tracking-widest text-sm">AVAILABILITY</div>
              </div>
              <div className="bg-black border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(255,94,0,1)]">
                <div className="font-black text-white text-4xl mb-2">100%</div>
                <div className="font-bold text-[#FF5E00] uppercase tracking-widest text-sm">AUTHENTIC</div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-7 relative mt-16 lg:mt-0">
            <div className="bg-white border-8 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_#FF5E00] transform lg:rotate-1 relative z-20">
              <div className="absolute -top-6 -right-6 lg:-right-8 bg-black text-white p-4 border-4 border-white shadow-[4px_4px_0px_0px_#FF5E00] font-black uppercase text-sm tracking-widest z-30">
                RAW CONTACT
              </div>
              
              <form className="flex flex-col gap-8">
                <div className="group">
                  <label className="block font-black text-xl uppercase mb-4 tracking-tight">NAME</label>
                  <input 
                    className="w-full bg-white border-4 border-black p-6 font-bold text-xl md:text-2xl placeholder:text-zinc-400 focus:outline-none focus:border-[#FF5E00] focus:ring-0 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all" 
                    placeholder="WHO ARE YOU?" 
                    type="text" 
                  />
                </div>
                
                <div className="group">
                  <label className="block font-black text-xl uppercase mb-4 tracking-tight">EMAIL</label>
                  <input 
                    className="w-full bg-white border-4 border-black p-6 font-bold text-xl md:text-2xl placeholder:text-zinc-400 focus:outline-none focus:border-[#FF5E00] focus:ring-0 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all" 
                    placeholder="WHERE CAN WE REACH YOU?" 
                    type="email" 
                  />
                </div>
                
                <div className="group">
                  <label className="block font-black text-xl uppercase mb-4 tracking-tight">PROJECT DETAILS</label>
                  <textarea 
                    className="w-full bg-white border-4 border-black p-6 font-bold text-xl md:text-2xl placeholder:text-zinc-400 focus:outline-none focus:border-[#FF5E00] focus:ring-0 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all resize-none" 
                    placeholder="WHAT'S THE BIG IDEA?" 
                    rows={4}
                  ></textarea>
                </div>
                
                <div className="flex flex-wrap gap-6 mb-4 mt-2">
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <input className="w-8 h-8 md:w-10 md:h-10 border-4 border-black text-[#FF5E00] focus:ring-0 group-hover:border-[#FF5E00] transition-colors" type="checkbox" />
                    <span className="font-black uppercase text-lg md:text-xl selection:bg-transparent">NEW PROJECT</span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <input className="w-8 h-8 md:w-10 md:h-10 border-4 border-black text-[#FF5E00] focus:ring-0 group-hover:border-[#FF5E00] transition-colors" type="checkbox" />
                    <span className="font-black uppercase text-lg md:text-xl selection:bg-transparent">REDESIGN</span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <input className="w-8 h-8 md:w-10 md:h-10 border-4 border-black text-[#FF5E00] focus:ring-0 group-hover:border-[#FF5E00] transition-colors" type="checkbox" />
                    <span className="font-black uppercase text-lg md:text-xl selection:bg-transparent">OTHER</span>
                  </label>
                </div>
                
                <button 
                  className="group relative bg-[#FF5E00] border-8 border-black p-8 w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all mt-4" 
                  type="button"
                >
                  <span className="font-display text-2xl md:text-4xl text-black group-hover:text-white font-black uppercase transition-colors tracking-tighter">
                    SEND MESSAGE
                  </span>
                </button>
              </form>
            </div>
            
            {/* Decorative element behind the form */}
            <div className="absolute inset-0 bg-black z-10 translate-x-4 translate-y-4 border-8 border-black lg:rotate-1"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

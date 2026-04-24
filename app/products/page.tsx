"use client";

const products = [
  {
    id: 1,
    title: "WEBGL PHYSICS",
    price: "01",
    badge: "INTERACTIVE",
    badgeColor: "bg-white text-black",
    bgColor: "bg-[#FF5E00]",
    textColor: "text-white",
    priceColor: "text-black",
    rotate: "rotate-1",
    imgUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "CINEMATIC SCROLL",
    price: "02",
    badge: "IMMERSIVE",
    badgeColor: "bg-[#FF5E00] text-white",
    bgColor: "bg-white",
    textColor: "text-black",
    priceColor: "text-[#FF5E00]",
    rotate: "-rotate-1",
    imgUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "SHADER FX",
    price: "03",
    badge: null,
    bgColor: "bg-[#FF5E00]",
    textColor: "text-white",
    priceColor: "text-black",
    rotate: "rotate-2",
    imgUrl: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "REAL-TIME 3D",
    price: "04",
    badge: "RENDER",
    badgeColor: "bg-black text-white px-4 py-1 -rotate-90 -right-8 top-1/2 border-white",
    bgColor: "bg-white",
    textColor: "text-black",
    priceColor: "text-[#FF5E00]",
    rotate: "rotate-0",
    imgUrl: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Micro-Interactions",
    price: "05",
    badge: null,
    bgColor: "bg-[#FF5E00]",
    textColor: "text-white",
    priceColor: "text-black",
    rotate: "-rotate-2",
    imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "SPATIAL UI",
    price: "06",
    badge: "FRONTIER",
    badgeColor: "bg-black text-white px-6 border-white bottom-[-16px] left-1/2 -translate-x-1/2",
    bgColor: "bg-white",
    textColor: "text-black",
    priceColor: "text-[#FF5E00]",
    rotate: "rotate-1",
    imgUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  }
];

export default function ProductsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative px-8 md:px-16 py-32 overflow-hidden flex flex-col items-center justify-center min-h-[80vh] border-b-8 border-black">
        <h1 className="font-display font-black text-black rotate-[-4deg] scale-110 md:scale-150 select-none text-[15vw] leading-none mb-12 relative z-0">
          THE_SYSTEM
        </h1>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-4xl transform rotate-[2deg]">
          <div className="bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 relative">
            <div className="absolute -top-8 -right-8 bg-[#FF5E00] text-white border-4 border-black px-8 py-3 font-black text-2xl rotate-12 z-20 uppercase">
              LIVE DEMO
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img 
                alt="Featured Capability" 
                className="w-full md:w-1/2 border-4 border-black aspect-square object-cover" 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
              />
              <div className="flex-1 space-y-4">
                <span className="bg-black text-white px-3 py-1 font-bold tracking-widest text-sm uppercase">CORE ARCHITECTURE</span>
                <h2 className="font-black text-4xl md:text-5xl text-black uppercase leading-none mt-2 mb-4">ASTRONAUT DROP</h2>
                <p className="font-medium text-[#5e5e5e] text-lg">A real-time, scroll-driven digital experience demonstrating advanced web design and cinematic storytelling mapped directly to user interaction.</p>
                <div className="text-6xl font-black text-[#FF5E00] font-display">00</div>
                <button className="w-full bg-[#FF5E00] text-white border-4 border-black py-4 font-black text-xl uppercase hover:-translate-x-1 hover:-translate-y-1 shadow-none hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                  INITIALIZE SEQUENCE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="px-8 md:px-16 py-32 border-b-8 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {products.map((p) => (
            <div key={p.id} className={`${p.bgColor} border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 relative ${p.rotate} hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all`}>
              {p.badge && (
                <div className={`absolute ${p.badgeColor?.includes('px-4 py-1') ? p.badgeColor : `-top-4 right-8 px-4 py-1 rotate-[15deg] ${p.badgeColor}`} border-4 border-black font-black z-10 uppercase`}>
                  {p.badge}
                </div>
              )}
              <img alt={p.title} className="w-full aspect-square border-4 border-black bg-white object-cover mb-6" src={p.imgUrl} />
              <h3 className={`font-black text-2xl uppercase mb-2 ${p.textColor}`}>{p.title}</h3>
              <div className={`text-4xl font-display font-black mb-6 ${p.priceColor}`}>{p.price}</div>
              <button className={`w-full ${p.textColor.includes('white') ? 'bg-white text-black' : 'bg-[#FF5E00] text-white'} border-4 border-black py-3 font-black text-xl uppercase hover:-translate-x-1 hover:-translate-y-1 shadow-none hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all`}>
                VIEW DEMO
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

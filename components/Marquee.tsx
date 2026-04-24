"use client";

export default function Marquee() {
  return (
    <section className="border-y-8 border-black bg-white py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-8 items-center mr-8">
            <span className="font-black text-4xl uppercase text-black italic px-4">NANO BANANA</span>
            <span className="font-black text-4xl uppercase text-[#FF5E00] px-4">●</span>
            <span className="font-black text-4xl uppercase text-black px-4">RAW HYDRATION</span>
            <span className="font-black text-4xl uppercase text-[#FF5E00] px-4">●</span>
            <span className="font-black text-4xl uppercase text-black underline decoration-4 px-4">SPACE-GRADE</span>
            <span className="font-black text-4xl uppercase text-[#FF5E00] px-4">●</span>
            <span className="font-black text-4xl uppercase text-black italic px-4">NO COMPROMISE</span>
            <span className="font-black text-4xl uppercase text-[#FF5E00] px-4">●</span>
            <span className="font-black text-4xl uppercase text-black px-4">BOLD CHOICES</span>
            <span className="font-black text-4xl uppercase text-[#FF5E00] px-4">●</span>
          </div>
        ))}
      </div>
    </section>
  );
}

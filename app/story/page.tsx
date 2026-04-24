"use client";

import Image from "next/image";

export default function StoryPage() {
  return (
    <div className="w-full bg-[#fff8f6]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-white border-b-8 border-black overflow-hidden py-32 px-8">
        <div className="absolute top-10 left-10 z-0 opacity-10">
          <span className="text-[20vw] font-black leading-none select-none text-black">RAW</span>
        </div>
        <div className="z-10 text-center relative max-w-7xl mx-auto">
          <div className="inline-block bg-[#FF5E00] text-white px-4 py-1 border-4 border-black font-label-bold uppercase mb-8 -rotate-2">
            STORYTELLING DECODED
          </div>
          <h1 className="font-display text-[12vw] md:text-[min(15vw,250px)] uppercase leading-[0.8] tracking-tighter text-black">
            REBEL<br />
            <span className="text-[#FF5E00]">LION</span>
          </h1>
          <p className="font-headline-md text-black max-w-2xl mx-auto mt-8 italic text-xl md:text-3xl">
            WE DO NOT COMPLY WITH THE POLITE AESTHETIC. WE BREAK THE GRID TO FIND THE SOUL.
          </p>
        </div>
        
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] border-8 border-black rotate-2 bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <img 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            alt="High contrast black and white abstract architecture with sharp geometric shadows and orange light leak overlay" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiUrvxDXq33kTS0JMJJAEaf9twObosIgq8ITUIhPxki00DyYjurD0W0f_Y92cswx-YbGQBEFfkve65cKSwSP_nTkZkbuH9esGXT-fy9coVRBWqCw0LpeuGOQ00CA9X7yiCB57WWrr9vGvZCuoRaLsSMFo3VLn0s4W5Vz9McoZmd7XNXfUmFg28CrJgoXeh2pUIqgiaY0UPODY63IjOEh7ECeUrkqvoFlNsrM5YYCG0I_ppP3T2ifpDJOEuC7FFmGL6VHB_XGq0ryY" 
          />
        </div>
      </section>

      {/* Collage Section (Asymmetric Grid) */}
      <section className="w-full bg-black py-32 border-b-8 border-black text-white relative">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2 space-y-16">
              <div className="bg-white text-black p-8 md:p-12 border-8 border-black shadow-[8px_8px_0px_0px_#FF5E00] -rotate-2 relative z-10">
                <h2 className="font-display text-4xl md:text-5xl uppercase mb-6 font-black">THE MANIFESTO</h2>
                <p className="font-body-lg text-xl font-medium">The digital world has become too soft. Rounded corners are a prison. Gradients are a lie. We return to the edge, the line, and the shadow.</p>
                <div className="mt-8">
                  <span className="inline-block bg-black text-white px-4 py-2 border-2 border-white font-label-bold">01 / DISRUPT</span>
                </div>
              </div>
              <div className="h-[400px] border-8 border-black bg-[#FF5E00] relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] rotate-1">
                <img 
                  className="w-full h-full object-cover mix-blend-multiply" 
                  alt="Close up duotone orange and black high contrast portrait of a person with expressive rebellious face paint" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy7QHPAQJujBjWO0nQ_RNMT7ZW4iiLgWTh5w6ZyAe9spL8WHBUWIVWGG6KeJllRGkTYbUxXnaeI5phN7itGukuD3LZU2BcR4Z-KES9JC2Yh6UkZSxXb2aH4H2_JA8YyA10RSUAdswDCQgXEKnEu0kyOwDb22XwRZAEWetRq4SVrOxbY79CSSxj_yi9Mn6Vn-Zvp0C78G7bwcCbwI6jxV3L3MPS9b-X8xswxT5YT30VgQxAEuYI1CA1ejS6aTP8zTcAa7DuvYgMoUE" 
                />
                <div className="absolute top-4 right-4 bg-white text-black px-4 py-1 border-4 border-black font-black z-10">
                  STORY
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col justify-end space-y-16 lg:pl-12">
              <h3 className="font-display text-[80px] md:text-[100px] leading-none uppercase text-white lg:-ml-20 z-20 font-black">COLLAGE<br/>OR DIE</h3>
              <div className="border-8 border-black bg-white p-4 shadow-[8px_8px_0px_0px_#FF5E00] rotate-2">
                <div className="h-[300px] bg-black overflow-hidden border-4 border-black">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Minimalist urban street scene with heavy black shadows and bright white concrete walls under harsh midday sun" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-cdrTCISWNgQCeVS3iR7jgZ6jPERagc_HYwDsTzfgQ7hnE0ATvqoZjGM9_r-x_dx1OysIcVLE0LDHutpTipbCwyjf00XJjWW-16vgC2dzKh8sEItmYi-kHoW5aw1G9RSInl8cw5xHbRsBxZEOdi3KLelqGkzXr-vlEauD-Fe5lw5gPL5GiMJ8mZue5VqImVqboV0M-X5Kx3LqUJKfj0YoTiSK_bCSRVmnMZt3ymZnms9sIEXXDTfrJ13XGdkcqSqBIDTLApADsAw" 
                  />
                </div>
              </div>
              <div className="bg-[#FF5E00] text-black p-8 border-8 border-black">
                <p className="font-headline-md italic uppercase text-2xl font-black">"Every pixel is a battleground for attention."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

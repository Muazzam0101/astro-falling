"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TOTAL_FRAMES = 960;
const FRAME_PATH = "/astronaut falling/ezgif-frame-";

function padFrame(n: number): string {
  return String(n).padStart(3, "0");
}

export default function AstronautScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload images in batches
  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    const priorityFrames: number[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i += 3) priorityFrames.push(i);
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      if (!priorityFrames.includes(i)) priorityFrames.push(i);
    }

    const BATCH_SIZE = 20;

    function loadBatch(startIdx: number) {
      if (cancelled) return;
      const end = Math.min(startIdx + BATCH_SIZE, priorityFrames.length);

      for (let idx = startIdx; idx < end; idx++) {
        const frameNum = priorityFrames[idx];
        const img = new Image();
        img.src = `${FRAME_PATH}${padFrame(frameNum)}.jpg`;
        img.onload = () => {
          if (cancelled) return;
          images[frameNum - 1] = img;
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          if (loadedCount === TOTAL_FRAMES) {
            imagesRef.current = images;
            setIsLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount >= TOTAL_FRAMES - 10) {
            imagesRef.current = images;
            setIsLoaded(true);
          }
        };
      }

      if (end < priorityFrames.length) {
        setTimeout(() => loadBatch(end), 16);
      }
    }

    loadBatch(0);
    return () => { cancelled = true; };
  }, []);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img) {
      let nearest = frameIndex;
      for (let d = 1; d < 20; d++) {
        if (imagesRef.current[frameIndex - d]) { nearest = frameIndex - d; break; }
        if (imagesRef.current[frameIndex + d]) { nearest = frameIndex + d; break; }
      }
      const fallback = imagesRef.current[nearest];
      if (!fallback) return;
      drawImageCover(ctx, fallback, canvas.width, canvas.height);
      return;
    }
    drawImageCover(ctx, img, canvas.width, canvas.height);
  }, []);

  function drawImageCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, cw: number, ch: number) {
    const imgRatio = img.width / img.height;
    const canvasRatio = cw / ch;
    let sx = 0, sy = 0, sw = img.width, sh = img.height;
    if (imgRatio > canvasRatio) { sw = img.height * canvasRatio; sx = (img.width - sw) / 2; }
    else { sh = img.width / canvasRatio; sy = (img.height - sh) / 2; }
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  }

  useEffect(() => {
    function resize() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      if (imagesRef.current.length > 0) drawFrame(currentFrameRef.current);
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [drawFrame]);

  useEffect(() => {
    function onScroll() {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      // Map raw scroll to a target progress from 0 to 1
      targetProgressRef.current = Math.max(0, Math.min(1, Math.max(0, scrolled) / sectionHeight));
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let lastTime = performance.now();
    function renderLoop(time: number) {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const diff = targetProgressRef.current - currentProgressRef.current;
      
      // Interpolate for smooth, decoupled scroll progress (lerp)
      if (Math.abs(diff) > 0.0001) {
        // Adjust the lerp factor to control the "lag" / slowness of following the scroll
        const lerpFactor = 4.5 * dt; 
        currentProgressRef.current += diff * lerpFactor;
        
        // Clamp to prevent floating point overshoot
        let p = currentProgressRef.current;
        if (p < 0) p = 0;
        if (p > 1) p = 1;
        
        // Apply quadratic easing to create slight resistance at start and end
        const easedP = Math.max(0, Math.min(1, easeInOutQuad(p)));

        const frameIndex = Math.min(
          Math.floor(easedP * (TOTAL_FRAMES - 1)), 
          TOTAL_FRAMES - 1
        );

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }

        const card = cardRef.current;
        if (card) {
          const scale = 0.45 + easedP * 0.55;
          const borderWidth = Math.max(0, 8 * (1 - easedP));
          const shadowSize = Math.max(0, 12 * (1 - easedP));

          card.style.transform = `scale(${scale})`;
          card.style.borderWidth = `${borderWidth}px`;
          card.style.boxShadow = shadowSize > 0
            ? `${shadowSize}px ${shadowSize}px 0px 0px #FF5E00`
            : "none";
        }
      }

      rafRef.current = requestAnimationFrame(renderLoop);
    }
    
    rafRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

  useEffect(() => {
    if (isLoaded) drawFrame(0);
  }, [isLoaded, drawFrame]);

  return (
    <section
      ref={sectionRef}
      id="astronaut-scroll"
      className="relative bg-black border-b-8 border-black"
      style={{ height: "1500vh" }}
    >
      {/* Section title sticker */}
      <div className="absolute top-8 left-8 z-20 bg-[#FF5E00] text-black px-6 py-3 border-4 border-black font-black text-xl uppercase -rotate-2 neo-shadow">
        ASTRONAUT EXPERIENCE
      </div>

      {/* Sticky container */}
      <div className="sticky top-0 w-screen h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Loading */}
        {!isLoaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black">
            <div className="w-64 border-4 border-white p-1 mb-4">
              <div
                className="h-4 bg-[#FF5E00] transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="text-white font-black uppercase tracking-[0.3em] text-sm">
              LOADING — {loadingProgress}%
            </p>
          </div>
        )}

        {/* The Card */}
        <div
          ref={cardRef}
          className="relative overflow-hidden will-change-transform"
          style={{
            width: "100vw",
            height: "100vh",
            transform: "scale(0.45)",
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: "8px",
            boxShadow: "12px 12px 0px 0px #FF5E00",
            transformOrigin: "center center",
          }}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

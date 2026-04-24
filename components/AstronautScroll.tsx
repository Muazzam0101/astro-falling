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
  const rafRef = useRef<number | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload images in batches for performance
  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    // Load every 3rd frame first for quick preview, then fill in gaps
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

    return () => {
      cancelled = true;
    };
  }, []);

  // Draw frame to canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img) {
      // Find nearest loaded frame
      let nearest = frameIndex;
      for (let d = 1; d < 20; d++) {
        if (imagesRef.current[frameIndex - d]) {
          nearest = frameIndex - d;
          break;
        }
        if (imagesRef.current[frameIndex + d]) {
          nearest = frameIndex + d;
          break;
        }
      }
      const fallback = imagesRef.current[nearest];
      if (!fallback) return;
      drawImageCover(ctx, fallback, canvas.width, canvas.height);
      return;
    }

    drawImageCover(ctx, img, canvas.width, canvas.height);
  }, []);

  // Draw image with cover behavior
  function drawImageCover(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    cw: number,
    ch: number
  ) {
    const imgRatio = img.width / img.height;
    const canvasRatio = cw / ch;
    let sx = 0,
      sy = 0,
      sw = img.width,
      sh = img.height;

    if (imgRatio > canvasRatio) {
      sw = img.height * canvasRatio;
      sx = (img.width - sw) / 2;
    } else {
      sh = img.width / canvasRatio;
      sy = (img.height - sh) / 2;
    }

    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  }

  // Resize canvas
  useEffect(() => {
    function resize() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      if (imagesRef.current.length > 0) {
        drawFrame(currentFrameRef.current);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [drawFrame]);

  // Main scroll handler
  useEffect(() => {
    function onScroll() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const card = cardRef.current;
        if (!section || !card) return;

        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));

        // Map progress to frame
        const frameIndex = Math.min(
          Math.floor(progress * (TOTAL_FRAMES - 1)),
          TOTAL_FRAMES - 1
        );
        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }

        // Card transformation with eased progress
        const eased = easeInOutCubic(progress);

        // Scale: 0.45 -> 1.0
        const scale = 0.45 + eased * 0.55;

        // Border radius: 24px -> 0px
        const borderRadius = Math.max(0, 24 * (1 - eased));

        // Glow opacity: visible when small, fades as fullscreen
        const glowOpacity = Math.max(0, 1 - eased * 2);

        card.style.transform = `scale(${scale})`;
        card.style.borderRadius = `${borderRadius}px`;

        // Update glow
        const glowEl = card.querySelector(".card-glow") as HTMLElement;
        if (glowEl) {
          glowEl.style.opacity = String(glowOpacity);
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial call
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

  // Draw first frame when loaded
  useEffect(() => {
    if (isLoaded) {
      drawFrame(0);
    }
  }, [isLoaded, drawFrame]);

  return (
    <section
      ref={sectionRef}
      id="astronaut-scroll"
      className="relative"
      style={{ height: "500vh" }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 w-screen h-screen flex items-center justify-center overflow-hidden">
        {/* Loading overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-surface-900">
            <div className="relative w-48 h-1 bg-white/5 rounded-full overflow-hidden mb-4">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-blue to-neon-orange rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-[0.3em]">
              Loading Experience — {loadingProgress}%
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
            borderRadius: "24px",
            transformOrigin: "center center",
          }}
        >
          {/* Glow effect behind card */}
          <div
            className="card-glow absolute -inset-4 rounded-3xl pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(255,107,43,0.15) 100%)",
              filter: "blur(40px)",
              opacity: 1,
              transition: "opacity 0.1s",
            }}
          />

          {/* Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: "block" }}
          />

          {/* Subtle vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 50%, rgba(5,5,8,0.4) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

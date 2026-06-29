"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const shapes = [
  { type: "plus", size: 28, top: "15%", left: "12%", duration: 8, factor: 0.3 },
  { type: "square", size: 36, top: "45%", left: "8%", duration: 12, factor: 0.6 },
  { type: "diamond", size: 24, top: "20%", left: "80%", duration: 10, factor: 0.4 },
  { type: "circle", size: 48, top: "70%", left: "18%", duration: 14, factor: 0.8 },
  { type: "plus", size: 20, top: "80%", left: "85%", duration: 7, factor: 0.2 },
  { type: "square", size: 26, top: "30%", left: "68%", duration: 11, factor: 0.5 }
];

const starParticles = [
  { top: "10%", left: "5%", size: 2, duration: 3, delay: 0.5 },
  { top: "18%", left: "45%", size: 1.5, duration: 4, delay: 1.2 },
  { top: "25%", left: "75%", size: 2, duration: 2.5, delay: 0.2 },
  { top: "35%", left: "20%", size: 1, duration: 5, delay: 2.0 },
  { top: "42%", left: "90%", size: 3, duration: 3.5, delay: 0.8 },
  { top: "50%", left: "60%", size: 1.5, duration: 4.5, delay: 1.5 },
  { top: "58%", left: "15%", size: 2, duration: 3, delay: 0.3 },
  { top: "65%", left: "80%", size: 2.5, duration: 4, delay: 1.0 },
  { top: "72%", left: "38%", size: 1, duration: 6, delay: 2.5 },
  { top: "80%", left: "70%", size: 2, duration: 3.2, delay: 0.7 },
  { top: "88%", left: "10%", size: 3, duration: 3.8, delay: 1.1 },
  { top: "95%", left: "85%", size: 1.5, duration: 5, delay: 1.9 },
  { top: "5%", left: "65%", size: 2, duration: 3, delay: 0.4 },
  { top: "30%", left: "40%", size: 1.5, duration: 4.2, delay: 1.3 },
  { top: "55%", left: "85%", size: 2.5, duration: 2.8, delay: 0.9 },
  { top: "75%", left: "25%", size: 1, duration: 5.5, delay: 2.2 },
  { top: "85%", left: "50%", size: 2, duration: 3.4, delay: 0.6 }
];

export default function BackgroundGlow() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x * 120);
      mouseY.set(y * 120);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#030408]">
      {/* Pulsing large glow spots */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-indigo/10 blur-[150px]" 
      />
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-purple/10 blur-[180px]" 
      />
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 0.95, 0.8]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-[30%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-brand-blue/10 blur-[130px]" 
      />

      {/* Interactive moving glow spot */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute top-[25%] left-[30%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-brand-indigo/15 via-brand-purple/15 to-transparent blur-[120px]"
      />

      {/* Static grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Dot Matrix Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Twinkling Star Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        {starParticles.map((star, idx) => (
          <motion.div
            key={idx}
            style={{
              position: "absolute",
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.1, 0.9, 0.1],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.7)]"
          />
        ))}
      </div>

      {/* Live dynamic grid scan */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "0px 80px"]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Live Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        {shapes.map((shape, idx) => (
          <motion.div
            key={idx}
            style={{
              position: "absolute",
              top: shape.top,
              left: shape.left,
              width: shape.size,
              height: shape.size,
              x: springX,
              y: springY,
            }}
            className="text-indigo-500/40"
          >
            <motion.div
              style={{ width: "100%", height: "100%" }}
              animate={{
                y: [0, -60, 0],
                x: [0, 25, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {shape.type === "plus" && (
                <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-[2]">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              )}
              {shape.type === "square" && (
                <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-[2]">
                  <rect x="5" y="5" width="14" height="14" rx="2" />
                </svg>
              )}
              {shape.type === "diamond" && (
                <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-[2]">
                  <path d="M12 3 L21 12 L12 21 L3 12 Z" />
                </svg>
              )}
              {shape.type === "circle" && (
                <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-[2]">
                  <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
                </svg>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

export default function Counter({ target, duration = 2, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState("0");

  useEffect(() => {
    if (!inView) return;

    const animation = animate(0, target, {
      duration: duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        const formatted = Math.floor(latest).toLocaleString("en-US");
        setCount(formatted);
      },
    });

    return () => animation.stop();
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="font-semibold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

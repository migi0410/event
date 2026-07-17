import React, { useState, useEffect, useRef } from 'react';

interface StatsCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  label: string;
}

export default function StatsCounter({ target, suffix = '', duration = 1500, label }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = target;
    const stepTime = Math.max(Math.floor(duration / end), 12);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / 24));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <div ref={elementRef} className="space-y-3 p-1">
      <div className="h-16 md:h-20 flex items-center justify-center">
        <span className="text-white font-mono font-bold text-4xl md:text-6xl tracking-tight leading-none">
          {count.toLocaleString('vi-VN')}{suffix}
        </span>
      </div>
      <div className="asymmetric-rule w-16 mx-auto opacity-40" />
      <p className="font-display font-bold text-[10px] tracking-[0.25em] uppercase text-white/40">
        {label}
      </p>
    </div>
  );
}

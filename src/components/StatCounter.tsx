'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  target: number;
  label: string;
  isPercent?: boolean;
}

function CounterItem({ target, label, isPercent = false }: StatItemProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const currentRef = elementRef.current;
    let timer: ReturnType<typeof setInterval> | null = null;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            let start = 0;
            const duration = 2000; // Animation duration in ms
            const stepTime = Math.max(Math.floor(duration / target), 15);
            
            timer = setInterval(() => {
              start += 1;
              if (target > 100) {
                start += Math.floor(target / 100);
              }
              if (start >= target) {
                setCount(target);
                if (timer) clearInterval(timer);
              } else {
                setCount(start);
              }
            }, stepTime);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [target]);

  return (
    <div className="stat-item" ref={elementRef}>
      <div className="stat-num">
        {count}
        {isPercent ? '%' : '+'}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatCounterRow() {
  return (
    <div className="stats-row">
      <CounterItem target={500} label="Doanh nghiệp kết nối" />
      <CounterItem target={50} label="Đối tác nhà cung ứng" />
      <CounterItem target={100} label="Cam kết chất lượng" isPercent />
    </div>
  );
}

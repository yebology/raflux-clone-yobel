"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SloganMarque from "./SloganMarque";

const Slogan = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || !innerRef.current || !marqueeRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            animateH1();
            startMarquee();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    function animateH1() {
      const h1s = containerRef.current!.querySelectorAll("h1");

      gsap.from(h1s, {
        scale: 0.7,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out(1.8)",
      });
    }

    function startMarquee() {
      const clone = innerRef.current!.cloneNode(true) as HTMLElement;
      marqueeRef.current!.appendChild(clone);

      const totalWidth = innerRef.current!.offsetWidth;

      gsap.set(marqueeRef.current, { x: 0 });

      gsap.to(marqueeRef.current, {
        x: -totalWidth,
        duration: 50,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            let xx = parseFloat(x);
            if (xx <= -totalWidth) xx += totalWidth;
            return `${xx}px`;
          },
        },
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-54 lg:h-62 border-t border-b border-gray-700 bg-primary flex items-center overflow-hidden"
    >
      <div ref={marqueeRef} className="flex w-fit items-center">
        <div ref={innerRef} className="marquee-wrapper flex whitespace-nowrap items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <SloganMarque key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slogan;

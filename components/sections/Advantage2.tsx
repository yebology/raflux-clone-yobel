"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import card1 from "@/assets/card1.png";
import card2 from "@/assets/card2.png";
import card3 from "@/assets/card3.png";

const Advantage2 = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current || !innerRef.current) return;

    const wrapper = marqueeRef.current;
    const inner = innerRef.current;

    const clone = inner.cloneNode(true) as HTMLElement;
    wrapper.appendChild(clone);

    gsap.from(wrapper.querySelectorAll(".marquee-text"), {
      opacity: 0,
      scale: 0.6,
      duration: 0.7,
      stagger: 0.05,
      ease: "power3.out",
    });

    const totalWidth = inner.offsetWidth;

    gsap.to(wrapper, {
      x: -totalWidth,
      duration: 20,
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
  }, []);

  const gridBackgroundStyle = {
    backgroundImage: `
      repeating-linear-gradient(0deg, #333 0.5px, transparent 1px, transparent 50px),
      repeating-linear-gradient(90deg, #333 0.5px, transparent 1px, transparent 50px)
    `,
    backgroundSize: "50px 50px",
  };

  return (
    <div>
      <div
        style={gridBackgroundStyle}
        className="min-h-[50vh] lg:h-[90vh] relative border-b border-gray-700 overflow-hidden"
      >
        <div
          ref={marqueeRef}
          className="absolute inset-0 flex items-center whitespace-nowrap will-change-transform pointer-events-none"
        >
          <div ref={innerRef} className="flex whitespace-nowrap">
            {Array.from({ length: 5 }).map((_, i) => (
              <h1
                key={i}
                className="marquee-text font-semibold text-gray-500/20 text-4xl lg:text-8xl mx-2"
              >
                RAFLUX
              </h1>
            ))}
          </div>
        </div>

        <div className="flex flex-col py-10 lg:py-0 lg:flex-row space-y-10 lg:space-x-10 justify-center items-center h-full relative z-10">
          <Image
            src={card1}
            alt="card1"
            className="w-[70vw] md:w-[50vw] lg:w-[25vw]"
          />
          <Image
            src={card2}
            alt="card2"
            className="w-[70vw] md:w-[50vw] lg:w-[25vw]"
          />
          <Image
            src={card3}
            alt="card3"
            className="w-[70vw] md:w-[50vw] lg:w-[25vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantage2;

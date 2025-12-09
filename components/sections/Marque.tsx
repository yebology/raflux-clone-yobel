"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { marqueList } from "@/utils/marque";

const Marque = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const children = Array.from(marquee.children) as HTMLElement[];

    // Duplikat konten untuk seamless loop
    children.forEach((child) => {
      const clone = child.cloneNode(true) as HTMLElement;
      marquee.appendChild(clone);
    });

    const totalWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: -totalWidth,
      duration: 50,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="w-full overflow-hidden border-y border-gray-700">
      <div
        ref={marqueeRef}
        className="flex text-gray-400 flex-row space-x-50 py-3 whitespace-nowrap"
      >
        {marqueList.map((text, index) => (
          <h1 key={index} className="text-[10px]">
            {text}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Marque;

"use client";

import { useState, useRef } from "react";
import { salesToken } from "@/utils/token";
import SaleCard from "../card/SaleCard";
import left from "@/assets/left.png";
import right from "@/assets/right.png";
import Image from "next/image";
import { SaleToken } from "@/interfaces/token";
import gsap from "gsap";

const Sale = () => {
  const [visibleTokens, setVisibleTokens] = useState<SaleToken[]>(salesToken);
  const [hiddenTokens, setHiddenTokens] = useState<SaleToken[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleLeft = () => {
    if (!carouselRef.current || visibleTokens.length === 1) return;

    const first = visibleTokens[0];
    const rest = visibleTokens.slice(1);

    gsap.to(carouselRef.current.children[0], {
      x: -200,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        setVisibleTokens(rest);
        setHiddenTokens((prev) => [...prev, first]);
        gsap.set(carouselRef.current!.children, { x: 0, opacity: 1 });
      },
    });
  };

  const handleRight = () => {
    if (!carouselRef.current || hiddenTokens.length === 0) return;

    const lastHidden = hiddenTokens[hiddenTokens.length - 1];
    const newHidden = hiddenTokens.slice(0, hiddenTokens.length - 1);

    setVisibleTokens((prev) => [lastHidden, ...prev]);
    setHiddenTokens(newHidden);

    gsap.from(carouselRef.current.children[0], {
      x: -200,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div className="bg-primary border-b border-gray-700 grid grid-cols-4 md:grid-cols-6 h-[1400px] md:h-screen lg:h-[60vh] relative">
      <div className="border-r border-gray-700">
        <div className="flex justify-end items-center w-full pt-10 lg:pt-0">
          <Image
            src={left}
            alt="left.png"
            onClick={handleLeft}
            className="h-[20vh] w-[10vw] lg:w-[4vw] cursor-pointer active:scale-90 transition"
          />
        </div>
      </div>

      <div className="border-r border-gray-700">
        <div className="flex justify-start items-center w-full pt-10 lg:pt-0">
          <Image
            src={right}
            alt="right.png"
            onClick={handleRight}
            className="h-[20vh] w-[10vw] lg:w-[4vw] cursor-pointer active:scale-90 transition"
          />
        </div>
      </div>
      <div className="border-r md:col-span-2 lg:col-span-1 border-gray-700 hidden md:flex" />
      <div className="border-r border-gray-700 justify-center lg:pt-36 lg:pl-4 lg:pr-18 hidden lg:flex"></div>
      <div className="border-r md:col-span-2 lg:col-span-1 border-t border-gray-700"></div>
      <div className="border-r border-t border-gray-700" />
      <div className="absolute left-8 lg:left-96 pt-60 lg:pt-0 overflow-hidden w-[80%]">
        <div ref={carouselRef} className="flex flex-col md:flex-row gap-4">
          {visibleTokens.map((token) => (
            <SaleCard key={token.id} saleToken={token} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;

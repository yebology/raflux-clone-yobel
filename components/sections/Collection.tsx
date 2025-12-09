"use client";

import { tokenList } from "@/utils/token";
import TokenCard from "../card/TokenCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Collection = () => {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    gsap.from(
      cardsRef.current.filter((el): el is HTMLDivElement => el !== null),
      {
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full lg:max-w-6xl border border-gray-700">
        <div className="lg:hidden border-r border-gray-700 grid grid-cols-2">
          {tokenList.slice(0, 2).map((token, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <TokenCard token={token} />
            </div>
          ))}
        </div>

        <div className="hidden border-r border-gray-700 lg:grid lg:grid-cols-5">
          {tokenList.map((token, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <TokenCard token={token} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

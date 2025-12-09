"use client";

import Image from "next/image";
import hexagon from "@/assets/hexagon.png";
import { tokenList } from "@/utils/token";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useEffect, useRef, useState } from "react";
import TokenMarquee from "./TokenMarque";

gsap.registerPlugin(ScrambleTextPlugin);

const NFT = () => {
  const futureRef = useRef<HTMLHeadingElement | null>(null);
  const marketplaceRef = useRef<HTMLHeadingElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [playTypewriter, setPlayTypewriter] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (futureRef.current) {
              gsap.set(futureRef.current, { text: "" });
              gsap.to(futureRef.current, {
                duration: 1.5,
                scrambleText: {
                  text: "THE FUTURE",
                  chars: "RAFLUX",
                  speed: 0.5,
                },
              });
            }

            if (marketplaceRef.current) {
              gsap.set(marketplaceRef.current, { text: "" });
              gsap.to(marketplaceRef.current, {
                duration: 1.5,
                delay: 0.3,
                scrambleText: {
                  text: "NFT MARKETPLACE",
                  chars: "RAFLUX",
                  speed: 0.5,
                },
              });
            }

            setPlayTypewriter(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-primary relative">
      <div className="grid relative grid-cols-4 md:grid-cols-6 h-[50vh]">
        <div className="border-r border-gray-700" />
        <div className="border-r md:col-span-2 border-gray-700" />
        <div className="hidden lg:flex justify-end border-r border-gray-700 lg:col-span-2">
          <h1 className="pr-10 pt-16 text-light-orange/50 text-end text-sm max-w-3xs">
            {playTypewriter && (
              <Typewriter
                words={["LET'S TO BE THE NEXT GENERATION OF NFT RAFFLES"]}
                typeSpeed={50}
                delaySpeed={100}
              />
            )}
          </h1>
        </div>
        <div className="border-r md:col-span-2 lg:col-span-1 border-gray-700" />
        <div className="absolute top-0 bottom-0 left-0 w-full flex flex-col pl-8 pt-16 lg:justify-center lg:px-10 max-w-sm lg:max-w-full">
          <div className="relative w-fit mb-6">
            <Image src={hexagon} alt="hexagon.png" className="w-84" />
            <h1
              ref={futureRef}
              className="absolute text-light-orange inset-0 flex items-center justify-center font-bold text-4xl lg:text-5xl"
            ></h1>
          </div>
          <h1
            ref={marketplaceRef}
            className="font-bold text-4xl lg:text-5xl text-light-orange"
          ></h1>
          <h1 className="lg:hidden text-light-orange/50 text-sm pt-4">
            {playTypewriter && (
              <Typewriter
                words={["LET'S TO BE THE NEXT GENERATION OF NFT RAFFLES"]}
                typeSpeed={50}
                delaySpeed={100}
              />
            )}
          </h1>
        </div>
      </div>

      <div className="lg:hidden grid relative grid-cols-4 md:grid-cols-6">
        <div className="lg:hidden size-58 relative z-10 bg-primary border border-gray-700 flex items-center justify-center pr-12">
          <h1 className="text-sm text-light-orange/50 text-end">
            {playTypewriter && (
              <Typewriter
                words={["RAFLUX SUPPORT ALL NFT AND TOKEN"]}
                typeSpeed={50}
                delaySpeed={100}
              />
            )}
          </h1>
        </div>
        <div className="border-r md:col-span-2 border-gray-700" />
        <div className="border-r md:col-span-2 border-gray-700" />
      </div>

      <div className="grid relative lg:grid-cols-6 h-[25vh]">
        <div className="hidden ml-8 border border-gray-700 lg:flex items-center">
          <h1 className="text-sm text-end pr-10 text-light-orange/50">
            {playTypewriter && (
              <Typewriter
                words={["RAFLUX SUPPORT ALL NFT AND TOKEN"]}
                typeSpeed={50}
                delaySpeed={100}
              />
            )}
          </h1>
        </div>
        <div className="lg:col-span-5 border-t border-b overflow-hidden border-gray-700 flex flex-row space-x-8 py-4">
          <TokenMarquee tokenList={tokenList} direction="left" />
        </div>
      </div>
      <div className="grid relative lg:grid-cols-6 h-[25vh]">
        <div className="lg:col-span-5 border-t border-b overflow-hidden border-gray-700 flex flex-row space-x-8 py-4">
          <TokenMarquee tokenList={tokenList} direction="right" />
        </div>
        <div className="hidden mr-8 border border-gray-700 lg:flex items-center justify-center">
          <h1 className="text-sm text-light-orange/50">
            {playTypewriter && (
              <Typewriter
                words={["ON BASE CHAIN"]}
                typeSpeed={50}
                delaySpeed={100}
              />
            )}
          </h1>
        </div>
      </div>
      <div className="grid relative grid-cols-4 md:grid-cols-6 z-50">
        <div className="lg:hidden size-58 relative z-10 bg-primary border border-gray-700 flex items-center justify-center">
          <h1 className="text-sm text-light-orange/50">
            {playTypewriter && (
              <Typewriter
                words={["ON BASE CHAIN"]}
                typeSpeed={50}
                delaySpeed={100}
              />
            )}
          </h1>
        </div>
        <div className="border-r md:col-span-2 border-gray-700" />
        <div className="border-r md:col-span-2 border-gray-700" />
      </div>
      <div className="grid relative grid-cols-4 md:grid-cols-6 h-[15vh]">
        <div className="border-r border-gray-700" />
        <div className="border-r border-gray-700 md:col-span-2" />
        <div className="border-r border-gray-700 md:col-span-2" />{" "}
        <div className="border-r border-gray-700" />
      </div>
    </div>
  );
};

export default NFT;

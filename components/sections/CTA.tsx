"use client";

import Image from "next/image";
import motion from "@/assets/motion.png";
import cta_line from "@/assets/cta_line.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter";
import { ScrambleTextPlugin } from "gsap/all";

gsap.registerPlugin(ScrambleTextPlugin);

const CTA = () => {
  const headingRef = useRef(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [playTypewriter, setPlayTypewriter] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlayTypewriter(true);

            if (headingRef.current) {
              gsap.to(headingRef.current, {
                duration: 1.5,
                scrambleText: {
                  text: "DECENTRALIZED RAFFLES FOR DIGITAL ASSET",
                  chars: "RAFLUX",
                  revealDelay: 0,
                  speed: 0.5,
                },
              });
            }

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
    <div ref={sectionRef} className="relative">
      <div
        className="hidden absolute right-90 lg:flex ml-28 w-[35vw] h-[8vh] bg-primary rotate-180"
        style={{
          clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0 100%)",
        }}
      ></div>
      <div className="lg:grid lg:grid-cols-6">
        <div className="border-r border-gray-700 hidden lg:flex" />
        <div className="lg:col-span-4 relative">
          <Image
            src={cta_line}
            alt="cta_line.png"
            className="hidden lg:flex w-64 absolute right-34 bottom-1/2 -translate-y-10"
          />
          <div className="lg:w-full hidden lg:flex lg:justify-end lg:pt-70">
            <button className="bg-button py-4 px-20 w-fit">
              <h1 className="text-sm">GET STARTED</h1>
            </button>
          </div>
          <div className="px-8 py-10 flex flex-col space-y-6 lg:space-y-0 lg:pt-12 lg:px-12">
            <h1
              ref={headingRef}
              className="font-semibold text-light-orange text-4xl lg:text-6xl"
            ></h1>
            <button className="bg-button py-4 px-20 w-fit lg:hidden">
              <h1 className="text-sm">GET STARTED</h1>
            </button>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:border-t lg:border-gray-700 justify-center">
            <div className="lg:flex-1 px-8 py-4 border-t lg:border-r lg:border-t-0 border-gray-700">
              <h1 className="text-button text-sm mb-2">
                {playTypewriter && (
                  <Typewriter
                    words={["RAFLUX @2025, COPYRIGHT"]}
                    typeSpeed={50}
                    delaySpeed={100}
                  />
                )}
              </h1>
              <p className="text-xs">
                <Typewriter
                  words={["ALL RIGHT RESERVED"]}
                  typeSpeed={50}
                  delaySpeed={100}
                />
              </p>
            </div>
            <div className="lg:flex lg:flex-1 px-8 py-4 border-t lg:text-center lg:justify-center lg:items-center lg:border-r lg:border-t-0 border-gray-700">
              <h1 className="text-sm mb-2 w-60 lg:mb-0">
                <Typewriter
                  words={["// STOP WAITING MONTHS ON TRADITIONAL MARKETPLACES"]}
                  typeSpeed={50}
                  delaySpeed={100}
                />
              </h1>
            </div>
            <div className="lg:flex-1 px-8 py-4 border-t lg:text-end lg:border-r lg:border-t-0 border-gray-700 text-gray-500">
              <h1 className="text-sm mb-2">
                <Typewriter
                  words={["CONTACT"]}
                  typeSpeed={50}
                  delaySpeed={100}
                />
              </h1>
              <p className="text-xs">
                <Typewriter
                  words={["HI@RAFLUX.IO"]}
                  typeSpeed={50}
                  delaySpeed={100}
                />
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700">
            <Image src={motion} alt="motion.png" className="h-50 md:h-56" />
          </div>
        </div>
        <div className="border-l border-gray-700 hidden lg:flex" />
      </div>
    </div>
  );
};

export default CTA;

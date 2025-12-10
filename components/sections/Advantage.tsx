"use client";

import { buyerAdvantages, sellerAdvantages } from "@/utils/advantage";
import Image from "next/image";
import plus1 from "@/assets/plus1.png";
import plus2 from "@/assets/plus2.png";
import plus3 from "@/assets/plus3.png";
import circle1 from "@/assets/circle1.png";
import circle2 from "@/assets/circle2.png";
import circle3 from "@/assets/circle3.png";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Advantage = () => {
  const gridBackgroundStyle = {
    backgroundImage: `
      repeating-linear-gradient(0deg, #333 0.5px, transparent 1px, transparent 50px),
      repeating-linear-gradient(90deg, #333 0.5px, transparent 1px, transparent 50px)
    `,
    backgroundSize: "50px 50px",
  };

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [playTypewriter, setPlayTypewriter] = useState(false);

  const horizontalRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const horizontal = horizontalRef.current;
      const container = containerRef.current;

      if (!horizontal || !container) return;

      const scrollWidth = horizontal.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = scrollWidth - viewportWidth;

      gsap.to(horizontal, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${scrollWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
    <div
      ref={sectionRef}
      className="bg-primary overflow-x-hidden lg:overflow-x-auto scroll-smooth"
    >
      <div className="relative flex flex-col lg:flex-row lg:min-w-[1800px]">
        <div>
          <div className="flex flex-col lg:flex-row lg:min-w-[1560px]">
            <div className="hidden lg:block border border-gray-700 w-24"></div>

            <div className="flex-1 border-gray-700">
              <div className="border-b border-t w-full border-gray-700 py-6 pl-4">
                <div className="inline-block bg-button/10 px-4 py-0.5">
                  <h1 className="text-button font-semibold">
                    {playTypewriter && (
                      <Typewriter
                        words={["FOR SELLERS"]}
                        typeSpeed={50}
                        delaySpeed={100}
                      />
                    )}
                  </h1>
                </div>
              </div>

              {sellerAdvantages.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col border-b border-gray-700 py-18 lg:h-[36vh]"
                >
                  <div
                    className={`pl-4 text-light-orange lg:pr-4 ${
                      index % 2 === 0 ? "lg:text-end" : "text-start"
                    }`}
                  >
                    <h1 className="font-bold text-3xl mb-6">
                      {playTypewriter && (
                        <Typewriter
                          words={[`${value.title}`]}
                          typeSpeed={50}
                          delaySpeed={100}
                        />
                      )}
                    </h1>
                    <p className="text-gray-500">
                      {playTypewriter && (
                        <Typewriter
                          words={[`${value.description}`]}
                          typeSpeed={50}
                          delaySpeed={100}
                        />
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 border border-gray-700">
              <div
                style={gridBackgroundStyle}
                className="relative bg-background border-gray-700 min-h-[400px] lg:min-h-[700px] lg:min-w-[54vw]"
              >
                <Image
                  src={plus1}
                  alt="plus1"
                  className="absolute top-0 left-1 w-24 lg:w-60"
                />
                <Image
                  src={plus2}
                  alt="plus2"
                  className="absolute top-1/2 -translate-y-1/2 left-1 w-36 lg:w-74"
                />
                <Image
                  src={plus3}
                  alt="plus3"
                  className="absolute bottom-0 right-24 w-54 md:left-28 lg:left-60 lg:w-120"
                />

                <h1 className="text-button font-bold text-center px-4 text-4xl absolute inset-0 flex justify-center items-center lg:justify-end lg:text-end lg:right-8 lg:pl-60 lg:text-6xl lg:inset-auto lg:top-24">
                  {playTypewriter && (
                    <Typewriter
                      words={["MORE LIQUID THAN OPENSEA"]}
                      typeSpeed={50}
                      delaySpeed={100}
                    />
                  )}
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 h-16">
            <div className="border-r border-gray-700" />
            <div className="border-r border-gray-700" />
            <div className="border-r border-gray-700" />
            <div className="border-r border-gray-700" />
          </div>
        </div>

        <div>
          <div className="flex flex-col lg:flex-row lg:min-w-screen">
            <div className="hidden lg:block border border-gray-700 w-24 lg:w-4"></div>

            <div className="flex-1 border-gray-700">
              <div className="border-b border-t w-full border-gray-700 py-6 pl-4">
                <div className="inline-block bg-button/10 px-4 py-0.5">
                  <h1 className="text-button font-semibold">
                    {playTypewriter && (
                      <Typewriter
                        words={["FOR BUYERS"]}
                        typeSpeed={50}
                        delaySpeed={100}
                      />
                    )}
                  </h1>
                </div>
              </div>

              {buyerAdvantages.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col border-b border-gray-700 py-18 lg:h-[36vh]"
                >
                  <div
                    className={`pl-4 text-light-orange lg:pr-4 ${
                      index % 2 === 0 ? "lg:text-end" : "text-start"
                    }`}
                  >
                    <h1 className="font-bold text-3xl mb-6">
                      {playTypewriter && (
                        <Typewriter
                          words={[`${value.title}`]}
                          typeSpeed={50}
                          delaySpeed={100}
                        />
                      )}
                    </h1>
                    <p className="text-gray-500">
                      {playTypewriter && (
                        <Typewriter
                          words={[`${value.description}`]}
                          typeSpeed={50}
                          delaySpeed={100}
                        />
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 border border-gray-700">
              <div
                style={gridBackgroundStyle}
                className="relative bg-background border-gray-700 min-h-[400px] lg:min-h-[700px] lg:min-w-[54vw]"
              >
                <Image
                  src={circle1}
                  alt="circle1"
                  className="absolute top-0 left-8 w-24 lg:w-54 lg:top-4"
                />
                <Image
                  src={circle2}
                  alt="circle2"
                  className="absolute bottom-0 left-1 w-64 lg:w-[40vw]"
                />
                <Image
                  src={circle3}
                  alt="circle3"
                  className="absolute top-1/2 -translate-y-1/2 right-8 w-36 md:left-56 lg:w-76 lg:right-0 lg:left-auto"
                />

                <h1 className="text-button font-bold text-4xl text-center px-4 absolute inset-0 flex justify-center items-center lg:justify-end lg:text-end lg:right-8 lg:pl-60 lg:text-6xl lg:inset-auto lg:top-24">
                  {playTypewriter && (
                    <Typewriter
                      words={["JOIN INSTANTLY WITH USDC/USDT"]}
                      typeSpeed={50}
                      delaySpeed={100}
                    />
                  )}
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 h-16">
            <div className="border-r border-gray-700" />
            <div className="border-r border-gray-700" />
            <div className="border-r border-gray-700" />
            <div className="border-r border-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;

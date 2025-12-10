"use client";

import Image from "next/image";
import star1 from "@/assets/star1.png";
import star2 from "@/assets/star2.png";
import { missionList, missionListV2 } from "@/utils/mission";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

const Mission = () => {
  const gridBackgroundStyle = {
    backgroundImage: `
      repeating-linear-gradient(0deg, #333 0.5px, transparent 1px, transparent 50px),
      repeating-linear-gradient(90deg, #333 0.5px, transparent 1px, transparent 50px)
    `,
    backgroundSize: "50px 50px",
  };

  const missionRefs = useRef<Array<HTMLHeadingElement | null>>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrambleDone = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=200%",
      pin: true,
      pinSpacing: true,
      scrub: true,
    });

    // missionRefs.current.forEach((el, index) => {
    //   if (!el) return;

    //   let xEnd = 0;
    //   const factor = 0.5;

    //   const distance = window.innerWidth;
    //   if (index === 0 || index === 2) xEnd = distance * factor;
    //   if (index === 1 || index === 3) xEnd = -distance * factor;

    //   gsap.to(el, {
    //     x: xEnd,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: "top top",
    //       end: "bottom top",
    //       scrub: true,
    //     },
    //   });
    // });

    const container = document.querySelector("#mission-section");
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !scrambleDone.current) {
            scrambleDone.current = true;
            missionRefs.current.forEach((el, index) => {
              if (el) {
                gsap.set(el, { text: "" });
                gsap.to(el, {
                  duration: 1.5,
                  scrambleText: {
                    text: missionList[index],
                    chars: "RAFLUX",
                    revealDelay: 0,
                    speed: 0.5,
                  },
                  delay: index * 0.3,
                });
              }
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    // observer.observe(container);
    // return () => observer.disconnect();

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div>
      <div
        className="hidden lg:flex ml-28 w-[35vw] h-[6vh] bg-primary"
        style={{ clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0 100%)" }}
      />
      <div
        className="md:hidden ml-auto w-[70vw] h-[6vh] bg-primary"
        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div
        className="hidden lg:hidden md:flex mx-auto w-[70vw] h-[6vh] bg-primary"
        style={{ clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0 100%)" }}
      />
      <div className="w-full flex justify-center bg-primary h-[8vh]" />

      <div ref={sectionRef}>
        <div className="flex lg:flex-row border-t border-b bg-primary border-gray-700">
          <div className="hidden lg:flex-1 border-r border-gray-700" />
          <div className="flex-3 flex items-center justify-between py-6 px-4">
            <div className="bg-button/10 px-6 py-0.5">
              <h1 className="text-button font-semibold">OUR MISSION</h1>
            </div>
            <div className="hidden lg:flex bg-button/10 px-6 py-0.5">
              <h1 className="text-button font-semibold">OUR MISSION</h1>
            </div>
          </div>
          <div className="hidden lg:flex-1 border-l border-gray-700" />
        </div>
        <div
          id="mission-section"
          style={gridBackgroundStyle}
          className="h-[90vh] relative border-b border-gray-700 bg-background"
        >
          <div className="absolute right-0">
            <Image src={star2} alt="star.png" className="w-50 lg:w-60" />
          </div>
          <div className="absolute bottom-1 left-2">
            <Image src={star1} alt="star.png" className="w-50 lg:w-60" />
          </div>

          <div className="flex flex-col space-y-10 justify-center h-full px-10">
            {missionList.map((mission, index) => (
              <h1
                key={index}
                ref={(el) => {
                  missionRefs.current[index] = el;
                }}
                className={`font-semibold text-light-orange text-3xl lg:text-7xl ${
                  index % 2 === 0 ? "text-start" : "text-end"
                }`}
              >
                {" "}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;

"use client";

import Image from "next/image";
import star1 from "@/assets/star1.png";
import star2 from "@/assets/star2.png";
import { missionListV2 } from "@/utils/mission";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

const Mission = () => {
  const missionRefs = useRef<Array<HTMLHeadingElement | null>>([]);
  const sectionRef = useRef(null);
  const scrambleDone = useRef(false);

  const gridBackgroundStyle = {
    backgroundImage: `
      repeating-linear-gradient(0deg, #333 0.5px, transparent 1px, transparent 50px),
      repeating-linear-gradient(90deg, #333 0.5px, transparent 1px, transparent 50px)
    `,
    backgroundSize: "50px 50px",
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    // Pin mission section
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: true,
    });

    // Run scramble only once
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || scrambleDone.current) return;

          scrambleDone.current = true;

          missionRefs.current.forEach((el, index) => {
            if (!el) return;

            gsap.to(el, {
              duration: 1.3,
              scrambleText: {
                text: missionListV2[index].items.map((i) => i.text).join(" "),
                chars: "RAFLUX",
              },
              delay: index * 0.4,
              onComplete: () => {
                // build spans
                el.innerHTML = "";
                missionListV2[index].items.forEach((item) => {
                  const span = document.createElement("span");
                  span.innerText = item.text;
                  span.style.display = "inline-block";
                  span.style.marginRight = "6px";
                  el.appendChild(span);
                });

                const spans = el.querySelectorAll("span");

                // initial state
                gsap.set(spans, { x: 0, opacity: 1 });

                // scroll movement
                gsap.to(spans, {
                  x: (i) => {
                    const { move, maxFactor } = missionListV2[index].items[i];

                    if (!move) return 0;

                    const base = window.innerWidth * maxFactor;

                    return move === "right" ? base : -base;
                  },
                  ease: "none",
                  scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=200%",
                    scrub: true,
                  },
                });
              },
            });
          });
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div>
      {/* HEADER SHAPES */}
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

      {/* MAIN SECTION */}
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

        {/* GRID BACKGROUND */}
        <div
          id="mission-section"
          style={gridBackgroundStyle}
          className="h-[90vh] relative border-b border-gray-700 bg-background"
        >
          {/* DECORATION */}
          <div className="absolute right-0">
            <Image src={star2} alt="star" className="w-50 lg:w-60" />
          </div>
          <div className="absolute bottom-1 left-2">
            <Image src={star1} alt="star" className="w-50 lg:w-60" />
          </div>

          {/* TEXT AREA */}
          <div className="flex flex-col space-y-10 justify-center h-full px-10">
            {missionListV2.map((_, index) => (
              <h1
                key={index}
                ref={(el) => {
                  missionRefs.current[index] = el;
                }}
                className={`font-semibold text-light-orange text-3xl lg:text-7xl ${
                  index % 2 === 0 ? "text-start" : "text-end"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;

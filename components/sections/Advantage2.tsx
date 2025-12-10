"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import card1 from "@/assets/card1.png";
import card2 from "@/assets/card2.png";
import card3 from "@/assets/card3.png";

import ticket1 from "@/assets/ticket1.png";
import ticket2 from "@/assets/ticket2.png";
import ticket3 from "@/assets/ticket3.png";

gsap.registerPlugin(ScrollTrigger);

const Advantage2 = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const [leftSrc, setLeftSrc] = useState(ticket1);
  const [midSrc, setMidSrc] = useState(ticket2);
  const [rightSrc, setRightSrc] = useState(ticket3);

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;

    const section = document.querySelector(".advantage-section");
    if (!section) return;

    const ticketLeft = document.querySelector(".ticket-left");
    const ticketMid = document.querySelector(".ticket-mid");
    const ticketRight = document.querySelector(".ticket-right");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=400vh",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const p = self.progress;

          const currentRot = gsap.getProperty(
            ".ticket-mid",
            "rotateY"
          ) as number;

          if (currentRot < 90) {
            setLeftSrc(ticket1);
            setMidSrc(ticket2);
            setRightSrc(ticket3);
          } else {
            setLeftSrc(card1);
            setMidSrc(card2);
            setRightSrc(card3);
          }
        },
      },
    });

    tl.to(ticketLeft, { rotate: 0, x: -100, duration: 1, ease: "none" }, 0);
    tl.to(ticketMid, { rotate: 0, duration: 1, ease: "none" }, 0);
    tl.to(ticketRight, { rotate: 0, x: 100, duration: 1, ease: "none" }, 0);

    tl.to(
      [ticketLeft, ticketMid, ticketRight],
      { rotateY: 90, duration: 0.6, ease: "power2.in" },
      "+=0.3"
    );

    tl.to([ticketLeft, ticketMid, ticketRight], {
      rotateY: 180,
      duration: 0.6,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
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
        className="advantage-section min-h-[50vh] lg:h-[90vh] relative border-b border-gray-700 overflow-hidden"
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

        <div className="lg:hidden flex flex-col py-10 space-y-10 justify-center items-center h-full relative z-10">
          <Image src={card1} alt="card1" className="w-[70vw]" />
          <Image src={card2} alt="card2" className="w-[70vw]" />
          <Image src={card3} alt="card3" className="w-[70vw]" />
        </div>

        <div className="hidden lg:flex justify-center items-center h-full relative z-10 -space-x-16 perspective-1000">
          <div className="ticket-left w-[25vw] -rotate-12">
            <Image src={leftSrc} alt="left" />
          </div>

          <div className="ticket-mid w-[25vw] z-5">
            <Image src={midSrc} alt="mid" />
          </div>

          <div className="ticket-right w-[25vw] rotate-12 z-6">
            <Image src={rightSrc} alt="right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage2;

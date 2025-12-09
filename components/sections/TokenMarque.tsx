import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface TokenMarqueeProps {
  tokenList: any[];
  direction?: "left" | "right";
}

const TokenMarquee = ({ tokenList, direction }: TokenMarqueeProps) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!innerRef.current || !marqueeRef.current) return;

    // Duplicate content
    const clone = innerRef.current.cloneNode(true) as HTMLElement;
    marqueeRef.current.appendChild(clone);

    const totalWidth = innerRef.current.offsetWidth;

    // 💥 FIX BAGIAN INI
    if (direction === "right") {
      // kalau kanan, mulai dari negatif width biar ga ada space kosong
      gsap.set(marqueeRef.current, { x: -totalWidth });
    } else {
      // kalau kiri, mulai dari 0
      gsap.set(marqueeRef.current, { x: 0 });
    }

    // Tentukan target pergerakan
    const moveX = direction === "left" ? -totalWidth : 0;

    gsap.to(marqueeRef.current, {
      x: moveX,
      duration: 25,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          let xx = parseFloat(x);
          if (direction === "left") {
            if (xx <= -totalWidth) xx += totalWidth;
          } else {
            if (xx >= 0) xx -= totalWidth;
          }
          return `${xx}px`;
        },
      },
    });
  }, [direction]);

  return (
    <div className="w-full overflow-hidden border-t border-b border-gray-700">
      <div ref={marqueeRef} className="flex w-fit">
        <div ref={innerRef} className="flex flex-row space-x-8 py-4">
          {tokenList.map((token, index) => (
            <div
              key={index}
              className="border-l text-light-orange border-r border-gray-700 flex flex-col justify-center items-center px-10"
            >
              <div className="relative size-28 flex items-center justify-center">
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-orange-500"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange-500"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-orange-500"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-orange-500"></div>

                <Image
                  src={token.image}
                  alt={token.name}
                  className="size-20 object-contain"
                />
              </div>

              <h1 className="text-sm mt-2">{token.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenMarquee;

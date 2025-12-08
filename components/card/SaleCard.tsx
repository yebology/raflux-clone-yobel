"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SaleToken } from "@/interfaces/token";
import { FiClock } from "react-icons/fi";

type Props = {
  saleToken: SaleToken;
};

const SaleCard = ({ saleToken }: Props) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      const diff = saleToken.saleEnded - now;

      if (diff <= 0) {
        setTimeLeft("0D : 0H : 0M : 0S");
        return;
      }

      const d = Math.floor(diff / 86400);
      const h = Math.floor((diff % 86400) / 3600);
      const m = Math.floor((diff % 3600) / 60);
      const s = diff % 60;

      setTimeLeft(`${d}D : ${h}H : ${m}M : ${s}S`);
    }, 1000);

    return () => clearInterval(timer);
  }, [saleToken.saleEnded]);

  const endDate = new Date(saleToken.saleEnded * 1000).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="w-fit h-fit bg-background border border-gray-800 p-6 flex flex-col space-y-2">
      <div className="text-end text-button font-semibold tracking-wider text-xs">
        {timeLeft}
      </div>

      <div className="w-full h-2 rounded-full bg-light-orange border-2 border-button" />

      <div className="w-full flex justify-center py-2">
        <Image
          src={saleToken.image}
          alt={saleToken.name}
          className="w-[290px] h-[290px] object-contain"
        />
      </div>

      <h1 className="font-semibold">{saleToken.name}</h1>

      <div className="flex items-center space-x-2 text-sm text-gray-400">
        <FiClock size={16} />
        <span>Sale Ended</span>
        <span className="font-semibold text-xs text-white">{endDate}</span>
      </div>

      <button className="mt-4 w-full bg-[#FF7A29] hover:bg-[#ff8f45] transition text-white font-semibold py-3 px-6 flex justify-between items-center">
        <span className="tracking-wider text-xs">START RAFFLING NOW</span>
        <span className="opacity-90 text-xs text-light-orange">0.16 🪙</span>
      </button>
    </div>
  );
};

export default SaleCard;

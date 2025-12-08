import { salesToken } from "@/utils/token";
import SaleCard from "../card/SaleCard";
import left from "@/assets/left.png";
import right from "@/assets/right.png";
import Image from "next/image";

const Sale = () => {
  return (
    <div className="bg-primary border-b border-gray-700 grid grid-cols-4 md:grid-cols-6 h-[1400px] md:h-screen lg:h-[60vh] relative">
      <div className="border-r border-gray-700">
        <div className="flex justify-end items-center w-full pt-10 lg:pt-0">
          <Image
            src={left}
            alt="left.png"
            className="h-[20vh] w-[10vw] lg:w-[4vw] cursor-pointer"
          />
        </div>
      </div>
      <div className="border-r border-gray-700">
        <div className="flex justify-start items-center w-full pt-10 lg:pt-0">
          <Image
            src={right}
            alt="right.png"
            className="h-[20vh] w-[10vw] lg:w-[4vw] cursor-pointer"
          />
        </div>
      </div>
      <div className="border-r md:col-span-2 lg:col-span-1 border-gray-700 hidden md:flex" />
      <div className="border-r border-gray-700 justify-center lg:pt-36 lg:pl-4 lg:pr-18 hidden lg:flex"></div>
      <div className="border-r md:col-span-2 lg:col-span-1 border-t border-gray-700"></div>
      <div className="border-r border-t border-gray-700" />
      <div className="absolute flex flex-col md:flex-row left-8 space-y-4 pt-60 lg:pt-0 md:space-x-4 lg:space-y-0 lg:left-96">
        {salesToken.map((token, _) => (
          <SaleCard saleToken={token} />
        ))}
      </div>
    </div>
  );
};

export default Sale;

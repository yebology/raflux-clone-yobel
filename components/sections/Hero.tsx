import Image from "next/image";
import motion from "@/assets/motion.png";

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full lg:max-w-6xl border border-gray-700 flex lg:flex-row">
        <div className="border-r border-gray-700 flex items-center py-8 px-6 lg:w-[65%]">
          <div className="lg:max-w-2xl">
            <h1 className="text-start lg:text-5xl font-bold leading-tight">
              OWN NFTS, TOKENS, OR RWA ASSETS
            </h1>
          </div>
        </div>

        <div className="flex flex-col lg:w-[35%]">
          <Image src={motion} alt="motion.png" className="lg:w-full" />

          <div className="flex justify-center items-center py-10 px-6 border-t border-gray-700">
            <button className="bg-button py-4 px-8 w-full cursor-pointer">
              <h1 className="lg:text-xs font-bold">BUY TICKETS NOW</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

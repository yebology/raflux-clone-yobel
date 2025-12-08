import Image from "next/image";
import cursor from "@/assets/cursor.png";

const Announcement = () => {
  return (
    <div className="bg-primary grid grid-cols-4 md:grid-cols-6 h-[50vh] lg:h-[60vh] relative">
      <div className="border border-r border-gray-700 hidden md:flex" />
      <div className="border border-r border-gray-700 hidden md:flex" />
      <div className="border border-r border-gray-700 hidden md:flex" />
      <div className="border  border-r border-gray-700 justify-center lg:pt-36 lg:pl-4 lg:pr-18 hidden lg:flex">
        <h1 className="text-sm text-gray-500">// EVM COMPATIBLE (BASE)</h1>
      </div>
      <div className="border border-r border-gray-700">
        <div className="hidden lg:flex lg:flex-row items-center lg:pt-18 justify-end lg:space-x-2">
          <h1 className="text-button font-semibold lg:text-2xl">
            BROWSE RAFLUX
          </h1>
          <Image src={cursor} alt="cursor.png" className="size-10" />
        </div>
        <div className="lg:flex justify-end lg:pt-58 hidden">
          <h1 className="text-end text-sm text-gray-500 lg:pl-32 lg:pr-4">
            // CHAINLINK VRF
          </h1>
        </div>
      </div>
      <div className="border md:col-span-2 lg:col-span-1 border-r border-gray-700" />

      <div className="absolute bg-background w-90 h-40 md:w-[92vw] lg:w-100 lg:h-70 border border-gray-700 inset-0 flex flex-col lg:space-y-10 space-y-6 pl-4 justify-center top-1/4 left-8 lg:top-1/4 lg:left-58">
        <div className="bg-button/10 px-6 py-0.5 inline-block max-w-max">
          <h1 className="text-button font-semibold text-xl lg:text-md">
            FOR SELLERS
          </h1>
        </div>
        <div>
          <h1 className="font-semibold text-4xl lg:text-7xl text-light-orange">DON'T MISS OUT</h1>
        </div>
      </div>
      <div className="absolute flex lg:hidden flex-row items-center lg:pt-18 justify-end space-x-2 top-72 left-8">
        <h1 className="text-button font-semibold text-2xl md:text-3xl">BROWSE RAFLUX</h1>
        <Image src={cursor} alt="cursor.png" className="size-10" />
      </div>
    </div>
  );
};

export default Announcement;

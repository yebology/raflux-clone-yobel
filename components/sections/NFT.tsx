import Image from "next/image";
import hexagon from "@/assets/hexagon.png";
import { tokenList } from "@/utils/token";

const NFT = () => {
  return (
    <div className="bg-primary relative">
      <div className="grid relative grid-cols-4 md:grid-cols-6 h-[50vh]">
        <div className="border-r border-gray-700" />
        <div className="border-r md:col-span-2 border-gray-700" />
        <div className="hidden lg:flex justify-end border-r border-gray-700 lg:col-span-2">
          <h1 className="pr-10 pt-16 text-end text-sm max-w-3xs">
            LET'S TO BE THE NEXT GENERATION OF NFT RAFFLES
          </h1>
        </div>
        <div className="border-r md:col-span-2 lg:col-span-1 border-gray-700" />
        <div className="absolute top-0 bottom-0 left-0 w-full flex flex-col pl-8 pt-16 lg:justify-center lg:px-10 max-w-sm">
          <div className="relative w-fit mb-6">
            <Image src={hexagon} alt="hexagon.png" className="w-84" />
            <h1 className="absolute inset-0 flex items-center justify-center font-bold text-4xl lg:text-5xl">
              THE FUTURE
            </h1>
          </div>
          <h1 className="font-bold text-4xl lg:text-5xl">NFT MARKETPLACE</h1>
          <h1 className="lg:hidden text-sm pt-4">
            LET'S TO BE THE NEXT GENERATION OF NFT RAFFLES
          </h1>
        </div>
      </div>

      <div className="lg:hidden grid relative grid-cols-4 md:grid-cols-6">
        <div className="lg:hidden size-58 relative z-10 bg-primary border border-gray-700 flex items-center justify-center pr-12">
          <h1 className="text-sm text-end">RAFLUX SUPPORT ALL NFT AND TOKEN</h1>
        </div>
        <div className="border-r md:col-span-2 border-gray-700" />
        <div className="border-r md:col-span-2 border-gray-700" />
      </div>

      <div className="grid relative lg:grid-cols-6 h-[25vh]">
        <div className="hidden ml-8 border border-gray-700 lg:flex items-center">
          <h1 className="text-sm text-end pr-10">
            RAFLUX SUPPORT ALL NFT AND TOKEN
          </h1>
        </div>
        <div className="lg:col-span-5 border-t border-b overflow-hidden border-gray-700 flex flex-row space-x-8 py-4">
          {tokenList.map((token, index) => (
            <div
              key={index}
              className="border-l border-r border-gray-700 flex flex-col justify-center items-center px-10"
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
      <div className="grid relative lg:grid-cols-6 h-[25vh]">
        <div className="lg:col-span-5 border-t border-b overflow-hidden border-gray-700 flex flex-row space-x-8 py-4">
          {tokenList.map((token, index) => (
            <div
              key={index}
              className="border-l border-r border-gray-700 flex flex-col justify-center items-center px-10"
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
        <div className="hidden mr-8 border border-gray-700 lg:flex items-center justify-center">
          <h1 className="text-sm">ON BASE CHAIN</h1>
        </div>
      </div>
      <div className="grid relative grid-cols-4 md:grid-cols-6 z-50">
        <div className="lg:hidden size-58 relative z-10 bg-primary border border-gray-700 flex items-center justify-center">
          <h1 className="text-sm">ON BASE CHAIN</h1>
        </div>
        <div className="border-r md:col-span-2 border-gray-700" />
        <div className="border-r md:col-span-2 border-gray-700" />
      </div>
      <div className="grid relative grid-cols-4 md:grid-cols-6 h-[15vh]">
        <div className="border-r border-gray-700" />
        <div className="border-r border-gray-700 md:col-span-2" />
        <div className="border-r border-gray-700 md:col-span-2" />{" "}
        <div className="border-r border-gray-700" />
      </div>
    </div>
  );
};

export default NFT;

"use client";

import { Typewriter } from "react-simple-typewriter";

const Promo = () => {

  return (
    <div className="w-full h-[20vh] lg:h-[36vh] flex justify-center">
      <div className="w-full lg:max-w-6xl border-l border-r border-gray-700">
        <div className="grid grid-cols-3 lg:grid-cols-5 h-full">
          <div className="lg:col-span-2 text-end flex items-center justify-end w-full border-r border-gray-700 pr-4">
            <h1 className="text-sm hidden lg:flex text-gray-500">
              <Typewriter
                words={["TRY YOUR LUCK TODAY"]}
                typeSpeed={50}
                delaySpeed={100}
              />
            </h1>
          </div>
          <div className="col-span-2 lg:col-span-3 text-end flex items-center justify-end w-full border-r border-gray-700">
            <div className="flex flex-col w-full h-full">
              <div className="flex-2 flex items-center justify-end border-b border-gray-700">
                <h1
                  className="hidden text-light-orange md:flex md:text-2xl text-bold lg:text-5xl font-semibold lg:max-w-lg pr-12"
                >
                  <Typewriter
                    words={["STARTING AS LOW AS $10!"]}
                    typeSpeed={50}
                    delaySpeed={100}
                  />
                </h1>
              </div>

              <div className="flex-1 flex items-center justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;

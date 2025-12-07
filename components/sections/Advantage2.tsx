import Image from "next/image";
import card1 from "@/assets/card1.png";
import card2 from "@/assets/card2.png";
import card3 from "@/assets/card3.png";

const Advantage2 = () => {
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
        className="min-h-[50vh] lg:h-[90vh] relative border-b border-gray-700"
      >
        <h1 className="absolute flex justify-center items-center inset-0 font-semibold text-gray-500/20 text-4xl lg:text-8xl">
          RAFLUX
        </h1>
        <div className="flex flex-col py-10 lg:py-0 lg:flex-row space-y-10 lg:space-x-10 justify-center items-center h-full z-10 relative">
          <Image src={card1} alt="card1.png" className="w-[70vw] md:w-[50vw] lg:w-[25vw]" />
          <Image src={card2} alt="card2.png" className="w-[70vw] md:w-[50vw] lg:w-[25vw]" />
          <Image src={card3} alt="card3.png" className="w-[70vw] md:w-[50vw] lg:w-[25vw]" />
        </div>
      </div>
    </div>
  );
};

export default Advantage2;

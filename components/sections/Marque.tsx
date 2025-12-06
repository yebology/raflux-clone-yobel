import { marqueList } from "@/utils/marque";

const Marque = () => {
  return (
    <div className="w-full overflow-hidden border-y border-gray-700">
      <div className="flex animate-marquee-left text-gray-400 gap-50 py-3">
        {marqueList.map((text, index) => (
          <h1 key={index} className="text-[10px] whitespace-nowrap">
            {text}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Marque;

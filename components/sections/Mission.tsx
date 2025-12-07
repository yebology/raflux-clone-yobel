import Image from "next/image";
import star1 from "@/assets/star1.png";
import star2 from "@/assets/star2.png";
import { missionList } from "@/utils/mission";

const Mission = () => {
  const gridBackgroundStyle = {
    // Membuat garis vertikal dan horizontal
    backgroundImage: `
      repeating-linear-gradient(0deg, #333 0.5px, transparent 1px, transparent 50px),
      repeating-linear-gradient(90deg, #333 0.5px, transparent 1px, transparent 50px)
    `,
    // Ukuran satu kotak (20px x 20px)
    backgroundSize: "50px 50px",
    // Warna #333 disesuaikan agar samar-samar (gelap, seperti yang terlihat di gambar)
  };

  return (
    <div>
      <div
        className="hidden lg:flex ml-28 w-[35vw] h-[6vh] bg-primary"
        style={{
          clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0 100%)",
        }}
      ></div>
      <div
        className="md:hidden ml-auto w-[70vw] h-[6vh] bg-primary"
        style={{
          clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      ></div>
      <div
        className="hidden lg:hidden md:flex mx-auto w-[70vw] h-[6vh] bg-primary"
        style={{
          clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0 100%)",
        }}
      ></div>
      <div className="w-full flex justify-center bg-primary h-[8vh]" />
      <div className="flex lg:flex-row border-t border-b bg-primary border-gray-700">
        <div className="hidden lg:flex-1 border-r border-gray-700" />
        <div className="flex-3 flex items-center justify-between py-6 px-4">
          <div className="bg-button/10 px-6 py-0.5">
            <h1 className="text-button font-semibold">OUR MISSION</h1>
          </div>
          <div className="hidden lg:flex bg-button/10 px-6 py-0.5">
            <h1 className="text-button font-semibold">OUR MISSION</h1>
          </div>
        </div>
        <div className="hidden lg:flex-1 border-l border-gray-700" />
      </div>
      <div
        style={gridBackgroundStyle}
        className="h-[85vh] relative border-b border-gray-700"
      >
        <div className="absolute right-0">
          <Image src={star2} alt="star.png" className="w-50 lg:w-60" />
        </div>
        <div className="absolute bottom-0 left-2">
          <Image src={star1} alt="star.png" className="w-50 lg:w-60" />
        </div>
        <div className="flex flex-col space-y-10 justify-center h-full px-10">
          {missionList.map((mission, index) => (
            <h1
              key={index}
              className={`font-semibold text-3xl lg:text-7xl ${
                index % 2 === 0 ? "text-start" : "text-end"
              }`}
            >
              {mission}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;

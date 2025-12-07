import Image from "next/image";
import discord from "@/assets/discord.png";
import help from "@/assets/help.png";
import x from "@/assets/x.png";

const Footer = () => {
  return (
    <footer className="py-3 flex lg:flex-row items-center lg:px-4 justify-between">
      <div className="flex flex-row items-center justify-center space-x-2">
        <div className="flex flex-row space-x-2 items-center justify-center">
          <div className="bg-button size-2 rounded-full" />
          <h1 className="text-xs text-button">Client Network</h1>
        </div>
        <div className="flex flex-row space-x-2 items-center justify-center">
          <div className="bg-button size-2 rounded-full" />
          <h1 className="text-xs text-button">Websocket Connection</h1>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-4 mt-2">
        <Image src={discord} alt="discord.png" className="size-4" />
        <Image src={x} alt="x.png" className="size-4" />
        <h1 className="text-xs hidden lg:flex">Term of Service</h1>
        <Image src={help} alt="help.png" className="size-4" />
        <h1 className="text-xs hidden lg:flex">Help and Support</h1>
      </div>
    </footer>
  );
};

export default Footer;

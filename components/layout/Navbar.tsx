import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-999 bg-background flex justify-between items-center w-full px-6 py-2.5">
      <div>
        <Image src={logo} alt="logo.png" className="w-18" />
      </div>
      <div className="hidden md:flex">
        <button className="bg-button px-2 py-2.5">
          <h1 className="text-xs cursor-pointer">GET STARTED</h1>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

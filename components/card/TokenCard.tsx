import { Token } from "@/interfaces/token";
import Image from "next/image";
import tether from "@/assets/tether.png";

type Props = {
  token: Token;
};

const TokenCard = ({ token }: Props) => {
  return (
    <div
      className="flex flex-col items-center py-8 px-6 border-b border-r border-gray-700 relative overflow-hidden" // 👈 Tambahkan 'relative' dan 'overflow-hidden'
    >
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-orange-500"></div>

      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-orange-500"></div>

      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-orange-500"></div>

      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-orange-500"></div>

      <div className="w-16 h-16 mb-4 relative">
        <Image
          src={token.image}
          alt={token.name}
          fill={true}
          sizes="64px"
          style={{ objectFit: "contain" }}
        />
      </div>

      <h2 className="text-lg font-semibold">{token.name}</h2>
      <p className="text-xs text-button mb-2">{token.amount}</p>
      <div className="flex flex-row items-center gap-2">
        <Image src={tether} alt="tether.png" className="size-6" />
        <p className="text-md font-bold text-button">{token.price}</p>
      </div>
    </div>
  );
};

export default TokenCard;

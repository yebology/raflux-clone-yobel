import cbtc from "@/assets/cbtc.png";
import milady from "@/assets/milady.png";
import doodles from "@/assets/doodles.png";
import weth from "@/assets/weth.png";
import wbtc from "@/assets/wbtc.png";
import pudgy from "@/assets/pudgy.png";
import { SaleToken, Token } from "@/interfaces/token";

export const salesToken: SaleToken[] = [
  {
    id: 1,
    name: "Pudgy Penguin #7106",
    rafflePrice: "5",
    image: pudgy,
    saleEnded: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60,
  },
  {
    id: 2,
    name: "Pudgy Penguin #7105",
    rafflePrice: "5",
    image: pudgy,
    saleEnded: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60,
  },
];

export const tokenList: Token[] = [
  {
    name: "CBTC ON BASE",
    amount: 10,
    price: "$200,000",
    image: cbtc,
  },
  {
    name: "MILADY",
    amount: 10,
    price: "$200,000",
    image: milady,
  },
  {
    name: "DOODLES",
    amount: 10,
    price: "$200,000",
    image: doodles,
  },
  {
    name: "WBTC ON BASE",
    amount: 10,
    price: "$200,000",
    image: wbtc,
  },
  {
    name: "WETH ON BASE",
    amount: 10,
    price: "$200,000",
    image: weth,
  },
];

import cbtc from "@/assets/cbtc.png";
import { Token } from "@/interfaces/token";

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
    image: cbtc,
  },
  {
    name: "DOODLES",
    amount: 10,
    price: "$200,000",
    image: cbtc,
  },
  {
    name: "WBTC ON BASE",
    amount: 10,
    price: "$200,000",
    image: cbtc,
  },
  {
    name: "WETH ON BASE",
    amount: 10,
    price: "$200,000",
    image: cbtc,
  },
];

const DUPLICATION_FACTOR = 15;
export const multipliedTokenList: Token[] = Array(DUPLICATION_FACTOR).fill(tokenList).flat();
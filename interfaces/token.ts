import { StaticImageData } from "next/image";

export interface Token {
  name: string;
  amount: number;
  price: string;
  image: StaticImageData;
}

export interface SaleToken {
  id: number;
  name: string;
  rafflePrice: string;
  saleEnded: number;
  image: StaticImageData;
}

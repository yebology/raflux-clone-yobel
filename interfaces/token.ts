import { StaticImageData } from "next/image";

export interface Token {
  name: string;
  amount: number;
  price: string;
  image: StaticImageData;
}

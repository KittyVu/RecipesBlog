import { Playwrite_CA } from "next/font/google";
import {Playfair_Display} from "next/font/google"

export const playwrite = Playwrite_CA({
  subsets: ["latin"],
  weight: "400"
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "500"
})

export const playfair2 = Playfair_Display({
  subsets: ["latin"],
  weight: "700"
})
import { Inter, Roboto_Condensed, Lusitana } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const robotoCondensed = Roboto_Condensed({
  weight: ["800"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

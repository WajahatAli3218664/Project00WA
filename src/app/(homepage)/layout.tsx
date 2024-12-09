import type { Metadata } from "next";
import {Inter, Open_Sans, Great_Vibes} from "next/font/google";
import "../globals.css";
import Footer from "../components/Footer";

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-greatVibes'
})
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-open-sans'
})
const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter'
})


export const metadata: Metadata = {
  title: "Wajahat Ali GIAIC FoodTuck",
  description: "hackathon 2 foodtuck website by Wajahat Ali official",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${openSans.variable} ${inter.variable} ${greatVibes.variable} antialiased`}
      >
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}

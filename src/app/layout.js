import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/molecule/Header";
import Footer from "@/components/molecule/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web X Hunter",
  description: "We Build Digital Dreams into Reality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Header />
        <div className="flex justify-center w-full pt-[4rem] ">
          <div className=" flex flex-col md:w-full w-[950px] ">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

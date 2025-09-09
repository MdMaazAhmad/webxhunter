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
  title:
    "Web X Hunter | Web Development Company | Mobile App Development | Digital Marketing Agency",
  description:
    "Leading Web Development Company offering Mobile App Development, Digital Marketing Agency services, UI/UX Design, Next.js Development, React Development, SEO Services, E-commerce Solutions & Custom Web Development for businesses and startups.",
  keywords:
    "Web Development Company, Mobile App Development, Digital Marketing Agency, UI/UX Design Services, Next.js Development Company, React Development Services, SEO Services for Businesses, E-commerce Website Development, Cross-Platform App Development, Node.js Backend Development, Database Design Integration, Custom Web Solutions, Full-Stack Development Agency, Affordable Web Development Services for Startups, Hire React Developers for Scalable Web Apps, Best Next.js Development Company for Businesses, Custom Mobile App Development Services, SEO Digital Marketing for E-commerce Growth",
  author: "Web X Hunter",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  "og:title": "Web X Hunter | Web Development Company | Mobile App Development",
  "og:description":
    "Leading Web Development Company offering Mobile App Development, Digital Marketing Agency services, UI/UX Design, Next.js Development, React Development & SEO Services.",
  "og:type": "website",
  "twitter:card": "summary_large_image",
  "twitter:title":
    "Web X Hunter | Web Development Company | Mobile App Development",
  "twitter:description":
    "Leading Web Development Company offering Mobile App Development, Digital Marketing Agency services, UI/UX Design, Next.js Development & React Development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Header />
        <div className="flex justify-center w-full pt-[2.5rem] md:pt-[4rem] ">
          <div className=" flex flex-col md:w-full w-[950px] ">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

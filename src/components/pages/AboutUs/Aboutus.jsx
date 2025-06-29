import Hero from "@/components/pages/AboutUs/components/Hero";
import AboutUs from "@/components/pages/AboutUs/components/OurValues";
import Team from "@/components/pages/AboutUs/components/Team";
import WhyUs from "@/components/pages/AboutUs/components/WhyUs";

export default function Aboutus() {
  return (
    <div className="px-4 py-8">
      <Hero />
      <AboutUs />
      <Team />
      <WhyUs />
    </div>
  );
}

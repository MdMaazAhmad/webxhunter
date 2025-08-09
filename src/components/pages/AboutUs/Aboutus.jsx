import Hero from "@/components/pages/AboutUs/components/Hero";
import Team from "@/components/pages/AboutUs/components/Team";
import Story from "./components/Story";
import Values from "./components/Values";
import Expertise from "./components/Expertise";

export default function Aboutus() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Story />
      <Values />
      <Team />
      <Expertise />
    </div>
  );
}

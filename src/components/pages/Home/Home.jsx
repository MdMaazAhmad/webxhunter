"use client"

import Hero from "@/components/pages/Home/components/Hero"
import Services from "@/components/pages/Home/components/Services"
import Feature from "@/components/pages/Home/components/Feature"
import Testimonial from "@/components/pages/Home/components/Testinomial"
import Elevate from "@/components/pages/Home/components/Elevate"
export default function Home(){
    return(
        <div id="#home" >
        <Hero/>
        <Services/>
        <Feature/>
        <Testimonial/>
        <Elevate/>
        </div>
    );
}
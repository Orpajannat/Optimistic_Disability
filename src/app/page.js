import Image from "next/image";
import HeroBanner from "@/components/home/HeroBanner";
import OurFocusAreas from "@/components/home/OurFocusAreas";
import OurImpact from "@/components/home/OurImpact";
import AboutUs from "@/components/home/AboutUs";

export default function Home() {
  return (
    <div>
      <main>
        <HeroBanner/>
        <OurFocusAreas/>
        <OurImpact/>
        <AboutUs/>
      </main>
    </div>
  );
}

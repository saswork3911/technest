import Hero from "../components/Hero";
import KPIGrid from "../components/KPIGrid";
import Services from "../components/Services";
import WhySection from "../components/WhySection";
import RecentWork from "../components/RecentWork";
import Testimonial from "../components/Testimonial";
import Pricing from "../components/Pricing";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <KPIGrid />
      <Services />
      <WhySection />
      <RecentWork />
      <Testimonial />
      <Pricing />
      <CTASection />
    </>
  );
}

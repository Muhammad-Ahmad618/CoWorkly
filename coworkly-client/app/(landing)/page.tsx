import { HeroSection } from "@/components/landing-page/HeroSection";
import { HighlightsSection } from "@/components/landing-page/HighlightSection/HighlightsSection";
import { HowItWorkSection } from "@/components/landing-page/GetStartedSection/HowItWorkSection";
import { ForYouSection } from "@/components/landing-page/ForYouSection/ForYouSection";
import { Testimonial } from "@/components/landing-page/Testimonial";
import { FinalCta } from "@/components/landing-page/FinalCta";

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <HighlightsSection />
      <HowItWorkSection />
      <ForYouSection />
      <Testimonial />
      <FinalCta />
    </div>
  );
}

export default LandingPage;

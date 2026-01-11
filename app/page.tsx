import AboutUsSection from "@/components/public/about-us/page";
import CallToAction from "@/components/public/cta/call-to-action";
import ExploreSpaces from "@/components/public/explore/explore-card";
import FAQsThree from "@/components/public/faq/faqs-3";
import Features from "@/components/public/features/features-1";
import FooterSection from "@/components/public/footer/footer";
import HeroSection from "@/components/public/hero-section/hero-section";
import HowToBook from "@/components/public/how-to-book/page";
import WallOfLoveSection from "@/components/public/testomonial/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ExploreSpaces />
      <Features />
      <HowToBook />
      <WallOfLoveSection />
      <FAQsThree />
      <CallToAction />
      <FooterSection />
    </>
  );
}

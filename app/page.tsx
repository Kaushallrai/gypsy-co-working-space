import CallToAction from "@/components/public/cta/call-to-action";
import FAQsThree from "@/components/public/faq/faqs-3";
import Features from "@/components/public/features/features-1";
import FooterSection from "@/components/public/footer/footer";
import HeroSection from "@/components/public/hero-section/hero-section";
import WallOfLoveSection from "@/components/public/testomonial/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <WallOfLoveSection />
      <FAQsThree />
      <CallToAction />
      <FooterSection />
    </>
  );
}

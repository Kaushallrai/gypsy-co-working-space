import HeroContact from "@/components/public/contact";
import { Contact7 } from "@/components/public/contact/contact";
import CallToAction from "@/components/public/cta/call-to-action";
import FooterSection from "@/components/public/footer/footer";
import { HeroHeader } from "@/components/public/header/header";

export default function Home() {
  return (
    <>
      <HeroHeader />
      {/* <HeroContact /> */}
      <Contact7 />
      <CallToAction />
      <FooterSection />
    </>
  );
}

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { MobileCtaBar } from "@/components/shared/MobileCtaBar";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";
import { CallBanner } from "@/components/sections/CallBanner";
import { Categories } from "@/components/sections/Categories";
import { DoorstepSteps } from "@/components/sections/DoorstepSteps";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { SocialProof } from "@/components/sections/SocialProof";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <DoorstepSteps />
        <Categories />
        <SocialProof />
        <Services />
        <Faq />
        <CallBanner />
      </main>
      <Footer />
      <WhatsAppFab />
      <MobileCtaBar />
    </>
  );
}

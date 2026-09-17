import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";
import { CallBanner } from "@/components/sections/CallBanner";
import { Categories } from "@/components/sections/Categories";
import { Doorstep } from "@/components/sections/Doorstep";
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
        <Services />
        <Doorstep />
        <CallBanner />
        <Categories />
        <SocialProof />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

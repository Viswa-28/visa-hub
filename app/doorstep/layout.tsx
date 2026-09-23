import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";

export default function DoorstepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

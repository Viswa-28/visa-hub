import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8"
      >
        {children}
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

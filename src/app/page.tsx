
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Hero,
  AboutSection,
  ServicesPreview,
  DoctorsPreview,
  GalleryPreview,
  Testimonials,
  FAQSection
} from "@/features/home";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ServicesPreview />
        <DoctorsPreview />
        <GalleryPreview />
        <Testimonials />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

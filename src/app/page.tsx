import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import PremiumCollections from '@/components/sections/PremiumCollections';
import StorytellingSection from '@/components/sections/StorytellingSection';
import ProcessSection from '@/components/sections/ProcessSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative w-screen h-screen overflow-hidden">
        <Hero />
      </main>
      <PremiumCollections />
      <StorytellingSection />
      <ProcessSection />
      <Footer />
    </>
  );
}

import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import StorytellingSection from '@/components/sections/StorytellingSection';
import ProcessSection from '@/components/sections/ProcessSection';
import AboutSection from '@/components/sections/AboutSection';
import Footer from '@/components/sections/Footer';
import ScrollSnake from '@/components/ui/ScrollSnake';

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative w-screen h-screen overflow-hidden">
        <Hero />
      </main>
      <div className="relative w-full bg-white">
        <ScrollSnake />
        <StorytellingSection />
        <ProcessSection />
        <AboutSection />
        <Footer />
      </div>
    </>
  );
}

// components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}

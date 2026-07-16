import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { InstagramBanner } from "./components/InstagramBanner";
import { Skills } from "./components/Skills";
import { ExtraSkills } from "./components/ExtraSkills";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TextureOverlay } from "./components/TextureOverlay";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      <main>
        <Hero />
        <InstagramBanner />
        <About />
        <Skills />
        <ExtraSkills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <TextureOverlay />
      <WhatsAppButton />
    </div>
  );
}
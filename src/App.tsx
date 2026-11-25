import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Clips from "./components/Clips";
import DiscordSection from "./components/DiscordSection";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  return (
    <div className="noise relative min-h-screen bg-void font-body text-white">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Schedule />
        <Clips />
        <DiscordSection />
      </main>
      <Footer />
    </div>
  );
}

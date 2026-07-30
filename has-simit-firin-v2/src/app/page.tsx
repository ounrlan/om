import Intro from "@/components/Intro";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import PullQuote from "@/components/PullQuote";
import Story from "@/components/Story";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import SesameRain from "@/components/SesameRain";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollClock from "@/components/ScrollClock";
import MobileBar from "@/components/MobileBar";
import Grain from "@/components/Grain";

export default function Home() {
  return (
    <>
      <Intro />
      <ScrollProgress />
      <ScrollClock />
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <PullQuote />
        <Story />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
      <SesameRain />
      <Grain />
    </>
  );
}

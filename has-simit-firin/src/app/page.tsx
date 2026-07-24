import Intro from "@/components/Intro";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import Story from "@/components/Story";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import SesameRain from "@/components/SesameRain";

export default function Home() {
  return (
    <>
      <Intro />
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <Story />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <SesameRain />
    </>
  );
}

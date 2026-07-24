import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertySearch from "@/components/PropertySearch";
import FeaturedProperties from "@/components/FeaturedProperties";
import Listings from "@/components/Listings";
import SellCta from "@/components/SellCta";
import WhyChoose from "@/components/WhyChoose";
import OurStory from "@/components/OurStory";
import GoogleReviews from "@/components/GoogleReviews";
import Team from "@/components/Team";
import Regions from "@/components/Regions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <PropertySearch />
          <FeaturedProperties />
          <Listings />
          <SellCta />
          <WhyChoose />
          <OurStory />
          <GoogleReviews />
          <Team />
          <Regions />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </SmoothScroll>
    </>
  );
}

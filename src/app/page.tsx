import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import About from "@/components/About";
import Story from "@/components/Story";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Carousel />
      <About />
      <Story />
      <Features />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import About from "@/components/About";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Story = dynamic(() => import("@/components/Story"), {
  loading: () => (
    <section
      id="families"
      className="relative w-full overflow-hidden bg-[#1C2E20]"
      style={{ minHeight: "400px" }}
      aria-hidden="true"
    />
  ),
});

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

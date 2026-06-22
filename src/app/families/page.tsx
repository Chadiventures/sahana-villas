import type { Metadata } from "next";
import Link from "next/link";
import FamilyMergedSection from "@/components/families/FamilyMergedSection";
import FamilyLocationHighlights from "@/components/families/FamilyLocationHighlights";
import FamilySafetyCarousel from "@/components/families/FamilySafetyCarousel";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Families | Sahana Villas",
  description:
    "Family-friendly luxury villas in Seminyak, Bali. Pool fencing, baby cots, babysitting, and a warm team ready to welcome your whole family.",
};


export default function FamiliesPage() {
  return (
    <main>
      <section
        className="relative flex flex-col items-center justify-center overflow-hidden px-6 pb-0 text-center"
        style={{
          height: "35vh",
          minHeight: "280px",
          background:
            "linear-gradient(135deg, #1C2E20 0%, #2C4A3E 50%, #1C2E20 100%)",
        }}
      >
        <div className="relative z-10 max-w-3xl">
          <p
            className="mb-3 text-[#C4963A]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            For Families
          </p>

          <h1
            className="mb-4 whitespace-normal text-white md:whitespace-nowrap"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 300,
              lineHeight: 1.15,
            }}
          >
            Where Every Child Feels at Home
          </h1>

          <p
            className="mb-6"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Sahana Villas is proud to be one of Seminyak&apos;s most
            family-friendly private villa destinations
          </p>

          <nav
            aria-label="Breadcrumb"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <Link href="/" className="transition-colors hover:text-[#C4963A]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/65">Families</span>
          </nav>
        </div>
      </section>

      <FamilyMergedSection />

      <FamilySafetyCarousel />

      <FamilyLocationHighlights />

      <section className="bg-[#F7F3EE] py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2
            className="mb-8 text-[#1A1A1A]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 300,
              lineHeight: 1.25,
            }}
          >
            Ready to Plan Your Family Holiday?
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book"
              className="btn-alive inline-block border border-[#C4963A] bg-[#C4963A] px-10 py-3.5 text-white transition-all duration-300 hover:bg-transparent hover:text-[#C4963A]"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Check Availability
            </Link>
            <Link
              href="/contact"
              className="btn-alive inline-block border border-[#1C2E20] px-10 py-3.5 text-[#1C2E20] transition-all duration-300 hover:border-[#C4963A] hover:text-[#C4963A]"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Contact Us
            </Link>
          </div>

          <p
            className="mt-6 text-[#6B6B6B]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 300,
            }}
          >
            Our team is happy to answer any questions about travelling with
            children
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

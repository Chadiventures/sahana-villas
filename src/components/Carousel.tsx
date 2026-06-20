"use client";

import { useRef, useState, useEffect, useCallback, MouseEvent } from "react";

interface CarouselCard {
  id: string;
  category: string;
  title: string;
  description: string;
  gradient: string;
}

const CARD_WIDTH = 420 + 24;

const cards: CarouselCard[] = [
  {
    id: "villas",
    category: "Our Villas",
    title: "Your Private Sanctuary",
    description:
      "Three-bedroom villas with private pools, open-air living, and refined tropical design in the heart of Seminyak.",
    gradient: "linear-gradient(145deg, #1C2E20 0%, #3D5A45 50%, #1C2E20 100%)",
  },
  {
    id: "families",
    category: "Families",
    title: "Space for Everyone",
    description:
      "Spacious villas designed for families to relax, reconnect, and create lasting memories together.",
    gradient: "linear-gradient(145deg, #1C2E20 0%, #2D4A35 50%, #1C2E20 100%)",
  },
  {
    id: "services",
    category: "Services",
    title: "Thoughtful Hospitality",
    description:
      "From daily housekeeping to private chefs, every detail is handled with warm Balinese care.",
    gradient: "linear-gradient(145deg, #1C2E20 0%, #B07B72 60%, #8B5E56 100%)",
  },
  {
    id: "dining",
    category: "Dining",
    title: "Culinary Delights",
    description:
      "In-villa dining experiences, private chefs, and Seminyak's finest restaurants just steps away.",
    gradient: "linear-gradient(145deg, #2A3D2E 0%, #B07B72 40%, #1C2E20 100%)",
  },
  {
    id: "media",
    category: "Media",
    title: "See the Experience",
    description:
      "Browse our gallery of sun-drenched pools, open-air living spaces, and tropical gardens.",
    gradient: "linear-gradient(145deg, #2A3D2E 0%, #C4963A 50%, #1C2E20 100%)",
  },
  {
    id: "promos",
    category: "Promos",
    title: "Seasonal Offers",
    description:
      "Discover exclusive packages for extended stays, honeymoons, and family getaways.",
    gradient: "linear-gradient(145deg, #1C2E20 0%, #8FA99A 40%, #C4963A 100%)",
  },
  {
    id: "experiences",
    category: "Experiences",
    title: "Curated Adventures",
    description:
      "Temple visits, surf lessons, spa treatments, and bespoke island excursions arranged for you.",
    gradient: "linear-gradient(145deg, #1C2E20 0%, #4A6B52 50%, #C4963A 100%)",
  },
];

export default function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isDragging = useRef(false);
  const isPaused = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const clampedIndex = Math.max(0, Math.min(index, cards.length - 1));
    container.scrollTo({ left: clampedIndex * CARD_WIDTH, behavior: "smooth" });
    activeIndexRef.current = clampedIndex;
    setActiveIndex(clampedIndex);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / CARD_WIDTH);
      const clampedIndex = Math.max(0, Math.min(index, cards.length - 1));
      activeIndexRef.current = clampedIndex;
      setActiveIndex(clampedIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused.current || isDragging.current) return;
      const nextIndex = (activeIndexRef.current + 1) % cards.length;
      scrollToIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [scrollToIndex]);

  const handleMouseDown = (e: MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    isDragging.current = true;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
    container.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
    handleMouseUp();
  };

  return (
    <section id="villas" className="bg-[#1C2E20] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 text-center">
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
            Discover
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.2,
            }}
          >
            Explore Sahana Villas
          </h2>
        </div>
      </div>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={scrollRef}
          className="carousel-scroll flex cursor-grab gap-6 overflow-x-auto px-6 pb-4 select-none lg:px-10"
          style={{ scrollSnapType: "x mandatory" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {cards.map((card) => (
            <article
              key={card.id}
              className="relative shrink-0 overflow-hidden"
              style={{
                width: "420px",
                height: "540px",
                scrollSnapAlign: "start",
              }}
            >
              <div
                className="absolute inset-0"
                style={{ background: card.gradient }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span
                  className="mb-4 inline-block w-fit border border-[#C4963A] px-3 py-1 text-[#C4963A]"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  {card.category}
                </span>
                <h3
                  className="mb-3 text-white"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2rem",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="mb-6 text-white/70"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  {card.description}
                </p>
                <a
                  href={`#${card.id}`}
                  className="inline-flex items-center gap-2 text-[#C4963A] transition-colors duration-300 hover:text-white"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Explore
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {cards.map((card, index) => (
            <button
              key={card.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollToIndex(index)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: activeIndex === index ? "24px" : "8px",
                backgroundColor:
                  activeIndex === index ? "#C4963A" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

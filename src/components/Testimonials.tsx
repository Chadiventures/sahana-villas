"use client";

import { useEffect, useState } from "react";

interface Testimonial {
  quote: string;
  author: string;
  meta: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Our family of five had the most wonderful stay. The kids lived in the pool while we enjoyed the spacious living areas. The staff made us feel like VIPs from the moment we arrived.",
    author: "The Morrison Family",
    meta: "Family · Sydney, Australia",
  },
  {
    quote:
      "A perfect honeymoon escape. Waking up to tropical birdsong, swimming under the stars, and walking to incredible restaurants just minutes away. Pure magic.",
    author: "Erik & Astrid",
    meta: "Couple · Stockholm, Sweden",
  },
  {
    quote:
      "We came as a group of friends and left as family. The villa had everything we needed for a week of laughter, long dinners, and unforgettable sunsets by the pool.",
    author: "James & Friends",
    meta: "Group · London, UK",
  },
];

function getPosition(index: number, activeIndex: number, total: number) {
  let diff = index - activeIndex;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden bg-[#1C2E20] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
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
            Guest Reviews
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
            What Our Guests Say
          </h2>
        </div>

        <div
          className="relative flex items-center justify-center"
          style={{ minHeight: "380px" }}
        >
          {testimonials.map((testimonial, index) => {
            const position = getPosition(
              index,
              activeIndex,
              testimonials.length,
            );
            const isActive = position === 0;
            const isVisible = Math.abs(position) <= 1;

            if (!isVisible) return null;

            return (
              <article
                key={testimonial.author}
                className="absolute px-4"
                style={{
                  width: isActive ? "min(640px, 90vw)" : "min(480px, 70vw)",
                  transform: `translateX(${position * 110}%) scale(${isActive ? 1 : 0.85})`,
                  opacity: isActive ? 1 : 0.5,
                  zIndex: isActive ? 10 : 5,
                  transition:
                    "transform 0.6s ease, opacity 0.6s ease, width 0.6s ease",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div
                  className="bg-white p-8 lg:p-12"
                  style={{
                    boxShadow: isActive
                      ? "0 20px 60px rgba(0, 0, 0, 0.25)"
                      : "0 8px 24px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div
                    className="mb-6 text-[#C4963A]"
                    aria-label="5 stars"
                    style={{ fontSize: isActive ? "18px" : "14px" }}
                  >
                    ★★★★★
                  </div>

                  <blockquote
                    className="mb-8 text-[#1C2E20]"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: isActive ? "clamp(1.25rem, 2.5vw, 1.75rem)" : "1rem",
                      fontWeight: 300,
                      fontStyle: "italic",
                      lineHeight: 1.7,
                    }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="border-t border-[#1C2E20]/10 pt-6">
                    <p
                      className="text-[#1A1A1A]"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {testimonial.author}
                    </p>
                    <p
                      className="mt-1 text-[#6B6B6B]"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "12px",
                        fontWeight: 300,
                      }}
                    >
                      {testimonial.meta}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: activeIndex === index ? "24px" : "8px",
                backgroundColor:
                  activeIndex === index ? "#C4963A" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.tripadvisor.com/VacationRentalReview-g469404-d2551837"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[#C4963A] transition-colors duration-300 hover:text-white"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            Read More Reviews
            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

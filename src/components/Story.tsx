export default function Story() {
  return (
    <section
      id="families"
      className="bg-[#1C2E20] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <div className="relative flex items-center justify-center gap-4 md:gap-8">
          <span
            className="shrink-0 text-[#C4963A]/30 select-none"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(4rem, 12vw, 8rem)",
              fontWeight: 300,
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote
            className="text-[#F7F3EE]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.5,
            }}
          >
            Not a hotel. Not a resort. Simply your home in Bali.
          </blockquote>

          <span
            className="shrink-0 text-[#C4963A]/30 select-none"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(4rem, 12vw, 8rem)",
              fontWeight: 300,
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            &rdquo;
          </span>
        </div>
      </div>
    </section>
  );
}

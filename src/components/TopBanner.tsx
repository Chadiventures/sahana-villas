import Link from "next/link";

const bannerOffer = "SMART SAVER · BOOK DIRECT AND SAVE 15% · LIMITED AVAILABILITY";

const textStyle = {
  fontFamily: "var(--font-inter)",
  fontSize: "10px",
  fontWeight: 500,
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
};

function BannerSegment({ hidden }: { hidden?: boolean }) {
  return (
    <span
      className="top-banner-content inline-flex shrink-0 items-center text-[#C4963A]"
      aria-hidden={hidden}
    >
      <span style={textStyle}>{bannerOffer}</span>
      <span
        className="top-banner-separator text-[#C4963A]/60"
        style={textStyle}
        aria-hidden="true"
      >
        ✦
      </span>
    </span>
  );
}

export default function TopBanner() {
  return (
    <Link
      href="/book"
      className="top-banner block overflow-hidden bg-[#1C2E20] transition-colors duration-300 hover:bg-[#243828]"
      style={{ height: "32px" }}
      aria-label="Book direct and save 15 percent"
    >
      <div className="top-banner-track flex h-full items-center">
        <BannerSegment />
        <BannerSegment hidden />
      </div>
    </Link>
  );
}

import Link from "next/link";

const bannerText =
  "SMART SAVER DEAL · BOOK DIRECT AND SAVE UP TO 15% ON EXTENDED STAYS · LIMITED AVAILABILITY · BOOK NOW";

export default function TopBanner() {
  return (
    <Link
      href="/book"
      className="top-banner block overflow-hidden transition-colors duration-300 hover:bg-[#b8872e]"
      style={{
        height: "40px",
        backgroundColor: "#C4963A",
        cursor: "pointer",
      }}
    >
      <div className="top-banner-track flex h-full items-center">
        <span
          className="top-banner-content shrink-0 text-[#1C2E20]"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          {bannerText}
        </span>
        <span
          className="top-banner-content shrink-0 text-[#1C2E20]"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
          aria-hidden="true"
        >
          {bannerText}
        </span>
      </div>
    </Link>
  );
}

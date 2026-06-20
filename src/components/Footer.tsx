import Link from "next/link";

const navigateLinks = [
  { label: "Our Villas", href: "#villas" },
  { label: "About Us", href: "#about" },
  { label: "Families", href: "#families" },
  { label: "Contact", href: "#contact" },
  { label: "Book Now", href: "#book" },
];

const legalLinks = [
  {
    label: "Terms and Conditions",
    href: "https://www.sahanavilla.com/terms-conditions/",
  },
  {
    label: "Privacy Policy",
    href: "https://www.sahanavilla.com/privacy-policy/",
  },
  {
    label: "Cookie Policy",
    href: "https://www.sahanavilla.com/cookie-policy/",
  },
  {
    label: "Agent Info",
    href: "https://drive.google.com/drive/folders/1dyEgV7G-hZ7y4GUGLxh2Fl5ZjPTB4j_c",
  },
];

const bottomLegalLinks = [
  {
    label: "Terms",
    href: "https://www.sahanavilla.com/terms-conditions/",
  },
  {
    label: "Privacy",
    href: "https://www.sahanavilla.com/privacy-policy/",
  },
  {
    label: "Cookies",
    href: "https://www.sahanavilla.com/cookie-policy/",
  },
];

const linkStyle = {
  fontFamily: "var(--font-inter)",
  fontSize: "13px",
  fontWeight: 300,
};

export default function Footer() {
  return (
    <footer className="bg-[#111812]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <img
              src="/logo.png"
              alt="Sahana Villas"
              className="mb-4 h-10 w-auto brightness-0 invert"
            />
            <p
              className="text-white/50"
              style={{
                ...linkStyle,
                lineHeight: 1.7,
              }}
            >
              Luxury private villas in the heart of Seminyak, Bali.
            </p>
          </div>

          <div>
            <h4
              className="mb-5 text-white/70"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {navigateLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 transition-colors duration-300 hover:text-[#C4963A]"
                    style={linkStyle}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="mb-5 text-white/70"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 transition-colors duration-300 hover:text-[#C4963A]"
                    style={linkStyle}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="mb-5 text-white/70"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Contact
            </h4>
            <address
              className="space-y-3 not-italic text-white/50"
              style={{ ...linkStyle, lineHeight: 1.7 }}
            >
              <p>
                Jl. Kayu Aya (Oberoi Street) No. 35B,
                <br />
                Seminyak, Bali, Indonesia
              </p>
              <p>
                Front Office:{" "}
                <a
                  href="tel:+62361736674"
                  className="transition-colors duration-300 hover:text-[#C4963A]"
                >
                  +62 361 73 66 74
                </a>
              </p>
              <p>
                Reservations:{" "}
                <a
                  href="tel:+628113882070"
                  className="transition-colors duration-300 hover:text-[#C4963A]"
                >
                  +62 811 388 2070
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:booking@sahanavillas.com"
                  className="transition-colors duration-300 hover:text-[#C4963A]"
                >
                  booking@sahanavillas.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-10">
          <p
            className="text-white/40"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 300,
            }}
          >
            &copy; {new Date().getFullYear()} Sahana Villas. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {bottomLegalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-colors duration-300 hover:text-[#C4963A]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  fontWeight: 300,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Our Villas", href: "#villas" },
  { label: "About Us", href: "#about" },
  { label: "Families", href: "#families" },
  { label: "Contact", href: "#contact" },
];

const languages = [
  { code: "EN", flagFile: "en.svg", label: "English" },
  { code: "ZH", flagFile: "zh-CN.svg", label: "Chinese" },
  { code: "ID", flagFile: "id.svg", label: "Indonesian" },
  { code: "KO", flagFile: "ko.svg", label: "Korean" },
  { code: "RU", flagFile: "ru.svg", label: "Russian" },
];

function FlagIcon({ flagFile, label }: { flagFile: string; label: string }) {
  return (
    <img
      src={`https://cdn.gtranslate.net/flags/svg/${flagFile}`}
      alt={label}
      width={20}
      height={20}
      className="shrink-0 rounded-[2px] object-cover"
      style={{ width: 20, height: 20 }}
    />
  );
}

function ChevronDown() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white/50"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(28, 46, 32, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="shrink-0">
          <img src="/logo.png" alt="Sahana Villas" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white transition-colors duration-300 hover:text-[#C4963A]"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-white transition-colors duration-300 hover:text-[#C4963A]"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.1em",
              }}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
            >
              <FlagIcon
                flagFile={currentLang.flagFile}
                label={currentLang.label}
              />
              <span>{currentLang.code}</span>
              <ChevronDown />
            </button>

            {langOpen && (
              <ul
                role="listbox"
                className="absolute right-0 top-full mt-2 min-w-[120px] border border-white/10 py-1 shadow-lg"
                style={{ backgroundColor: "#1C2E20" }}
              >
                {languages.map((lang) => (
                  <li key={lang.code} role="option">
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangOpen(false);
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2 text-left text-white transition-colors duration-200 hover:text-[#C4963A]"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "11px",
                        fontWeight: 400,
                        letterSpacing: "0.05em",
                        backgroundColor:
                          currentLang.code === lang.code
                            ? "rgba(196, 150, 58, 0.1)"
                            : "transparent",
                      }}
                    >
                      <FlagIcon flagFile={lang.flagFile} label={lang.label} />
                      <span>{lang.code}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            href="#book"
            className="border border-[#C4963A] bg-[#C4963A] px-6 py-2.5 text-white transition-all duration-300 hover:bg-transparent hover:text-[#C4963A]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

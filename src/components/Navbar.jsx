"use client";

import React, { useState } from "react";
import { Link } from "@heroui/react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeLink, setActiveLink] = useState("#home");

  const handleNavClick = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-3 left-1/2 z-50 w-[calc(100%-16px)] max-w-[1280px] -translate-x-1/2 ">
        <div className="flex min-h-[66px] items-center justify-between rounded-full border border-white/10 bg-[#151a20]/90 px-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl md:px-5">
          {/* ======= LOGO ======= */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 no-underline hover:no-underline focus:no-underline"
          >
            <span className="bg-[#13F2B3] bg-clip-text text-[24px] font-bold tracking-tight text-transparent no-underline">
              &lt; ABDUL MOZID /&gt;
            </span>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const isActive = activeLink === item.href;

              return (
                <li key={item.name} className="relative">
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative block py-2 text-[16px] font-bold no-underline transition-colors duration-200 hover:no-underline focus:no-underline ${isActive ? "text-[#ec4899]" : "text-gray-300 hover:text-white"}`}
                  >
                    {item.name}

                    {/* Active underline */}
                    {isActive && (
                      <span className="absolute left-1/2 top-[calc(100%+10px)] h-[2px] w-full -translate-x-1/2 rounded-full bg-gradient-to-r from-[#ec4899] via-[#8b5cf6] to-[#3b82f6]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-2">
            {/* Theme Button */}
            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#18202a] text-gray-300 transition-all duration-200 hover:border-white/20 hover:bg-[#202a35] hover:text-white md:flex"
            >
              {isDark ? (
                <Sun size={18} strokeWidth={1.8} />
              ) : (
                <Moon size={18} strokeWidth={1.8} />
              )}
            </button>

            {/* ================= DOWNLOAD CV ================= */}
            <a
              href="/cv.pdf"
              download="Abdul-Mozid-CV.pdf"
              className="hidden h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#ec4899] via-[#8b5cf6] to-[#3b82f6] px-5 text-[16px] font-semibold text-white no-underline shadow-[0_0_25px_rgba(52,211,153,0.15)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:no-underline focus:no-underline md:flex"
            >
              <Download size={17} strokeWidth={2.2} />
              Download CV
            </a>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#18202a] text-gray-300 transition-all duration-200 hover:border-white/20 hover:bg-[#202a35] hover:text-white md:hidden"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMenuOpen && (
          <div className="mt-2 overflow-hidden rounded-3xl border border-white/10 bg-[#151a20]/95 p-4 shadow-[0_15px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeLink === item.href;

                return (
                  <li key={item.name} className="w-full">
                    <Link
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`flex w-full rounded-xl px-4 py-3 text-lg font-medium no-underline transition-all duration-200 hover:no-underline ${isActive ? "bg-white/5 text-[#ec4899]" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}

              {/* Mobile Download CV */}
              <li className="mt-2 border-t border-white/10 pt-3">
                <a
                  href="/cv.pdf"
                  download="Abdul-Mozid-CV.pdf"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ec4899] via-[#8b5cf6] to-[#3b82f6] px-5 py-3 text-sm font-semibold text-white no-underline transition-all duration-300 hover:scale-[1.02] hover:no-underline"
                >
                  <Download size={17} />
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Navbar spacing */}
      <div className="h-[84px] bg-[#0b1020]/80 px-4 shadow-[0_10px_40px_rgba(0,0,0,0.35),0_0_40px_rgba(112,0,255,0.08)] backdrop-blur-xl" />
      <div className="pointer-events-none absolute -left-20 -top-16 h-40 w-40 rounded-full bg-[#7000ff]/25 blur-[70px]" />

      <div className="pointer-events-none absolute -right-20 -top-16 h-40 w-40 rounded-full bg-[#ec4899]/20 blur-[70px]" />

      <div className="pointer-events-none absolute bottom-[-80px] left-1/2 h-36 w-72 -translate-x-1/2 rounded-full bg-[#3b82f6]/15 blur-[70px]" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#7000ff]/[0.06] via-transparent to-[#ec4899]/[0.06]" />
    </>
  );
}

export default Navbar;

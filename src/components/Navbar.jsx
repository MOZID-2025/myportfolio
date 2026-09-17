"use client";

import React, { useState } from "react";
import { Link } from "@heroui/react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "About", href: "#about" },
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
      <nav className="fixed top-3 left-1/2 z-50 w-[calc(100%-16px)] max-w-[1280px] -translate-x-1/2">
        <div
          className="
            flex
            min-h-[66px]
            items-center
            justify-between
            rounded-full
            border
            border-white/10
            bg-[#151a20]/90
            px-4
            shadow-[0_10px_40px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
            md:px-5
          "
        >
          {/* ================= LOGO ================= */}
          <Link
            href="/"
            className="
              flex
              shrink-0
              items-center
              gap-2.5
              no-underline
              hover:no-underline
              focus:no-underline
            "
          >
            {/* Logo Text */}
            <span
              className="
                bg-gradient-to-r
                from-lime-300
                via-emerald-300
                to-sky-500
                bg-clip-text
                text-[20px]
                font-semibold
                tracking-tight
                text-transparent
                no-underline
              "
            >
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
                    className={`
                      relative
                      block
                      py-2
                      text-[14px]
                      font-medium
                      no-underline
                      transition-colors
                      duration-200
                      hover:no-underline
                      focus:no-underline
                      ${
                        isActive
                          ? "text-lime-300"
                          : "text-gray-400 hover:text-white"
                      }
                    `}
                  >
                    {item.name}

                    {/* Active underline */}
                    {isActive && (
                      <span
                        className="
                          absolute
                          left-1/2
                          top-[calc(100%+10px)]
                          h-[2px]
                          w-full
                          -translate-x-1/2
                          rounded-full
                          bg-gradient-to-r
                          from-lime-300
                          via-emerald-300
                          to-sky-500
                        "
                      />
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
              className="
                hidden
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-[#18202a]
                text-gray-300
                transition-all
                duration-200
                hover:border-white/20
                hover:bg-[#202a35]
                hover:text-white
                sm:flex
              "
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
              className="
                hidden
                h-11
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-lime-300
                via-emerald-300
                to-sky-500
                px-5
                text-[14px]
                font-semibold
                text-slate-950
                no-underline
                shadow-[0_0_25px_rgba(52,211,153,0.15)]
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]
                hover:no-underline
                focus:no-underline
                sm:flex
              "
            >
              <Download size={17} strokeWidth={2.2} />
              Download CV
            </a>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-[#18202a]
                text-gray-300
                sm:hidden
              "
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMenuOpen && (
          <div
            className="
              mt-2
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#151a20]/95
              p-4
              shadow-[0_15px_50px_rgba(0,0,0,0.4)]
              backdrop-blur-xl
              sm:hidden
            "
          >
            <ul className="flex flex-col">
              {navItems.map((item) => {
                const isActive = activeLink === item.href;

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`
                        flex
                        w-full
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        font-medium
                        no-underline
                        transition
                        hover:no-underline
                        ${
                          isActive
                            ? "text-lime-300"
                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                        }
                      `}
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
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-lime-300
                    via-emerald-300
                    to-sky-500
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-slate-950
                    no-underline
                    hover:no-underline
                  "
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
      <div className="h-[84px]" />
    </>
  );
}

export default Navbar;

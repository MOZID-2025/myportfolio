"use client";

import React from "react";
import { ArrowUpRight, Code2, Layers3, Infinity } from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsappSquare,
} from "react-icons/fa";

import { useEffect, useState } from "react";

const navImages = ["/profile-1.png", "/profile-2.png", "/profile-3.png"];

const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://facebook.com/",
    label: "Facebook",
  },
  {
    icon: FaWhatsappSquare,
    href: "https://wa.me/",
    label: "WhatsApp",
  },
  {
    icon: FaGithub,
    href: "https://github.com/",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/",
    label: "LinkedIn",
  },
  {
    icon: FaTelegram,
    href: "https://t.me/",
    label: "Telegram",
  },
];

// =========================================
// TYPING TITLES
// =========================================

const typingTitles = [
  "B2B & B2C Software Sales Specialist",
  "IT Consultant & Business Analyst",
  "MERN Stack Developer (Frontend)",
  "E-Commerce Specialist META (POD)",
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // =========================================
  // TYPING ANIMATION STATE
  // =========================================

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // =========================================
  // AUTO SLIDER
  // =========================================

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % navImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // =========================================
  // TYPING EFFECT
  // =========================================

  useEffect(() => {
    const currentTitle = typingTitles[titleIndex];

    let typingSpeed = isDeleting ? 35 : 75;

    // When typing is complete
    if (!isDeleting && displayText === currentTitle) {
      typingSpeed = 2200;
    }

    // When deleting is complete
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % typingTitles.length);

      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }

      // Start deleting after pause
      if (!isDeleting && displayText === currentTitle) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-84px)] w-full overflow-hidden bg-[#070C16] text-white"
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-[500px] w-[500px] rounded-full bg-[#35F5B0]/[0.045] blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 top-[-200px] h-[500px] w-[500px] rounded-full bg-[#45A9F5]/[0.035] blur-[130px]" />

      {/* =========================================
          1280px CONTAINER
      ========================================= */}

      <div className="relative mx-auto flex min-h-[calc(100vh-84px)] w-full max-w-[1280px] items-center px-5 py-20 sm:px-8 lg:px-10 xl:px-0">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* =========================================
              LEFT CONTENT
          ========================================= */}

          <div className="relative z-10 max-w-[650px]">
            {/* Availability */}

            <div
              className="
                mb-7
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-[#35F5B0]/30
                bg-[#0D141F]/70
                px-4
                py-2
                backdrop-blur-md
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#35F5B0]
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[#35F5B0]
                    shadow-[0_0_10px_#35F5B0]
                  "
                />
              </span>

              <span
                className="
                  font-mono
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#35F5B0]
                "
              >
                Available for new opportunities
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                text-2xl
                font-bold
                leading-[1.02]
                tracking-[-0.04em]
                sm:text-6xl
                lg:text-[58px]
                xl:text-[64px]
              "
            >
              Hi, I'm <span className="text-[#F1F5F9]">Abdul Mozid</span>
              <br />
              {/* =========================================
                  TYPING TITLE
              ========================================= */}
              <span className="inline-block min-h-[1.08em] text-[34px] leading-tight sm:text-[42px] lg:text-[46px] xl:text-[50px] bg-gradient-to-r from-[#35F5B0] via-[#35D9D0] to-[#45A9F5] bg-clip-text text-transparent">
                {displayText}
                <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[2px] animate-pulse bg-[#35F5B0]" />
              </span>
            </h1>

            {/* Role */}

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-[#35F5B0] to-[#35D9D0]" />

              <p className="font-mono text-sm font-medium tracking-wide text-[#94A3B8]">
                MERN Stack • Next.js • React
              </p>
            </div>

            {/* Description */}

            <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-[#94A3B8] sm:text-base">
              I build modern, scalable and user-focused web applications that
              combine clean design with powerful functionality. I help
              businesses turn ideas into reliable digital products that create
              real value.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  h-12
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#35F5B0]
                  via-[#35D9D0]
                  to-[#45A9F5]
                  px-6
                  text-sm
                  font-semibold
                  text-[#061018]
                  no-underline
                  shadow-[0_0_25px_rgba(53,245,176,0.12)]
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:shadow-[0_0_35px_rgba(53,245,176,0.28)]
                "
              >
                Let's Connect
                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              <a
                href="#services"
                className="
                  inline-flex
                  h-12
                  items-center
                  rounded-full
                  border
                  border-white/[0.10]
                  bg-[#0D141F]/70
                  px-6
                  text-sm
                  font-medium
                  text-[#CBD5E1]
                  no-underline
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#35F5B0]/30
                  hover:bg-[#151E2A]
                  hover:text-white
                "
              >
                Explore My Work
              </a>
            </div>

            {/* Social */}

            <div className="mt-9 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      group
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-[#0D141F]/80
                      text-[#64748B]
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:border-[#35F5B0]/30
                      hover:bg-[#151E2A]
                      hover:text-[#35F5B0]
                    "
                  >
                    <Icon
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* =========================================
              RIGHT SIDE IMAGE SLIDER
          ========================================= */}

          <div
            className="
              relative
              flex
              items-center
              justify-center
              lg:justify-end
            "
          >
            {/* Large background glow */}

            <div
              className="
                pointer-events-none
                absolute
                h-[430px]
                w-[430px]
                rounded-full
                bg-[#35F5B0]/[0.035]
                blur-[100px]
              "
            />

            {/* Circle */}

            <div
              className="
                relative
                h-[320px]
                w-[320px]
                sm:h-[370px]
                sm:w-[370px]
                lg:h-[400px]
                lg:w-[400px]
              "
            >
              {/* Outer circle */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-white/[0.10]
                "
              />

              {/* Gradient border */}

              <div
                className="
                  absolute
                  inset-[7px]
                  rounded-full
                  border
                  border-[#35F5B0]/20
                "
              />

              {/* Image container */}

              <div
                className="
                  absolute
                  inset-[14px]
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-[#0D141F]
                  shadow-[0_20px_70px_rgba(0,0,0,0.4)]
                "
              >
                {navImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Profile ${index + 1}`}
                    className={`
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-all
                      duration-1000
                      ease-in-out
                      ${
                        activeSlide === index
                          ? "scale-100 opacity-100"
                          : "scale-105 opacity-0"
                      }
                    `}
                  />
                ))}

                {/* Image overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#070C16]/20
                    via-transparent
                    to-[#35F5B0]/[0.03]
                  "
                />
              </div>

              {/* Green dot rotating on circle border */}

              <div
                className="
                  absolute
                  inset-0
                  animate-[spin_7s_linear_infinite]
                  rounded-full
                "
              >
                <span
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-3
                    w-3
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#35F5B0]
                    shadow-[0_0_16px_#35F5B0]
                  "
                />
              </div>

              {/* Blue rotating decoration */}

              <div
                className="
                  absolute
                  inset-0
                  animate-[spin_10s_linear_infinite_reverse]
                  rounded-full
                "
              />

              {/* Slider Indicator */}

              <div
                className="
                  absolute
                  -bottom-8
                  left-0
                  right-0
                  flex
                  items-center
                  justify-center
                  gap-2.5
                "
              >
                {navImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`
                      rounded-full
                      transition-all
                      duration-500
                      ${
                        activeSlide === index
                          ? `
                            h-2
                            w-6
                            bg-gradient-to-r
                            from-[#35F5B0]
                            to-[#45A9F5]
                            shadow-[0_0_12px_rgba(53,245,176,0.55)]
                          `
                          : `
                            h-2
                            w-2
                            bg-[#475569]
                            hover:bg-[#64748B]
                          `
                      }
                    `}
                  />
                ))}
              </div>
              {/* ==================================
    FLOATING INFO BADGES
================================== */}

              {/* Projects Built - Top Right */}
              <div
                className="
    absolute
    right-[-35px]
    top-[18px]
    z-20
    flex
    items-center
    gap-2
    rounded-2xl
    border
    border-[#35F5B0]/30
    bg-[#0D141F]/90
    px-4
    py-2.5
    shadow-[0_10px_30px_rgba(0,0,0,0.35)]
    backdrop-blur-xl
    animate-[float_5s_ease-in-out_infinite]
  "
              >
                <Code2 size={20} className="text-[#35F5B0]" />

                <div>
                  <div className="text-lg font-bold leading-none text-[#35F5B0]">
                    10+
                  </div>

                  <div className="mt-1 whitespace-nowrap text-[9px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                    Projects Built
                  </div>
                </div>
              </div>

              {/* Tools Learned - Left */}
              <div
                className="
    absolute
    left-[-45px]
    top-[42%]
    z-20
    flex
    items-center
    gap-2
    rounded-2xl
    border
    border-[#45A9F5]/30
    bg-[#0D141F]/90
    px-4
    py-2.5
    shadow-[0_10px_30px_rgba(0,0,0,0.35)]
    backdrop-blur-xl
    animate-[float_6s_ease-in-out_infinite]
  "
              >
                <Layers3 size={20} className="text-[#45A9F5]" />

                <div>
                  <div className="text-lg font-bold leading-none text-[#45A9F5]">
                    10+
                  </div>

                  <div className="mt-1 whitespace-nowrap text-[9px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                    Tools Learned
                  </div>
                </div>
              </div>

              {/* Curiosity - Bottom Right */}
              <div
                className="
    absolute
    bottom-[18px]
    right-[-30px]
    z-20
    flex
    items-center
    gap-2
    rounded-2xl
    border
    border-[#35D9D0]/30
    bg-[#0D141F]/90
    px-4
    py-2.5
    shadow-[0_10px_30px_rgba(0,0,0,0.35)]
    backdrop-blur-xl
    animate-[float_7s_ease-in-out_infinite]
  "
              >
                <Infinity size={22} className="text-[#35D9D0]" />

                <div>
                  <div className="text-lg font-bold leading-none text-[#35D9D0]">
                    ∞
                  </div>
                  <div className="mt-1 whitespace-nowrap text-[9px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                    Curiosity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          md:flex
        "
      >
        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-[#64748B]
          "
        >
          Scroll
        </span>

        <span
          className="
            relative
            h-8
            w-px
            overflow-hidden
            bg-[#1E293B]
          "
        >
          <span
            className="
              absolute
              left-0
              top-0
              h-1/2
              w-full
              animate-pulse
              bg-gradient-to-b
              from-[#35F5B0]
              to-transparent
            "
          />
        </span>
      </div>
    </section>
  );
}

export default Hero;

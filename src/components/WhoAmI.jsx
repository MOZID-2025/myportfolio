"use client";

import React from "react";
import { Code2, Layers3, Infinity } from "lucide-react";
import { useEffect, useState } from "react";

const navImages = ["/profile-1.png", "/profile-2.jpg", "/profile-3.png"];

function WhoAmI() {
  const [activeSlide, setActiveSlide] = useState(0);

  // =========================================
  // AUTO SLIDER
  // =========================================

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % navImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#070C16]
        text-white
      "
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      {/* Purple Glow - Top Left */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#7000FF]/10
          blur-[130px]
        "
      />

      {/* Pink Glow - Center */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#EC4899]/[0.045]
          blur-[140px]
        "
      />

      {/* Cyan Glow - Right */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#35F5B0]/[0.07]
          blur-[130px]
        "
      />

      {/* Blue Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[15%]
          top-[25%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#3B82F6]/[0.05]
          blur-[120px]
        "
      />

      {/* =========================================
          SUBTLE CENTER GRID
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[1000px]
          -translate-x-1/2
          -translate-y-1/2
          opacity-[0.45]
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, black 40%, transparent 75%)",
        }}
      />

      {/* =========================================
          1280px CONTAINER
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1280px]
          items-center
          px-5
          py-20
          sm:px-8
          lg:px-10
          xl:px-0
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-16
            lg:grid-cols-2
            lg:gap-12
          "
        >
          {/* =========================================
              LEFT CONTENT
          ========================================= */}

          <div
            className="
              relative
              z-10
              max-w-[650px]
            "
          >
            {/* Section Label */}

            <div
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-10
                  bg-gradient-to-r
                  from-[#ec4899]
                  to-[#8b5cf6]
                "
              />

              <span
                className="
                  font-mono
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#ec4899]
                "
              >
                About Me
              </span>
            </div>

            {/* Main Heading */}

            <h2
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
              <span
                className="
                  bg-gradient-to-r
                  from-[#F1F5F9]
                  via-[#E2E8F0]
                  to-[#94A3B8]
                  bg-clip-text
                  text-transparent
                "
              >
                Who I am?
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-[600px]
                text-[15px]
                leading-7
                text-[#bbcadf]
                sm:text-base
              "
            >
              My name is Abdul Mozid. I am a Full Stack Web Developer from
              Dhaka, Bangladesh. I work with Next.js, TypeScript, and WordPress.
              I love building responsive, user-friendly web apps and solving
              real-world problems with code. I am always open to new
              opportunities and collaborations.
            </p>

            {/* Small Decorative Line */}

            <div
              className="
                mt-8
                h-px
                w-32
                bg-gradient-to-r
                from-[#35F5B0]
                via-[#45A9F5]
                to-transparent
              "
            />
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
            {/* Large Background Glow */}

            <div
              className="
                pointer-events-none
                absolute
                h-[430px]
                w-[430px]
                rounded-full
                bg-[#35F5B0]/[0.045]
                blur-[100px]
              "
            />

            {/* Pink / Purple Image Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-10
                top-10
                h-[300px]
                w-[300px]
                rounded-full
                bg-[#ec4899]/[0.045]
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
              {/* Outer Circle */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-white/[0.10]
                "
              />

              {/* Gradient Border */}

              <div
                className="
                  absolute
                  inset-[7px]
                  rounded-full
                  border
                  border-[#35F5B0]/20
                "
              />

              {/* Image Container */}

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

                {/* Image Overlay */}

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

              {/* Green Rotating Dot */}

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

              {/* Blue Rotating Decoration */}

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

              {/* Projects Built */}

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
                  <div
                    className="
                      text-lg
                      font-bold
                      leading-none
                      text-[#35F5B0]
                    "
                  >
                    10+
                  </div>

                  <div
                    className="
                      mt-1
                      whitespace-nowrap
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#94A3B8]
                    "
                  >
                    Projects Built
                  </div>
                </div>
              </div>

              {/* Tools Learned */}

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
                  <div
                    className="
                      text-lg
                      font-bold
                      leading-none
                      text-[#45A9F5]
                    "
                  >
                    10+
                  </div>

                  <div
                    className="
                      mt-1
                      whitespace-nowrap
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#94A3B8]
                    "
                  >
                    Tools Learned
                  </div>
                </div>
              </div>

              {/* Curiosity */}

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
                  <div
                    className="
                      text-lg
                      font-bold
                      leading-none
                      text-[#35D9D0]
                    "
                  >
                    ∞
                  </div>

                  <div
                    className="
                      mt-1
                      whitespace-nowrap
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#94A3B8]
                    "
                  >
                    Curiosity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoAmI;

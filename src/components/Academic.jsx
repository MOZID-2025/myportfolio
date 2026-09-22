"use client";

import React from "react";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Arts",
    field: "English Literature",
    institute: "University of Dhaka",
    location: "Dhaka, Bangladesh",
    period: "—",
    score: "Bachelor's Degree",
  },
  {
    degree: "Higher Secondary Certificate",
    field: "General",
    institute: "Your College Name",
    location: "Bangladesh",
    period: "—",
    score: "HSC",
  },
  {
    degree: "Secondary School Certificate",
    field: "General",
    institute: "Your School Name",
    location: "Bangladesh",
    period: "—",
    score: "SSC",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative w-full overflow-hidden bg-[#030712] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* =================================================
          HERO STYLE AMBIENT GLOWS
      ================================================= */}

      {/* Purple — Top Center */}
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#7000ff] opacity-[0.22] blur-[160px]" />

      {/* Pink — Bottom Left */}
      <div className="pointer-events-none absolute -bottom-48 left-[5%] h-[600px] w-[600px] rounded-full bg-[#ec4899] opacity-[0.16] blur-[160px]" />

      {/* Blue — Right */}
      <div className="pointer-events-none absolute right-[-180px] top-[20%] h-[650px] w-[650px] rounded-full bg-[#3b82f6] opacity-[0.17] blur-[170px]" />

      {/* =================================================
          SUBTLE GRID
      ================================================= */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[1100px] -translate-x-1/2 -translate-y-1/2 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, black 42%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, black 42%, transparent 78%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-0">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-16 text-center">
          {/* Small label */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#13F2B3]" />

            <span className="flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.25em] text-[#13F2B3]">
              <BookOpen size={12} />
              Education
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#13F2B3]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#F1F5F9] sm:text-4xl lg:text-5xl">
            Academic{" "}
            <span className="bg-gradient-to-r from-[#13F2B3] via-[#ec4899] to-[#3b82f6] bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[600px] text-sm leading-7 text-white/45">
            My academic background and educational journey that shaped my
            communication, analytical thinking and professional foundation.
          </p>
        </div>

        {/* =================================================
            EDUCATION CARDS
        ================================================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {education.map((edu, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#080d16]/75 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.15] hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
              style={{
                animation: `educationReveal 0.7s ease ${i * 0.12}s both`,
              }}
            >
              {/* =================================================
                  CARD AMBIENT GLOW
              ================================================= */}

              <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#ec4899]/10 blur-[80px] transition-all duration-700 group-hover:bg-[#ec4899]/20" />

              <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#3b82f6]/10 blur-[80px] transition-all duration-700 group-hover:bg-[#3b82f6]/20" />

              {/* =================================================
                  TOP GRADIENT LINE
              ================================================= */}

              <div className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-[#13F2B3] via-[#7000ff] to-[#3b82f6] opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />

              {/* =================================================
                  ICON
              ================================================= */}

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-[#13F2B3] transition-all duration-500 group-hover:border-[#13F2B3]/20 group-hover:bg-[#13F2B3]/10 group-hover:shadow-[0_0_30px_rgba(19,242,179,0.12)]">
                <GraduationCap
                  size={22}
                  className="transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                />
              </div>

              {/* =================================================
                  DEGREE
              ================================================= */}

              <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-[#F1F5F9] transition-colors duration-300 group-hover:text-white">
                {edu.degree}
              </h3>

              <p className="relative mt-1.5 text-sm font-medium text-[#13F2B3]">
                {edu.field}
              </p>

              {/* =================================================
                  INSTITUTE
              ================================================= */}

              <div className="relative mt-5 border-t border-white/[0.06] pt-5">
                <p className="text-sm font-medium text-[#CBD5E1]">
                  {edu.institute}
                </p>

                <p className="mt-2 flex items-center gap-1.5 text-[11px] text-white/40">
                  <MapPin size={12} />
                  {edu.location}
                </p>
              </div>

              {/* =================================================
                  BOTTOM INFO
              ================================================= */}

              <div className="relative mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] text-white/45">
                  <Calendar size={10} />
                  {edu.period}
                </span>

                <span className="rounded-full border border-[#13F2B3]/15 bg-[#13F2B3]/5 px-3 py-1.5 font-mono text-[10px] font-semibold text-[#13F2B3]">
                  {edu.score}
                </span>
              </div>

              {/* =================================================
                  CARD NUMBER
              ================================================= */}

              <div className="pointer-events-none absolute right-5 top-5 font-mono text-[10px] tracking-widest text-white/[0.12]">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* =================================================
            BOTTOM DECORATIVE LINE
        ================================================= */}

        <div className="mx-auto mt-14 flex max-w-md items-center justify-center gap-3 opacity-40">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#ec4899]" />

          <div className="h-1.5 w-1.5 rounded-full bg-[#13F2B3] shadow-[0_0_12px_#13F2B3]" />

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#3b82f6]" />
        </div>
      </div>

      {/* =================================================
          ANIMATION
      ================================================= */}

      <style jsx>{`
        @keyframes educationReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Education;

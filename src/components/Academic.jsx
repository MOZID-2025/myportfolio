"use client";

import React from "react";
import {
  GraduationCap,
  MapPin,
  Calendar,
  BookOpen,
  Sparkles,
  PenTool,
  Library,
} from "lucide-react";

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

/* =========================================================
   LEFT SIDE — ANIMATED ACADEMIC VISUAL
========================================================= */

function AcademicAnimation() {
  return (
    <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-[30px] border border-white/[0.06] bg-[#070c15]/50">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7000ff]/20 blur-[100px]" />

      <div className="pointer-events-none absolute left-[20%] top-[20%] h-[180px] w-[180px] rounded-full bg-[#ec4899]/10 blur-[80px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-[180px] w-[180px] rounded-full bg-[#3b82f6]/10 blur-[80px]" />

      {/* =====================================================
          ROTATING OUTER RING
      ===================================================== */}

      <div className="absolute h-[330px] w-[330px] rounded-full border border-[#13F2B3]/10 animate-[spin_22s_linear_infinite]" />

      <div className="absolute h-[270px] w-[270px] rounded-full border border-dashed border-[#ec4899]/15 animate-[spin_18s_linear_infinite_reverse]" />

      <div className="absolute h-[210px] w-[210px] rounded-full border border-[#3b82f6]/10 animate-[spin_14s_linear_infinite]" />

      {/* =====================================================
          ORBIT DOTS
      ===================================================== */}

      <div className="absolute h-[330px] w-[330px] animate-[spin_22s_linear_infinite]">
        <span className="absolute left-1/2 top-[-3px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#13F2B3] shadow-[0_0_15px_#13F2B3]" />
      </div>

      <div className="absolute h-[270px] w-[270px] animate-[spin_18s_linear_infinite_reverse]">
        <span className="absolute bottom-[-3px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#ec4899] shadow-[0_0_15px_#ec4899]" />
      </div>

      {/* =====================================================
          FLOATING ACADEMIC BADGES
      ===================================================== */}

      <div className="absolute left-[12%] top-[23%] animate-[float_4s_ease-in-out_infinite] rounded-xl border border-white/10 bg-[#0D141F]/90 px-3 py-2 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-2">
          <BookOpen size={14} className="text-[#13F2B3]" />
          <span className="font-mono text-[9px] text-white/60">LITERATURE</span>
        </div>
      </div>

      <div className="absolute right-[10%] top-[27%] animate-[float_5s_ease-in-out_infinite_0.8s] rounded-xl border border-white/10 bg-[#0D141F]/90 px-3 py-2 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-2">
          <PenTool size={14} className="text-[#ec4899]" />
          <span className="font-mono text-[9px] text-white/60">ENGLISH</span>
        </div>
      </div>

      <div className="absolute bottom-[22%] left-[10%] animate-[float_4.5s_ease-in-out_infinite_1s] rounded-xl border border-white/10 bg-[#0D141F]/90 px-3 py-2 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Library size={14} className="text-[#3b82f6]" />
          <span className="font-mono text-[9px] text-white/60">KNOWLEDGE</span>
        </div>
      </div>

      {/* =====================================================
          CENTRAL ACADEMIC SYMBOL
      ===================================================== */}

      <div className="relative z-10 flex h-[145px] w-[145px] items-center justify-center rounded-full border border-white/10 bg-[#080d17]/90 shadow-[0_0_80px_rgba(112,0,255,0.18)] backdrop-blur-xl">
        {/* Inner rotating ring */}
        <div className="absolute inset-3 rounded-full border border-dashed border-[#13F2B3]/15 animate-[spin_12s_linear_infinite]" />

        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[#13F2B3]/20 bg-[#13F2B3]/[0.05] shadow-[0_0_40px_rgba(19,242,179,0.08)]">
          <GraduationCap
            size={42}
            strokeWidth={1.4}
            className="text-[#13F2B3] drop-shadow-[0_0_12px_rgba(19,242,179,0.5)]"
          />

          <Sparkles
            size={13}
            className="absolute -right-2 -top-2 animate-pulse text-[#ec4899]"
          />
        </div>
      </div>

      {/* =====================================================
          FLOATING LETTERS
      ===================================================== */}

      <div className="absolute left-[30%] top-[12%] font-serif text-2xl text-white/[0.08] animate-[float_5s_ease-in-out_infinite]">
        A
      </div>

      <div className="absolute right-[25%] top-[15%] font-serif text-xl text-[#ec4899]/10 animate-[float_4s_ease-in-out_infinite_1s]">
        B
      </div>

      <div className="absolute bottom-[15%] right-[25%] font-serif text-3xl text-[#3b82f6]/10 animate-[float_6s_ease-in-out_infinite_0.5s]">
        C
      </div>

      {/* =====================================================
          BOTTOM STATUS
      ===================================================== */}

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-[#0D141F]/80 px-4 py-2 backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#13F2B3] shadow-[0_0_10px_#13F2B3]" />

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
            Continuous Learning
          </span>
        </div>
      </div>

      {/* =====================================================
          ANIMATION KEYFRAMES
      ===================================================== */}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   MAIN EDUCATION SECTION
========================================================= */

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
          GRID
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
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#13F2B3]" />

            <span className="flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.25em] text-[#13F2B3]">
              <BookOpen size={12} />
              Education
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#13F2B3]" />
          </div>

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
            TWO COLUMN CONTENT
        ================================================= */}

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* =================================================
              LEFT — ANIMATED VISUAL
          ================================================= */}

          <div>
            <AcademicAnimation />
          </div>

          {/* =================================================
              RIGHT — EDUCATION
          ================================================= */}

          <div className="space-y-5">
            {education.map((edu, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#080d16]/75 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.14] hover:bg-[#0a101c]/85 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-6"
                style={{
                  animation: `educationReveal 0.7s ease ${i * 0.12}s both`,
                }}
              >
                {/* Card pink glow */}
                <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#ec4899]/10 blur-[70px] transition-all duration-700 group-hover:bg-[#ec4899]/20" />

                {/* Card blue glow */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#3b82f6]/10 blur-[70px] transition-all duration-700 group-hover:bg-[#3b82f6]/20" />

                {/* Top gradient line */}
                <div className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-[#13F2B3] via-[#7000ff] to-[#3b82f6] opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />

                <div className="relative flex gap-4">
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-[#13F2B3] transition-all duration-500 group-hover:border-[#13F2B3]/20 group-hover:bg-[#13F2B3]/10 group-hover:shadow-[0_0_25px_rgba(19,242,179,0.1)]">
                    <GraduationCap
                      size={21}
                      className="transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold tracking-tight text-[#F1F5F9] transition-colors duration-300 group-hover:text-white sm:text-lg">
                          {edu.degree}
                        </h3>

                        <p className="mt-1 text-xs font-medium text-[#13F2B3]">
                          {edu.field}
                        </p>
                      </div>

                      {/* Number */}
                      <span className="font-mono text-[10px] tracking-[0.2em] text-white/[0.15]">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Institute */}
                    <div className="mt-4 border-t border-white/[0.06] pt-4">
                      <p className="text-[13px] font-medium text-[#CBD5E1]">
                        {edu.institute}
                      </p>

                      <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-white/40">
                        <MapPin size={11} />
                        {edu.location}
                      </p>
                    </div>

                    {/* Bottom info */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-1.5 font-mono text-[9px] text-white/45">
                        <Calendar size={9} />
                        {edu.period}
                      </span>

                      <span className="rounded-full border border-[#13F2B3]/15 bg-[#13F2B3]/5 px-2.5 py-1.5 font-mono text-[9px] font-semibold text-[#13F2B3]">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          CARD REVEAL ANIMATION
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

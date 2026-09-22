"use client";

import React, { useRef, useState } from "react";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaGitAlt,
  FaNpm,
  FaWordpress,
  FaChrome,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiFirebase,
  SiNetlify,
  SiVercel,
  SiTailwindcss,
} from "react-icons/si";

import {
  MdCode,
  MdDevices,
  MdLanguage,
  MdSettings,
  MdArrowBackIosNew,
  MdArrowForwardIos,
} from "react-icons/md";

// =====================================================
// TECHNICAL SKILLS
// =====================================================

const technicalSkills = [
  {
    name: "React.js",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#FFFFFF",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "REST API",
    icon: MdCode,
    color: "#35F5B0",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
  },
  {
    name: "Responsive Design",
    icon: MdDevices,
    color: "#8B5CF6",
  },
];

// =====================================================
// PROFESSIONAL TOOLS
// =====================================================

const professionalTools = [
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#FFFFFF",
  },
  {
    name: "Figma",
    icon: FaFigma,
    color: "#F24E1E",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#FFFFFF",
  },
  {
    name: "Netlify",
    icon: SiNetlify,
    color: "#00C7B7",
  },
  {
    name: "npm",
    icon: FaNpm,
    color: "#CB3837",
  },
  {
    name: "WordPress",
    icon: FaWordpress,
    color: "#21759B",
  },
  {
    name: "Chrome DevTools",
    icon: FaChrome,
    color: "#4285F4",
  },
];

// =====================================================
// LANGUAGES
// =====================================================

const languages = [
  {
    name: "Bangla",
    level: "Native",
    percentage: 100,
    description: "Native communication",
    code: "BN",
  },
  {
    name: "English",
    level: "Professional",
    percentage: 85,
    description: "Professional communication",
    code: "EN",
  },
];

// =====================================================
// TABS
// =====================================================

const tabs = [
  {
    id: "technical",
    label: "Technical Arsenal",
    icon: MdCode,
  },
  {
    id: "tools",
    label: "Professional Tools",
    icon: MdSettings,
  },
  {
    id: "languages",
    label: "Language Proficiency",
    icon: MdLanguage,
  },
];

// =====================================================
// SECTION HEADER
// =====================================================

function SectionHeader() {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#35F5B0]/20 bg-[#0D141F]/70 px-4 py-2 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute h-full w-full animate-ping rounded-full bg-[#ec4899] opacity-50" />

          <span className="relative h-2 w-2 rounded-full bg-[#ec4899] shadow-[0_0_10px_#ec4899]" />
        </span>

        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#CBD5E1]">
          Skills & Expertise
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
        Technologies I <span className="text-[#13F2B3]">Work With</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base">
        Modern technologies and professional tools I use to build scalable,
        responsive and user-focused digital experiences.
      </p>
    </div>
  );
}

// =====================================================
// SKILL SLIDER
// =====================================================

function SkillSlider({ items }) {
  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  const dragData = useRef({
    startX: 0,
    scrollLeft: 0,
  });

  // ===================================================
  // MOUSE DRAG
  // ===================================================

  const handleMouseDown = (event) => {
    if (!sliderRef.current) return;

    setIsDragging(true);

    dragData.current = {
      startX: event.pageX - sliderRef.current.offsetLeft,
      scrollLeft: sliderRef.current.scrollLeft,
    };
  };

  const handleMouseMove = (event) => {
    if (!isDragging || !sliderRef.current) return;

    event.preventDefault();

    const x = event.pageX - sliderRef.current.offsetLeft;

    const walk = (x - dragData.current.startX) * 1.2;

    sliderRef.current.scrollLeft = dragData.current.scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  // ===================================================
  // ARROWS
  // ===================================================

  const moveSlider = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "next" ? 360 : -360,
      behavior: "smooth",
    });
  };

  // ===================================================
  // MOUSE WHEEL
  // ===================================================

  const handleWheel = (event) => {
    if (!sliderRef.current) return;

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();

      sliderRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div className="relative">
      {/* =============================================
          ARROWS
      ============================================= */}

      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => moveSlider("prev")}
          aria-label="Previous skills"
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0D141F]/80 text-[#64748B] backdrop-blur-md transition-all duration-300 hover:border-[#ec4899]/50 hover:text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
        >
          <MdArrowBackIosNew
            size={14}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
        </button>

        <button
          type="button"
          onClick={() => moveSlider("next")}
          aria-label="Next skills"
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0D141F]/80 text-[#64748B] backdrop-blur-md transition-all duration-300 hover:border-[#3b82f6]/50 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          <MdArrowForwardIos
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      </div>

      {/* =============================================
          SLIDER
      ============================================= */}

      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onWheel={handleWheel}
        className={`flex gap-5 overflow-x-auto pb-6 select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {items.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="group relative min-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-[#080D1A]/85 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
            >
              {/* =====================================
                  CARD AMBIENT GLOW
              ===================================== */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#ec4899]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#ec4899]/15" />

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-[#3b82f6]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#3b82f6]/15" />

              <div className="relative z-10">
                {/* Number */}

                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#475569]">
                    0{index + 1}
                  </span>

                  <span className="h-px w-10 bg-white/10" />
                </div>

                {/* =================================
                    BRAND COLOR ICON
                ================================= */}

                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#0D141F]">
                  {/* Brand-colored glow */}

                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20"
                    style={{
                      backgroundColor: skill.color,
                    }}
                  />

                  <Icon
                    size={30}
                    className="relative z-10 transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: skill.color,
                    }}
                  />
                </div>

                {/* Name */}

                <h3 className="text-[15px] font-semibold text-white">
                  {skill.name}
                </h3>

                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#64748B]">
                  Technology
                </p>

                {/* Bottom Line */}

                <div
                  className="mt-7 h-px w-full opacity-30"
                  style={{
                    backgroundColor: skill.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// =====================================================
// LANGUAGE CARD
// =====================================================

function LanguageCard({ language, index }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#080D1A]/80 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#ec4899]/30">
      {/* Ambient Glow */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[#7000ff]/10 blur-[90px] transition-all duration-500 group-hover:bg-[#7000ff]/20" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-[#3b82f6]/10 blur-[90px] transition-all duration-500 group-hover:bg-[#3b82f6]/20" />

      <div className="relative z-10">
        {/* Top */}

        <div className="mb-7 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#475569]">
            Language 0{index + 1}
          </span>

          <span className="rounded-full border border-[#ec4899]/20 bg-[#ec4899]/5 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-[#ec4899]">
            {language.code}
          </span>
        </div>

        {/* Language Name */}

        <div className="flex items-end justify-between gap-5">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              {language.name}
            </h3>

            <p className="mt-2 text-sm text-[#94A3B8]">
              {language.description}
            </p>
          </div>

          <div className="text-right">
            <span className="block text-2xl font-bold text-white">
              {language.percentage}%
            </span>

            <span className="font-mono text-[9px] uppercase tracking-widest text-[#64748B]">
              Proficiency
            </span>
          </div>
        </div>

        {/* Progress */}

        <div className="mt-7">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#475569]">
              Level
            </span>

            <span className="text-xs font-medium text-[#CBD5E1]">
              {language.level}
            </span>
          </div>

          <div className="relative h-1 overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#ec4899] via-[#7000ff] to-[#3b82f6]"
              style={{
                width: `${language.percentage}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================================================
// MAIN SKILLS
// =====================================================

function Skills() {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-[#030712] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* =================================================
          SAME GLOW SYSTEM AS HERO
      ================================================= */}

      {/* Purple — Top Center */}

      <div className="pointer-events-none absolute -top-20 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#7000ff] opacity-[0.25] blur-[160px]" />

      {/* Pink — Bottom Left */}

      <div className="pointer-events-none absolute -bottom-40 left-[10%] h-[600px] w-[600px] rounded-full bg-[#ec4899] opacity-[0.2] blur-[160px]" />

      {/* Blue — Right */}

      <div className="pointer-events-none absolute -right-20 top-[20%] h-[650px] w-[650px] rounded-full bg-[#3b82f6] opacity-[0.2] blur-[170px]" />

      {/* =================================================
          SAME GRID AS HERO
      ================================================= */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[850px] w-[1100px] -translate-x-1/2 -translate-y-1/2 opacity-[0.85]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.065) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, black 45%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, black 45%, transparent 78%)",
        }}
      />

      {/* Edge Darkness */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030712] to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-0">
        <SectionHeader />

        {/* =================================================
            TABS
        ================================================= */}

        <div className="mx-auto mb-12 max-w-[900px] rounded-2xl border border-white/10 bg-[#080D1A]/70 p-2 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;

              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                    active
                      ? "text-white"
                      : "text-[#64748B] hover:text-[#CBD5E1]"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-xl bg-white/[0.035]" />
                  )}

                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-16 -translate-x-1/2 bg-gradient-to-r from-[#ec4899] via-[#7000ff] to-[#3b82f6] shadow-[0_0_12px_rgba(236,72,153,0.6)]" />
                  )}

                  <Icon
                    size={18}
                    className={`relative z-10 ${
                      active ? "text-[#ec4899]" : ""
                    }`}
                  />

                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =================================================
            TAB CONTENT
        ================================================= */}

        {activeTab === "technical" && <SkillSlider items={technicalSkills} />}

        {activeTab === "tools" && <SkillSlider items={professionalTools} />}

        {activeTab === "languages" && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
            {languages.map((language, index) => (
              <LanguageCard
                key={language.name}
                language={language}
                index={index}
              />
            ))}
          </div>
        )}

        {/* =================================================
            SLIDER HINT
        ================================================= */}

        {activeTab !== "languages" && (
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#ec4899]/40" />

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#475569]">
              Drag • Swipe • Scroll
            </span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#3b82f6]/40" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;

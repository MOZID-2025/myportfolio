"use client";

import React from "react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaFigma,
  FaGitAlt,
  FaNpm,
  FaWordpress,
  FaChrome,
  FaJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiPostman,
  SiFirebase,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

import { MdDevices, MdLanguage, MdSettings, MdCode } from "react-icons/md";

import { BiLogoTailwindCss } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";

// =====================================================
// TECHNICAL SKILLS
// =====================================================

const technicalSkills = [
  {
    name: "React.js",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "JavaScript",
    icon: FaJs,
  },
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
  },
  {
    name: "Tailwind CSS",
    icon: BiLogoTailwindCss,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: DiMongodb,
  },
  {
    name: "REST API",
    icon: MdCode,
  },
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
  },
  {
    name: "Responsive Design",
    icon: MdDevices,
  },
];

// =====================================================
// PROFESSIONAL TOOLS
// =====================================================

const professionalTools = [
  {
    name: "GitHub",
    icon: FaGithub,
  },
  {
    name: "Figma",
    icon: FaFigma,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
  },
  {
    name: "Netlify",
    icon: SiNetlify,
  },
  {
    name: "Vercel",
    icon: SiVercel,
  },
  {
    name: "npm",
    icon: FaNpm,
  },
  {
    name: "Chrome DevTools",
    icon: FaChrome,
  },
  {
    name: "WordPress",
    icon: FaWordpress,
  },
];

// =====================================================
// LANGUAGE SKILLS
// =====================================================

const languages = [
  {
    name: "Bangla",
    level: "Native",
    percentage: 100,
  },
  {
    name: "English",
    level: "Professional",
    percentage: 85,
  },
  {
    name: "Hindi",
    level: "Conversational",
    percentage: 70,
  },
];

// =====================================================
// SKILLS COMPONENT
// =====================================================

function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#070C16]
        py-24
        sm:py-28
      "
    >
      {/* =================================================
          BACKGROUND EFFECTS
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-250px]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#35F5B0]/[0.025]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-250px]
          top-[45%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#45A9F5]/[0.025]
          blur-[140px]
        "
      />

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-0
        "
      >
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="mb-14 text-center">
          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3
            "
          >
            {/* Left Line */}

            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-transparent
                to-[#35F5B0]
              "
            />

            {/* Label */}

            <span
              className="
                font-mono
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#35F5B0]
              "
            >
              Skills
            </span>

            {/* Right Line */}

            <span
              className="
                h-px
                w-8
                bg-gradient-to-l
                from-transparent
                to-[#35F5B0]
              "
            />
          </div>

          <h2
            className="
              text-3xl
              font-bold
              tracking-[-0.03em]
              text-[#F1F5F9]
              sm:text-4xl
            "
          >
            What I Work With
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[570px]
              text-sm
              leading-6
              text-[#64748B]
            "
          >
            Technologies, tools and skills I use to build modern, scalable and
            user-focused digital experiences.
          </p>
        </div>

        {/* =================================================
            TECHNICAL EXPERTISE
        ================================================= */}

        <div className="mb-20">
          {/* Heading */}

          <div className="mb-7 flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-[#35F5B0]/10
                bg-[#35F5B0]/[0.05]
                text-[#35F5B0]
              "
            >
              <MdCode size={20} />
            </div>

            <div>
              <h3
                className="
                  text-base
                  font-semibold
                  text-[#F1F5F9]
                "
              >
                Technical Expertise
              </h3>

              <p
                className="
                  mt-0.5
                  text-[11px]
                  text-[#64748B]
                "
              >
                Technologies and development skills
              </p>
            </div>
          </div>

          {/* =================================================
              TECHNICAL SKILLS GRID
          ================================================= */}

          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            "
          >
            {technicalSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="
                    group
                    relative
                    flex
                    min-h-[125px]
                    flex-col
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-[#0D141F]/80
                    px-4
                    py-5
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#35F5B0]/20
                    hover:bg-[#101A27]
                    hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                  "
                >
                  {/* Top Glow */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-px
                      w-0
                      -translate-x-1/2
                      bg-gradient-to-r
                      from-[#35F5B0]
                      to-[#45A9F5]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#151E2A]
                      text-[#35F5B0]
                      transition-all
                      duration-300
                      group-hover:bg-[#35F5B0]/10
                    "
                  >
                    <Icon
                      size={22}
                      className="
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Text */}

                  <div className="mt-3 w-full min-w-0">
                    <p
                      className="
                        truncate
                        text-center
                        text-[11px]
                        font-medium
                        text-[#CBD5E1]
                      "
                    >
                      {skill.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================
            PROFESSIONAL TOOLS
        ================================================= */}

        <div className="mb-20">
          {/* Heading */}

          <div className="mb-7 flex items-center gap-3">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-lg
                border
                border-[#45A9F5]/10
                bg-[#45A9F5]/[0.05]
                text-[#45A9F5]
              "
            >
              <MdSettings size={20} />
            </div>

            <div>
              <h3
                className="
                  text-base
                  font-semibold
                  text-[#F1F5F9]
                "
              >
                Professional Tools
              </h3>

              <p
                className="
                  mt-0.5
                  text-[11px]
                  text-[#64748B]
                "
              >
                Tools and platforms I work with
              </p>
            </div>
          </div>

          {/* Tools Grid */}

          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
              md:grid-cols-5
              lg:grid-cols-5
            "
          >
            {professionalTools.map((tool) => {
              const Icon = tool.icon;

              return (
                <div
                  key={tool.name}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-[#0D141F]/80
                    px-4
                    py-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#45A9F5]/20
                    hover:bg-[#101A27]
                    hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#151E2A]
                      text-[#45A9F5]
                      transition-all
                      duration-300
                      group-hover:bg-[#45A9F5]/10
                    "
                  >
                    <Icon
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Name */}

                  <span
                    className="
                      truncate
                      text-[11px]
                      font-medium
                      text-[#CBD5E1]
                    "
                  >
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================
            LANGUAGE PROFICIENCY
        ================================================= */}

        <div>
          {/* Heading */}

          <div className="mb-7 flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-[#35D9D0]/10
                bg-[#35D9D0]/[0.05]
                text-[#35D9D0]
              "
            >
              <MdLanguage size={20} />
            </div>

            <div>
              <h3
                className="
                  text-base
                  font-semibold
                  text-[#F1F5F9]
                "
              >
                Language Proficiency
              </h3>

              <p
                className="
                  mt-0.5
                  text-[11px]
                  text-[#64748B]
                "
              >
                Communication skills
              </p>
            </div>
          </div>

          {/* Language Grid */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
            "
          >
            {languages.map((language) => (
              <div
                key={language.name}
                className="
                  group
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-[#0D141F]/70
                  p-5
                  transition-all
                  duration-300
                  hover:border-[#35D9D0]/15
                  hover:bg-[#101A27]
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                "
              >
                {/* Language Top */}

                <div
                  className="
                    mb-3
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div className="flex items-center gap-2">
                    <MdLanguage
                      size={15}
                      className="
                        text-[#35F5B0]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-[#CBD5E1]
                      "
                    >
                      {language.name}
                    </span>
                  </div>

                  <span
                    className="
                      font-mono
                      text-[9px]
                      text-[#64748B]
                    "
                  >
                    {language.level}
                  </span>
                </div>

                {/* Progress */}

                <div
                  className="
                    h-1
                    overflow-hidden
                    rounded-full
                    bg-[#182230]
                  "
                >
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-[#35F5B0]
                      via-[#35D9D0]
                      to-[#45A9F5]
                      transition-all
                      duration-700
                    "
                    style={{
                      width: `${language.percentage}%`,
                    }}
                  />
                </div>

                {/* Percentage */}

                <div className="mt-2 text-right">
                  <span
                    className="
                      font-mono
                      text-[8px]
                      text-[#475569]
                    "
                  >
                    {language.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

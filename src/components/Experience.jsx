"use client";

import React from "react";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";

const experiences = [
  {
    company: "IT Consultant & Software Sales Specialist",
    role: "Business & Technology Consultant",
    duration: "2023 — Present",
    type: "Full-time",
    description: [
      "Consulted businesses on IT solutions, software requirements, and digital transformation strategies.",
      "Analyzed client requirements and recommended suitable software and technology solutions.",
      "Managed software sales processes from initial consultation to successful delivery.",
      "Built and maintained strong client relationships while identifying new business opportunities.",
      "Collaborated with technical teams to ensure solutions matched business requirements.",
    ],
  },
  {
    company: "E-Commerce Business Operations",
    role: "E-Commerce & Business Operations",
    duration: "2021 — 2023",
    type: "Full-time",
    description: [
      "Managed day-to-day e-commerce operations and digital business activities.",
      "Coordinated product management, customer communication, and online sales activities.",
      "Analyzed sales performance and customer behavior to improve business strategies.",
      "Worked with digital marketing and technology teams to increase online visibility.",
      "Improved operational workflows through technology-driven solutions.",
    ],
  },
  {
    company: "Frontend Developer",
    role: "React / Next.js Developer",
    duration: "2020 — Present",
    type: "Freelance",
    description: [
      "Developed responsive and modern web applications using React.js and Next.js.",
      "Converted Figma and UI designs into pixel-perfect, reusable frontend components.",
      "Built scalable interfaces using Tailwind CSS and modern JavaScript.",
      "Integrated REST APIs and backend services into production-ready applications.",
      "Worked directly with international clients to understand requirements and deliver solutions.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#070C16]
        py-24
        sm:py-28
      "
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-220px]
          top-[25%]
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
          right-[-220px]
          bottom-[10%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#45A9F5]/[0.025]
          blur-[140px]
        "
      />

      {/* =========================================
          1280px CONTAINER
      ========================================= */}

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
        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div className="mb-14 text-center">
          {/* Small label */}

          <div className="mb-4 flex items-center justify-center gap-3">
            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-transparent
                to-[#35F5B0]
              "
            />

            <span
              className="
                font-mono
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#35F5B0]
              "
            >
              Experience
            </span>

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
            Professional Journey
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[560px]
              text-sm
              leading-6
              text-[#64748B]
            "
          >
            A timeline of my professional experience, technical growth, and the
            projects that shaped my career.
          </p>
        </div>

        {/* =========================================
            EXPERIENCE TIMELINE
        ========================================= */}

        <div className="relative mx-auto max-w-[900px]">
          {/* Vertical line */}

          <div
            className="
              absolute
              bottom-4
              left-[7px]
              top-4
              w-px
              bg-gradient-to-b
              from-[#35F5B0]
              via-[#35D9D0]/60
              to-[#45A9F5]/20
              md:left-[20px]
            "
          />

          <div className="space-y-7">
            {experiences.map((experience, index) => (
              <div
                key={experience.company}
                className="
                  group
                  relative
                  flex
                  items-start
                "
              >
                {/* =================================
                    TIMELINE DOT
                ================================= */}

                <div
                  className="
                    relative
                    z-10
                    mt-7
                    flex
                    h-[15px]
                    w-[15px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#35F5B0]/50
                    bg-[#070C16]
                    shadow-[0_0_12px_rgba(53,245,176,0.15)]
                    md:ml-[13px]
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#35F5B0]
                      shadow-[0_0_8px_#35F5B0]
                      transition-all
                      duration-300
                      group-hover:scale-150
                    "
                  />
                </div>

                {/* =================================
                    CARD
                ================================= */}

                <div
                  className="
                    ml-7
                    w-full
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-[#0D141F]/80
                    p-5
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:border-[#35F5B0]/20
                    group-hover:bg-[#101923]
                    group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                    md:ml-8
                    md:p-6
                  "
                >
                  {/* Card top */}

                  <div
                    className="
                      flex
                      flex-col
                      gap-3
                      sm:flex-row
                      sm:items-start
                      sm:justify-between
                    "
                  >
                    <div>
                      {/* Type */}

                      <div className="mb-2 flex items-center gap-2">
                        <BriefcaseBusiness
                          size={12}
                          strokeWidth={2}
                          className="text-[#35F5B0]"
                        />

                        <span
                          className="
                            font-mono
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-[#35F5B0]
                          "
                        >
                          {experience.type}
                        </span>
                      </div>

                      {/* Company */}

                      <h3
                        className="
                          text-base
                          font-semibold
                          leading-6
                          text-[#F1F5F9]
                          transition-colors
                          duration-300
                          group-hover:text-[#35F5B0]
                        "
                      >
                        {experience.company}
                      </h3>

                      {/* Role */}

                      <p
                        className="
                          mt-1
                          text-xs
                          font-medium
                          text-[#45A9F5]
                        "
                      >
                        {experience.role}
                      </p>
                    </div>

                    {/* Date */}

                    <div
                      className="
                        flex
                        shrink-0
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-white/[0.06]
                        bg-[#151E2A]
                        px-3
                        py-1.5
                      "
                    >
                      <CalendarDays size={11} className="text-[#64748B]" />

                      <span
                        className="
                          font-mono
                          text-[9px]
                          text-[#64748B]
                        "
                      >
                        {experience.duration}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}

                  <div
                    className="
                      my-4
                      h-px
                      w-full
                      bg-gradient-to-r
                      from-[#35F5B0]/15
                      via-white/[0.04]
                      to-transparent
                    "
                  />

                  {/* Description */}

                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="
                            flex
                            items-start
                            gap-2.5
                            text-[11px]
                            leading-5
                            text-[#94A3B8]
                            sm:text-xs
                          "
                      >
                        <span
                          className="
                              mt-[7px]
                              h-1
                              w-1
                              shrink-0
                              rounded-full
                              bg-[#35F5B0]
                              shadow-[0_0_5px_#35F5B0]
                            "
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

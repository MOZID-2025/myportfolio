"use client";

import React from "react";
import { Briefcase, Calendar, Code2, GraduationCap } from "lucide-react";
import CodingIllustration from "./CodingIllustration";

const experiences = [
  {
    type: "Professional Experience",
    role: "IT Consultant & Software Sales Specialist",
    org: "Sales & Business Development",
    period: "2023 — Present",
    icon: Briefcase,
    color: "#35F5B0",
    points: [
      "Consulted businesses on IT solutions, software requirements, and digital transformation needs.",
      "Analyzed client requirements and recommended suitable software and technology solutions.",
      "Managed software sales processes from initial consultation to successful delivery.",
      "Built and maintained strong client relationships while identifying new business opportunities.",
    ],
  },
  {
    type: "Professional Training",
    role: "Full Stack Web Development",
    org: "Programming Hero Bootcamp",
    period: "Bootcamp",
    icon: GraduationCap,
    color: "#45A9F5",
    points: [
      "Completed intensive full stack web development training with practical project-based learning.",
      "Worked with modern technologies including React.js, Next.js, Node.js, Express.js, and MongoDB.",
      "Built responsive and user-friendly web applications following modern development practices.",
      "Developed real-world projects with authentication, APIs, database integration, and deployment.",
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
        px-5
        py-24
        text-white
        sm:px-8
        lg:px-10
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
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#EC4899]/[0.045]
          blur-[140px]
        "
      />

      {/* Blue Glow - Right */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#3B82F6]/[0.06]
          blur-[130px]
        "
      />

      {/* Cyan Glow - Bottom */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-[35%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#35F5B0]/[0.045]
          blur-[130px]
        "
      />

      {/* =========================================
          CENTER GRID
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[800px]
          w-[1100px]
          -translate-x-1/2
          -translate-y-1/2
          opacity-[0.4]
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
          MAIN CONTAINER
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
        "
      >
        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div
          className="
            mx-auto
            max-w-2xl
            text-center
          "
        >
          {/* Section Label */}

          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-10
                bg-gradient-to-r
                from-transparent
                to-[#ec4899]
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
              Experience
            </span>

            <span
              className="
                h-px
                w-10
                bg-gradient-to-l
                from-transparent
                to-[#8b5cf6]
              "
            />
          </div>

          {/* Heading */}

          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              sm:text-4xl
              lg:text-5xl
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
              My Professional Journey
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-4
              text-sm
              leading-7
              text-[#94A3B8]
              sm:text-base
            "
          >
            A journey through sales, technology, continuous learning, and
            building real-world digital solutions.
          </p>
        </div>

        {/* =========================================
            TWO COLUMN CONTENT
        ========================================= */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            items-center
            gap-16
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* =========================================
              LEFT COLUMN - ANIMATED IMAGE
          ========================================= */}

          <div
            className="
              relative
              flex
              min-h-[420px]
              items-center
              justify-center
              lg:min-h-[560px]
            "
          >
            {/* Main Purple Glow */}

            <div
              className="
                pointer-events-none
                absolute
                h-[380px]
                w-[380px]
                rounded-full
                bg-[#7000FF]/10
                blur-[100px]
              "
            />

            {/* Pink Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-5
                top-10
                h-[220px]
                w-[220px]
                rounded-full
                bg-[#EC4899]/10
                blur-[90px]
              "
            />

            {/* Blue Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-5
                left-5
                h-[220px]
                w-[220px]
                rounded-full
                bg-[#3B82F6]/10
                blur-[90px]
              "
            />

            {/* Rotating Outer Ring */}

            <div
              className="
                absolute
                h-[390px]
                w-[390px]
                animate-[spin_25s_linear_infinite]
                rounded-full
                border
                border-dashed
                border-[#8b5cf6]/20
                sm:h-[480px]
                sm:w-[480px]
              "
            />

            {/* Second Ring */}

            <div
              className="
                absolute
                h-[320px]
                w-[320px]
                animate-[spin_18s_linear_infinite_reverse]
                rounded-full
                border
                border-[#ec4899]/10
                sm:h-[410px]
                sm:w-[410px]
              "
            />

            {/* Image */}

            <CodingIllustration />

            {/* Floating Code Badge */}

            <div
              className="
                absolute
                left-[5%]
                top-[15%]
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#ec4899]/30
                bg-[#0D141F]/90
                text-[#ec4899]
                shadow-[0_0_25px_rgba(236,72,153,0.15)]
                backdrop-blur-xl
                animate-[float_5s_ease-in-out_infinite]
              "
            >
              <Code2 size={19} />
            </div>

            {/* Floating Tech Badge */}

            <div
              className="
                absolute
                bottom-[15%]
                right-[5%]
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#35F5B0]/30
                bg-[#0D141F]/90
                text-[#35F5B0]
                shadow-[0_0_25px_rgba(53,245,176,0.15)]
                backdrop-blur-xl
                animate-[float_7s_ease-in-out_infinite]
              "
            >
              <Briefcase size={19} />
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN - EXPERIENCE
          ========================================= */}

          <div
            className="
              relative
            "
          >
            {/* Timeline Line */}

            <div
              className="
                absolute
                left-[7px]
                top-3
                hidden
                h-[calc(100%-24px)]
                w-px
                bg-gradient-to-b
                from-[#ec4899]/50
                via-[#8b5cf6]/30
                to-[#35F5B0]/10
                sm:block
              "
            />

            {/* Experience Items */}

            <div
              className="
                flex
                flex-col
                gap-8
              "
            >
              {experiences.map((exp, index) => {
                const Icon = exp.icon;

                return (
                  <div
                    key={index}
                    className="
                      relative
                      sm:pl-12
                    "
                  >
                    {/* Timeline Dot */}

                    <span
                      className="
                        absolute
                        left-0
                        top-6
                        hidden
                        h-3.5
                        w-3.5
                        rounded-full
                        border-2
                        border-[#ec4899]
                        bg-[#070C16]
                        shadow-[0_0_14px_#ec4899]
                        sm:block
                      "
                    />

                    {/* Experience Card */}

                    <div
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/[0.08]
                        bg-[#0D141F]/70
                        p-6
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:border-[#ec4899]/25
                        hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                        sm:p-7
                      "
                    >
                      {/* Card Glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-20
                          -top-20
                          h-40
                          w-40
                          rounded-full
                          bg-[#ec4899]/[0.05]
                          blur-[60px]
                          transition-all
                          duration-500
                          group-hover:bg-[#ec4899]/[0.10]
                        "
                      />

                      <div
                        className="
                          relative
                          z-10
                        "
                      >
                        {/* Card Top */}

                        <div
                          className="
                            flex
                            flex-wrap
                            items-start
                            justify-between
                            gap-4
                          "
                        >
                          <div>
                            {/* Type */}

                            <span
                              className={`
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                px-2.5
                                py-1
                                font-mono
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-wider
                                ${
                                  index === 0
                                    ? "border-[#35F5B0]/25 bg-[#35F5B0]/5 text-[#35F5B0]"
                                    : "border-[#45A9F5]/25 bg-[#45A9F5]/5 text-[#45A9F5]"
                                }
                              `}
                            >
                              <Icon size={11} />

                              {exp.type}
                            </span>

                            {/* Role */}

                            <h3
                              className="
                                mt-3
                                text-lg
                                font-semibold
                                leading-snug
                                text-white
                                sm:text-xl
                              "
                            >
                              {exp.role}
                            </h3>

                            {/* Organization */}

                            <p
                              className="
                                mt-1
                                bg-gradient-to-r
                                from-[#ec4899]
                                via-[#8b5cf6]
                                to-[#3b82f6]
                                bg-clip-text
                                text-sm
                                font-medium
                                text-transparent
                              "
                            >
                              {exp.org}
                            </p>
                          </div>

                          {/* Period */}

                          <span
                            className="
                              inline-flex
                              shrink-0
                              items-center
                              gap-1.5
                              rounded-full
                              border
                              border-white/10
                              bg-[#0D141F]
                              px-3
                              py-1.5
                              font-mono
                              text-[11px]
                              text-[#94A3B8]
                            "
                          >
                            <Calendar size={12} />

                            {exp.period}
                          </span>
                        </div>

                        {/* Points */}

                        <ul
                          className="
                            mt-5
                            flex
                            flex-col
                            gap-2.5
                          "
                        >
                          {exp.points.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="
                                flex
                                items-start
                                gap-2.5
                                text-sm
                                leading-6
                                text-[#94A3B8]
                              "
                            >
                              <span
                                className="
                                  mt-2.5
                                  h-1
                                  w-1
                                  shrink-0
                                  rounded-full
                                  bg-[#ec4899]
                                  shadow-[0_0_6px_#ec4899]
                                "
                              />

                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

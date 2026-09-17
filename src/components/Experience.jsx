"use client";

import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    type: "Full-time",
    role: "IT Consultant & Software Sales Specialist",
    org: "Business & Technology Consultant",
    period: "2023 — Present",
    points: [
      "Consulted businesses on IT solutions, software requirements, and digital transformation strategies.",
      "Analyzed client requirements and recommended suitable software and technology solutions.",
      "Managed software sales processes from initial consultation to successful delivery.",
      "Built and maintained strong client relationships while identifying new business opportunities.",
    ],
  },
  {
    type: "Full-time",
    role: "E-Commerce Business Operations",
    org: "E-Commerce & Business Operations",
    period: "2022 — 2023",
    points: [
      "Managed day-to-day e-commerce operations and digital business activities.",
      "Coordinated product management, customer communication, and online sales activities.",
      "Analyzed sales performance and customer behavior to improve business strategies.",
    ],
  },
  {
    type: "Freelance",
    role: "Frontend Developer",
    org: "React / Next.js Developer",
    period: "2020 — Present",
    points: [
      "Developed responsive and modern web applications using React.js and Next.js.",
      "Converted Figma and UI designs into pixel-perfect, reusable frontend components.",
      "Integrated REST APIs and backend services into production-ready applications.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-[#070C16] px-5 py-24 text-white sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#45A9F5]/[0.03] blur-[130px]" />

      <div className="relative mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#35F5B0]">
            — Experience —
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Professional Journey
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#94A3B8] sm:text-base">
            A timeline of my professional experience, technical growth, and the
            projects that shaped my career.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-[#35F5B0]/40 via-white/10 to-transparent sm:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative sm:pl-12">
                {/* Dot */}
                <span className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-[#35F5B0] bg-[#070C16] shadow-[0_0_12px_#35F5B0] sm:block" />

                <div className="rounded-2xl border border-white/[0.08] bg-[#0D141F]/70 p-6 backdrop-blur-md transition-colors duration-300 hover:border-[#35F5B0]/25 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#35F5B0]/25 bg-[#35F5B0]/5 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#35F5B0]">
                        <Briefcase size={11} />
                        {exp.type}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
                        {exp.role}
                      </h3>
                      <p className="mt-1 bg-gradient-to-r from-[#35F5B0] to-[#45A9F5] bg-clip-text text-sm font-medium text-transparent">
                        {exp.org}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0D141F] px-3 py-1.5 font-mono text-[11px] text-[#94A3B8]">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-4 flex flex-col gap-2">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm leading-6 text-[#94A3B8]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#35F5B0]" />
                        {point}
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

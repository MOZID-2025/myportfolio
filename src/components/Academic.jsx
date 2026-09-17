"use client";

import React from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science",
    field: "Computer Science & Engineering",
    institute: "Your University Name",
    location: "Dhaka, Bangladesh",
    period: "2018 — 2022",
    score: "CGPA: 3.14 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate",
    field: "Science",
    institute: "Your College Name",
    location: "Bangladesh",
    period: "2015 — 2017",
    score: "GPA: 4.50 / 5.00",
  },
  {
    degree: "Secondary School Certificate",
    field: "Science",
    institute: "Your School Name",
    location: "Bangladesh",
    period: "2014 — 2015",
    score: "GPA: 4.75 / 5.00",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative w-full overflow-hidden bg-[#0B1018] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute right-[-200px] top-[10%] h-[450px] w-[450px] rounded-full bg-[#F4A340]/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-0">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#F4A340]" />
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.25em] text-[#F4A340]">
              Education
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#F4A340]" />
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#F1F5F9] sm:text-4xl">
            Academic Record
          </h2>
          <p className="mx-auto mt-4 max-w-[570px] text-sm leading-6 text-[#64748B]">
            My educational background and academic journey that helped build my
            technical foundation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {education.map((edu, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0D141F]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F4A340]/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-[#F4A340] to-[#F4C177] transition-all duration-300 group-hover:w-full" />

              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#151E2A] text-[#F4A340] transition-all duration-300 group-hover:bg-[#F4A340]/10">
                <GraduationCap size={20} />
              </div>

              <h3 className="mt-5 text-base font-semibold text-[#F1F5F9]">
                {edu.degree}
              </h3>
              <p className="mt-1 text-xs font-medium text-[#F4A340]">
                {edu.field}
              </p>

              <div className="mt-4 flex flex-col gap-1.5 border-t border-white/[0.06] pt-4">
                <p className="text-[13px] text-[#CBD5E1]">{edu.institute}</p>
                <p className="flex items-center gap-1.5 text-[11px] text-[#64748B]">
                  <MapPin size={11} />
                  {edu.location}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0D141F] px-2.5 py-1 font-mono text-[10px] text-[#94A3B8]">
                  <Calendar size={10} />
                  {edu.period}
                </span>
                <span className="rounded-full border border-[#F4A340]/20 bg-[#F4A340]/5 px-2.5 py-1 font-mono text-[10px] font-semibold text-[#F4A340]">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

"use client";

import React from "react";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

const academicRecords = [
  {
    degree: "Bachelor of Science",
    subject: "Computer Science & Engineering",
    institution: "Your University Name",
    location: "Dhaka, Bangladesh",
    duration: "2018 — 2022",
    result: "CGPA: 3.14 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate",
    subject: "Science",
    institution: "Your College Name",
    location: "Bangladesh",
    duration: "2016 — 2018",
    result: "GPA: 4.50 / 5.00",
  },
  {
    degree: "Secondary School Certificate",
    subject: "Science",
    institution: "Your School Name",
    location: "Bangladesh",
    duration: "2014 — 2016",
    result: "GPA: 4.75 / 5.00",
  },
];

function Academic() {
  return (
    <section
      id="education"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0A1220]
        py-20
        sm:py-24
      "
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-200px]
          h-[400px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#35F5B0]/[0.025]
          blur-[130px]
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
            HEADER
        ========================================= */}

        <div className="mb-12 text-center">
          {/* Label */}

          <div className="mb-3 flex items-center justify-center gap-3">
            <span
              className="
                h-px
                w-7
                bg-gradient-to-r
                from-transparent
                to-[#35F5B0]
              "
            />

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
              Education
            </span>

            <span
              className="
                h-px
                w-7
                bg-gradient-to-l
                from-transparent
                to-[#35F5B0]
              "
            />
          </div>

          <h2
            className="
              text-2xl
              font-bold
              tracking-[-0.03em]
              text-[#F1F5F9]
              sm:text-3xl
            "
          >
            Academic Record
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[500px]
              text-xs
              leading-6
              text-[#64748B]
              sm:text-sm
            "
          >
            My educational background and academic journey that helped build my
            technical foundation.
          </p>
        </div>

        {/* =========================================
            ACADEMIC CARDS
        ========================================= */}

        <div
          className="
            mx-auto
            grid
            max-w-[1050px]
            grid-cols-1
            gap-4
            md:grid-cols-3
          "
        >
          {academicRecords.map((record, index) => (
            <div
              key={record.degree}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-white/[0.06]
                bg-[#0D141F]/90
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#35F5B0]/20
                hover:bg-[#101A27]
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]
              "
            >
              {/* Top gradient line */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#35F5B0]/40
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* Icon */}

              <div
                className="
                  mb-5
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
                <GraduationCap size={18} strokeWidth={1.8} />
              </div>

              {/* Degree */}

              <h3
                className="
                  text-sm
                  font-semibold
                  leading-5
                  text-[#F1F5F9]
                  transition-colors
                  duration-300
                  group-hover:text-[#35F5B0]
                "
              >
                {record.degree}
              </h3>

              {/* Subject */}

              <p
                className="
                  mt-1
                  text-xs
                  font-medium
                  text-[#45A9F5]
                "
              >
                {record.subject}
              </p>

              {/* Divider */}

              <div
                className="
                  my-4
                  h-px
                  bg-gradient-to-r
                  from-[#35F5B0]/10
                  via-white/[0.04]
                  to-transparent
                "
              />

              {/* Institution */}

              <p
                className="
                  text-xs
                  font-medium
                  text-[#CBD5E1]
                "
              >
                {record.institution}
              </p>

              {/* Location */}

              <div
                className="
                  mt-2
                  flex
                  items-center
                  gap-1.5
                  text-[10px]
                  text-[#64748B]
                "
              >
                <MapPin size={11} />

                {record.location}
              </div>

              {/* Bottom information */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/[0.05]
                  pt-4
                "
              >
                {/* Date */}

                <div className="flex items-center gap-1.5">
                  <CalendarDays size={11} className="text-[#64748B]" />

                  <span
                    className="
                      font-mono
                      text-[9px]
                      text-[#64748B]
                    "
                  >
                    {record.duration}
                  </span>
                </div>

                {/* Result */}

                <span
                  className="
                    rounded-full
                    border
                    border-[#35F5B0]/15
                    bg-[#35F5B0]/[0.04]
                    px-2.5
                    py-1
                    font-mono
                    text-[9px]
                    font-medium
                    text-[#35F5B0]
                  "
                >
                  {record.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Academic;

"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsappSquare,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const navImages = ["/profile-1.png", "/profile-2.png", "/profile-3.png"];

const socialLinks = [
  { icon: FaFacebook, href: "https://facebook.com/", label: "Facebook" },
  { icon: FaWhatsappSquare, href: "https://wa.me/", label: "WhatsApp" },
  { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaTelegram, href: "https://t.me/", label: "Telegram" },
];

// =========================================
// RIGHT SIDE — CODE PANEL LINES WITH EXACT SYNTAX HIGHLIGHTING
// =========================================

const renderHighlightedLine = (line) => {
  if (line.includes("const coder")) {
    return (
      <span className="font-bold">
        <span className="text-[#dd00ff]">const</span>{" "}
        <span className="text-[#ffffff]">coder</span>{" "}
        <span className="text-[#f472b6]">=</span> &#123;
      </span>
    );
  }
  if (line.includes("name:")) {
    return (
      <span className="font-bold">
        &nbsp;&nbsp;<span className="text-[#ffffff]">name</span>
        <span className="text-[#ffffff]">:</span>{" "}
        <span className="text-[#ffa114]">'Abdul Mozid'</span>,
      </span>
    );
  }
  if (line.includes("skills:")) {
    return (
      <span className="font-bold block leading-relaxed">
        &nbsp;&nbsp;<span className="text-[#ffffff]">skills</span>
        <span className="text-white">:</span> [
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-[#ffa114]">'React'</span>,{" "}
        <span className="text-[#ffa114]">'NextJS'</span>,{" "}
        <span className="text-[#ffa114]">'TypeScript'</span>,{" "}
        <span className="text-[#ffa114]">'Node.js'</span>,
        <span className="text-[#ffa114]">'MongoDB'</span>, <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-[#ffa114]">'PostgreSQL'</span>,{" "}
        <span className="text-[#ffa114]">'Tailwind'</span>,{" "}
        <span className="text-[#ffa114]">'WordPress'</span>
        <br />
        &nbsp;&nbsp;],
      </span>
    );
  }
  if (line.includes("hardWorker:")) {
    return (
      <span className="font-bold">
        &nbsp;&nbsp;<span className="text-[#ffffff]">hardWorker</span>
        <span className="text-[#ffffff]">:</span>{" "}
        <span className="text-[#dd5507]">true</span>,
      </span>
    );
  }
  if (line.includes("quickLearner:")) {
    return (
      <span className="font-bold">
        &nbsp;&nbsp;<span className="text-[#ffffff]">quickLearner</span>
        <span className="text-[#ffffff]">:</span>{" "}
        <span className="text-[#dd5507]">true</span>,
      </span>
    );
  }
  if (line.includes("problemSolver:")) {
    return (
      <span>
        &nbsp;&nbsp;<span className="text-[#ffffff]">problemSolver</span>
        <span className="text-[#ffffff]">:</span>{" "}
        <span className="text-[#dd5507]">true</span>,
      </span>
    );
  }
  if (line.includes("hireable:")) {
    return (
      <span>
        &nbsp;&nbsp;<span className="text-[#00f521]">hireable</span>
        <span className="text-[#00f521]">:</span>{" "}
        <span className="text-[#dd5507]">function</span>() &#123;
      </span>
    );
  }
  if (line.includes("return (")) {
    return (
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-[#dd5507]">return</span> (
      </span>
    );
  }
  if (line.includes("this.hardWorker")) {
    return (
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-[#05c1f0]">this</span>.
        <span className="text-[#ffffff]">hardWorker</span>{" "}
        <span className="text-[#ffa114]">&amp;&amp;</span>
      </span>
    );
  }
  if (line.includes("this.problemSolver")) {
    return (
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-[#05c1f0]">this</span>.
        <span className="text-[#ffffff]">problemSolver</span>{" "}
        <span className="text-[#ffa114]">&amp;&amp;</span>
      </span>
    );
  }
  if (line.includes("this.skills.length")) {
    return (
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-[#05c1f0]">this</span>.
        <span className="text-[#ffffff]">skills</span>.
        <span className="text-[#ffffff]">length</span>{" "}
        <span className="text-[#ffa114]">&gt;=</span>{" "}
        <span className="text-[#dd5507]">5</span>
      </span>
    );
  }
  if (line.trim() === ");") return <span>&nbsp;&nbsp;&nbsp;&nbsp;);</span>;
  if (line.trim() === "}") return <span>&nbsp;&nbsp;&#125;;</span>;
  if (line.trim() === "};") return <span>&#125;;</span>;

  return <span>{line}</span>;
};

const codeLines = [
  "const coder = {",
  "  name: 'Abdul Mozid',",
  "  skills: ['React', 'NextJS', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'Tailwind', 'WordPress'],",
  "  hardWorker: true,",
  "  quickLearner: true,",
  "  problemSolver: true,",
  "  hireable: function() {",
  "    return (",
  "      this.hardWorker &&",
  "      this.problemSolver &&",
  "      this.skills.length >= 5",
  "    );",
  "  }",
  "};",
];

function CodePanel() {
  const [completedLines, setCompletedLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const lineIndex = useRef(0);
  const charIndex = useRef(0);

  useEffect(() => {
    let timeout;

    const typeNext = () => {
      if (lineIndex.current >= codeLines.length) return;

      const full = codeLines[lineIndex.current];
      charIndex.current += 1;
      setCurrentText(full.slice(0, charIndex.current));

      if (charIndex.current >= full.length) {
        setCompletedLines((prev) => [...prev, full]);
        setCurrentText("");
        lineIndex.current += 1;
        charIndex.current = 0;
        timeout = setTimeout(typeNext, 85);
      } else {
        timeout = setTimeout(typeNext, 14);
      }
    };

    timeout = setTimeout(typeNext, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative z-10 w-full max-w-[650px] p-[1.5px] rounded-2xl bg-gradient-to-r from-[#ec4899] via-[#8b5cf6] to-[#3b82f6] shadow-[0_0_50px_rgba(236,72,153,0.35)]">
      <div className="w-full rounded-2xl bg-[#080d1a] backdrop-blur-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#0c1427] px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[11px] text-[#64748B]">
            hero.js
          </span>
        </div>

        {/* Code Content Without Scrollbar */}
        <div className="min-h-[380px] overflow-hidden px-6 py-6 font-mono text-[14px] sm:text-[15px] leading-7 text-[#CBD5E1] whitespace-pre-wrap break-words">
          {completedLines.map((line, idx) => (
            <div key={idx}>{renderHighlightedLine(line)}</div>
          ))}
          {currentText && <div>{renderHighlightedLine(currentText)}</div>}
          <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-[2px] animate-pulse bg-[#ec4899] align-middle" />
        </div>
      </div>
    </div>
  );
}

// =========================================
// TYPING TITLES
// =========================================

const typingTitles = [
  "B2B & B2C Software Sales Specialist",
  "IT Consultant & Business Analyst",
  "MERN Stack Developer (Frontend)",
  "E-Commerce Specialist META (POD)",
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % navImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentTitle = typingTitles[titleIndex];
    let typingSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && displayText === currentTitle) {
      typingSpeed = 2200;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % typingTitles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === currentTitle) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-84px)] w-full overflow-hidden bg-[#030712] text-white"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[#7000ff] opacity-[0.25] blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 left-[10%] h-[600px] w-[600px] rounded-full bg-[#ec4899] opacity-[0.2] blur-[160px]" />
      <div className="pointer-events-none absolute -right-20 top-[20%] h-[650px] w-[650px] rounded-full bg-[#3b82f6] opacity-[0.2] blur-[170px]" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at 60% 50%, black, transparent 80%)",
        }}
      />

      {/* 1280px CONTAINER */}
      <div className="relative mx-auto flex min-h-[calc(100vh-84px)] w-full max-w-[1280px] items-center px-5 py-20 sm:px-8 lg:px-10 xl:px-0">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-[650px]">
            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#35F5B0]/30 bg-[#0D141F]/70 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#35F5B0] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#35F5B0] shadow-[0_0_10px_#35F5B0]" />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#35F5B0]">
                Available for new opportunities
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[58px] xl:text-[64px]">
              Hi, I'm <span className="text-[#F1F5F9]">Abdul Mozid</span>
              <br />
              <span className="inline-block min-h-[1.08em] text-[34px] leading-tight sm:text-[42px] lg:text-[46px] xl:text-[50px] bg-gradient-to-r from-[#ec4899] via-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
                {displayText}
                <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[2px] animate-pulse bg-[#ec4899]" />
              </span>
            </h1>

            {/* Role */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-[#ec4899] to-[#8b5cf6]" />
              <p className="font-mono text-sm font-medium tracking-wide text-[#94A3B8]">
                MERN Stack • Next.js • React
              </p>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-[#94A3B8] sm:text-base">
              I build modern, scalable and user-focused web applications that
              combine clean design with powerful functionality. I help
              businesses turn ideas into reliable digital products that create
              real value.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-[#ec4899] via-[#8b5cf6] to-[#3b82f6] px-6 text-sm font-semibold text-white no-underline shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 hover:scale-[1.03]"
              >
                Let's Connect
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#services"
                className="inline-flex h-12 items-center rounded-full border border-white/10 bg-[#0D141F]/70 px-6 text-sm font-medium text-[#CBD5E1] no-underline backdrop-blur-md transition-all duration-300 hover:border-[#ec4899]/40 hover:bg-[#151E2A] hover:text-white"
              >
                Explore My Work
              </a>
            </div>

            {/* Social */}
            <div className="mt-9 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#0D141F]/80 text-[#64748B] backdrop-blur-md transition-all duration-300 hover:border-[#ec4899]/40 hover:bg-[#151E2A] hover:text-[#ec4899]"
                  >
                    <Icon
                      size={17}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right side — animated code panel */}
          <div className="flex flex-1 justify-center lg:justify-end">
            <CodePanel />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#64748B]">
          Scroll
        </span>
        <span className="relative h-8 w-px overflow-hidden bg-[#1E293B]">
          <span className="absolute left-0 top-0 h-1/2 w-full animate-pulse bg-gradient-to-b from-[#ec4899] to-transparent" />
        </span>
      </div>
    </section>
  );
}

export default Hero;

"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  ExternalLink,
  X,
  CheckCircle2,
  Layers3,
  Database,
  CreditCard,
  ShieldCheck,
  BarChart3,
  Code2,
  Sparkles,
  CircleArrowOutUpRight,
} from "lucide-react";
import { FaGithubAlt } from "react-icons/fa";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,
    title: "BiblioDrop",
    category: "Full-Stack Web Application",

    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=85",

    description:
      "A role-based marketplace for multi-user book lending with doorstep delivery requests, verified reviews and transaction monitoring.",

    features: [
      "Role-based marketplace",
      "Secure booking & payments",
      "Verified reviews",
      "Admin monitoring",
    ],

    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "Stripe API",
    ],

    problem:
      "Multi-user book lending needs clear roles, secure payments and trustworthy reviews on one platform.",

    architecture:
      "A role-based marketplace with Stripe-powered bookings, verified reviews and transaction monitoring.",

    architecturePoints: [
      {
        icon: CreditCard,
        text: "Stripe-powered bookings and transaction monitoring",
      },
      {
        icon: ShieldCheck,
        text: "Role-based access for lenders, borrowers and admins",
      },
      {
        icon: CheckCircle2,
        text: "Verified user reviews and Recharts analytics",
      },
    ],

    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/bibliodrop",
  },

  {
    id: 2,
    title: "LegalEase",
    category: "Legal Hiring Platform",

    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=85",

    description:
      "An online lawyer hiring platform connecting clients with legal professionals through profiles, hiring requests and secure payments.",

    features: [
      "Lawyer discovery",
      "Hiring workflow",
      "Stripe payments",
      "Role dashboards",
    ],

    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],

    problem:
      "Finding and hiring the right lawyer requires transparent profiles, structured requests, secure payments and clear communication.",

    architecture:
      "A role-based legal marketplace with lawyer profiles, hiring requests, payment processing and admin analytics.",

    architecturePoints: [
      {
        icon: Layers3,
        text: "Role-based dashboards for clients, lawyers and admins",
      },
      {
        icon: CreditCard,
        text: "Stripe-powered lawyer hiring and payment workflow",
      },
      {
        icon: BarChart3,
        text: "Hiring history, comments and administrative analytics",
      },
    ],

    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/legalease",
  },

  {
    id: 3,
    title: "HireDeskPro",
    category: "Business Management Platform",

    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",

    description:
      "A modern recruitment and employee management platform designed to simplify hiring workflows and candidate management.",

    features: [
      "Candidate management",
      "Recruitment workflow",
      "Dashboard analytics",
      "Role-based access",
    ],

    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
    ],

    problem:
      "Recruitment teams need a centralized system to organize candidates, manage hiring stages and monitor recruitment performance.",

    architecture:
      "A dashboard-driven recruitment platform with structured candidate workflows and role-based business operations.",

    architecturePoints: [
      {
        icon: Layers3,
        text: "Structured candidate pipeline and recruitment workflow",
      },
      {
        icon: ShieldCheck,
        text: "Secure role-based access for different users",
      },
      {
        icon: BarChart3,
        text: "Recruitment analytics and performance monitoring",
      },
    ],

    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/hiredeskpro",
  },

  {
    id: 4,
    title: "CRM Pro",
    category: "Customer Relationship Platform",

    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",

    description:
      "A customer relationship management platform for organizing leads, tracking client interactions and managing business workflows.",

    features: [
      "Lead management",
      "Client tracking",
      "Sales dashboard",
      "Business analytics",
    ],

    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Tailwind CSS",
    ],

    problem:
      "Growing businesses need a centralized CRM system to manage leads, customer information and sales activities efficiently.",

    architecture:
      "A full-stack CRM platform with REST APIs, dashboard analytics and structured customer relationship workflows.",

    architecturePoints: [
      {
        icon: Database,
        text: "Centralized customer and lead data management",
      },
      {
        icon: BarChart3,
        text: "Sales dashboard and business analytics",
      },
      {
        icon: Layers3,
        text: "Structured CRM workflow for sales teams",
      },
    ],

    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/crm-pro",
  },

  {
    id: 5,
    title: "ToolsArena",
    category: "SaaS Productivity Platform",

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85",

    description:
      "A productivity-focused web platform bringing useful digital tools into one clean and accessible workspace.",

    features: [
      "Tool management",
      "User dashboard",
      "Search system",
      "Responsive interface",
    ],

    technologies: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "MongoDB"],

    problem:
      "Users often need multiple online tools for everyday tasks, making it difficult to find and manage them from one place.",

    architecture:
      "A responsive SaaS-style platform with categorized tools, user interactions and scalable backend APIs.",

    architecturePoints: [
      {
        icon: Layers3,
        text: "Categorized digital tools with scalable architecture",
      },
      {
        icon: Database,
        text: "Backend API for managing tool information",
      },
      {
        icon: Code2,
        text: "Responsive and reusable frontend components",
      },
    ],

    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/toolsarena",
  },

  {
    id: 6,
    title: "Portfolio CMS",
    category: "Content Management System",

    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",

    description:
      "A flexible portfolio content management system for managing projects, skills, experience and personal branding.",

    features: [
      "Dynamic projects",
      "Content management",
      "Admin dashboard",
      "Responsive design",
    ],

    technologies: [
      "Next.js",
      "React.js",
      "MongoDB",
      "Express.js",
      "REST API",
      "Tailwind CSS",
    ],

    problem:
      "Personal brands and professionals need a flexible way to update portfolio content without changing application code.",

    architecture:
      "A CMS-driven portfolio architecture separating frontend presentation from dynamic content management.",

    architecturePoints: [
      {
        icon: Database,
        text: "Dynamic portfolio content stored in MongoDB",
      },
      {
        icon: Layers3,
        text: "Reusable components for projects and sections",
      },
      {
        icon: ShieldCheck,
        text: "Protected admin content management workflow",
      },
    ],

    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/portfolio-cms",
  },
];

/* =========================================================
   MAIN PROJECT SECTION
========================================================= */

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="projects"
        className="relative w-full overflow-hidden bg-[#030712] py-24 text-white sm:py-28 lg:py-32"
      >
        {/* =================================================
            BACKGROUND GLOWS
        ================================================= */}

        <div className="pointer-events-none absolute -top-20 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#7000ff] opacity-[0.23] blur-[160px]" />

        <div className="pointer-events-none absolute -bottom-40 left-[8%] h-[600px] w-[600px] rounded-full bg-[#ec4899] opacity-[0.17] blur-[160px]" />

        <div className="pointer-events-none absolute right-[-180px] top-[20%] h-[650px] w-[650px] rounded-full bg-[#3b82f6] opacity-[0.18] blur-[170px]" />

        {/* =================================================
            BACKGROUND GRID
        ================================================= */}

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[1000px] w-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-[0.55]"
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

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* =================================================
              HEADER
          ================================================= */}

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.18em] text-white/60 backdrop-blur-md">
              <Sparkles size={14} className="text-[#13F2B3]" />
              SELECTED WORK
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Projects That{" "}
              <span className="bg-gradient-to-r from-[#13F2B3] via-[#ec4899] to-[#3b82f6] bg-clip-text text-transparent">
                Solve Problems
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
              A collection of full-stack applications focused on real-world
              business requirements, scalable architecture and meaningful user
              experiences.
            </p>
          </div>

          {/* =================================================
              PROJECT GRID
          ================================================= */}

          <div className="grid gap-8 md:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* =================================================
              SHOW MORE / SHOW LESS
          ================================================= */}

          {projects.length > 4 && (
            <div className="mt-14 flex justify-center">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white/80 backdrop-blur-xl transition-all duration-500 hover:border-[#13F2B3]/30 hover:bg-[#13F2B3]/10 hover:text-white"
              >
                {/* Button glow */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative z-10">
                  {showAll ? "Show Less" : "Show More"}
                </span>

                <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition-transform duration-500 group-hover:border-[#13F2B3]/30 group-hover:bg-[#13F2B3]/10">
                  {showAll ? (
                    <ArrowUp
                      size={15}
                      className="transition-transform duration-300"
                    />
                  ) : (
                    <ArrowDown
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-y-0.5"
                    />
                  )}
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          CASE STUDY MODAL
      ===================================================== */}

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index, onOpen }) {
  return (
    <article
      onClick={onOpen}
      className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#080d16]/80 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.16] hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
      style={{
        animation: `projectReveal 0.65s ease ${index * 0.08}s both`,
      }}
    >
      {/* Ambient pink */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#ec4899]/10 blur-[100px] transition-all duration-700 group-hover:bg-[#ec4899]/20" />

      {/* Ambient blue */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#3b82f6]/10 blur-[100px] transition-all duration-700 group-hover:bg-[#3b82f6]/20" />

      {/* =================================================
          IMAGE
      ================================================= */}

      <div className="relative aspect-[16/10] overflow-hidden rounded-[21px]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/10 to-transparent" />

        {/* Hover shine */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

        {/* =================================================
            FEATURES BADGE
        ================================================= */}

        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#030712]/70 px-3 py-2 text-[11px] font-medium text-white/80 backdrop-blur-xl">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#13F2B3] shadow-[0_0_10px_#13F2B3]" />
            Features
          </span>
        </div>

        {/* =================================================
            CASE STUDY READY — CLICKABLE
        ================================================= */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          className="absolute right-4 top-4 rounded-full border border-[#13F2B3]/20 bg-[#13F2B3]/10 px-3 py-2 text-[11px] font-medium text-[#13F2B3] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[#13F2B3]/50 hover:bg-[#13F2B3]/20 hover:shadow-[0_0_25px_rgba(19,242,179,0.15)]"
        >
          <span className="flex items-center gap-1.5">
            Case Study Ready
            <ArrowUpRight size={12} />
          </span>
        </button>

        {/* Category */}
        <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/60 backdrop-blur-md">
          {project.category}
        </div>
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative z-10 px-3 pb-3 pt-6">
        <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#13F2B3]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/50">
          {project.description}
        </p>

        {/* Technology tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[11px] text-white/60 transition-all duration-300 group-hover:border-white/[0.12] group-hover:text-white/75"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* View Case Study */}
        <div className="mt-7 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors  group-hover:text-[#13F2B3]">
            View Case Study
            <CircleArrowOutUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
          <div className="h-8 w-8 rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-[#13F2B3]/30 group-hover:bg-[#13F2B3]/10" />
          Live Link
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   CASE STUDY MODAL
========================================================= */

function CaseStudyModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-5"
      style={{
        animation: "modalBackdrop 0.25s ease both",
      }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="relative max-h-[94vh] w-full max-w-6xl overflow-hidden rounded-[30px] border border-white/10 bg-[#080d16] shadow-2xl shadow-black/60"
        style={{
          animation: "modalOpen 0.4s cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:border-white/20 hover:bg-white/10 hover:text-white"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="grid max-h-[94vh] overflow-y-auto lg:grid-cols-[0.95fr_1.05fr]">
          {/* =================================================
              LEFT IMAGE
          ================================================= */}

          <div className="relative min-h-[330px] lg:min-h-[700px]">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent lg:bg-gradient-to-r" />

            <div className="absolute bottom-8 left-7 right-7 sm:left-10 sm:right-10">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white/60 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-[#13F2B3]" />
                {project.category}
              </div>

              <h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {project.title}
              </h3>
            </div>
          </div>

          {/* =================================================
              RIGHT CASE STUDY
          ================================================= */}

          <div className="relative px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
            {/* Modal glows */}
            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#7000ff]/15 blur-[110px]" />

            <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#3b82f6]/10 blur-[110px]" />

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-10">
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#13F2B3]">
                  <Code2 size={15} />
                  Full-Stack Case Study
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {project.title}
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
                  {project.description}
                </p>
              </div>

              {/* Problem */}
              <CaseStudyBlock
                icon={Code2}
                eyebrow="Problem Statement & Case Study"
                title="The challenge and business requirement"
              >
                <p className="text-sm leading-7 text-white/55">
                  {project.problem}
                </p>
              </CaseStudyBlock>

              {/* Architecture */}
              <CaseStudyBlock
                icon={Layers3}
                eyebrow="System Design & Architecture"
                title="Software engineering and data flow"
              >
                <p className="text-sm leading-7 text-white/55">
                  {project.architecture}
                </p>

                <div className="mt-5 space-y-3">
                  {project.architecturePoints.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3.5 transition-all duration-300 hover:border-[#13F2B3]/10 hover:bg-white/[0.04]"
                      >
                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#13F2B3]/10 text-[#13F2B3]">
                          <Icon size={14} />
                        </div>

                        <p className="text-xs leading-6 text-white/55">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CaseStudyBlock>

              {/* Technologies */}
              <CaseStudyBlock
                icon={Database}
                eyebrow="Technologies & Architectural Stack"
                title="Built with modern technologies"
              >
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-white/65 transition-colors hover:border-[#13F2B3]/20 hover:text-white"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </CaseStudyBlock>

              {/* Buttons */}
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ec4899] via-[#7000ff] to-[#3b82f6] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#7000ff]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#7000ff]/30"
                >
                  <ExternalLink size={16} />
                  Live Website
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                >
                  <FaGithubAlt size={17} />
                  GitHub Repository
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CASE STUDY BLOCK
========================================================= */

function CaseStudyBlock({ icon: Icon, eyebrow, title, children }) {
  return (
    <div className="mb-9">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#13F2B3]/10 bg-[#13F2B3]/5 text-[#13F2B3]">
          <Icon size={17} />
        </div>

        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
            {eyebrow}
          </p>

          <h4 className="mt-1 text-sm font-semibold text-white/85">{title}</h4>
        </div>
      </div>

      {children}
    </div>
  );
}

/* =========================================================
   ANIMATIONS
========================================================= */

const style = document.createElement("style");

style.innerHTML = `
  @keyframes projectReveal {
    from {
      opacity: 0;
      transform: translateY(25px) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes modalBackdrop {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes modalOpen {
    from {
      opacity: 0;
      transform: translateY(25px) scale(0.96);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

if (!document.head.contains(style)) {
  document.head.appendChild(style);
}

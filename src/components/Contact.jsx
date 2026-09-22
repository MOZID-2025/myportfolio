"use client";

import React, { useState } from "react";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { LuMailSearch } from "react-icons/lu";
import { BsFillSendFill } from "react-icons/bs";
import {
  FaFacebook,
  FaGithubSquare,
  FaLinkedin,
  FaPhoneVolume,
  FaUserTie,
  FaWhatsappSquare,
} from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { IoIosMailUnread } from "react-icons/io";
import { RiSendInsFill } from "react-icons/ri";

const contactEmail = "your-email@example.com";

/* =========================================================
   SOCIAL / CONTACT LINKS
========================================================= */

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebook,
    color: "#1877F2",
    href: "https://facebook.com/",
    description: "Connect with me",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsappSquare,
    color: "#25D366",
    href: "https://wa.me/",
    description: "Quick conversation",
  },
  {
    name: "GitHub",
    icon: FaGithubSquare,
    color: "#FFFFFF",
    href: "https://github.com/",
    description: "View my projects",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    color: "#0A66C2",
    href: "https://linkedin.com/",
    description: "Professional network",
  },
  {
    name: "Telegram",
    icon: SiTelegram,
    color: "#229ED9",
    href: "https://t.me/",
    description: "Message me directly",
  },
];

/* =========================================================
   CONTACT SECTION
========================================================= */

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  /* =======================================================
     HANDLE INPUT
  ======================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =======================================================
     HANDLE FORM SUBMIT
  ======================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);

    const subject = `Portfolio Contact — ${formData.name}`;

    const body = `
Hello Abdul Mozid,

You have received a new message from your portfolio website.

Name:
${formData.name}

Email:
${formData.email}

Phone:
${formData.phone || "Not provided"}

Message:
${formData.message}
    `.trim();

    const mailtoLink =
      `mailto:${contactEmail}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailtoLink;

      setIsSending(false);
      setIsSent(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    }, 700);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#030712] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* =================================================
          AMBIENT GLOWS
      ================================================= */}

      {/* Purple */}
      <div className="pointer-events-none absolute -top-40 left-[15%] h-[500px] w-[500px] rounded-full bg-[#7000ff]/[0.13] blur-[150px]" />

      {/* Pink */}
      <div className="pointer-events-none absolute bottom-[-220px] left-[5%] h-[550px] w-[550px] rounded-full bg-[#ec4899]/[0.13] blur-[160px]" />

      {/* Blue */}
      <div className="pointer-events-none absolute right-[-180px] top-[25%] h-[600px] w-[600px] rounded-full bg-[#3b82f6]/[0.14] blur-[170px]" />

      {/* Cyan center */}
      <div className="pointer-events-none absolute left-1/2 top-[35%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#13F2B3]/[0.035] blur-[120px]" />

      {/* =================================================
          SUBTLE GRID
      ================================================= */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, black 40%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, black 40%, transparent 78%)",
        }}
      />

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-[1150px] px-5 sm:px-8 lg:px-10">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-14 text-center sm:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-gradient-to-r from-transparent to-[#13F2B3]" />

            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-[#13F2B3]">
              Contact
            </span>

            <span className="h-px w-9 bg-gradient-to-l from-transparent to-[#13F2B3]" />
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#F1F5F9] sm:text-5xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-[#13F2B3] via-[#ec4899] to-[#3b82f6] bg-clip-text text-transparent">
              Talk
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[560px] text-sm leading-7 text-white/40">
            Have a project, business idea or opportunity in mind? Let&apos;s
            connect and build something meaningful together.
          </p>
        </div>

        {/* =================================================
            TWO COLUMN
        ================================================= */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* =================================================
              LEFT — CONNECT
          ================================================= */}

          <div className="group relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#0a101b]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
            {/* Glow */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#7000ff]/10 blur-[100px]" />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#F1F5F9]">
                    Connect With Me
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/40">
                    Reach out on whichever platform works best for you.
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#13F2B3]/10 bg-[#13F2B3]/[0.05]">
                  <LuMailSearch size={18} className="text-[#13F2B3]" />
                </div>
              </div>

              {/* Social links */}
              <div className="mt-7 space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/item relative flex items-center gap-4 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.045]"
                      style={{
                        animation: `contactItem 0.6s ease ${
                          index * 0.08
                        }s both`,
                      }}
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 blur-xl transition-opacity duration-300 group-hover/item:opacity-[0.08]"
                        style={{
                          backgroundColor: social.color,
                        }}
                      />

                      {/* Icon */}
                      <div
                        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.06] bg-[#121a28] transition-all duration-300 group-hover/item:scale-105"
                        style={{
                          color: social.color,
                        }}
                      >
                        <Icon size={18} />
                      </div>

                      {/* Text */}
                      <div className="relative min-w-0 flex-1">
                        <p className="text-sm font-semibold text-[#CBD5E1]">
                          {social.name}
                        </p>

                        <p className="mt-0.5 text-[10px] text-white/30">
                          {social.description}
                        </p>
                      </div>
                      <FaArrowUpRightFromSquare
                        size={15}
                        className="relative text-white/20 transition-all duration-300 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-white/60"
                      />
                    </a>
                  );
                })}
              </div>

              {/* Availability */}
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#13F2B3]/10 bg-[#13F2B3]/[0.035] px-4 py-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#13F2B3] opacity-60" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#13F2B3] shadow-[0_0_10px_#13F2B3]" />
                </span>

                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-[#13F2B3]">
                    Available for opportunities
                  </p>

                  <p className="mt-0.5 text-[10px] text-white/30">
                    Usually responds within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — FORM
          ================================================= */}

          <div className="group relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#09121e]/85 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
            {/* Top gradient */}
            <div className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-[#13F2B3] via-[#7000ff] to-[#3b82f6] transition-all duration-700 group-hover:w-full" />

            {/* Form glow */}
            <div className="pointer-events-none absolute -bottom-40 right-[-100px] h-72 w-72 rounded-full bg-[#3b82f6]/10 blur-[100px]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#F1F5F9]">
                    Send a Message
                  </h3>

                  <p className="mt-2 text-xs text-white/35">
                    Tell me a little about your project.
                  </p>
                </div>

                <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] sm:flex">
                  <BsFillSendFill size={17} className="text-[#3b82f6]" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="relative mt-7 space-y-5">
                {/* =================================================
                    NAME
                ================================================= */}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <FaUserTie
                      size={15}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#101a28]/80 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-[#13F2B3]/35 focus:bg-[#111d2c] focus:shadow-[0_0_25px_rgba(19,242,179,0.04)]"
                    />
                  </div>
                </div>

                {/* =================================================
                    EMAIL
                ================================================= */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <IoIosMailUnread
                      size={15}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#101a28]/80 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-[#13F2B3]/35 focus:bg-[#111d2c] focus:shadow-[0_0_25px_rgba(19,242,179,0.04)]"
                    />
                  </div>
                </div>

                {/* =================================================
                    PHONE
                ================================================= */}

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40"
                  >
                    Phone Number{" "}
                    <span className="text-white/20">(Optional)</span>
                  </label>

                  <div className="relative">
                    <FaPhoneVolume
                      size={15}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                    />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXXXXXXXX"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#101a28]/80 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-[#13F2B3]/35 focus:bg-[#111d2c]"
                    />
                  </div>
                </div>

                {/* =================================================
                    MESSAGE
                ================================================= */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a bit about your project or opportunity..."
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#101a28]/80 px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-[#13F2B3]/35 focus:bg-[#111d2c] focus:shadow-[0_0_25px_rgba(19,242,179,0.04)]"
                  />
                </div>

                {/* =================================================
                    SUCCESS MESSAGE
                ================================================= */}

                {isSent && (
                  <div className="flex items-center gap-2 rounded-xl border border-[#13F2B3]/15 bg-[#13F2B3]/[0.05] px-4 py-3 text-xs text-[#13F2B3]">
                    <FiCheckCircle size={15} />
                    Your email client has been opened. Thank you!
                  </div>
                )}

                {/* =================================================
                    SUBMIT
                ================================================= */}

                <button
                  type="submit"
                  disabled={isSending}
                  className="group/button relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#13F2B3] via-[#32d6c4] to-[#3b82f6] font-mono text-[11px] font-bold tracking-[0.08em] text-[#030712] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(19,242,179,0.18)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#030712]/30 border-t-[#030712]" />
                      Opening...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <RiSendInsFill
                        size={15}
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM NOTE
        ================================================= */}

        <div className="mt-10 text-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/20">
            Let&apos;s turn your idea into something real
          </p>
        </div>
      </div>

      {/* =================================================
          ANIMATION
      ================================================= */}

      <style jsx>{`
        @keyframes contactItem {
          from {
            opacity: 0;
            transform: translateX(-12px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;

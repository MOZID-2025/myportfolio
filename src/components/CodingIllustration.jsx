"use client";

import React, { useEffect, useState } from "react";

const codeLines = [
  {
    parts: [
      { text: "const ", type: "keyword" },
      { text: "developer", type: "variable" },
      { text: ' = "Abdul Mozid";', type: "string" },
    ],
  },
  {
    parts: [
      { text: "const ", type: "keyword" },
      { text: "role", type: "variable" },
      { text: ' = "Frontend Developer";', type: "string" },
    ],
  },
  {
    parts: [
      { text: "const ", type: "keyword" },
      { text: "skills", type: "variable" },
      { text: ' = ["React", "Next.js"];', type: "string" },
    ],
  },
  {
    parts: [
      { text: "function ", type: "keyword" },
      { text: "buildWebsite", type: "function" },
      { text: "() {", type: "bracket" },
    ],
  },
  {
    parts: [
      { text: "  return ", type: "keyword" },
      { text: '"Amazing UI";', type: "string" },
    ],
  },
  {
    parts: [{ text: "}", type: "bracket" }],
  },
  {
    parts: [
      { text: '<div className="', type: "normal" },
      { text: "flex", type: "property" },
      { text: " items-center ", type: "string" },
      { text: "gap-4", type: "property" },
      { text: '">', type: "normal" },
    ],
  },
  {
    parts: [
      { text: "  <h1>", type: "tag" },
      { text: "Hello World", type: "string" },
      { text: "</h1>", type: "tag" },
    ],
  },
  {
    parts: [{ text: "</div>", type: "tag" }],
  },
  {
    parts: [
      { text: "npm ", type: "command" },
      { text: "run ", type: "command" },
      { text: "dev", type: "success" },
    ],
  },
];

const CodingIllustration = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [completedLines, setCompletedLines] = useState([]);

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      const restartTimer = setTimeout(() => {
        setCurrentLine(0);
        setCurrentChar(0);
        setCompletedLines([]);
      }, 3000);

      return () => clearTimeout(restartTimer);
    }

    const currentText = codeLines[currentLine].parts
      .map((part) => part.text)
      .join("");

    if (currentChar < currentText.length) {
      const typingTimer = setTimeout(() => {
        setCurrentChar((prev) => prev + 1);
      }, 42);

      return () => clearTimeout(typingTimer);
    }

    const lineTimer = setTimeout(() => {
      setCompletedLines((prev) => [...prev, currentLine]);
      setCurrentLine((prev) => prev + 1);
      setCurrentChar(0);
    }, 180);

    return () => clearTimeout(lineTimer);
  }, [currentLine, currentChar]);

  const renderTypedLine = (parts, charLimit) => {
    let remaining = charLimit;

    return parts.map((part, index) => {
      if (remaining <= 0) return null;

      const visibleText = part.text.slice(
        0,
        Math.min(part.text.length, remaining),
      );

      remaining -= part.text.length;

      return (
        <span key={index} className={`syntax-${part.type}`}>
          {visibleText}
        </span>
      );
    });
  };

  const renderCompletedLine = (parts) => {
    return parts.map((part, index) => (
      <span key={index} className={`syntax-${part.type}`}>
        {part.text}
      </span>
    ));
  };

  return (
    <div className="coding-illustration">
      <svg
        viewBox="0 0 700 500"
        className="coding-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main gradient */}

          <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#35F5B0" />
            <stop offset="100%" stopColor="#45A9F5" />
          </linearGradient>

          {/* Blue gradient */}

          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#45A9F5" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>

          {/* Purple gradient */}

          <linearGradient
            id="purpleGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>

          {/* Glow */}

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="15" />
          </filter>

          <filter id="screenGlow">
            <feGaussianBlur stdDeviation="7" />
          </filter>

          {/* Screen clipping */}

          <clipPath id="screenClip">
            <rect x="180" y="150" width="340" height="185" rx="8" />
          </clipPath>
        </defs>

        {/* =====================================================
            BACKGROUND GLOW
        ====================================================== */}

        <circle
          cx="350"
          cy="250"
          r="190"
          fill="#35F5B0"
          opacity="0.06"
          filter="url(#softGlow)"
        />

        {/* =====================================================
            FLOATING PARTICLES
        ====================================================== */}

        <circle className="particle particle-1" cx="90" cy="100" r="4" />

        <circle className="particle particle-2" cx="610" cy="100" r="5" />

        <circle className="particle particle-3" cx="640" cy="350" r="3" />

        <circle className="particle particle-4" cx="100" cy="380" r="5" />

        <circle className="particle particle-5" cx="550" cy="430" r="4" />

        {/* =====================================================
            FLOATING CODE SYMBOLS
        ====================================================== */}

        <text
          x="75"
          y="210"
          className="floating-symbol symbol-one"
          fill="url(#mainGradient)"
        >
          {"</>"}
        </text>

        <text
          x="580"
          y="185"
          className="floating-symbol symbol-two"
          fill="url(#purpleGradient)"
        >
          {"{}"}
        </text>

        <text
          x="570"
          y="390"
          className="floating-symbol symbol-three"
          fill="url(#mainGradient)"
        >
          {"()"}
        </text>

        {/* =====================================================
            LAPTOP
        ====================================================== */}

        <g className="laptop">
          {/* Laptop screen body */}

          <rect
            x="150"
            y="90"
            width="400"
            height="275"
            rx="20"
            fill="#111827"
            stroke="url(#mainGradient)"
            strokeWidth="3"
          />

          {/* Screen glow */}

          <rect
            x="164"
            y="104"
            width="372"
            height="248"
            rx="13"
            fill="#35F5B0"
            opacity="0.05"
            filter="url(#screenGlow)"
          />

          {/* Screen */}

          <rect
            x="165"
            y="105"
            width="370"
            height="245"
            rx="12"
            fill="#080D18"
          />

          {/* Browser bar */}

          <rect
            x="165"
            y="105"
            width="370"
            height="32"
            rx="12"
            fill="#111827"
          />

          {/* Browser dots */}

          <circle cx="185" cy="121" r="5" fill="#FF6B6B" />

          <circle cx="202" cy="121" r="5" fill="#FFD93D" />

          <circle cx="219" cy="121" r="5" fill="#35F5B0" />

          {/* Address bar */}

          <rect x="250" y="114" width="170" height="14" rx="7" fill="#1F2937" />

          {/* =================================================
              CODE EDITOR
          ================================================== */}

          <rect
            x="180"
            y="150"
            width="340"
            height="185"
            rx="8"
            fill="#0B1220"
          />

          <foreignObject
            x="180"
            y="150"
            width="340"
            height="185"
            clipPath="url(#screenClip)"
          >
            <div xmlns="http://www.w3.org/1999/xhtml" className="code-editor">
              {/* Editor header */}

              <div className="editor-header">
                <div className="editor-file">
                  <span className="file-status" />
                  <span>developer.jsx</span>
                </div>

                <span className="live-status">● LIVE</span>
              </div>

              {/* Code */}

              <div className="editor-code">
                {codeLines.map((line, index) => {
                  const isCompleted = completedLines.includes(index);

                  const isCurrent = currentLine === index;

                  if (!isCompleted && !isCurrent) {
                    return (
                      <div className="code-line" key={index}>
                        <span className="line-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    );
                  }

                  return (
                    <div className="code-line" key={index}>
                      <span className="line-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="code-text">
                        {isCompleted
                          ? renderCompletedLine(line.parts)
                          : renderTypedLine(line.parts, currentChar)}

                        {isCurrent && <span className="typing-cursor" />}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </foreignObject>

          {/* =================================================
              LAPTOP BASE
          ================================================== */}

          <path
            d="M120 365 H580 L610 400 H90 Z"
            fill="#111827"
            stroke="url(#mainGradient)"
            strokeWidth="3"
          />

          {/* Keyboard */}

          <path d="M180 375 H520 L540 393 H160 Z" fill="#1F2937" />

          {/* Trackpad */}

          <rect x="305" y="378" width="90" height="12" rx="4" fill="#374151" />
        </g>

        {/* =====================================================
            TERMINAL CARD
        ====================================================== */}

        <g className="terminal-card">
          <rect
            x="55"
            y="275"
            width="155"
            height="95"
            rx="14"
            fill="#111827"
            stroke="#35F5B0"
            strokeWidth="2"
          />

          {/* Terminal dots */}

          <circle cx="75" cy="295" r="4" fill="#FF6B6B" />

          <circle cx="89" cy="295" r="4" fill="#FFD93D" />

          <circle cx="103" cy="295" r="4" fill="#35F5B0" />

          {/* Terminal text */}

          <text x="72" y="322" className="terminal-command">
            $ npm run dev
          </text>

          <text x="72" y="344" className="terminal-success">
            ✓ Server running
          </text>
        </g>

        {/* =====================================================
            REACT ICON
        ====================================================== */}

        <g className="react-icon">
          <circle
            cx="600"
            cy="270"
            r="48"
            fill="#111827"
            stroke="#45A9F5"
            strokeWidth="2"
          />

          <ellipse
            cx="600"
            cy="270"
            rx="38"
            ry="15"
            fill="none"
            stroke="#45A9F5"
            strokeWidth="3"
          />

          <ellipse
            cx="600"
            cy="270"
            rx="38"
            ry="15"
            fill="none"
            stroke="#45A9F5"
            strokeWidth="3"
            transform="rotate(60 600 270)"
          />

          <ellipse
            cx="600"
            cy="270"
            rx="38"
            ry="15"
            fill="none"
            stroke="#45A9F5"
            strokeWidth="3"
            transform="rotate(-60 600 270)"
          />

          <circle cx="600" cy="270" r="6" fill="#35F5B0" />
        </g>

        {/* =====================================================
            BOTTOM LABELS
        ====================================================== */}

        <g className="floating-label label-one">
          <rect
            x="250"
            y="425"
            width="105"
            height="34"
            rx="17"
            fill="#111827"
            stroke="#35F5B0"
          />

          <text x="273" y="447">
            &lt;Code /&gt;
          </text>
        </g>

        <g className="floating-label label-two">
          <rect
            x="370"
            y="425"
            width="105"
            height="34"
            rx="17"
            fill="#111827"
            stroke="#45A9F5"
          />

          <text x="395" y="447">
            Dev
          </text>
        </g>
      </svg>

      {/* =====================================================
          CSS
      ====================================================== */}

      <style jsx>{`
        .coding-illustration {
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          position: relative;
        }

        .coding-svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        /* =========================================
           LAPTOP FLOAT
        ========================================== */

        .laptop {
          animation: laptopFloat 4s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes laptopFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        /* =========================================
           CODE EDITOR
        ========================================== */

        .code-editor {
          width: 340px;
          height: 185px;
          background: #0b1220;
          color: #e2e8f0;
          font-family: "Fira Code", "Cascadia Code", Consolas, monospace;
          overflow: hidden;
        }

        .editor-header {
          height: 27px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
          background: #111827;
          border-bottom: 1px solid #1e293b;
          font-size: 8px;
        }

        .editor-file {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #94a3b8;
        }

        .file-status {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #35f5b0;
          box-shadow: 0 0 8px #35f5b0;
        }

        .live-status {
          color: #35f5b0;
          font-size: 7px;
          animation: liveBlink 1.5s ease-in-out infinite;
        }

        @keyframes liveBlink {
          0%,
          100% {
            opacity: 0.4;
          }

          50% {
            opacity: 1;
          }
        }

        .editor-code {
          padding-top: 7px;
          height: 158px;
          overflow: hidden;
        }

        .code-line {
          display: flex;
          align-items: center;
          height: 15px;
          line-height: 15px;
          font-size: 8px;
          white-space: nowrap;
        }

        .line-number {
          flex-shrink: 0;
          width: 29px;
          padding-right: 8px;
          text-align: right;
          color: #334155;
          user-select: none;
        }

        .code-text {
          white-space: nowrap;
        }

        /* =========================================
           SYNTAX COLORS
        ========================================== */

        .syntax-keyword {
          color: #c084fc;
        }

        .syntax-variable {
          color: #38bdf8;
        }

        .syntax-function {
          color: #facc15;
        }

        .syntax-property {
          color: #67e8f9;
        }

        .syntax-string {
          color: #86efac;
        }

        .syntax-bracket {
          color: #94a3b8;
        }

        .syntax-tag {
          color: #fb7185;
        }

        .syntax-command {
          color: #94a3b8;
        }

        .syntax-success {
          color: #35f5b0;
        }

        .syntax-normal {
          color: #cbd5e1;
        }

        /* =========================================
           TYPING CURSOR
        ========================================== */

        .typing-cursor {
          display: inline-block;
          width: 2px;
          height: 10px;
          margin-left: 2px;
          vertical-align: -1px;
          background: #35f5b0;
          box-shadow: 0 0 7px #35f5b0;
          animation: cursorBlink 0.65s steps(2) infinite;
        }

        @keyframes cursorBlink {
          0%,
          45% {
            opacity: 1;
          }

          50%,
          100% {
            opacity: 0;
          }
        }

        /* =========================================
           FLOATING SYMBOLS
        ========================================== */

        .floating-symbol {
          font-family: monospace;
          font-size: 28px;
          font-weight: bold;
          animation: symbolFloat 3s ease-in-out infinite;
        }

        .symbol-two {
          animation-delay: 1s;
        }

        .symbol-three {
          animation-delay: 2s;
        }

        @keyframes symbolFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        /* =========================================
           PARTICLES
        ========================================== */

        .particle {
          fill: #35f5b0;
          animation: particleMove 3s ease-in-out infinite;
        }

        .particle-2 {
          animation-delay: 0.5s;
          fill: #45a9f5;
        }

        .particle-3 {
          animation-delay: 1s;
        }

        .particle-4 {
          animation-delay: 1.5s;
          fill: #a78bfa;
        }

        .particle-5 {
          animation-delay: 2s;
          fill: #45a9f5;
        }

        @keyframes particleMove {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.35;
          }

          50% {
            transform: translateY(-18px);
            opacity: 1;
          }
        }

        /* =========================================
           TERMINAL
        ========================================== */

        .terminal-card {
          animation: terminalFloat 5s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes terminalFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-10px) rotate(-2deg);
          }
        }

        .terminal-command,
        .terminal-success {
          font-family: monospace;
          font-size: 11px;
        }

        .terminal-command {
          fill: #94a3b8;
        }

        .terminal-success {
          fill: #35f5b0;
        }

        /* =========================================
           REACT ICON
        ========================================== */

        .react-icon {
          animation: reactSpin 8s linear infinite;
          transform-origin: 600px 270px;
        }

        @keyframes reactSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        /* =========================================
           BOTTOM LABELS
        ========================================== */

        .floating-label {
          animation: labelFloat 4s ease-in-out infinite;
        }

        .label-two {
          animation-delay: 1.5s;
        }

        @keyframes labelFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .floating-label text {
          fill: #e2e8f0;
          font-family: monospace;
          font-size: 13px;
          font-weight: 600;
        }

        /* =========================================
           RESPONSIVE
        ========================================== */

        @media (max-width: 640px) {
          .coding-illustration {
            max-width: 96%;
          }

          .code-line {
            font-size: 7.5px;
          }
        }

        /* =========================================
           ACCESSIBILITY
        ========================================== */

        @media (prefers-reduced-motion: reduce) {
          .coding-illustration * {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CodingIllustration;

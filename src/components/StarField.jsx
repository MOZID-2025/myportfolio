"use client";

import React from "react";

const stars = [
  { x: "8%", y: "12%", size: 2, delay: "0s", duration: "3.2s" },
  { x: "17%", y: "28%", size: 1, delay: "1.4s", duration: "4.5s" },
  { x: "25%", y: "8%", size: 3, delay: "2.1s", duration: "3.8s" },
  { x: "34%", y: "22%", size: 1.5, delay: "0.8s", duration: "5s" },
  { x: "43%", y: "10%", size: 2, delay: "2.8s", duration: "4s" },
  { x: "52%", y: "30%", size: 1, delay: "1.2s", duration: "3.5s" },
  { x: "61%", y: "15%", size: 3, delay: "3s", duration: "5.2s" },
  { x: "72%", y: "25%", size: 1.5, delay: "0.5s", duration: "4.2s" },
  { x: "84%", y: "11%", size: 2, delay: "2.5s", duration: "3.7s" },
  { x: "93%", y: "35%", size: 1, delay: "1.7s", duration: "4.8s" },

  { x: "6%", y: "48%", size: 1.5, delay: "3.4s", duration: "4.5s" },
  { x: "15%", y: "65%", size: 2, delay: "0.7s", duration: "3.8s" },
  { x: "27%", y: "52%", size: 1, delay: "2.2s", duration: "5s" },
  { x: "38%", y: "72%", size: 3, delay: "1.1s", duration: "4.2s" },
  { x: "49%", y: "58%", size: 1.5, delay: "3.1s", duration: "3.5s" },
  { x: "58%", y: "78%", size: 2, delay: "0.3s", duration: "4.7s" },
  { x: "69%", y: "61%", size: 1, delay: "2.7s", duration: "3.9s" },
  { x: "79%", y: "73%", size: 2.5, delay: "1.5s", duration: "5.1s" },
  { x: "91%", y: "57%", size: 1.5, delay: "3.6s", duration: "4.1s" },

  { x: "11%", y: "88%", size: 2.5, delay: "2.4s", duration: "4.3s" },
  { x: "22%", y: "94%", size: 1, delay: "0.9s", duration: "3.6s" },
  { x: "46%", y: "91%", size: 2, delay: "3.3s", duration: "4.9s" },
  { x: "64%", y: "93%", size: 1.5, delay: "1.8s", duration: "3.7s" },
  { x: "82%", y: "88%", size: 3, delay: "2.9s", duration: "4.6s" },
];

export default function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {stars.map((star, index) => (
        <span
          key={index}
          className="star"
          style={{
            left: star.x,
            top: star.y,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}

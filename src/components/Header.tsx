"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-20 px-6 py-3 bg-black/50 backdrop-blur-sm font-mono"
    >
      <nav className="w-full flex items-center justify-between">
        <div className="text-white">
          <Link href="/" className="flex gap-3 items-center">
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "ui-monospace, monospace",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: "#e5e7eb",
                flexShrink: 0,
              }}
            >
              NR
            </div>
            <span className="text-lg tracking-wide">N. Rashidi</span>
          </Link>
        </div>
        <div className="text-gray-400">{time}</div>
      </nav>
    </motion.header>
  );
}

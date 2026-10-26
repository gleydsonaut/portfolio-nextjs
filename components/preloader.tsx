"use client";

import { useEffect, useState } from "react";

const TOTAL_BLOCKS = 24;

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + 3, 100);
      });
    }, 45);

    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "auto";
      }, 600);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!visible) return null;

  const filledBlocks = Math.round((progress / 100) * TOTAL_BLOCKS);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-500"
      style={{ opacity: fadeOut ? 0 : 1 }}
    >
      <div className="w-[340px] rounded-2xl border border-gray-200 bg-white shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-gray-50">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-800">Carregando portfólio</span>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 cursor-pointer">
            <circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>
          </svg>
        </div>

        {/* Segmented blocks bar */}
        <div className="flex gap-[3px] mb-3">
          {Array.from({ length: TOTAL_BLOCKS }).map((_, i) => (
            <div
              key={i}
              className="h-3 flex-1 rounded-sm transition-colors duration-150"
              style={{
                backgroundColor: i < filledBlocks ? "#4f46e5" : "#e5e7eb",
              }}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">
            Gleydson Rodrigues · Analista Pleno de Automação e IA
          </span>
          <span className="text-xs font-semibold text-gray-600">{progress}% concluído</span>
        </div>
      </div>
    </div>
  );
}

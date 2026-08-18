"use client";

import { useEffect, useRef } from "react";

interface MeshBackgroundProps {
  color?: string;
  speed?: number;
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
}

export function MeshBackground({
  color = "#8B5CF6",
  speed = 0.5,
  scale = 1.2,
  opacity = 0.15,
  mouseInteractive = true,
}: MeshBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const target = useRef({ x: 0.5, y: 0.5 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouseMove = (e: MouseEvent) => {
      if (!mouseInteractive) return;
      target.current.x = e.clientX / window.innerWidth;
      target.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Parse hex to rgb
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    let t = 0;
    const draw = () => {
      t += 0.008 * speed;
      // Smooth mouse follow
      mouse.current.x += (target.current.x - mouse.current.x) * 0.05;
      mouse.current.y += (target.current.y - mouse.current.y) * 0.05;

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const blobs = [
        { x: mouse.current.x * w, y: mouse.current.y * h, r: w * 0.55 * scale },
        { x: Math.sin(t * 0.7) * w * 0.25 + w * 0.5, y: Math.cos(t * 0.5) * h * 0.25 + h * 0.3, r: w * 0.4 * scale },
        { x: Math.cos(t * 0.4) * w * 0.3 + w * 0.7, y: Math.sin(t * 0.6) * h * 0.3 + h * 0.7, r: w * 0.35 * scale },
        { x: Math.sin(t * 0.9 + 1) * w * 0.2 + w * 0.2, y: Math.cos(t * 0.3 + 2) * h * 0.2 + h * 0.6, r: w * 0.3 * scale },
      ];

      for (const blob of blobs) {
        const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
        grad.addColorStop(0, `rgba(${r},${g},${b},${opacity})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      ro.disconnect();
    };
  }, [color, speed, scale, opacity, mouseInteractive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

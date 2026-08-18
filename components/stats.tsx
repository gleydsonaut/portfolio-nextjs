"use client"

import { useEffect, useRef, useState } from "react"

interface StatProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let frame = 0
    const totalFrames = Math.round(duration / 16)
    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))
      if (frame >= totalFrames) {
        setCount(target)
        clearInterval(counter)
      }
    }, 16)
    return () => clearInterval(counter)
  }, [target, start, duration])

  return count
}

function StatItem({ value, suffix, prefix, label, start }: StatProps & { start: boolean }) {
  const count = useCountUp(value, start)
  return (
    <div className="text-center p-6 bg-white border border-slate-200 shadow-sm rounded-xl">
      <div className="text-4xl font-bold text-[#4f46e5] mb-2 tabular-nums">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm font-medium text-slate-600 text-balance">{label}</div>
    </div>
  )
}

export function Stats() {
  const [start, setStart] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
      <StatItem value={2} suffix="+" label="Anos de Experiência" start={start} />
      <StatItem value={20} suffix="+" label="Integrações via API Entregues" start={start} />
      <StatItem value={15} suffix="h" prefix="+" label="Horas Economizadas / Semana" start={start} />
      <StatItem value={100} suffix="%" label="Jornada do Cliente Automatizada" start={start} />
    </div>
  )
}

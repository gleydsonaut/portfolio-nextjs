"use client"

import { useEffect, useRef, useState } from "react"

interface SkillProps {
  name: string
  percentage: number
}

function SkillItem({ name, percentage, start, delay }: SkillProps & { start: boolean; delay: number }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-700">{name}</span>
        <span className="text-sm text-slate-600 tabular-nums">{percentage}%</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-[#4f46e5] transition-[width] duration-1000 ease-out"
          style={{
            width: start ? `${percentage}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export function Skills() {
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
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: "n8n e automação de processos comerciais", percentage: 98 },
    { name: "APIs REST, webhooks e OAuth", percentage: 95 },
    { name: "CRM, funil, lead scoring e RevOps", percentage: 94 },
    { name: "WhatsApp Business API e chatbots", percentage: 90 },
    { name: "LLMs, agentes de IA e prompt engineering", percentage: 90 },
    { name: "Kommo CRM, RD Station e integrações de vendas", percentage: 92 },
    { name: "Power Automate, Make e Zapier", percentage: 88 },
    { name: "Google Sheets, dashboards e dados operacionais", percentage: 86 },
    { name: "JavaScript, Python e scripts de automação", percentage: 85 },
    { name: "Linux, VPS, Docker, Cloudflare e GitHub", percentage: 80 },
  ]

  return (
    <section className="py-16 md:py-24" id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">Minhas Habilidades</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-pretty text-lg">
          Principais competências técnicas e operacionais aplicadas a automação, CRM, RevOps, integrações e IA aplicada
          a negócios.
        </p>
      </div>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, i) => (
          <SkillItem key={skill.name} {...skill} start={start} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}

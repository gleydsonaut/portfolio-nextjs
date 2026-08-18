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
    { name: "n8n & Automação de Processos", percentage: 98 },
    { name: "APIs REST, Webhooks & OAuth", percentage: 95 },
    { name: "LLMs, RAG & Agentes Autônomos", percentage: 90 },
    { name: "Kommo CRM & Integrações de Vendas", percentage: 92 },
    { name: "WhatsApp API & Chatbots (TypeBot/ManyChat)", percentage: 88 },
    { name: "JavaScript (Node.js) & Lógica de Programação", percentage: 85 },
    { name: "Infraestrutura (Linux, VPS, Docker, Cloudflare)", percentage: 80 },
    { name: "Python & Scripts (Claude/Codex)", percentage: 75 },
    { name: "Prompt Engineering Especializado (SEO/Marketing)", percentage: 90 },
  ]

  return (
    <section className="py-16 md:py-24" id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">Minhas Habilidades</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-pretty text-lg">
          Especialista em automação de processos, integração de sistemas e implementação de agentes inteligentes. Veja
          meus principais domínios técnicos e níveis de proficiência.
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

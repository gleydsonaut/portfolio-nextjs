import type React from "react"
import { Workflow, Bot, Plug, MessageSquare, Database, LineChart } from "lucide-react"
import { AnimatedGlowCard } from "@/components/ui/animated-glow-feature-card"

export function Services() {
  return (
    <section className="py-16 md:py-24" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">O Que Eu Faço</h2>
        <p className="text-slate-600 font-medium max-w-2xl mx-auto text-pretty text-lg">
          Atuo na ponte entre negócio, tecnologia e operação, desenhando fluxos que conectam CRM, atendimento,
          marketing, vendas e dados. Meu foco é transformar gargalos comerciais em automações rastreáveis, escaláveis e
          úteis para decisão.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatedGlowCard
          icon={<Workflow size={24} />}
          title="Automação de Processos Comerciais"
          description="Criação de fluxos em n8n, Make, Zapier e Power Automate para reduzir tarefas repetitivas, padronizar rotinas e aumentar a eficiência da operação."
        />
        <AnimatedGlowCard
          icon={<Database size={24} />}
          title="CRM, Funil e Lead Scoring"
          description="Estruturação de campos, pipelines, regras de qualificação e distribuição de leads para melhorar priorização comercial e visibilidade do funil."
        />
        <AnimatedGlowCard
          icon={<Bot size={24} />}
          title="Agentes de IA para Atendimento e Qualificação"
          description="Implementação de agentes com LLMs para responder, qualificar, classificar intenção de compra e apoiar o time comercial com contexto."
        />
        <AnimatedGlowCard
          icon={<Plug size={24} />}
          title="Integrações via APIs, Webhooks e n8n"
          description="Conexão entre CRM, plataformas digitais, planilhas, sistemas de pagamento e ferramentas de atendimento usando APIs REST e webhooks."
        />
        <AnimatedGlowCard
          icon={<MessageSquare size={24} />}
          title="WhatsApp Business API e Jornadas Automatizadas"
          description="Automação de onboarding, pós-compra, recuperação de carrinho, follow-up e atendimento inicial com rastreabilidade no CRM."
        />
        <AnimatedGlowCard
          icon={<LineChart size={24} />}
          title="Dashboards Operacionais e Rastreabilidade"
          description="Organização de dados, indicadores e relatórios para acompanhar funil, SLA, origem dos leads, status das automações e gargalos da operação."
        />
      </div>
    </section>
  )
}

import type React from "react"
import { Workflow, Bot, Plug, MessageSquare, Database, LineChart } from "lucide-react"
import { AnimatedGlowCard } from "@/components/ui/animated-glow-feature-card"

export function Services() {
  return (
    <section className="py-16 md:py-24" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">O Que Eu Faço</h2>
        <p className="text-slate-600 font-medium max-w-2xl mx-auto text-pretty text-lg">
          Mapeio processos e construo automações que conectam atendimento, CRM e jornada do lead. O foco é reduzir
          tarefas manuais, qualificar contatos e acompanhar a operação para aprimorar os fluxos continuamente.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatedGlowCard
          icon={<Workflow size={24} />}
          title="Automação de Processos Comerciais"
          description="Mapeamento de rotinas e criação de fluxos no n8n para automatizar tarefas, padronizar etapas e melhorar a eficiência operacional."
        />
        <AnimatedGlowCard
          icon={<Database size={24} />}
          title="CRM, Funil e Lead Scoring"
          description="Pré-qualificação, segmentação e acompanhamento de leads ao longo da jornada, com informações organizadas para apoiar o time comercial."
        />
        <AnimatedGlowCard
          icon={<Bot size={24} />}
          title="Agentes de IA para Atendimento e Qualificação"
          description="Criação de agentes no WhatsApp com prompts e lógica conversacional para atender contatos, identificar necessidades e qualificar leads."
        />
        <AnimatedGlowCard
          icon={<Plug size={24} />}
          title="Integrações via APIs, Webhooks e n8n"
          description="Integração de WhatsApp API, n8n e CRM por APIs REST e webhooks para manter dados e etapas da jornada conectados."
        />
        <AnimatedGlowCard
          icon={<MessageSquare size={24} />}
          title="WhatsApp Business API e Jornadas Automatizadas"
          description="Automação de jornadas de atendimento e relacionamento, do primeiro contato ao acompanhamento do lead, com contexto registrado no CRM."
        />
        <AnimatedGlowCard
          icon={<LineChart size={24} />}
          title="Monitoramento e Melhoria Contínua"
          description="Acompanhamento das automações e análise da operação para identificar retrabalho, ajustar fluxos e melhorar a rastreabilidade dos processos."
        />
      </div>
    </section>
  )
}

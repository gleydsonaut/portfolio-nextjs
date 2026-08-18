import type React from "react"
import { Workflow, Bot, Plug, MessageSquare, Database, LineChart } from "lucide-react"
import { AnimatedGlowCard } from "@/components/ui/animated-glow-feature-card"

export function Services() {
  return (
    <section className="py-16 md:py-24" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">O Que Eu Faço</h2>
        <p className="text-slate-600 font-medium max-w-2xl mx-auto text-pretty text-lg">
          Do primeiro contato do lead à entrega final, conecto ferramentas, dados e IA para que sua operação rode no
          piloto automático. Estas são as frentes em que atuo:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatedGlowCard
          icon={<Workflow size={24} />}
          title="Automação de Processos"
          description="Fluxos inteligentes em n8n, Make e Zapier que eliminam tarefas repetitivas, reduzem erros e liberam a equipe para o que importa."
        />
        <AnimatedGlowCard
          icon={<Bot size={24} />}
          title="Agentes de IA & LLMs"
          description="Agentes autônomos com LLMs, RAG e Prompt Engineering para atender, qualificar e vender 24/7 com contexto e tom da sua marca."
        />
        <AnimatedGlowCard
          icon={<Plug size={24} />}
          title="Integração de Sistemas & APIs"
          description="Conexão de CRMs, plataformas EAD e WhatsApp API via APIs REST, unindo toda a jornada do cliente ponta a ponta."
        />
        <AnimatedGlowCard
          icon={<MessageSquare size={24} />}
          title="Chatbots & Atendimento Automatizado"
          description="Assistentes no WhatsApp e web que respondem dúvidas, agendam e encaminham para o time humano só quando necessário."
        />
        <AnimatedGlowCard
          icon={<Database size={24} />}
          title="Estruturação & Sincronização de Dados"
          description="Coleta, tratamento e sincronização de dados entre planilhas, bancos e sistemas para manter tudo consistente em tempo real."
        />
        <AnimatedGlowCard
          icon={<LineChart size={24} />}
          title="Dashboards & Relatórios Automáticos"
          description="Painéis e relatórios que se atualizam sozinhos, transformando dados dispersos em indicadores claros para decisão."
        />
      </div>
    </section>
  )
}

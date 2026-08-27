import Image from "next/image"
import { CardWrapper } from "./ui/card-wrapper"

interface ProjectProps {
  title: string
  description: string
  image: string
  technologies: string[]
}

function ProjectCard({ title, description, image, technologies }: ProjectProps) {
  return (
    <CardWrapper className="overflow-hidden group flex flex-col hover:border-[#4f46e5]/40 transition-colors bg-white border border-slate-200 shadow-sm p-0 rounded-2xl">
      <div className="relative aspect-video mb-4 rounded-t-2xl overflow-hidden bg-slate-50 border-b border-slate-200">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Workflow n8n: ${title}`}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 pt-2 flex-1 flex flex-col">
        <h3 className="text-lg font-bold group-hover:text-[#4f46e5] transition-colors mb-2 text-balance text-slate-900">{title}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-1 text-pretty font-medium">{description}</p>
        <div className="mt-auto">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Tecnologias utilizadas:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-[#4f46e5] border border-indigo-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

export function Projects() {
  const projects: ProjectProps[] = [
    {
      title: "Lead Scoring e Distribuição no Kommo CRM",
      description:
        "Sistema de pontuação para classificar leads por comportamento, intenção de compra e maturidade, direcionando contatos para o pipeline correto e apoiando a priorização do time comercial.",
      image: "/workflows/image1.png",
      technologies: ["n8n", "Webhooks", "JavaScript", "Kommo CRM", "HTTP Requests"],
    },
    {
      title: "Agente de IA para Qualificação via WhatsApp",
      description:
        "Fluxo com IA para atendimento inicial, coleta de informações, identificação de dor, qualificação do lead e encaminhamento para o time comercial com contexto organizado.",
      image: "/workflows/image2.png",
      technologies: ["WhatsApp Business API", "n8n", "LLMs", "APIs REST", "CRM"],
    },
    {
      title: "Onboarding e Pós-compra Automatizados",
      description:
        "Automação para acionar mensagens, liberar acessos, atualizar CRM e acompanhar a jornada após a compra, reduzindo falhas manuais e melhorando experiência do cliente.",
      image: "/workflows/image3.png",
      technologies: ["n8n", "WhatsApp Business API", "Kommo CRM", "Hotmart", "Curseduca"],
    },
    {
      title: "Sincronização de Alunos (EAD p/ CRM)",
      description:
        "Rotina automatizada para buscar dados em lotes, atualizar status, sincronizar informações e manter a jornada do aluno refletida no CRM.",
      image: "/workflows/image4.png",
      technologies: ["n8n", "Cron", "Batches", "Curseduca", "Kommo CRM", "JavaScript"],
    },
    {
      title: "Recuperação de Carrinho Abandonado",
      description:
        "Fluxo que recebe eventos de abandono, aguarda o momento correto, valida se a compra foi concluída e aciona uma régua de recuperação personalizada.",
      image: "/workflows/image5.png",
      technologies: ["n8n", "Webhooks", "Wait Node", "JavaScript", "HTTP Requests"],
    },
    {
      title: "Dashboard Operacional de Funil e Automações",
      description:
        "Mapeamento de indicadores para acompanhar origem dos leads, etapas do funil, SLA, status de automações e gargalos entre marketing, vendas e pós-venda.",
      image: "/workflows/image6.png",
      technologies: ["CRM", "Google Sheets", "APIs", "n8n", "Dashboards operacionais"],
    },
  ]

  return (
    <section className="py-16 md:py-24" id="works">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">Projetos em Destaque</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-pretty text-lg">
          Projetos reais de automação aplicados a CRM, funil comercial, plataformas digitais, WhatsApp Business API e
          operações de venda. Cada fluxo foi pensado para reduzir trabalho manual, melhorar tempo de resposta e dar
          mais visibilidade à jornada do lead.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

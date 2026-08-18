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
      title: "Datar Etapas do Lead na Kommo",
      description:
        "Recebe um webhook quando a etapa de um lead é alterada no Kommo CRM, calcula datas e prazos de forma automática e atualiza as informações do lead no sistema.",
      image: "/workflows/image1.png",
      technologies: ["n8n", "Webhooks", "JavaScript", "Kommo CRM", "HTTP Requests"],
    },
    {
      title: "LinkedIn Post Automático",
      description:
        "Acionado diariamente para ler um feed RSS de notícias. Usa a IA do Google Gemini para gerar um post atrativo e publica sozinho no LinkedIn.",
      image: "/workflows/image2.png",
      technologies: ["n8n", "Schedule", "RSS Feed", "LangChain", "Google Gemini", "API LinkedIn"],
    },
    {
      title: "Integração Hotmart (Eventos)",
      description:
        "Captura eventos em tempo real da Hotmart de aprovação de compras ou cancelamentos, separa a lógica por tipo de evento e dispara atualizações para os sistemas internos.",
      image: "/workflows/image3.png",
      technologies: ["n8n", "Webhooks Hotmart", "JavaScript", "Switch/If", "HTTP Requests"],
    },
    {
      title: "Sincronização de Alunos (EAD p/ CRM)",
      description:
        "Roda de forma autônoma a cada 8 horas para buscar informações em massa na Curseduca, processa os dados em lotes e sincroniza as atualizações no funil correto do Kommo CRM.",
      image: "/workflows/image4.png",
      technologies: ["n8n", "Cron", "Batches", "Curseduca", "JavaScript", "HTTP Requests"],
    },
    {
      title: "Recuperação de Carrinho Abandonado",
      description:
        "Recebe o alerta de carrinho abandonado, aguarda um tempo pré-determinado, revalida as condições e dispara processos de recuperação de venda caso o cliente ainda não tenha comprado.",
      image: "/workflows/image5.png",
      technologies: ["n8n", "Webhooks", "Wait Node", "JavaScript", "HTTP Requests"],
    },
    {
      title: "Automação de Renovação de Planos",
      description:
        "Roda automaticamente validando e consultando dados de renovação no Google Sheets, junta essas informações com outros sistemas e aciona os procedimentos de renovação e lembrete.",
      image: "/workflows/image6.png",
      technologies: ["n8n", "Schedule", "Google Sheets", "Merge", "JavaScript", "HTTP Requests"],
    },
  ]

  return (
    <section className="py-16 md:py-24" id="works">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">Projetos em Destaque</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-pretty text-lg">
          Alguns dos fluxos e automações que desenvolvi em produção com n8n. Cada projeto demonstra integrações reais
          entre CRMs, plataformas de venda, IA e WhatsApp API.
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

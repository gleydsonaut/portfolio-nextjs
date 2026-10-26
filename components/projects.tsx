"use client"

import { useState } from "react"
import { ArrowUpRight, Layers3, MonitorCog, X } from "lucide-react"
import { CardWrapper } from "./ui/card-wrapper"
import { WorkflowPreview } from "./workflow-preview"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"

type ProjectCategory = "workflows" | "systems"

interface ProjectProps {
  title: string
  description: string
  image: string
  video?: string
  imageWidth: number
  imageHeight: number
  focusY: number
  technologies: string[]
  focusPoints: { x: number; y: number }[]
  category: ProjectCategory
  details: string[]
  outcome: string
}

function ProjectCard({ project, onOpen }: { project: ProjectProps; onOpen: (project: ProjectProps) => void }) {
  const { title, description, image, video, imageWidth, imageHeight, focusY, technologies } = project
  return (
    <CardWrapper onClick={() => onOpen(project)} role="button" tabIndex={0} onKeyDown={(event: React.KeyboardEvent) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onOpen(project) } }} className="overflow-hidden group flex flex-col cursor-pointer hover:border-[#4f46e5]/50 hover:shadow-lg hover:shadow-indigo-950/5 transition-all bg-white border border-slate-200 shadow-sm !p-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
      <div className="relative aspect-video mb-4 rounded-t-2xl overflow-hidden bg-[#151515] border-b border-slate-200">
        {video ? (
          <video
            src={video}
            poster={image}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            aria-label={`Prévia em vídeo do sistema ${title}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <WorkflowPreview image={image} imageWidth={imageWidth} imageHeight={imageHeight} title={title} focusY={focusY} />
        )}
      </div>
      <div className="p-6 pt-2 flex-1 flex flex-col">
        <h3 className="text-lg font-bold group-hover:text-[#4f46e5] transition-colors mb-2 text-balance text-slate-900">{title}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-1 text-pretty font-medium">{description}</p>
        <div className="mt-auto">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Tecnologias utilizadas:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-[#4f46e5] border border-indigo-100">
                {tech}
              </span>
            ))}
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">
            Ver projeto completo <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </div>
      </div>
    </CardWrapper>
  )
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("workflows")
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null)

  const projects: ProjectProps[] = [
    {
      title: "Nexo CRM — CRM e automações para WhatsApp",
      description: "Sistema de gestão com painel, sessões, funil comercial, fluxos de conversa, editor visual, transmissões e configurações.",
      image: "/systems/nexo-poster.png", video: "/systems/nexo-tour.webm",
      imageWidth: 1440, imageHeight: 900, focusY: 50, focusPoints: [],
      category: "systems",
      details: [
        "Painel: apresenta o estado das sessões e os atalhos da operação.",
        "Sessões: reúne os canais de WhatsApp cadastrados e seu estado de conexão.",
        "Funil comercial: organiza oportunidades em etapas do CRM.",
        "Fluxos de conversa: lista automações criadas no sistema.",
        "Editor visual: permite montar as etapas de uma conversa com blocos conectados.",
        "Transmissões: concentra o envio de campanhas.",
        "Configurações: reúne os ajustes da operação.",
      ],
      outcome: "Uma interface para acompanhar canais, oportunidades e automações em um só lugar.",
      technologies: ["Next.js", "React", "Prisma", "MySQL", "Socket.IO", "Baileys"],
    },
    {
      title: "Distribuição de Leads do Typebot em Round-robin",
      description: "Fluxo que recebe uma resposta do Typebot, seleciona um atendente em round-robin e encaminha a notificação apenas para a pessoa responsável pelo lead.",
      image: "/workflows/typebot-round-robin.png", imageWidth: 1628, imageHeight: 1020,
      focusY: 74,
      focusPoints: [],
      category: "workflows",
      details: ["Recebe o evento quando o formulário do Typebot é preenchido e extrai o nome do lead.", "Escolhe um atendente por evento com a regra de distribuição round-robin.", "Consulta o ID do atendente no BotConversa pelo telefone selecionado e envia a notificação ao responsável."],
      outcome: "Distribui cada novo lead de forma equilibrada e evita notificações para atendentes que não foram selecionados.",
      technologies: ["Typebot", "n8n", "Webhooks", "JavaScript", "BotConversa"],
    },
    {
      title: "Automação de Conteúdo para LinkedIn com IA",
      description: "Pipeline programado que pesquisa referências, cria posts com IA, solicita aprovação por WhatsApp e publica no LinkedIn em texto ou com imagem.",
      image: "/workflows/linkedin-content-automation.png", imageWidth: 2372, imageHeight: 764,
      focusY: 68,
      focusPoints: [],
      category: "workflows",
      details: ["Inicia pela agenda definida, pesquisa posts e prepara o contexto para a geração de conteúdo.", "Usa modelos Gemini para elaborar o post e envia a solicitação de aprovação pelo WhatsApp.", "Após a aprovação, publica no LinkedIn com imagem quando necessário; posts reprovados seguem para a rota de tratamento."],
      outcome: "Centraliza a produção e aprovação de conteúdo, mantendo controle humano antes da publicação.",
      technologies: ["n8n", "Google Gemini", "Apify", "WhatsApp", "Evolution API", "LinkedIn"],
    },
    {
      title: "Lead Scoring e Distribuição no Kommo CRM",
      description: "Sistema de pontuação para classificar leads por comportamento, intenção de compra e maturidade, direcionando contatos para o pipeline correto e apoiando a priorização do time comercial.",
      image: "/workflows/image1.png", imageWidth: 1920, imageHeight: 1007,
      focusY: 51,
      focusPoints: [{ x: 24, y: 51 }, { x: 47, y: 51 }, { x: 70, y: 51 }],
      category: "workflows",
      details: ["Recebe o evento de mudança no Kommo por webhook.", "Prepara e normaliza os dados da etapa do lead.", "Atualiza o lead no Kommo pela API."],
      outcome: "Mantém a etapa e a distribuição dos leads alinhadas automaticamente com as regras comerciais.",
      technologies: ["n8n", "Webhooks", "JavaScript", "Kommo CRM", "HTTP Requests"],
    },
    {
      title: "Agente de IA para Qualificação via WhatsApp",
      description: "Fluxo com IA para atendimento inicial, coleta de informações, identificação de dor, qualificação do lead e encaminhamento para o time comercial com contexto organizado.",
      image: "/workflows/image2.png", imageWidth: 1919, imageHeight: 716,
      focusY: 47,
      focusPoints: [{ x: 3, y: 47 }, { x: 8, y: 47 }, { x: 13, y: 47 }, { x: 18, y: 47 }, { x: 26, y: 47 }, { x: 34, y: 47 }, { x: 40, y: 47 }, { x: 46, y: 47 }, { x: 52, y: 47 }, { x: 58, y: 47 }, { x: 64, y: 47 }, { x: 70, y: 47 }, { x: 76, y: 47 }, { x: 82, y: 47 }, { x: 88, y: 36 }, { x: 94, y: 36 }, { x: 88, y: 57 }, { x: 84, y: 68 }],
      category: "workflows",
      details: ["Inicia o atendimento pelo canal de WhatsApp.", "Reúne contexto e qualifica a intenção do contato.", "Direciona a conversa para a equipe comercial com os dados coletados."],
      outcome: "Organiza o primeiro atendimento e reduz a triagem manual de contatos.",
      technologies: ["WhatsApp Business API", "n8n", "LLMs", "APIs REST", "CRM"],
    },
    {
      title: "Onboarding e Pós-compra Automatizados",
      description: "Automação para acionar mensagens, liberar acessos, atualizar CRM e acompanhar a jornada após a compra, reduzindo falhas manuais e melhorando experiência do cliente.",
      image: "/workflows/image3.png", imageWidth: 1920, imageHeight: 606,
      focusY: 56,
      focusPoints: [{ x: 4, y: 46 }, { x: 12, y: 37 }, { x: 12, y: 57 }, { x: 18, y: 57 }, { x: 23, y: 57 }, { x: 29, y: 57 }, { x: 33, y: 42 }, { x: 38, y: 42 }, { x: 43, y: 42 }, { x: 38, y: 64 }, { x: 48, y: 55 }, { x: 54, y: 55 }, { x: 61, y: 43 }, { x: 66, y: 43 }, { x: 71, y: 43 }, { x: 76, y: 43 }, { x: 81, y: 35 }, { x: 86, y: 35 }, { x: 91, y: 35 }, { x: 66, y: 66 }, { x: 72, y: 66 }, { x: 77, y: 66 }, { x: 82, y: 66 }, { x: 87, y: 78 }, { x: 92, y: 84 }, { x: 97, y: 84 }],
      category: "workflows",
      details: ["Confere evento e dados da compra.", "Libera ou atualiza o acesso à plataforma de ensino.", "Sincroniza cadastro e jornada no CRM e dispara comunicações de pós-compra."],
      outcome: "Conecta compra, acesso e acompanhamento do aluno em um fluxo de pós-venda.",
      technologies: ["n8n", "WhatsApp Business API", "Kommo CRM", "Hotmart", "Curseduca"],
    },
    {
      title: "Sincronização de Alunos (EAD p/ CRM)",
      description: "Rotina automatizada para buscar dados em lotes, atualizar status, sincronizar informações e manter a jornada do aluno refletida no CRM.",
      image: "/workflows/image4.png", imageWidth: 1920, imageHeight: 608,
      focusY: 43,
      focusPoints: [{ x: 4, y: 43 }, { x: 11, y: 43 }, { x: 18, y: 43 }, { x: 25, y: 43 }, { x: 31, y: 43 }, { x: 38, y: 43 }, { x: 44, y: 43 }, { x: 51, y: 43 }, { x: 59, y: 43 }, { x: 66, y: 43 }, { x: 73, y: 43 }, { x: 80, y: 43 }, { x: 87, y: 43 }, { x: 94, y: 22 }, { x: 94, y: 43 }, { x: 94, y: 67 }],
      category: "workflows",
      details: ["Busca registros de alunos em lotes programados.", "Normaliza os dados e identifica o registro correspondente.", "Atualiza status e informações do aluno no CRM."],
      outcome: "Mantém os dados de alunos sincronizados entre a plataforma EAD e o CRM.",
      technologies: ["n8n", "Cron", "Batches", "Curseduca", "Kommo CRM", "JavaScript"],
    },
    {
      title: "Recuperação de Carrinho Abandonado",
      description: "Fluxo que recebe eventos de abandono, aguarda o momento correto, valida se a compra foi concluída e aciona uma régua de recuperação personalizada.",
      image: "/workflows/image5.png", imageWidth: 1920, imageHeight: 523,
      focusY: 45,
      focusPoints: [{ x: 4, y: 42 }, { x: 11, y: 42 }, { x: 17, y: 42 }, { x: 24, y: 42 }, { x: 31, y: 42 }, { x: 38, y: 42 }, { x: 45, y: 42 }, { x: 51, y: 28 }, { x: 51, y: 55 }, { x: 58, y: 55 }, { x: 65, y: 42 }, { x: 72, y: 42 }, { x: 79, y: 42 }, { x: 86, y: 28 }, { x: 86, y: 55 }, { x: 65, y: 69 }, { x: 72, y: 69 }, { x: 79, y: 69 }],
      category: "workflows",
      details: ["Recebe o evento de abandono e verifica os dados da compra.", "Aguarda o intervalo definido e consulta se o pagamento foi concluído.", "Quando a compra não aconteceu, inicia a recuperação pelo CRM."],
      outcome: "Evita mensagens de recuperação para quem já concluiu a compra.",
      technologies: ["n8n", "Webhooks", "Wait Node", "JavaScript", "HTTP Requests"],
    },
    {
      title: "Dashboard Operacional de Funil e Automações",
      description: "Mapeamento de indicadores para acompanhar origem dos leads, etapas do funil, SLA, status de automações e gargalos entre marketing, vendas e pós-venda.",
      image: "/workflows/image6.png", imageWidth: 1920, imageHeight: 604,
      focusY: 51,
      focusPoints: [{ x: 6, y: 51 }, { x: 12, y: 43 }, { x: 12, y: 58 }, { x: 18, y: 43 }, { x: 18, y: 58 }, { x: 23, y: 51 }, { x: 29, y: 51 }, { x: 35, y: 51 }, { x: 41, y: 51 }, { x: 47, y: 51 }, { x: 53, y: 51 }, { x: 59, y: 51 }, { x: 65, y: 51 }, { x: 71, y: 51 }, { x: 77, y: 51 }, { x: 82, y: 51 }, { x: 76, y: 35 }, { x: 86, y: 35 }, { x: 91, y: 35 }, { x: 96, y: 35 }],
      category: "workflows",
      details: ["Consolida informações operacionais em uma visão de funil.", "Acompanha origem, etapa, prazo de atendimento e estado das automações.", "Destaca pontos de acompanhamento entre marketing, vendas e pós-venda."],
      outcome: "Facilita a identificação de gargalos e o acompanhamento da operação comercial.",
      technologies: ["CRM", "Google Sheets", "APIs", "n8n", "Dashboards operacionais"],
    },
  ]

  const visibleProjects = projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-16 md:py-24" id="works">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">Projetos em Destaque</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-pretty text-lg">Automações e sistemas para atendimento, qualificação de leads e integração com CRM. Veja como conecto ferramentas para simplificar tarefas e acompanhar a jornada comercial.</p>
      </div>
      <div className="mb-10 flex justify-center" role="tablist" aria-label="Categorias de projetos">
        {([
          { id: "workflows" as const, label: "Workflows", icon: Layers3 },
          { id: "systems" as const, label: "Sistemas", icon: MonitorCog },
        ]).map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            id={`projects-tab-${id}`}
            type="button"
            role="tab"
            aria-selected={activeCategory === id}
            aria-controls="projects-panel"
            onClick={() => setActiveCategory(id)}
            className={`inline-flex min-h-11 items-center gap-2 border-b-2 px-6 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${activeCategory === id ? "border-indigo-600 text-indigo-700" : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800"}`}
          >
            <Icon size={17} aria-hidden="true" />
            {label}
            <span className={`rounded-full px-2 py-0.5 text-xs ${activeCategory === id ? "bg-indigo-50 text-indigo-700" : "bg-slate-100 text-slate-500"}`}>
              {projects.filter((project) => project.category === id).length}
            </span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.length > 0 ? (
          visibleProjects.map((project) => <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />)
        ) : (
          <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
            <MonitorCog className="mx-auto mb-4 text-indigo-500" size={30} aria-hidden="true" />
            <h3 className="text-lg font-semibold text-slate-900">Novos sistemas em breve</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">Conheça sistemas e demonstrações que conectam atendimento, CRM e automações para apoiar a operação comercial.</p>
          </div>
        )}
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={(open) => { if (!open) setSelectedProject(null) }}>
        {selectedProject && (
          <DialogContent className="max-h-[92vh] w-[calc(100%-24px)] max-w-6xl overflow-y-auto border-slate-200 bg-white p-0 sm:rounded-2xl [&>button]:rounded-full [&>button]:border [&>button]:border-slate-200 [&>button]:bg-white [&>button]:p-1.5 [&>button]:text-slate-900 [&>button]:opacity-100 [&>button]:shadow-sm">
            <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
              <div className="bg-[#151515] p-3 sm:p-5 lg:min-h-[620px] lg:p-7">
                <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-xl bg-[#151515] sm:min-h-[400px] lg:sticky lg:top-0 lg:h-[min(76vh,720px)]">
                  {selectedProject.video ? (
                    <video
                      key={selectedProject.video}
                      src={selectedProject.video}
                      poster={selectedProject.image}
                      controls
                      autoPlay
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={`Demonstração em vídeo do sistema ${selectedProject.title}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <img
                      src={selectedProject.image}
                      alt={`Workflow completo: ${selectedProject.title}`}
                      className="max-h-full max-w-full object-contain"
                      style={{ imageRendering: "auto" }}
                    />
                  )}
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-9">
                <DialogHeader className="mb-7 pr-8 text-left">
                  <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                    {selectedProject.category === "workflows" ? <Layers3 size={14} /> : <MonitorCog size={14} />}
                    {selectedProject.category === "workflows" ? "Workflow" : "Sistema"}
                  </span>
                  <DialogTitle className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="pt-3 text-base leading-relaxed text-slate-600">{selectedProject.description}</DialogDescription>
                </DialogHeader>

                <div className="space-y-7">
                  <section>
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-900">Como funciona</h3>
                    <ol className="space-y-3">
                      {selectedProject.details.map((detail, index) => (
                        <li key={detail} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-700">{index + 1}</span>
                          {detail}
                        </li>
                      ))}
                    </ol>
                  </section>

                  <section className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
                    <h3 className="mb-2 text-sm font-bold text-emerald-900">Resultado</h3>
                    <p className="text-sm leading-relaxed text-emerald-900/80">{selectedProject.outcome}</p>
                  </section>

                  <section>
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-900">Tecnologias</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => <span key={tech} className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">{tech}</span>)}
                    </div>
                  </section>
                  <p className="text-xs leading-relaxed text-slate-400">{selectedProject.video ? "Vídeo gravado em ambiente local de demonstração, com dados fictícios e sem conversas reais." : "A imagem apresenta o fluxo completo em tamanho ampliado. Os detalhes descrevem a finalidade e as etapas principais do projeto."}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}

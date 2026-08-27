import { Button } from "@/components/ui/button"
import { Stats } from "@/components/stats"
import { TechMarquee } from "@/components/tech-marquee"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { ContactForm } from "@/components/contact-form"
import { MeshBackground } from "@/components/mesh-background"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Mail, Download, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
        <MeshBackground color="#4f46e5" speed={0.5} scale={1.2} opacity={0.15} mouseInteractive={true} />
        <div className="container mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              Analista de Automação, CRM e IA Aplicada
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight text-slate-900 tracking-tight">
              Automação, CRM e IA aplicada para
              <span className="block text-[#4f46e5] mt-2">operações comerciais</span>
            </h1>
            <p className="text-slate-600 mb-8 text-lg text-pretty leading-relaxed max-w-xl">
              Sou Gleydson Rodrigues. Estruturo automações, integrações e agentes de IA para conectar CRM, WhatsApp,
              dados e operação comercial. Trabalho com n8n, APIs REST, webhooks, Kommo CRM e LLMs para reduzir tarefas
              manuais, melhorar resposta ao lead e dar mais rastreabilidade ao funil de vendas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#4f46e5] text-white hover:bg-[#4338ca] hover:shadow-lg hover:shadow-indigo-500/25 rounded-full px-8 transition-all duration-300"
              >
                <Link href="#works">Ver projetos</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 rounded-full px-8 shadow-sm transition-all"
              >
                <a href="/Gleydson_Rodrigues_Curriculo.pdf" download="Gleydson_Rodrigues_Curriculo.pdf">
                  <Download size={18} className="mr-2" /> Baixar currículo
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-slate-700 hover:text-slate-900 hover:bg-white rounded-full px-8 transition-all"
              >
                <Link href="#contact">Fale comigo</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square max-w-[400px] mx-auto">
              <Image
                src="/gleydson-perfil.png"
                alt="Gleydson Rodrigues"
                fill
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <Stats />
        </div>
      </section>

      <TechMarquee />

      {/* Other Sections */}
      <div className="container mx-auto px-4">
        <Services />
        <Projects />
        <Skills />

        {/* Contact Section */}
        <section className="py-16 md:py-24" id="contact">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">Vamos Conversar?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-pretty text-lg">
                Se você busca um profissional para estruturar automações, CRM, integrações e IA aplicada à operação
                comercial, vamos conversar. Posso ajudar a transformar gargalos do funil em fluxos mais simples,
                rastreáveis e escaláveis.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              {/* Form */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-slate-900 text-center">Envie uma mensagem</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-32 max-w-5xl mx-auto">
            <div>
              <h4 className="font-semibold mb-6 text-slate-900 text-lg">Navegação</h4>
              <ul className="space-y-4 text-slate-600">
                <li>
                  <Link href="#services" className="hover:text-[#4f46e5] transition-colors font-medium">
                    Atuação
                  </Link>
                </li>
                <li>
                  <Link href="#works" className="hover:text-[#4f46e5] transition-colors font-medium">
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="hover:text-[#4f46e5] transition-colors font-medium">
                    Habilidades
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info (Moved to Footer) */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 text-[#4f46e5]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">E-mail</h3>
                  <a href="mailto:gleydsonaut@gmail.com" className="text-slate-600 hover:text-[#4f46e5] transition-colors">
                    gleydsonaut@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 text-[#4f46e5] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">WhatsApp</h3>
                  <a
                    href="https://wa.me/5521959435760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-[#4f46e5] transition-colors"
                  >
                    +55 (21) 95943-5760
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 text-[#4f46e5] flex items-center justify-center">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/gleydsonrodrigues-aut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-[#4f46e5] transition-colors"
                  >
                    /in/gleydsonrodrigues-aut
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-12 pt-8 text-center text-slate-600">
            <p>© {new Date().getFullYear()} Gleydson Rodrigues. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

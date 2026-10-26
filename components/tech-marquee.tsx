"use client";

import React from 'react';
import { PlusIcon } from "lucide-react";

type Logo = {
  src?: string;
  alt: string;
  name: string;
};

const technologies: Logo[] = [
  // Original / Requested
  { name: "n8n",          alt: "n8n",          src: "https://svgl.app/library/n8n.svg" },
  { name: "Make",         alt: "Make",          src: "https://cdn.simpleicons.org/make" },
  { name: "Zapier",       alt: "Zapier",        src: "https://cdn.simpleicons.org/zapier" },
  { name: "Power Automate", alt: "Power Automate", src: "https://www.google.com/s2/favicons?domain=powerautomate.microsoft.com&sz=128" },
  { name: "TypeBot",      alt: "TypeBot",       src: "https://www.google.com/s2/favicons?domain=typebot.io&sz=128" },
  { name: "ManyChat",     alt: "ManyChat",      src: "https://www.google.com/s2/favicons?domain=manychat.com&sz=128" },
  { name: "HubSpot",      alt: "HubSpot",       src: "https://www.google.com/s2/favicons?domain=hubspot.com&sz=128" },
  { name: "Pipefy",       alt: "Pipefy",        src: "https://www.google.com/s2/favicons?domain=pipefy.com&sz=128" },
  { name: "Pipedrive",    alt: "Pipedrive",     src: "https://www.google.com/s2/favicons?domain=pipedrive.com&sz=128" },
  { name: "Kommo",        alt: "Kommo",         src: "https://www.google.com/s2/favicons?domain=kommo.com&sz=128" },
  { name: "ActiveCampaign",alt:"ActiveCampaign",src: "https://www.google.com/s2/favicons?domain=activecampaign.com&sz=128" },
  { name: "WhatsApp API", alt: "WhatsApp API",  src: "https://svgl.app/library/whatsapp-icon.svg" },
  { name: "OpenAI",       alt: "OpenAI",        src: "https://svgl.app/library/openai.svg" },
  { name: "Claude API",   alt: "Claude API",    src: "https://cdn.simpleicons.org/anthropic" },
  { name: "Google Gemini",alt: "Gemini",        src: "https://svgl.app/library/gemini.svg" },
  { name: "LangChain",    alt: "LangChain",     src: "https://svgl.app/library/langchain-logo.svg" },
  { name: "Hotmart",      alt: "Hotmart",       src: "https://svgl.app/library/hotmart.svg" },
  { name: "Circle",       alt: "Circle",        src: "https://www.google.com/s2/favicons?domain=circle.so&sz=128" },
  { name: "Curseduca",    alt: "Curseduca",     src: "https://www.google.com/s2/favicons?domain=curseduca.com&sz=128" },
  { name: "Google Sheets",alt: "Google Sheets", src: "https://cdn.simpleicons.org/googlesheets" },
  { name: "JavaScript",   alt: "JavaScript",    src: "https://svgl.app/library/javascript.svg" },
  { name: "Python",       alt: "Python",        src: "https://cdn.simpleicons.org/python" },
  { name: "Docker",       alt: "Docker",        src: "https://cdn.simpleicons.org/docker" },
  { name: "Cloudflare",   alt: "Cloudflare",    src: "https://cdn.simpleicons.org/cloudflare" },
  { name: "GitHub",       alt: "GitHub",        src: "https://cdn.simpleicons.org/github" },
  // New batch
  { name: "Hubla",        alt: "Hubla",         src: "https://www.google.com/s2/favicons?domain=hubla.com&sz=128" },
  { name: "Antigravity",  alt: "Antigravity",   src: "https://www.google.com/s2/favicons?domain=antigravity.google&sz=128" },
  { name: "Codex",        alt: "Codex",         src: "https://www.google.com/s2/favicons?domain=openai.com&sz=128" },
  { name: "Supabase",     alt: "Supabase",      src: "https://cdn.simpleicons.org/supabase" },
  { name: "PostgreSQL",   alt: "Postgres",      src: "https://cdn.simpleicons.org/postgresql" },
  { name: "Sendflow",     alt: "Sendflow",      src: "https://www.google.com/s2/favicons?domain=sendflow.com.br&sz=128" },
  { name: "RD Station",   alt: "RD Station",    src: "https://www.google.com/s2/favicons?domain=rdstation.com&sz=128" },
  { name: "ClickUp",      alt: "ClickUp",       src: "https://cdn.simpleicons.org/clickup" },
  { name: "Slack",        alt: "Slack",         src: "https://svgl.app/library/slack.svg" },
  { name: "Postman",      alt: "Postman",       src: "https://cdn.simpleicons.org/postman" },
  { name: "BotConversa",  alt: "BotConversa",   src: "https://www.google.com/s2/favicons?domain=botconversa.com.br&sz=128" },
  { name: "VS Code",      alt: "VS Code",       src: "https://svgl.app/library/vscode.svg" },
];

function TechItem({ tech }: { tech: Logo }) {
  const [broken, setBroken] = React.useState(!tech.src);
  return (
    <div className="relative flex items-center justify-center border border-slate-200 px-6 py-4 min-w-[160px] bg-white">
      <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-4 text-slate-400" strokeWidth={1} />
      
      <div className="flex items-center gap-2">
        {!broken && tech.src ? (
          <img
            alt={tech.alt}
            className="pointer-events-none h-6 select-none object-contain transition-opacity grayscale hover:grayscale-0"
            src={tech.src}
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="h-6 w-6 rounded bg-indigo-100 text-[#4f46e5] flex items-center justify-center text-[10px] font-bold">
            {tech.name.charAt(0)}
          </div>
        )}
        
        <span className="text-sm font-semibold text-slate-700 tracking-tight whitespace-nowrap">
          {tech.name}
        </span>
      </div>
    </div>
  );
}

export function TechMarquee() {
  const repeated = [...technologies, ...technologies, ...technologies, ...technologies];
  return (
    <div className="py-12 bg-slate-50 border-y border-slate-200 overflow-hidden relative flex flex-col items-center mt-12">
      <div className="text-center px-4 mb-6">
        <p className="text-slate-500 text-xs tracking-widest uppercase font-medium">Integrações & Tecnologias</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mt-3">
          Ferramentas que conecto para transformar operação em fluxo
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-sm md:text-base">
          Atuo com ferramentas de automação, CRM, atendimento, dados e IA para construir fluxos integrados entre
          marketing, vendas, pós-venda e gestão operacional.
        </p>
      </div>

      <div className="absolute inset-y-0 left-0 w-16 md:w-1/4 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-1/4 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden w-full group py-4">
        <div className="flex shrink-0 animate-scroll group-hover:[animation-play-state:paused] [animation-duration:120s]">
          {repeated.map((tech, i) => (
            <TechItem key={i} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

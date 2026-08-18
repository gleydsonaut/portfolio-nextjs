"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all">
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden transition-all duration-300">
        <div className="flex items-center justify-between h-16 px-6">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-[#4f46e5] border border-indigo-100 font-bold text-lg shadow-sm">
              GR
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-900 hidden sm:block">Gleydson Rodrigues</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Serviços
            </Link>
            <Link href="#works" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Projetos
            </Link>
            <Link href="#skills" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Habilidades
            </Link>
            <div className="flex items-center gap-4 ml-4">
              <Button asChild className="rounded-full bg-[#4f46e5] text-white hover:bg-[#4338ca] shadow-sm">
                <Link href="#contact">Fale Comigo</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2 focus:outline-none bg-slate-50 rounded-full border border-slate-200">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100 border-t border-slate-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col space-y-2 px-6 pt-4 pb-6">
            <Link
              href="#services"
              className="text-slate-600 hover:text-indigo-600 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="#works"
              className="text-slate-600 hover:text-indigo-600 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projetos
            </Link>
            <Link
              href="#skills"
              className="text-slate-600 hover:text-indigo-600 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Habilidades
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full rounded-full bg-[#4f46e5] hover:bg-[#4338ca] text-white shadow-sm">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Fale Comigo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

import React from 'react';

export interface AnimatedGlowCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export function AnimatedGlowCard({ icon, title, description }: AnimatedGlowCardProps) {
  return (
    <div className="w-full h-full group">
      <div className="relative flex h-full flex-col p-6 rounded-xl overflow-hidden bg-white text-slate-900 border border-slate-200 shadow-sm transition-colors">
        
        {/* 1. Borde con luz giratoria animada */}
        <div 
          className="absolute -inset-[100%] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0 300deg, #4f46e5 360deg)'
          }}
        />

        {/* 2. Fondo con degradado (Máscara interna) */}
        <div 
          className="absolute inset-[1px] rounded-[11px] z-0 block bg-white" 
        />

        {/* 3. Contenido de la Card */}
        <div className="relative z-10 flex flex-col items-start h-full flex-1">
          {icon && (
            <div className="text-[#4f46e5] mb-4 bg-indigo-50 p-3 rounded-lg border border-indigo-100">
              {icon}
            </div>
          )}

          <h3 className="text-lg font-bold mb-2 text-slate-900 tracking-tight">
            {title}
          </h3>

          <p className="text-slate-600 text-pretty flex-1 text-sm font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

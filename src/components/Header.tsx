'use client';

import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a 
          href="https://unumpeople.com.br/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="relative w-10 h-10">
            <Image 
              src="/images/logo_simbolo.png" 
              alt="Unum Simbolo" 
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-32 h-8">
            <Image 
              src="/images/logo_texto.png" 
              alt="Unum People" 
              fill
              className="object-contain"
            />
          </div>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <span className="text-xs font-bold text-unum-gray uppercase tracking-widest border-b-2 border-unum-blue pb-1">
            Ferramenta de Portfólio
          </span>
        </nav>
      </div>
    </header>
  );
}

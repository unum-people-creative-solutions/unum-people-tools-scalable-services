'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';

interface HeaderProps {
  onOpenHelp?: () => void;
  toolName?: string;
}

export function Header({ onOpenHelp, toolName }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link 
          href="/" 
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
        </Link>
        
        <nav className="flex items-center gap-4 md:gap-8">
          {onOpenHelp && (
            <button
              onClick={onOpenHelp}
              className="flex items-center gap-2 text-xs font-bold text-unum-gray hover:text-unum-blue uppercase tracking-widest transition-colors group"
            >
              <HelpCircle size={18} className="text-unum-slate group-hover:text-unum-blue transition-colors" />
              <span className="hidden sm:inline">Ajuda</span>
            </button>
          )}
          {toolName && (
            <>
              <div className="h-6 w-px bg-gray-200 hidden sm:block" />
              <span className="hidden md:inline text-xs font-bold text-unum-gray uppercase tracking-widest border-b-2 border-unum-blue pb-1">
                {toolName}
              </span>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

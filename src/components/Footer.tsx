'use client';

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-unum-blue text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-white/10 pb-8 mb-8">
          <div>
            <a 
              href="https://unumpeople.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <h3 className="text-lg font-bold mb-2">Unum People Creative Solutions</h3>
            </a>
            <p className="text-sm text-blue-100 max-w-sm leading-relaxed">
              Conectar e aproximar pessoas através da tecnologia. Soluções SaaS inovadoras para o seu negócio.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a 
              href="https://unumpeople.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="relative w-12 h-12 brightness-0 invert">
                <Image 
                  src="/images/logo_simbolo.png" 
                  alt="Unum Simbolo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-28 h-6 brightness-0 invert">
                <Image 
                  src="/images/logo_texto.png" 
                  alt="Unum People" 
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-blue-300 uppercase tracking-widest font-semibold">
          <p>© 2026 Unum People. Todos os direitos reservados.</p>
          <p>SaaS Innovative Solutions</p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CookieBanner } from '../components/CookieBanner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Unum People | Ferramentas de Estratégia',
  description: 'Ecossistema de ferramentas estratégicas da Unum People Creative Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

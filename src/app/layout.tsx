import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Service Portfolio Mapping | Unum People',
  description: 'Mapeamento estratégico de portfólio de serviços - Unum People Creative Solutions',
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
      </body>
    </html>
  );
}

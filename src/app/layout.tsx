import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { CookieBanner } from '../components/CookieBanner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Unum People | Ferramentas de Estratégia',
  description: 'Ecossistema de ferramentas estratégicas da Unum People Creative Solutions',
  other: {
    'google-adsense-account': 'ca-pub-7103356380607005',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7103356380607005"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

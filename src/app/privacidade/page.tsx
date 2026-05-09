import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const metadata = {
  title: 'Política de Privacidade | Unum People',
  description: 'Transparência e proteção de dados de acordo com a LGPD.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/30">
      <Header />
      
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-4xl mx-auto py-12">
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-unum-blue uppercase tracking-tighter mb-4">
              Política de Privacidade
            </h1>
            <p className="text-unum-gray font-medium uppercase tracking-widest text-xs">
              Última atualização: Maio de 2026
            </p>
          </header>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 prose prose-slate max-w-none">
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4 text-unum-blue">
                <ShieldCheck size={24} />
                <h2 className="text-2xl font-bold m-0 text-unum-blue">Nosso Compromisso</h2>
              </div>
              <p className="text-unum-gray leading-relaxed">
                A Unum People Creative Solutions valoriza a sua privacidade. Esta política descreve como tratamos as informações coletadas em nossas ferramentas estratégicas, em total conformidade com a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4 text-unum-blue">
                <Lock size={24} />
                <h2 className="text-2xl font-bold m-0 text-unum-blue">Coleta de Dados</h2>
              </div>
              <p className="text-unum-gray leading-relaxed">
                Nossas ferramentas de análise (como o Mapeamento de Portfólio) operam prioritariamente com <strong>armazenamento local (Local Storage)</strong>. Isso significa que os dados dos serviços inseridos ficam armazenados no seu navegador e não em nossos servidores, garantindo que você tenha controle total sobre sua estratégia.
              </p>
              <ul className="list-disc pl-5 text-unum-gray space-y-2 mt-4">
                <li>Dados de navegação anônimos para melhoria da ferramenta.</li>
                <li>Preferências de interface.</li>
                <li>Dados de portfólio (armazenados localmente no seu dispositivo).</li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4 text-unum-blue">
                <Eye size={24} />
                <h2 className="text-2xl font-bold m-0 text-unum-blue">Uso das Informações</h2>
              </div>
              <p className="text-unum-gray leading-relaxed">
                As informações coletadas são utilizadas exclusivamente para:
              </p>
              <ul className="list-disc pl-5 text-unum-gray space-y-2 mt-4">
                <li>Prover as funcionalidades da ferramenta.</li>
                <li>Analisar o uso técnico para correções de bugs.</li>
                <li>Melhorar a experiência do usuário.</li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4 text-unum-blue">
                <FileText size={24} />
                <h2 className="text-2xl font-bold m-0 text-unum-blue">Seus Direitos</h2>
              </div>
              <p className="text-unum-gray leading-relaxed">
                Como titular dos dados, você tem direito a solicitar acesso, correção ou exclusão de quaisquer dados pessoais que possamos ter. Como utilizamos armazenamento local, você mesmo pode excluir seus dados limpando o cache/dados de navegação do seu browser.
              </p>
            </section>

            <footer className="mt-12 pt-8 border-t border-gray-100 text-sm text-unum-gray italic">
              Dúvidas sobre privacidade? Entre em contato pelo e-mail: <a href="mailto:contato@unumpeople.com.br" className="text-unum-blue font-bold not-italic hover:underline">contato@unumpeople.com.br</a>
            </footer>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

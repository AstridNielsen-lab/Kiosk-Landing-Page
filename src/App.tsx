import React from 'react';
import { UmbrellaIcon, ShoppingCart, Clock, BarChart3, Settings, Smartphone, Database, Code, Server, Apple as Api, CheckCircle2, ExternalLink, MessageCircle } from 'lucide-react';

function App() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511992946628', '_blank');
  };

  const handleAccessApp = () => {
    window.open('https://beach-kiosk.vercel.app', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <UmbrellaIcon size={32} className="text-yellow-300" />
            <div>
              <h1 className="text-2xl font-bold">Quiosque Manager</h1>
              <p className="text-sm text-blue-100">Gestão para Quiosques de Praia</p>
            </div>
          </div>
          <button
            onClick={handleAccessApp}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            Acessar Aplicativo
            <ExternalLink size={18} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-600 to-blue-400 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transforme a Gestão do seu Quiosque
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Sistema completo para gestão de quiosques, bares e estabelecimentos similares.
                Simplifique o gerenciamento de pedidos, estoque e atendimento.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Adquirir Agora
                </button>
                <button
                  onClick={handleAccessApp}
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  Testar Grátis
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582192730841-2a682d7375f9?auto=format&fit=crop&q=80&w=800"
                alt="Quiosque na praia"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Funcionalidades Principais
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingCart className="text-blue-500" size={32} />,
                title: 'Cardápio Digital',
                description: 'Cardápio digital completo com imagens e preços atualizados em tempo real'
              },
              {
                icon: <Clock className="text-blue-500" size={32} />,
                title: 'Status em Tempo Real',
                description: 'Acompanhamento do status do pedido em tempo real para clientes e equipe'
              },
              {
                icon: <BarChart3 className="text-blue-500" size={32} />,
                title: 'Relatórios e Análises',
                description: 'Controle de estoque e relatórios detalhados de vendas'
              },
              {
                icon: <Settings className="text-blue-500" size={32} />,
                title: 'Painel Administrativo',
                description: 'Painel administrativo completo para gestão do estabelecimento'
              },
              {
                icon: <Smartphone className="text-blue-500" size={32} />,
                title: 'Design Responsivo',
                description: 'Interface adaptável para todos os dispositivos móveis'
              },
              {
                icon: <Database className="text-blue-500" size={32} />,
                title: 'Gestão de Dados',
                description: 'Banco de dados seguro e backup automático das informações'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Tecnologias Utilizadas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code size={32} />,
                title: 'Backend',
                description: 'C# (.NET)'
              },
              {
                icon: <Smartphone size={32} />,
                title: 'Frontend',
                description: 'React.js'
              },
              {
                icon: <Database size={32} />,
                title: 'Banco de Dados',
                description: 'SQL Server'
              },
              {
                icon: <Api size={32} />,
                title: 'Infraestrutura',
                description: 'API REST'
              }
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-all"
              >
                <div className="mb-4 flex justify-center text-blue-500">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-blue-600 p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-2">Plano Mensal</h2>
              <div className="text-5xl font-bold mb-4">
                R$ 60,00
                <span className="text-lg font-normal">/mês</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">
                O que está incluído:
              </h3>
              <div className="space-y-4">
                {[
                  'Manutenção e atualizações contínuas',
                  'Configuração e personalização do sistema',
                  'Banco de dados incluso',
                  'Evolução do aplicativo',
                  'Suporte 24 horas'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={24} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Contratar Agora
                </button>
                <button
                  onClick={handleAccessApp}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  Testar Grátis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <UmbrellaIcon size={32} className="text-yellow-300" />
                <div>
                  <h3 className="text-xl font-bold">Quiosque Manager</h3>
                  <p className="text-blue-300">Gestão para Quiosques de Praia</p>
                </div>
              </div>
              <p className="text-blue-300 mb-4">
                Desenvolvido por Marcelo de Oliveira e Julio Campos Machado
              </p>
              <p className="text-blue-300">Like Look Solutions</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-green-400" size={24} />
                <a
                  href="https://wa.me/5511992946628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  WhatsApp: +55 11 99294-6628
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Server className="text-blue-400" size={24} />
                <a
                  href="https://likelook.wixsite.com/solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  Site: likelook.wixsite.com/solutions
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-400">
            <p>&copy; 2024 Quiosque Manager. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
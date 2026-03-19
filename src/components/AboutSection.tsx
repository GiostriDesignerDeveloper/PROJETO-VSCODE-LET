import React from "react";
import { Code, PenTool, Monitor, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code size={24} className="text-blue-600" />,
      title: "Tecnologia e Desenvolvimento",
      description:
        "Colaboração técnica com desenvolvedores, garantindo a viabilidade do projeto e a fidelidade na implementação do design.",
    },
    {
      icon: <PenTool size={24} className="text-blue-600" />,
      title: "UI/UX Design",
      description:
        "Criar interfaces e experiências de usuário intuitivas e visualmente atraentes.",
    },
    {
      icon: <Monitor size={24} className="text-blue-600" />,
      title: "Design responsivo",
      description:
        "Garantir que os aplicativos funcionem perfeitamente em todos os dispositivos e tamanhos de tela.",
    },
    {
      icon: <Users size={24} className="text-blue-600" />,
      title: "Colaboração",
      description:
        "Trabalhar eficazmente em equipe para entregar projetos com sucesso e dentro do prazo.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre mim
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Lado Esquerdo: Texto Estruturado */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Minha história
            </h3>
            
            <div className="space-y-4 text-gray-600 mb-8 leading-relaxed">
              <p>
                <strong>Product Designer (UI/UX) com 4 anos de experiência</strong> em produtos digitais B2B e ecossistemas de alta complexidade. Minha atuação é pautada pela entrega de valor estratégico através de UX Research, Design Systems escaláveis e análise de KPIs de produto.
              </p>
              
              <p>
                Atualmente, na <strong>Teknisa</strong>, atuo ativamente no refinamento técnico do Design System. Implementei estruturas avançadas de variáveis e componentização complexa no Figma, focando em Eficiência Operacional para reduzir o débito técnico e otimizar o processo de handover. O amadurecimento dessa estrutura despertou o interesse de outras unidades de negócio na replicação desse padrão, contribuindo para o Brand Equity interno da companhia.
              </p>
              
              <p>
                <strong>Projeto destaque:</strong><br />
                Responsável pela concepção e design do novo sistema de gerenciamento de desperdícios em restaurantes, focado em transformar regras de negócio densas em uma interface digital intuitiva para cozinhas industriais. Por meio de UX Research e Discovery (entrevistas qualitativas e desk research), mapeei dores reais para projetar um fluxo de pesagem eficiente, visando a futura redução de perdas financeiras e maior precisão nos dados operacionais dos clientes.
              </p>

              <p>
                Tenho passagens estratégicas pelo <strong>CDC Bank</strong>, redesenhando fluxos financeiros críticos (Conciliação e Operações), e pela <strong>JCM Consultores</strong>.
              </p>

              <p>
                <strong>Principais empresas:</strong> Teknisa, CDC Bank, JCM Consultores, Givisiez.
              </p>

              <div className="pt-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Habilidades & Stack:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Estratégia e Operação:</strong> UX Research, Discovery, Design Systems (Tokens/Variables) e métricas de usabilidade, Storytelling.</li>
                  <li><strong>Design & Prototipação:</strong> Figma (Avançado), Arquitetura da Informação e fluxos complexos.</li>
                  <li><strong>Interface com Tech:</strong> Estudos em Front-end (React, HTML/CSS) e uso de IAs generativas para otimização de workflow.</li>
                  <li><strong>Formação:</strong> Graduada em Design pela UEMG, com estudos complementares em Neurociência Cognitiva da Criatividade.</li>
                  <li><strong>Idiomas:</strong> Inglês B2 Upper Intermediate (EF SET).</li>
                </ul>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
            >
              Saiba mais sobre mim
            </Link>
          </div>

          {/* Lado Direito: Cards de Skills */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6 sticky top-24">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
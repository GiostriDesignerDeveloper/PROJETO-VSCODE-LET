import React from "react";
import { Code, PenTool, Monitor, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const skills = [
    {
      // Mantivemos o ícone <Code /> porque tem tudo a ver com a área técnica
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
          <p className="text-lg text-gray-600"></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Minha história
            </h3>
            <p className="text-gray-600 mb-4">
              Atualmente, sou Product Designer (UX/UI) com formação em Design de Ambientes
              pela Universidade Estadual de Minas Gerais e estou envolvida com
              design de interfaces e experiência do usuário há 4 anos.
            </p>
            <p className="text-gray-600 mb-6">
             Product Designer (UI/UX) com 4 anos de experiência  em produtos digitais B2B e ecossistemas de alta complexidade. Minha atuação é pautada pela entrega de valor estratégico através de UX Research, Design Systems escaláveis e análise de KPIs de produto.

Atualmente, na Teknisa , atuo ativamente no refinamento técnico do Design System. Implementei estruturas avançadas de variáveis e componentização complexa no Figma, focando em Eficiência Operacional para reduzir o débito técnico e otimizar o processo de handover. O amadurecimento dessa estrutura despertou o interesse de outras unidades de negócio na replicação desse padrão, contribuindo para o Brand Equity interno da companhia.
              <p className="text-gray-600 mb-6">
                Estou constantemente me atualizando, aprendendo novas linguagens
                de programação (HTML,CSS, Javascript) e aprofundando meu
                conhecimento em front-end, o que tem sido desafiador e
                enriquecedor. Me interesso especialmente por produtos digitais
                complexos, fluxos sistêmicos e ambientes em que o design resolve
                problemas reais. Estou sempre buscando formas de validar
                decisões com dados, e priorizo decisões orientadas por testes e
                evidências.

                Projeto destaque :
Responsável pela concepção e design do novo sistema de gerenciamento de desperdícios em restaurantes, focado em transformar regras de negócio densas em uma interface digital intuitiva para cozinhas industriais. Por meio de UX Research e Discovery  (entrevistas qualitativas e desk research), mapeei dores reais para projetar um fluxo de pesagem eficiente, visando a futura redução de perdas financeiras e maior precisão nos dados operacionais dos clientes.

Tenho passagens estratégicas pelo CDC Bank, redesenhando fluxos financeiros críticos (Conciliação e Operações), e pela JCM Consultores.
Principais empresas: Teknisa, CDC Bank, JCM Consultores, Givisiez.
Habilidades & Stack:

* Estratégia e Operação: UX Research, Discovery, Design Systems (Tokens/Variables) e métricas de usabilidade, Storytelling.
* Design & Prototipação: Figma (Avançado), Arquitetura da Informação e fluxos complexos.
* Interface com Tech: Estudos em Front-end (React, HTML/CSS) e uso de IAs generativas para otimização de workflow.
* Formação: Graduada em Design pela UEMG, com estudos complementares em Neurociência Cognitiva da Criatividade.
* Idiomas: Inglês B2 Upper Intermediate (EF SET).
              </p>
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
            >
              Saiba mais sobre mim
            </Link>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
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

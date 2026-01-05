import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, GraduationCap } from "lucide-react"; // Removi o ícone Download

const AboutPage = () => {
  const experiences = [
    {
      period: "Jul 2025 - Atual",
      title: "UI/UX Designer",
      company: "Teknisa",
      description: `
• Condução de pesquisas qualitativas e diagnósticos operacionais com key users de sistemas corporativos B2B, identificando dores reais, gaps de processo e exceções críticas.
• Estruturação de formulários de diagnóstico UX com foco na redução de carga cognitiva e aumento da taxa de resposta, gerando insumos acionáveis para decisões de produto.
• Tradução de regras de negócio e requisitos técnicos em soluções de design claras, viáveis e orientadas à usabilidade.
• Mapeamento e redesign de fluxos complexos, priorizando eficiência operacional e redução de etapas manuais.
• Análise e otimização de jornadas com foco na redução de cliques, eliminação de redundâncias e simplificação do uso.
• Criação de mapas de fluxo unificados, alinhando necessidades do usuário, dependências técnicas e objetivos de negócio.
• Desenvolvimento de interfaces e protótipos navegáveis no Figma, com layouts orientados a dados, hierarquia visual clara e aderência a heurísticas de usabilidade e Design System.
• Atuação colaborativa com Product Managers, Tech Leads e stakeholders, viabilizando decisões orientadas a dados.
`,
    },
    {
      period: "Out 2024 - Jul 2025",
      title: "UI/UX Designer",
      company: "CDC Bank",
      description: `
• Estruturação e evolução do Design System corporativo, acelerando o time-to-design e reduzindo o esforço na criação de novas interfaces e componentes reutilizáveis.
• Redesign da jornada de conciliação de pagamentos, simplificando fluxos críticos e contribuindo para a redução de chamados ao suporte e retrabalho operacional.
• Criação de wireframes e protótipos navegáveis no Figma, apoiando testes com usuários, validações com stakeholders e decisões orientadas a dados.
• Atuação colaborativa com as equipes de Produto e Desenvolvimento, garantindo consistência visual, aderência às regras de negócio e viabilidade técnica das soluções.
• Criação de melhorias e redesenhos em fluxos estratégicos, incluindo:
  – Fluxo de conciliação financeira
  – Central de notificações
  – Modais de definição de parâmetros de alçada de crédito
  – Cadastro unificado de usuários e entidades
  – Esteira de cessão CNAB
  – Reformulação do fluxo de recompra
  – Otimizações na esteira de operações
  – Reorganização da hierarquia e estrutura de containers
`,
    },
    {
      period: "Dez 2022 - Jun 2024",
      title: "UI/UX Designer",
      company: "JCM Consultores",
      description: `
• Atuação no design de interfaces para uma plataforma de previdência complementar fechada, considerando requisitos regulatórios, regras de negócio complexas e as necessidades de um público com maior demanda por acessibilidade e clareza.
• Condução de pesquisas e análises de dados para embasar decisões de design, reduzindo suposições e aumentando a assertividade das soluções propostas.
• Criação e manutenção de um Design System, promovendo consistência visual, reutilização de componentes e ganho de eficiência no desenvolvimento de novas funcionalidades.
• Desenvolvimento de interfaces e componentes do style guide, garantindo coerência entre produtos, facilidade de manutenção e escalabilidade da interface.
• Realização de design reviews contínuos, elevando a qualidade das entregas, reduzindo inconsistências e alinhando o time às boas práticas de UX e UI.
• Tradução de regras de negócio complexas em fluxos intuitivos, priorizando usabilidade, acessibilidade e redução de erros operacionais.
`,
    },
    {
      period: "Jan 2022 - Jan 2023",
      title: "UI/UX Designer Freelancer",
      company: "Givisiez – Transformação Digital",
      description: `
• Pesquisa e análise de dados do produto, da marca e do cliente potencial, apoiando decisões estratégicas de design.
• Criação e manutenção do Design System, promovendo consistência visual e reutilização de componentes.
• Criação de interfaces e componentes do style guide, garantindo padronização e escalabilidade.
• Realização de design reviews desenvolvidos pela equipe, assegurando qualidade e aderência às boas práticas de UX e UI.
• Análise de feedbacks de usuários e stakeholders para evolução contínua dos produtos.
• Proposição e implementação de melhorias nos produtos, com foco em usabilidade, clareza e eficiência da experiência.
`,
    },
  ];

  const education = [
    {
      period: "2016 - 2021",
      title: "Bacharelado em Design de Ambientes",
      institution: "Universidade do Estado de Minas Gerais (UEMG)",
      description:
        "Formação com foco em pensamento projetual, estética, funcionalidade e experiência do usuário.",
    },
  ];

  const skills = [
    {
      category: "UX & Produto",
      items: [
        "Pesquisa Qualitativa",
        "Mapeamento de Fluxos",
        "User Journey",
        "Design Thinking",
        "Arquitetura da Informação",
        "Usabilidade e Acessibilidade",
      ],
    },
    {
      category: "UI & Design System",
      items: [
        "Figma",
        "Design System",
        "Prototipagem",
        "Wireframes",
        "Style Guide",
        "Design Review",
      ],
    },
    {
      category: "Ferramentas",
      items: [
        "Miro",
        "ClickUp",
        "Jira",
        "Azure",
        "Chromatic",
        "Visual Studio Code",
      ],
    },
    {
      category: "Front-end (base)",
      items: ["HTML", "CSS", "JavaScript", "React (em formação)"],
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Sobre mim
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            UI/UX Designer com foco em produtos digitais complexos, sistemas
            corporativos e decisões orientadas a dados.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Bio */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Minha trajetória
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Sou UI/UX Designer com experiência em produtos digitais B2B e
                  plataformas financeiras, atuando desde a fase de discovery até
                  a entrega de soluções orientadas à usabilidade, acessibilidade
                  e regras de negócio.
                </p>
                <p>
                  Minha atuação combina pesquisa com usuários, análise de
                  processos e design de interfaces para sistemas complexos,
                  sempre com foco em reduzir carga cognitiva, eliminar
                  redundâncias e aumentar eficiência operacional.
                </p>
                <p>
                  Tenho forte colaboração com times de Produto, Engenharia e
                  Stakeholders, traduzindo requisitos técnicos e regulatórios em
                  experiências claras, escaláveis e viáveis.
                </p>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <Briefcase size={24} className="text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Experiência Profissional
                </h2>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-gray-200"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                    <div className="mt-2 text-gray-700 whitespace-pre-line leading-relaxed">
                      {exp.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center mb-6">
                <GraduationCap size={24} className="text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Formação</h2>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-gray-200"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md mb-2">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {edu.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {edu.institution}
                    </p>
                    <p className="mt-2 text-gray-700">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md sticky top-24">
              {/* Profile */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-md">
                  {/* Foto de Perfil */}
                  <img
                    src="IM.G_0611.jpg"
                    alt="Letícia Giostri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Letícia Giostri
                </h3>
                <p className="text-gray-600">UI/UX Designer</p>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  Habilidades
                </h4>

                <div className="space-y-6">
                  {skills.map((skillGroup, groupIndex) => (
                    <div key={groupIndex}>
                      <h5 className="text-sm font-medium text-gray-500 mb-2">
                        {skillGroup.category}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-block px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* REMOVI O BOTÃO DE DOWNLOAD AQUI */}

              {/* Contact */}
              <div className="mt-8 text-center">
                <p className="mb-2">Quer conversar sobre produto?</p>
                <Link
                  to="/contact"
                  className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Entre em contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

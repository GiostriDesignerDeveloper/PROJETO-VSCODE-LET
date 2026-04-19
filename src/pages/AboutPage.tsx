import { Link } from "react-router-dom";
import { Briefcase, GraduationCap } from "lucide-react";

const AboutPage = () => {
  // Utilizamos JSX direto na descrição para permitir uma formatação rica (negritos e listas)
  const experiences = [
    {
      period: "Jul 2025 - Atual",
      title: "UI/UX Designer",
      company: "Teknisa",
      description: (
        <div className="space-y-4 mt-4 text-gray-700">
          <div>
            <strong className="text-gray-900 block mb-2">Responsável por:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>UX Research e Discovery:</strong> Condução de pesquisas qualitativas, diagnósticos operacionais, entrevistas, desk research, card sorting e testes de usabilidade com key users de sistemas corporativos.</li>
              <li><strong>Mapeamento de Processos End-to-End:</strong> Levantamento de dores, gaps operacionais e regras de negócio complexas, traduzindo insumos técnicos em requisitos de design funcionais.</li>
              <li><strong>Design de Interação e Interface:</strong> Desenvolvimento de wireframes, protótipos navegáveis e layouts no Figma, com foco em hierarquia visual, acessibilidade e conformidade com heurísticas.</li>
              <li><strong>Arquitetura e Redesign de Fluxos:</strong> Criação de mapas de fluxo unificados e redesign de jornadas críticas (Recebimento Requisição Produção Resíduos), priorizando a simplificação.</li>
              <li><strong>Articulação e Estratégia:</strong> Colaboração constante com Tech Leads e stakeholders para viabilizar decisões de produto orientadas a dados.</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-900 block mb-2">Realizações a destacar:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Eficiência Operacional:</strong> Redesenhei jornadas críticas de ponta a ponta, focando na redução de cliques e etapas manuais, gerando maior fluidez nos processos.</li>
              <li><strong>Otimização de Diagnósticos UX:</strong> Estruturei formulários com foco em redução de carga cognitiva, aumentando a taxa de resposta e fornecendo insumos mais acionáveis.</li>
              <li><strong>Alinhamento de Regras de Negócio:</strong> Traduzi dependências técnicas e exceções operacionais complexas em interfaces claras.</li>
              <li><strong>Decisão Orientada a Dados:</strong> Mitiguei riscos de desenvolvimento através do levantamento de requisitos e testes de aderência técnica.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      period: "Out 2024 - Jul 2025",
      title: "Product Designer",
      company: "CDC Bank",
      description: (
        <div className="space-y-4 mt-4 text-gray-700">
          <div>
            <strong className="text-gray-900 block mb-2">Responsável por:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Arquitetura e Prototipação:</strong> Organização da arquitetura da informação e criação de wireframes e protótipos navegáveis no Figma para validações rápidas.</li>
              <li><strong>Design de Produto (BaaS & CaaS):</strong> Design e evolução de interfaces para soluções de Banking as a Service e Content as a Service, focando em eficiência operacional.</li>
              <li><strong>Refinamento de Fluxos Operacionais:</strong> Redesign de fluxos financeiros, incluindo conciliação, central de notificações, alçadas de crédito, cadastro unificado, e esteira de operações.</li>
              <li><strong>Governança:</strong> Evolução e manutenção do Design System para garantir consistência visual e escalabilidade.</li>
              <li><strong>Colaboração Multidisciplinar:</strong> Atuação integrada com PMs e desenvolvedores para garantir viabilidade técnica.</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-900 block mb-2">Realizações a destacar:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Otimização da Jornada de Conciliação:</strong> Redesenho do fluxo, reduzindo fricções operacionais, erros de uso e volume de chamados ao suporte.</li>
              <li><strong>Escalabilidade e Time-to-Market:</strong> A criação do Design System permitiu aceleração nas entregas de novas funcionalidades e consistência entre produtos.</li>
              <li><strong>Decisões Orientadas a Dados:</strong> Implementação de testes com usuários antes do desenvolvimento, mitigando riscos de retrabalho.</li>
              <li><strong>Eficiência em Fluxos Complexos:</strong> Melhoria da usabilidade em interfaces de back-office, reduzindo o tempo de execução de tarefas críticas.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      period: "Dez 2022 - Jun 2024",
      title: "Product Designer",
      company: "JCM Consultores",
      description: (
        <div className="space-y-4 mt-4 text-gray-700">
          <div>
            <strong className="text-gray-900 block mb-2">Responsável por:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>UX Research e Discovery:</strong> Condução ponta a ponta (entrevistas, desk research, card sorting, testes de usabilidade e análise de dados).</li>
              <li><strong>Design de Interface (UI):</strong> Desenvolvimento focado em usabilidade, acessibilidade e redução de carga cognitiva para fluxos financeiros complexos.</li>
              <li><strong>Estruturação de Design System:</strong> Criação e manutenção de style guide completo e documentação técnica.</li>
              <li><strong>Prototipação e Alinhamento:</strong> Tradução de requisitos operacionais em fluxos claros para alinhamento entre stakeholders e tech.</li>
              <li><strong>Colaboração e Qualidade:</strong> Atuação em times ágeis, design reviews e cerimônias de produto.</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-900 block mb-2">Realizações a destacar:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Design para Acessibilidade (Público 60+):</strong> Plataforma de previdência com redução de carga cognitiva, mitigando erros e aumentando a autonomia dos usuários sêniores.</li>
              <li><strong>Mitigação de Riscos via Research:</strong> Decisões de design embasadas em dados qualitativos e quantitativos antes da implementação.</li>
              <li><strong>Escalabilidade Técnica:</strong> Aumento da eficiência do time de desenvolvimento via Design System, reduzindo inconsistências visuais.</li>
              <li><strong>Maturidade de Design:</strong> Fortalecimento da cultura de design com processos replicáveis e documentação robusta.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      period: "Jan 2022 - Nov 2022",
      title: "UI/UX Designer Freelancer",
      company: "Givisiez – Transformação Digital",
      description: (
        <div className="space-y-4 mt-4 text-gray-700">
          <div>
            <strong className="text-gray-900 block mb-2">Responsável por:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>UX Research e Estratégia:</strong> Condução de pesquisas de mercado e análise de dados de clientes para soluções personalizadas.</li>
              <li><strong>Design de Interface (UI):</strong> Criação de interfaces e componentes focados em usabilidade e clareza.</li>
              <li><strong>Design System e Padronização:</strong> Manutenção de componentes e style guides, garantindo consistência em todos os pontos de contato.</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-900 block mb-2">Realizações a destacar:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Personalização Orientada a Dados:</strong> Soluções sob medida com alta aderência estratégica às expectativas do cliente final.</li>
              <li><strong>Eficiência e Consistência:</strong> Redução de falhas de comunicação visual e aumento do time-to-market através de padronização.</li>
              <li><strong>Ciclo de Melhoria Contínua:</strong> Otimização de produtos baseada em feedback real, elevando a satisfação do usuário.</li>
              <li><strong>Escalabilidade de Componentes:</strong> Facilitação do desenvolvimento garantindo o crescimento do produto sem perder a identidade.</li>
            </ul>
          </div>
        </div>
      ),
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Habilidades & Stack:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Estratégia e Operação:</strong> UX Research, Discovery, Design Systems (Tokens/Variables) e métricas de usabilidade, Storytelling.</li>
                    <li><strong>Design & Prototipação:</strong> Figma (Avançado), Arquitetura da Informação e fluxos complexos.</li>
                    <li><strong>Interface com Tech:</strong> Estudos em Front-end (React, HTML/CSS) e uso de IAs generativas para otimização de workflow.</li>
                    <li><strong>Formação:</strong> Graduada em Design pela UEMG, com estudos complementares em Neurociência Cognitiva da Criatividade.</li>
                    <li><strong>Idiomas:</strong> Inglês B2 Upper Intermediate (EF SET).</li>
                  </ul>
                </div>
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
                    {/* A descrição agora é renderizada diretamente como elemento React */}
                    <div className="mt-2 text-gray-700 leading-relaxed">
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
import { Link } from "react-router-dom";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext"; // Importamos o idioma

const AboutPage = () => {
  const { t, language } = useLanguage(); // Puxamos qual idioma está ativo

  // ==========================================================
  // DADOS EM PORTUGUÊS
  // ==========================================================
  const experiencesPT = [
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

  const educationPT = [
    {
      period: "2016 - 2021",
      title: "Bacharelado em Design de Ambientes",
      institution: "Universidade do Estado de Minas Gerais (UEMG)",
      description: "Formação com foco em pensamento projetual, estética, funcionalidade e experiência do usuário.",
    },
  ];

  const skillsPT = [
    {
      category: "UX & Produto",
      items: ["Pesquisa Qualitativa", "Mapeamento de Fluxos", "User Journey", "Design Thinking", "Arquitetura da Informação", "Usabilidade e Acessibilidade"],
    },
    {
      category: "UI & Design System",
      items: ["Figma", "Design System", "Prototipagem", "Wireframes", "Style Guide", "Design Review"],
    },
    {
      category: "Ferramentas",
      items: ["Miro", "ClickUp", "Jira", "Azure", "Chromatic", "Visual Studio Code"],
    },
    {
      category: "Front-end (base)",
      items: ["HTML", "CSS", "JavaScript", "React (em formação)"],
    },
  ];

  // ==========================================================
  // DADOS EM INGLÊS
  // ==========================================================
  const experiencesEN = [
    {
      period: "Jul 2025 - Present",
      title: "UI/UX Designer",
      company: "Teknisa",
      description: (
        <div className="space-y-4 mt-4 text-gray-700">
          <div>
            <strong className="text-gray-900 block mb-2">Responsible for:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>UX Research and Discovery:</strong> Conducting qualitative research, operational diagnostics, interviews, desk research, card sorting, and usability testing with key users of corporate systems.</li>
              <li><strong>End-to-End Process Mapping:</strong> Identifying pain points, operational gaps, and complex business rules, translating technical inputs into functional design requirements.</li>
              <li><strong>Interaction and Interface Design:</strong> Developing wireframes, navigable prototypes, and layouts in Figma, focusing on visual hierarchy, accessibility, and heuristic compliance.</li>
              <li><strong>Architecture and Flow Redesign:</strong> Creating unified flow maps and redesigning critical journeys, prioritizing simplification.</li>
              <li><strong>Articulation and Strategy:</strong> Constant collaboration with Tech Leads and stakeholders to enable data-driven product decisions.</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-900 block mb-2">Key Achievements:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Operational Efficiency:</strong> Redesigned critical end-to-end journeys, focusing on reducing clicks and manual steps, generating greater process fluidity.</li>
              <li><strong>UX Diagnostics Optimization:</strong> Structured forms focused on reducing cognitive load, increasing response rates and providing more actionable insights.</li>
              <li><strong>Business Rules Alignment:</strong> Translated complex technical dependencies and operational exceptions into clear interfaces.</li>
              <li><strong>Data-Driven Decision:</strong> Mitigated development risks through requirements gathering and technical adherence testing.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      period: "Oct 2024 - Jul 2025",
      title: "Product Designer",
      company: "CDC Bank",
      description: (
        <div className="space-y-4 mt-4 text-gray-700">
          <div>
            <strong className="text-gray-900 block mb-2">Responsible for:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Architecture and Prototyping:</strong> Organizing information architecture and creating wireframes and navigable prototypes in Figma for rapid validation.</li>
              <li><strong>Product Design (BaaS & CaaS):</strong> Design and evolution of interfaces for Banking as a Service and Content as a Service solutions, focusing on operational efficiency.</li>
              <li><strong>Operational Flows Refinement:</strong> Redesign of financial flows, including reconciliation, notification center, credit limits, unified registration, and operations pipeline.</li>
              <li><strong>Governance:</strong> Evolution and maintenance of the Design System to ensure visual consistency and scalability.</li>
              <li><strong>Multidisciplinary Collaboration:</strong> Integrated work with PMs and developers to ensure technical feasibility.</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-900 block mb-2">Key Achievements:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Reconciliation Journey Optimization:</strong> Flow redesign, reducing operational friction, user errors, and support ticket volume.</li>
              <li><strong>Scalability and Time-to-Market:</strong> The creation of the Design System accelerated the delivery of new features and consistency across products.</li>
              <li><strong>Data-Driven Decisions:</strong> Implementation of user testing prior to development, mitigating rework risks.</li>
              <li><strong>Efficiency in Complex Flows:</strong> Improved usability in back-office interfaces, reducing task execution time for critical operations.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      period: "Dec 2022 - Jun 2024",
      title: "Product Designer",
      company: "JCM Consultores",
      description: (
        <div className="space-y-4 mt-4 text-gray-700">
          <div>
            <strong className="text-gray-900 block mb-2">Responsible for:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>UX Research and Discovery:</strong> End-to-end conduction (interviews, desk research, card sorting, usability testing, and data analysis).</li>
              <li><strong>Interface Design (UI):</strong> Development focused on usability, accessibility, and cognitive load reduction for complex financial flows.</li>
              <li><strong>Design System Structuring:</strong> Creation and maintenance of a complete style guide and technical documentation.</li>
              <li><strong>Prototyping and Alignment:</strong> Translation of operational requirements into clear flows for alignment between stakeholders and tech.</li>
              <li><strong>Collaboration and Quality:</strong> Working in agile teams, design reviews, and product ceremonies.</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-900 block mb-2">Key Achievements:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Design for Accessibility (60+ Audience):</strong> Pension platform with reduced cognitive load, mitigating errors and increasing senior user autonomy.</li>
              <li><strong>Risk Mitigation via Research:</strong> Design decisions based on qualitative and quantitative data before implementation.</li>
              <li><strong>Technical Scalability:</strong> Increased development team efficiency via Design System, reducing visual inconsistencies.</li>
              <li><strong>Design Maturity:</strong> Strengthening design culture with replicable processes and robust documentation.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      period: "Jan 2022 - Nov 2022",
      title: "Freelance UI/UX Designer",
      company: "Givisiez – Digital Transformation",
      description: (
        <div className="space-y-4 mt-4 text-gray-700">
          <div>
            <strong className="text-gray-900 block mb-2">Responsible for:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>UX Research and Strategy:</strong> Conducting market research and customer data analysis for customized solutions.</li>
              <li><strong>Interface Design (UI):</strong> Creating interfaces and components focused on usability and clarity.</li>
              <li><strong>Design System and Standardization:</strong> Maintenance of components and style guides, ensuring consistency across all touchpoints.</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-900 block mb-2">Key Achievements:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Data-Driven Personalization:</strong> Tailor-made solutions with high strategic adherence to end-customer expectations.</li>
              <li><strong>Efficiency and Consistency:</strong> Reduction of visual communication flaws and increased time-to-market through standardization.</li>
              <li><strong>Continuous Improvement Cycle:</strong> Product optimization based on real feedback, elevating user satisfaction.</li>
              <li><strong>Component Scalability:</strong> Facilitated development ensuring product growth without losing identity.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const educationEN = [
    {
      period: "2016 - 2021",
      title: "Bachelor's Degree in Environmental Design",
      institution: "State University of Minas Gerais (UEMG)",
      description: "Education focused on design thinking, aesthetics, functionality, and user experience.",
    },
  ];

  const skillsEN = [
    {
      category: "UX & Product",
      items: ["Qualitative Research", "Flow Mapping", "User Journey", "Design Thinking", "Information Architecture", "Usability & Accessibility"],
    },
    {
      category: "UI & Design System",
      items: ["Figma", "Design System", "Prototyping", "Wireframes", "Style Guide", "Design Review"],
    },
    {
      category: "Tools",
      items: ["Miro", "ClickUp", "Jira", "Azure", "Chromatic", "Visual Studio Code"],
    },
    {
      category: "Front-end (basics)",
      items: ["HTML", "CSS", "JavaScript", "React (learning)"],
    },
  ];

  // ==========================================================
  // O TRILHO DE TREM: Qual lista vamos usar agora?
  // ==========================================================
  const activeExperiences = language === 'pt' ? experiencesPT : experiencesEN;
  const activeEducation = language === 'pt' ? educationPT : educationEN;
  const activeSkills = language === 'pt' ? skillsPT : skillsEN;

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("aboutpage.hero.title")}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t("aboutpage.hero.subtitle")}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2">
            
            {/* Bio (Usando o dicionário global) */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("aboutpage.trajectory")}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  <strong>{language === 'pt' ? 'Product Designer (UI/UX) com 4 anos de experiência' : 'Product Designer (UI/UX) with 4 years of experience'}</strong> {t("about.bio.p1").replace("Product Designer (UI/UX) com 4 anos de experiência ", "").replace("Product Designer (UI/UX) with 4 years of experience ", "")}
                </p>
                <p>{t("about.bio.p2")}</p>
                <p>
                  <strong>{t("about.bio.highlight")}</strong><br />
                  {language === 'pt' 
                    ? "Responsável pela concepção e design do novo sistema de gerenciamento de desperdícios em restaurantes, focado em transformar regras de negócio densas em uma interface digital intuitiva para cozinhas industriais. Por meio de UX Research e Discovery (entrevistas qualitativas e desk research), mapeei dores reais para projetar um fluxo de pesagem eficiente, visando a futura redução de perdas financeiras e maior precisão nos dados operacionais dos clientes."
                    : "Responsible for the conception and design of a new waste management system for restaurants, focused on translating dense business rules into an intuitive digital interface for industrial kitchens. Through UX Research and Discovery (qualitative interviews and desk research), I mapped real pain points to design an efficient weighing flow, aiming at future financial loss reduction and greater accuracy in clients' operational data."}
                </p>
                <p>
                  {language === 'pt' 
                    ? "Tenho passagens estratégicas pelo CDC Bank, redesenhando fluxos financeiros críticos (Conciliação e Operações), e pela JCM Consultores."
                    : "I have strategic experience at CDC Bank, redesigning critical financial flows (Reconciliation and Operations), and at JCM Consultores."}
                </p>
                <p>
                  <strong>{language === 'pt' ? 'Principais empresas:' : 'Main companies:'}</strong> Teknisa, CDC Bank, JCM Consultores, Givisiez.
                </p>
              </div>
            </section>

            {/* Experience (Usando a lista ativa do trilho) */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <Briefcase size={24} className="text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
                </h2>
              </div>

              <div className="space-y-8">
                {activeExperiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                    <div className="mt-2 text-gray-700 leading-relaxed">
                      {exp.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education (Usando a lista ativa do trilho) */}
            <section>
              <div className="flex items-center mb-6">
                <GraduationCap size={24} className="text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'pt' ? 'Formação' : 'Education'}
                </h2>
              </div>

              <div className="space-y-8">
                {activeEducation.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md mb-2">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{edu.title}</h3>
                    <p className="text-gray-600 font-medium">{edu.institution}</p>
                    <p className="mt-2 text-gray-700">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md sticky top-24">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-md">
                  <img
                    src="IM.G_0611.jpg"
                    alt="Letícia Giostri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Letícia Giostri</h3>
                <p className="text-gray-600">UI/UX Designer</p>
              </div>

              {/* Skills (Usando a lista ativa do trilho) */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {t("aboutpage.skills")}
                </h4>
                <div className="space-y-6">
                  {activeSkills.map((skillGroup, groupIndex) => (
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

              <div className="mt-8 text-center border-t border-gray-200 pt-6">
                <p className="mb-2 text-gray-600">
                  {language === 'pt' ? 'Quer conversar sobre produto?' : 'Want to talk about product?'}
                </p>
                <Link
                  to="/contact"
                  className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {language === 'pt' ? 'Entre em contato' : 'Get in touch'}
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
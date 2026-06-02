import { Briefcase, GraduationCap, Award, Globe2, User, Wrench, Target } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects"; // Importamos os seus projetos

const AboutPage = () => {
  const { language } = useLanguage();

  // ==========================================================
  // FUNÇÃO QUE BUSCA O IMPACTO DIRETAMENTE DO PROJECTS.TS
  // ==========================================================
  const getProjectImpacts = () => {
    return projectsData.map(project => {
      // Pega a descrição no idioma atual
      const desc = typeof project.fullDescription === 'string' 
        ? project.fullDescription 
        : (project.fullDescription?.[language] || project.fullDescription?.pt || "");
      
      // Essa "fórmula" (Regex) procura a palavra RESULTADOS ou IMPACTO e pega o texto abaixo dela
      const regex = /\*\*(?:RESULTADOS|RESULT|IMPACTO|IMPACT)\*\*\n([\s\S]*?)(?=\n\*\*|$)/i;
      const match = desc.match(regex);

      if (match && match[1].trim()) {
        // Limpa o texto: remove tags de imagem e métricas brutas
        const cleanLines = match[1]
          .split('\n')
          .map(line => line.trim())
          .filter(line => line && !line.startsWith('[IMG') && !line.startsWith('[METRICS]'));
          
        if (cleanLines.length === 0) return null;

        const title = typeof project.title === 'string' 
          ? project.title 
          : (project.title?.[language] || project.title?.pt || project.id);

        return {
          id: project.id,
          title,
          lines: cleanLines
        };
      }
      return null;
    }).filter(Boolean); // Remove os projetos que não têm essa seção
  };

  const projectImpacts = getProjectImpacts();

  // ==========================================================
  // DADOS EM PORTUGUÊS
  // ==========================================================
  const experiencesPT = [
    {
      period: "Julho 2025 - Atual",
      title: "UI/UX Designer",
      company: "Teknisa",
      description: (
        <div className="space-y-4 mt-4 text-gray-600 text-[1.05rem] leading-relaxed">
          <p>
            Nesta atuação em um ecossistema SaaS B2B complexo, fui responsável por conduzir o ciclo completo de produto aplicando o modelo do Triplo Diamante, com foco em diagnósticos operacionais, arquitetura de sistemas ERP e evolução técnica do Design System em colaboração direta com Product Owners e Engenharia. Sigo atuando na concepção de soluções de gestão de desperdícios, na Plataforma B2B de Compras e Cotações e em projetos de Auditoria, transformando requisitos técnicos em interfaces responsivas e funcionais.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-2 uppercase tracking-wider text-xs font-bold">Realizações a destacar:</strong>
            <p className="text-sm text-gray-600 leading-relaxed">
              Identifiquei problemas críticos de usabilidade e redesenhei jornadas end-to-end (Recebimento/Resíduos), resultando na eliminação de redundâncias e na redução drástica de cliques e etapas manuais, otimizando a eficiência operacional. Estruturei formulários de diagnóstico UX que elevaram a taxa de resposta e utilizei análise de dados quantitativos para embasar o roadmap, mitigando riscos de desenvolvimento através de testes de usabilidade que asseguraram a aderência técnica e a acessibilidade antes da fase de código.
            </p>
          </div>
        </div>
      ),
    },
    {
      period: "Outubro 2024 - Julho 2025",
      title: "Product Designer",
      company: "CDC Bank",
      description: (
        <div className="space-y-4 mt-4 text-gray-600 text-[1.05rem] leading-relaxed">
          <p>
            Nesta posição em uma Fintech, fui responsável pela governança do Design System e pelo design de interfaces para soluções de Banking as a Service (BaaS) e Content as a Service (CaaS), articulando soluções de design com times de Engenharia, Produto e Dados. Atuei no refinamento de fluxos financeiros críticos, garantindo que as soluções estivessem alinhadas aos objetivos de negócio e às necessidades dos usuários.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-2 uppercase tracking-wider text-xs font-bold">Realizações a destacar:</strong>
            <p className="text-sm text-gray-600 leading-relaxed">
              Liderei o projeto de Gestão de Conciliação Financeira e o Redesign de Navegação e Sistema de Notificações, onde a simplificação das jornadas e a aplicação de princípios de hierarquia da informação resultaram na queda direta de 90% no volume de chamados ao suporte em módulos específicos. A evolução da biblioteca de componentes permitiu uma aceleração no time-to-market, enquanto a implementação de protótipos de alta fidelidade e testes de usabilidade validaram hipóteses orientadas a dados, reduzindo custos com retrabalho.
            </p>
          </div>
        </div>
      ),
    },
    {
      period: "Dezembro 2022 - Junho 2024",
      title: "Product Designer",
      company: "JCM Consultores",
      description: (
        <div className="space-y-4 mt-4 text-gray-600 text-[1.05rem] leading-relaxed">
          <p>
            Durante este período, fui responsável por estruturar o processo de Product Discovery e UX Research de ponta a ponta, utilizando métodos como Matriz CSD, entrevistas, desk research e cardsorting para alinhar dores dos usuários aos objetivos do negócio.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-2 uppercase tracking-wider text-xs font-bold">Realizações a destacar:</strong>
            <p className="text-sm text-gray-600 leading-relaxed">
              Atuei no design da plataforma de Previdência Complementar Fechada voltada ao público 60+, onde priorizei a acessibilidade e inclusão para reduzir a carga cognitiva em fluxos complexos, mitigando riscos de erro e aumentando a autonomia do usuário. A criação de um Style Guide documentado e a condução de Design Reviews elevaram a eficiência operacional do time de tecnologia e a maturidade de design no produto, garantindo consistência visual e escalabilidade em cenários dinâmicos de crescimento.
            </p>
          </div>
        </div>
      ),
    },
    {
      period: "Janeiro 2022 - Novembro 2022",
      title: "UI/UX Designer Freelancer",
      company: "Givisiez - Transformação Digital",
      description: (
        <div className="space-y-4 mt-4 text-gray-600 text-[1.05rem] leading-relaxed">
          <p>
            Nesta experiência com alto nível de autonomia, fui responsável por conduzir pesquisas de mercado e análise de dados para o desenvolvimento de soluções personalizadas e aderentes às necessidades reais dos clientes.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-2 uppercase tracking-wider text-xs font-bold">Realizações a destacar:</strong>
            <p className="text-sm text-gray-600 leading-relaxed">
              Implementei a padronização visual via Design System, o que reduziu falhas de comunicação e aumentou a velocidade de entrega (time-to-market) das evoluções de interface. Estabeleci um ciclo de melhoria contínua baseado em feedback real e análise de dados, garantindo que o produto crescesse com escalabilidade visual e eficiência técnica, mantendo a consistência e a clareza em todos os pontos de contatos.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const resumeExtraPT = {
    education: [
      "Pós-graduação em UX e Design de Produtos Digitais - PUC Minas - Em andamento",
      "Graduação em Design de Ambientes - Universidade Estadual de Minas Gerais (UEMG) - 2016-2021",
      "Optativa de destaque - Neurociência Cognitiva da Criatividade - UEMG"
    ],
    courses: ["UX e Design Thinking - Udemy", "Front-end (HTML, CSS, JS, React) - Udemy"],
    languages: ["Inglês - Intermediário - EF SET Certificate B2 Upper Intermediate", "Espanhol - Básico"]
  };

  const skillsPT = [
    "UX Research", "Arquitetura da Informação", "Discovery", "Prototipação", 
    "Métricas de Usabilidade", "Figma Avancado", "Design Systems", 
    "UI Design", "Trabalho em times multidisciplinares", "IAs generativas no workflow", "Front-end (HTML, CSS, React)"
  ];

  const toolsPT = [
    "Figma", "Figma AI", "Claude", "Gemini", "GPT", "Lovable", "Cursor", "V0", 
    "Bolt", "Google Workspace", "Miro", "FigJam", "ClickUp", "Jira", "Trello", 
    "Maze", "Google Forms", "FlowMapp", "Uizard", "Stark", "Google Analytics"
  ];

  // ==========================================================
  // DADOS EM INGLÊS
  // ==========================================================
  const experiencesEN = [
    {
      period: "July 2025 - Present",
      title: "UI/UX Designer",
      company: "Teknisa",
      description: (
        <div className="space-y-4 mt-4 text-gray-600 text-[1.05rem] leading-relaxed">
          <p>
            In this role within a complex B2B SaaS ecosystem, I was responsible for conducting the full product cycle applying the Triple Diamond model, focusing on operational diagnostics, ERP systems architecture, and the technical evolution of the Design System in direct collaboration with Product Owners and Engineering. I continue to work on the conception of waste management solutions, the B2B Purchasing and Quotation Platform, and Audit projects, transforming technical requirements into responsive and functional interfaces.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-2 uppercase tracking-wider text-xs font-bold">Key Achievements:</strong>
            <p className="text-sm text-gray-600 leading-relaxed">
              Identified critical usability issues and redesigned end-to-end journeys (Receiving/Waste), resulting in the elimination of redundancies and a drastic reduction of clicks and manual steps, optimizing operational efficiency. Structured UX diagnostic forms that raised the response rate and used quantitative data analysis to support the roadmap, mitigating development risks through usability testing that ensured technical adherence and accessibility prior to the coding phase.
            </p>
          </div>
        </div>
      ),
    },
    {
      period: "October 2024 - July 2025",
      title: "Product Designer",
      company: "CDC Bank",
      description: (
        <div className="space-y-4 mt-4 text-gray-600 text-[1.05rem] leading-relaxed">
          <p>
            In this position at a Fintech, I was responsible for the governance of the Design System and interface design for Banking as a Service (BaaS) and Content as a Service (CaaS) solutions, articulating design solutions with Engineering, Product, and Data teams. I worked on refining critical financial flows, ensuring solutions were aligned with business objectives and user needs.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-2 uppercase tracking-wider text-xs font-bold">Key Achievements:</strong>
            <p className="text-sm text-gray-600 leading-relaxed">
              Led the Financial Reconciliation Management project and the Redesign of the Navigation and Notification System, where the simplification of journeys and application of information hierarchy principles resulted in a direct 90% drop in support ticket volume in specific modules. The evolution of the component library accelerated time-to-market, while the implementation of high-fidelity prototypes and usability testing validated data-driven hypotheses, reducing rework costs.
            </p>
          </div>
        </div>
      ),
    },
    {
      period: "December 2022 - June 2024",
      title: "Product Designer",
      company: "JCM Consultores",
      description: (
        <div className="space-y-4 mt-4 text-gray-600 text-[1.05rem] leading-relaxed">
          <p>
            During this period, I was responsible for structuring the end-to-end Product Discovery and UX Research process, using methods such as CSD Matrix, interviews, desk research, and card sorting to align user pain points with business goals.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-2 uppercase tracking-wider text-xs font-bold">Key Achievements:</strong>
            <p className="text-sm text-gray-600 leading-relaxed">
              Designed the Closed Supplementary Pension platform aimed at a 60+ audience, prioritizing accessibility and inclusion to reduce cognitive load in complex flows, mitigating error risks and increasing user autonomy. The creation of a documented Style Guide and conduction of Design Reviews raised the engineering team's operational efficiency and product design maturity, ensuring visual consistency and scalability in dynamic growth scenarios.
            </p>
          </div>
        </div>
      ),
    },
    {
      period: "January 2022 - November 2022",
      title: "Freelance UI/UX Designer",
      company: "Givisiez - Digital Transformation",
      description: (
        <div className="space-y-4 mt-4 text-gray-600 text-[1.05rem] leading-relaxed">
          <p>
            In this highly autonomous experience, I was responsible for conducting market research and data analysis to develop customized solutions aligned with real customer needs.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-2 uppercase tracking-wider text-xs font-bold">Key Achievements:</strong>
            <p className="text-sm text-gray-600 leading-relaxed">
              Implemented visual standardization via a Design System, which reduced communication failures and increased the delivery speed (time-to-market) of interface evolutions. Established a continuous improvement cycle based on real feedback and data analysis, ensuring the product grew with visual scalability and technical efficiency, maintaining consistency and clarity across all touchpoints.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const resumeExtraEN = {
    education: [
      "Postgraduate Degree in UX and Digital Product Design - PUC Minas - Ongoing",
      "Bachelor's Degree in Environmental Design - State University of Minas Gerais (UEMG) - 2016-2021",
      "Key Elective - Cognitive Neuroscience of Creativity - UEMG"
    ],
    courses: ["UX and Design Thinking - Udemy", "Front-end (HTML, CSS, JS, React) - Udemy"],
    languages: ["English - Intermediate - EF SET Certificate B2 Upper Intermediate", "Spanish - Basic"]
  };

  const skillsEN = [
    "UX Research", "Information Architecture", "Discovery", "Prototyping", 
    "Usability Metrics", "Advanced Figma", "Design Systems", 
    "UI Design", "Cross-functional Teamwork", "Generative AI in Workflow", "Front-end (HTML, CSS, React)"
  ];

  const toolsEN = [
    "Figma", "Figma AI", "Claude", "Gemini", "GPT", "Lovable", "Cursor", "V0", 
    "Bolt", "Google Workspace", "Miro", "FigJam", "ClickUp", "Jira", "Trello", 
    "Maze", "Google Forms", "FlowMapp", "Uizard", "Stark", "Google Analytics"
  ];

  // ==========================================================
  // Controle de Idioma
  // ==========================================================
  const activeExperiences = language === 'pt' ? experiencesPT : experiencesEN;
  const activeExtra = language === 'pt' ? resumeExtraPT : resumeExtraEN;
  const activeSkills = language === 'pt' ? skillsPT : skillsEN;
  const activeTools = language === 'pt' ? toolsPT : toolsEN;

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      
      {/* Header Editorial Minimalista */}
      <div className="bg-white border-b border-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
              {language === 'pt' ? 'Currículo e Experiências.' : 'Resume and Experience.'}
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
              {language === 'pt' 
                ? 'Trajetória profissional estruturada em arquitetura de informação, evolução de sistemas complexos e impacto analítico.' 
                : 'Professional trajectory structured in information architecture, evolution of complex systems, and analytical impact.'}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid Principal */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Coluna Principal: Resumo e Experiências */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Seção de Resumo */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-b border-gray-200 pb-12"
            >
              <div className="flex items-center mb-8">
                <User size={22} strokeWidth={1.5} className="text-gray-900 mr-4" />
                <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                  {language === 'pt' ? 'Resumo Profissional' : 'Professional Summary'}
                </h2>
              </div>
              <div className="space-y-6 text-gray-500 text-[1.1rem] leading-relaxed">
                {language === 'pt' ? (
                  <>
                    <p>
                      Product Designer (UX/UI) com 4 anos de experiência em produtos SaaS, ERPs e sistemas de alta complexidade. Atuação end-to-end em discovery, definição e entrega, com foco em tomada de decisão orientada a dados, arquitetura da informação e design de fluxos analíticos.
                    </p>
                    <p>
                      Experiência na evolução de Design Systems escaláveis, colaborando intimamente com engenharia e produto para aumentar consistência técnica, eficiência de componentes e velocidade de entrega no go-to-market.
                    </p>
                    <p>
                      Histórico comprovado em traduzir regras complexas de negócio em fluxos operacionais lógicos e de baixa carga cognitiva, gerando redução direta de chamados de suporte, mitigação de retrabalho e otimização de métricas de usabilidade.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Product Designer (UX/UI) with 4 years of experience in SaaS products, ERPs, and highly complex systems. End-to-end execution in discovery, definition, and delivery, focusing on data-driven decision making, information architecture, and analytical flow design.
                    </p>
                    <p>
                      Experience in evolving scalable Design Systems, collaborating closely with engineering and product to increase technical consistency, component efficiency, and go-to-market speed.
                    </p>
                    <p>
                      Proven track record of translating complex business rules into logical, low-cognitive-load operational flows, driving down support tickets, mitigating rework, and optimizing usability metrics.
                    </p>
                  </>
                )}
              </div>
            </motion.section>

            {/* SEÇÃO NOVA: Impacto em Produto (Gerada dinamicamente) */}
            {projectImpacts && projectImpacts.length > 0 && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border-b border-gray-200 pb-12"
              >
                <div className="flex items-center mb-8">
                  <Target size={22} strokeWidth={1.5} className="text-gray-900 mr-4" />
                  <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                    {language === 'pt' ? 'Impacto em Produto' : 'Product & Experience Impact'}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectImpacts.map((impact: any, index: number) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 p-6 rounded-none">
                      <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest border-b border-gray-200 pb-3">
                        {impact.title}
                      </h3>
                      <div className="space-y-3">
                        {impact.lines.map((line: string, i: number) => {
                          const isBullet = line.startsWith('•');
                          const text = line.replace('•', '').trim();
                          
                          // Aplica negrito nas partes que usam asteriscos duplos
                          const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>');

                          return isBullet ? (
                            <div key={i} className="flex gap-3 items-start text-sm text-gray-600">
                              <span className="text-gray-900 font-bold mt-0.5">•</span>
                              <span dangerouslySetInnerHTML={{ __html: formattedText }} />
                            </div>
                          ) : (
                            <p key={i} className="text-sm text-gray-700 font-medium mb-1" dangerouslySetInnerHTML={{ __html: formattedText }} />
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Seção de Experiência Profissional */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pb-12"
            >
              <div className="flex items-center mb-12">
                <Briefcase size={22} strokeWidth={1.5} className="text-gray-900 mr-4" />
                <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                  {language === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
                </h2>
              </div>
              
              <div className="space-y-16">
                {activeExperiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l border-gray-200 group">
                    <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-gray-900 border border-gray-950 transition-colors group-hover:bg-white"></div>
                    
                    <span className="inline-block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                      {exp.period}
                    </span>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">
                      {exp.title}
                    </h3>
                    
                    <p className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-6">
                      {exp.company}
                    </p>
                    
                    <div>{exp.description}</div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar Técnica (Sticky no Desktop) */}
          <div className="lg:col-span-1 space-y-12 lg:sticky lg:top-32 border-t lg:border-t-0 lg:border-l border-gray-200 pt-12 lg:pt-0 lg:pl-12">
            
            {/* Habilidades (Foco Técnico e Sóbrio) */}
            <section>
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">
                {language === 'pt' ? 'Habilidades' : 'Skills'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {activeSkills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 border border-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wide bg-gray-50 rounded-none">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Ferramentas */}
            <section>
              <div className="flex items-center mb-6">
                <Wrench size={16} strokeWidth={1.5} className="text-gray-900 mr-3" />
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                  {language === 'pt' ? 'Ferramentas' : 'Tools'}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeTools.map((tool, i) => (
                  <span key={i} className="px-3 py-1.5 border border-gray-200 text-gray-600 text-xs font-semibold bg-white rounded-none">
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            {/* Formação Acadêmica */}
            <section className="border-t border-gray-100 pt-8">
              <div className="flex items-center mb-6">
                <GraduationCap size={18} strokeWidth={1.5} className="text-gray-900 mr-3" />
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                  {language === 'pt' ? 'Formação' : 'Education'}
                </h3>
              </div>
              <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
                {activeExtra.education.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-gray-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Certificações e Cursos */}
            <section className="border-t border-gray-100 pt-8">
              <div className="flex items-center mb-6">
                <Award size={18} strokeWidth={1.5} className="text-gray-900 mr-3" />
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                  {language === 'pt' ? 'Cursos' : 'Courses'}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm">
                {activeExtra.courses.map((course, i) => (
                  <li key={i} className="bg-gray-50 p-4 border border-gray-100 font-medium rounded-none">
                    {course}
                  </li>
                ))}
              </ul>
            </section>

            {/* Idiomas */}
            <section className="border-t border-gray-100 pt-8">
              <div className="flex items-center mb-6">
                <Globe2 size={18} strokeWidth={1.5} className="text-gray-900 mr-3" />
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                  {language === 'pt' ? 'Idiomas' : 'Languages'}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm font-medium">
                {activeExtra.languages.map((lang, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900"></div>
                    {lang}
                  </li>
                ))}
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
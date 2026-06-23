import { Briefcase, GraduationCap, Award, Globe2, User, Wrench, Target, Download } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects";

const AboutPage = () => {
  const { language } = useLanguage();

  // ==========================================================
  // FUNÇÃO QUE BUSCA O IMPACTO DIRETAMENTE DO PROJECTS.TS
  // ==========================================================
  const getProjectImpacts = () => {
    return projectsData.map(project => {
      const desc = typeof project.fullDescription === 'string' 
        ? project.fullDescription 
        : (project.fullDescription?.[language] || project.fullDescription?.pt || "");
      
      const regex = /\*\*(?:RESULTADOS|RESULT|IMPACTO|IMPACT)\*\*\n([\s\S]*?)(?=\n\*\*|$)/i;
      const match = desc.match(regex);

      if (match && match[1].trim()) {
        const cleanLines = match[1]
          .split('\n')
          .map(line => line.trim())
          .filter(line => line && !line.startsWith('[IMG') && !line.startsWith('[METRICS]'));
          
        if (cleanLines.length === 0) return null;

        const title = typeof project.title === 'string' 
          ? project.title 
          : (project.title?.[language] || project.title?.pt || project.id);

        return { id: project.id, title, lines: cleanLines };
      }
      return null;
    }).filter(Boolean);
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
            Responsável por iniciativas de discovery, redesign de fluxos críticos e evolução da experiência em ecossistema ERP SaaS B2B.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-3 uppercase tracking-wider text-xs font-bold">Principais resultados:</strong>
            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Condução de entrevistas, testes de usabilidade e análises comportamentais para identificação de oportunidades de produto.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Transformação de insights em decisões estratégicas para evolução de jornadas críticas.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Evolução do Design System para aumentar consistência e escalabilidade entre produtos.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Estruturação de processos UX end-to-end reduzindo retrabalho e aumentando alinhamento com Engenharia.</li>
            </ul>
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
            Atuação em plataforma Banking as a Service (BaaS) voltada para operações financeiras complexas.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-3 uppercase tracking-wider text-xs font-bold">Principais resultados:</strong>
            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Liderança do redesign de Conciliação Financeira, Navegação e Sistema de Notificações.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Redução de até 75% dos chamados de suporte em módulos financeiros.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Redução de erros em operações financeiras críticas.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Aumento da produtividade operacional dos usuários.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Evolução do Design System acelerando entregas e reduzindo retrabalho.</li>
            </ul>
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
            Atuação em produtos financeiros complexos e plataforma de previdência complementar voltada ao público 60+.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-3 uppercase tracking-wider text-xs font-bold">Principais resultados:</strong>
            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Estruturação de processos de Discovery e UX Research.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Tradução de regras de negócio complexas em experiências acessíveis.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Redução da carga cognitiva em jornadas críticas.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Aumento da autonomia dos usuários.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Evolução da maturidade de design e padronização da experiência.</li>
            </ul>
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
            Atuação em projetos de transformação digital B2C, conduzindo iniciativas de discovery, validação de soluções e estruturação de experiências digitais alinhadas aos objetivos de negócio.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-3 uppercase tracking-wider text-xs font-bold">Principais contribuições & Impacto:</strong>
            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Conduzi pesquisas com usuários, análises competitivas e levantamento de requisitos para apoiar decisões estratégicas.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Utilizei a metodologia Google Design Sprint para acelerar processos de descoberta, ideação e validação.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Criei Design Systems e padrões reutilizáveis para aumentar consistência e escalabilidade das interfaces.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> <strong>Impacto:</strong> Aumento do alinhamento entre necessidades dos usuários e objetivos estratégicos do negócio.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> <strong>Impacto:</strong> Redução de falhas de comunicação e maior velocidade na evolução de produtos digitais.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const resumeExtraPT = {
    education: [
      "Pós-graduação em UX e Design de Produtos Digitais - PUC Minas - 2026-2027 (Em andamento)",
      "Graduação em Design de Ambientes - Universidade Estadual de Minas Gerais (UEMG) - 2016-2021",
      "Optativa de destaque - Neurociência Cognitiva da Criatividade - UEMG"
    ],
    courses: ["UX e Design Thinking - Udemy", "Front-end (HTML, CSS, JS, React) - Udemy"],
    languages: ["Inglês - Intermediário - EF SET Certificate B2 Upper Intermediate", "Espanhol - Básico"]
  };

  const skillsPT = [
    "Descoberta de Produto (Discovery)", "Estratégia de Design", "Pesquisa de UX", 
    "Entrevistas com Usuários", "Testes de Usabilidade", "Arquitetura da Informação", 
    "Design de Interação", "Design Systems", "Prototipagem", "Pensamento de Produto", 
    "Métricas de Produto", "Design Orientado a Dados", "Design Ops", "Contato com Stakeholders",
    "Colaboração Interfuncional", "Acessibilidade", "Design Responsivo", "Jornada do Cliente", "Design de Serviço"
  ];

  const toolsPT = [
    "Figma", "FigJam", "Miro", "Maze", "Microsoft Clarity", "Google Analytics", "Notion", "Jira", "Trello", "ClickUp",
    "HTML", "CSS", "React", "Claude", "ChatGPT", "Lovable", "Bolt", "v0", "Google Stitch", "Cursor"
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
            Responsible for discovery initiatives, critical flows redesign, and experience evolution in a B2B SaaS ERP ecosystem.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-3 uppercase tracking-wider text-xs font-bold">Key Results:</strong>
            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Conducted interviews, usability tests, and behavioral analysis to identify product opportunities.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Transformed insights into strategic decisions for the evolution of critical journeys.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Evolved the Design System to increase consistency and scalability across products.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Structured end-to-end UX processes reducing rework and increasing alignment with Engineering.</li>
            </ul>
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
            Worked on a Banking as a Service (BaaS) platform focused on complex financial operations.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-3 uppercase tracking-wider text-xs font-bold">Key Results:</strong>
            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Led the redesign of Financial Reconciliation, Navigation, and Notification System.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Reduced support tickets in financial modules by up to 75%.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Reduced errors in critical financial operations.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Increased user operational productivity.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Evolved the Design System accelerating delivery and reducing rework.</li>
            </ul>
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
            Worked on complex financial products and a supplementary pension platform aimed at the 60+ audience.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-3 uppercase tracking-wider text-xs font-bold">Key Results:</strong>
            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Structured Discovery and UX Research processes.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Translated complex business rules into accessible experiences.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Reduced cognitive load in critical journeys.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Increased user autonomy.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Evolved design maturity and experience standardization.</li>
            </ul>
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
            Worked on B2C digital transformation projects, leading discovery initiatives, solution validation, and digital experience structuring aligned with business goals.
          </p>
          <div className="bg-gray-50 p-6 rounded-none border-l-2 border-gray-900">
            <strong className="text-gray-900 block mb-3 uppercase tracking-wider text-xs font-bold">Contributions & Impact:</strong>
            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Conducted user research, competitive analysis, and requirements gathering to support strategic decisions.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Utilized Google Design Sprint to accelerate discovery, ideation, and validation processes.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> Created Design Systems and reusable patterns to increase visual consistency and scalability.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> <strong>Impact:</strong> Increased alignment between user needs and strategic business goals.</li>
              <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">•</span> <strong>Impact:</strong> Reduced communication failures and achieved faster digital product evolution.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const resumeExtraEN = {
    education: [
      "Postgraduate Degree in UX and Digital Product Design - PUC Minas - 2026-2027 (Ongoing)",
      "Bachelor's Degree in Environmental Design - State University of Minas Gerais (UEMG) - 2016-2021",
      "Key Elective - Cognitive Neuroscience of Creativity - UEMG"
    ],
    courses: ["UX and Design Thinking - Udemy", "Front-end (HTML, CSS, JS, React) - Udemy"],
    languages: ["English - Intermediate - EF SET Certificate B2 Upper Intermediate", "Spanish - Basic"]
  };

  const skillsEN = [
    "Product Discovery", "Design Strategy", "UX Research", "User Interviews", 
    "Usability Testing", "Information Architecture", "Interaction Design", 
    "Design Systems", "Prototyping", "Product Thinking", "Product Metrics", 
    "Data-Informed Design", "Design Ops", "Stakeholder Collaboration", 
    "Cross-functional Teamwork", "Accessibility", "Responsive Design", 
    "Customer Journey Mapping", "Service Design"
  ];

  const toolsEN = [
    "Figma", "FigJam", "Miro", "Maze", "Microsoft Clarity", "Google Analytics", "Notion", "Jira", "Trello", "ClickUp",
    "HTML", "CSS", "React", "Claude", "ChatGPT", "Lovable", "Bolt", "v0", "Google Stitch", "Cursor"
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
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                {language === 'pt' ? 'Currículo.' : 'Resume.'}
              </h1>
              <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
                {language === 'pt' 
                  ? 'Trajetória profissional estruturada em arquitetura de informação, evolução de sistemas complexos e impacto analítico.' 
                  : 'Professional trajectory structured in information architecture, evolution of complex systems, and analytical impact.'}
              </p>
            </div>

            {/* BOTÃO DE DOWNLOAD AQUI */}
            <a 
              href="/curriculo-leticia-giostri.pdf" 
              download="Curriculo_Leticia_Giostri.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold tracking-wide uppercase text-sm rounded-none transition-colors shrink-0"
            >
              <Download size={18} strokeWidth={2} />
              {language === 'pt' ? 'Baixar PDF' : 'Download PDF'}
            </a>

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
                      Product Designer (UX/UI) com forte foco estratégico e analítico, impulsionando resultados de negócio através de interfaces eficientes.
                    </p>
                    <p>
                      Minha atuação é moldada pela conexão entre necessidades dos usuários e viabilidade técnica, liderando iniciativas de Product Discovery, estruturação de Design Systems escaláveis e pesquisa de usabilidade end-to-end. Tenho paixão por desmistificar regras de negócio complexas, transformando-as em fluxos de trabalho lógicos que reduzem a carga cognitiva e o esforço operacional.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Product Designer (UX/UI) with a strong strategic and analytical focus, driving business results through efficient interfaces.
                    </p>
                    <p>
                      My work is shaped by connecting user needs with technical viability, leading Product Discovery initiatives, structuring scalable Design Systems, and conducting end-to-end usability research. I am passionate about demystifying complex business rules, translating them into logical workflows that reduce cognitive load and operational friction.
                    </p>
                  </>
                )}
              </div>
            </motion.section>

            {/* SEÇÃO DINÂMICA: Impacto em Produto */}
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
                    {language === 'pt' ? 'Impacto em Projetos' : 'Project Impact'}
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
            
            {/* Habilidades */}
            <section>
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">
                {language === 'pt' ? 'Habilidades Core' : 'Core Skills'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {activeSkills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 border border-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wide bg-gray-50 rounded-none">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Ferramentas e Tech */}
            <section>
              <div className="flex items-center mb-6">
                <Wrench size={16} strokeWidth={1.5} className="text-gray-900 mr-3" />
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                  {language === 'pt' ? 'Ferramentas & Tecnologias' : 'Tools & Technologies'}
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
                  {language === 'pt' ? 'Formação Acadêmica' : 'Education'}
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
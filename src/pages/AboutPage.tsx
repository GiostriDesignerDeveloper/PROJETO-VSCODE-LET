import { Briefcase, GraduationCap, Award, Globe2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const AboutPage = () => {
  const { language } = useLanguage();

  // ==========================================================
  // DADOS EM PORTUGUÊS
  // ==========================================================
  const experiencesPT = [
    {
      period: "Julho 2025 - Atual",
      title: "UI/UX Designer",
      company: "Teknisa",
      description: (
        <div className="space-y-4 mt-4 text-gray-700">
          <p>
            Nesta atuação em um ecossistema SaaS B2B complexo, fui responsável por conduzir o ciclo completo de produto aplicando o modelo do Triplo Diamante, com foco em diagnósticos operacionais, arquitetura de sistemas ERP e evolução técnica do Design System em colaboração direta com Product Owners e Engenharia. Sigo atuando na concepção de soluções de gestão de desperdícios, na Plataforma B2B de Compras e Cotações e em projetos de Auditoria, transformando requisitos técnicos em interfaces responsivas e funcionais.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <strong className="text-blue-900 block mb-2">Realizações a destacar:</strong>
            <p className="text-sm">
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
        <div className="space-y-4 mt-4 text-gray-700">
          <p>
            Nesta posição em uma Fintech, fui responsável pela governança do Design System e pelo design de interfaces para soluções de Banking as a Service (BaaS) e Content as a Service (CaaS), articulando soluções de design com times de Engenharia, Produto e Dados. Atuei no refinamento de fluxos financeiros críticos, garantindo que as soluções estivessem alinhadas aos objetivos de negócio e às necessidades dos usuários.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <strong className="text-blue-900 block mb-2">Realizações a destacar:</strong>
            <p className="text-sm">
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
        <div className="space-y-4 mt-4 text-gray-700">
          <p>
            Durante este período, fui responsável por estruturar o processo de Product Discovery e UX Research de ponta a ponta, utilizando métodos como Matriz CSD, entrevistas, desk research e cardsorting para alinhar dores dos usuários aos objetivos do negócio.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <strong className="text-blue-900 block mb-2">Realizações a destacar:</strong>
            <p className="text-sm">
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
        <div className="space-y-4 mt-4 text-gray-700">
          <p>
            Nesta experiência com alto nível de autonomia, fui responsável por conduzir pesquisas de mercado e análise de dados para o desenvolvimento de soluções personalizadas e aderentes às necessidades reais dos clientes.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <strong className="text-blue-900 block mb-2">Realizações a destacar:</strong>
            <p className="text-sm">
              Implementei a padronização visual via Design System, o que reduziu falhas de comunicação e aumentou a velocidade de entrega (time-to-market) das evoluções de interface. Estabeleci um ciclo de melhoria contínua baseado em feedback real e análise de dados, garantindo que o produto crescesse com escalabilidade visual e eficiência técnica, mantendo a consistência e a clareza em todos os pontos de contatos.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const resumeExtraPT = {
    education: [
      "Graduação em Design de Ambientes - Universidade Estadual de Minas Gerais (UEMG) - 2016-2021",
      "Optativa de destaque - Neurociência Cognitiva da Criatividade - UEMG"
    ],
    courses: ["UX & Design Thinking - Udemy", "Front-end (HTML, CSS, JS, React) - Udemy"],
    languages: ["Inglês - Intermediário - EF SET Certificate B2 Upper Intermediate", "Espanhol - Básico"]
  };

  const skillsPT = [
    "UX Research", "Arquitetura da Informação", "Discovery", "Prototipação", 
    "Métricas de Usabilidade", "Figma Avançado", "Design Systems", 
    "UI Design", "Trabalho em times multidisciplinares", "IAs generativas no workflow", "Front-end (HTML, CSS, React)"
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
        <div className="space-y-4 mt-4 text-gray-700">
          <p>
            In this role within a complex B2B SaaS ecosystem, I was responsible for conducting the full product cycle applying the Triple Diamond model, focusing on operational diagnostics, ERP systems architecture, and the technical evolution of the Design System in direct collaboration with Product Owners and Engineering. I continue to work on the conception of waste management solutions, the B2B Purchasing and Quotation Platform, and Audit projects, transforming technical requirements into responsive and functional interfaces.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <strong className="text-blue-900 block mb-2">Key Achievements:</strong>
            <p className="text-sm">
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
        <div className="space-y-4 mt-4 text-gray-700">
          <p>
            In this position at a Fintech, I was responsible for the governance of the Design System and interface design for Banking as a Service (BaaS) and Content as a Service (CaaS) solutions, articulating design solutions with Engineering, Product, and Data teams. I worked on refining critical financial flows, ensuring solutions were aligned with business objectives and user needs.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <strong className="text-blue-900 block mb-2">Key Achievements:</strong>
            <p className="text-sm">
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
        <div className="space-y-4 mt-4 text-gray-700">
          <p>
            During this period, I was responsible for structuring the end-to-end Product Discovery and UX Research process, using methods such as CSD Matrix, interviews, desk research, and card sorting to align user pain points with business goals.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <strong className="text-blue-900 block mb-2">Key Achievements:</strong>
            <p className="text-sm">
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
        <div className="space-y-4 mt-4 text-gray-700">
          <p>
            In this highly autonomous experience, I was responsible for conducting market research and data analysis to develop customized solutions aligned with real customer needs.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <strong className="text-blue-900 block mb-2">Key Achievements:</strong>
            <p className="text-sm">
              Implemented visual standardization via a Design System, which reduced communication failures and increased the delivery speed (time-to-market) of interface evolutions. Established a continuous improvement cycle based on real feedback and data analysis, ensuring the product grew with visual scalability and technical efficiency, maintaining consistency and clarity across all touchpoints.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const resumeExtraEN = {
    education: [
      "Bachelor's Degree in Environmental Design - State University of Minas Gerais (UEMG) - 2016-2021",
      "Key Elective - Cognitive Neuroscience of Creativity - UEMG"
    ],
    courses: ["UX & Design Thinking - Udemy", "Front-end (HTML, CSS, JS, React) - Udemy"],
    languages: ["English - Intermediate - EF SET Certificate B2 Upper Intermediate", "Spanish - Basic"]
  };

  const skillsEN = [
    "UX Research", "Information Architecture", "Discovery", "Prototyping", 
    "Usability Metrics", "Advanced Figma", "Design Systems", 
    "UI Design", "Cross-functional Teamwork", "Generative AI in Workflow", "Front-end (HTML, CSS, React)"
  ];

  // ==========================================================
  // Controle de Idioma
  // ==========================================================
  const activeExperiences = language === 'pt' ? experiencesPT : experiencesEN;
  const activeExtra = language === 'pt' ? resumeExtraPT : resumeExtraEN;
  const activeSkills = language === 'pt' ? skillsPT : skillsEN;

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Header / Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {language === 'pt' ? 'Currículo & Experiências' : 'Resume & Experience'}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {language === 'pt' 
              ? 'Product Designer (UX/UI) com 4 anos de experiência em produtos SaaS B2B e sistemas complexos. Atuação end-to-end em discovery, definição e entrega, com foco em tomada de decisão orientada a dados.' 
              : 'Product Designer (UX/UI) with 4 years of experience in B2B SaaS products and complex systems. End-to-end action in discovery, definition, and delivery, focusing on data-driven decision making.'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Main Content: Experiences */}
          <div className="lg:col-span-2">
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center mb-8 border-b pb-4">
                <Briefcase size={28} className="text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
                </h2>
              </div>
              
              <div className="space-y-12">
                {activeExperiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"></div>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-bold rounded-md mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{exp.company}</p>
                    <div className="text-gray-700 leading-relaxed">{exp.description}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar: Skills, Education, Courses, Languages */}
          <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-28">
            
            {/* Skills */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {language === 'pt' ? 'Habilidades' : 'Skills'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {activeSkills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center mb-6">
                <GraduationCap size={24} className="text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  {language === 'pt' ? 'Formação' : 'Education'}
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700 text-sm">
                {activeExtra.education.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Courses */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center mb-6">
                <Award size={24} className="text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  {language === 'pt' ? 'Cursos' : 'Courses'}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                {activeExtra.courses.map((course, i) => (
                  <li key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    {course}
                  </li>
                ))}
              </ul>
            </section>

            {/* Languages */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center mb-6">
                <Globe2 size={24} className="text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  {language === 'pt' ? 'Idiomas' : 'Languages'}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                {activeExtra.languages.map((lang, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
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
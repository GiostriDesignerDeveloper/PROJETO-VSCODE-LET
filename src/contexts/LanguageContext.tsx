import { createContext, useState, useContext, ReactNode } from 'react';

const translations = {
  pt: {
    // --- Menu / Navegação ---
    "nav.home": "Início",
    "nav.projects": "Projetos",
    "nav.experience": "Experiências",
    "nav.contact": "Contato",
    "lang.switch": "🇧🇷 PT",

    // --- Seção Hero (Home) ---
    "hero.greeting": "Olá, sou a Letícia",
    "hero.title.1": "Design orientado por ",
    "hero.title.blue1": "comportamentos",
    "hero.title.2": " e ",
    "hero.title.blue2": "dados",
    "hero.title.3": " para produtos digitais.",
    "hero.subtitle": "Olá, sou a Letícia designer focada em criar soluções visuais baseadas em usabilidade e métricas de negócio.",

    // --- Seção Sobre Mim (Home) ---
    "about.title": "Sobre mim",
    "about.history.title": "Minha história",
    "about.bio.p1": "Product Designer (UI/UX) com 4 anos de experiência em produtos digitais B2B e ecossistemas de alta complexidade. Minha atuação é pautada pela entrega de valor estratégico através de UX Research, Design Systems escaláveis e análise de KPIs de produto.",
    "about.bio.p2": "Atualmente, na Teknisa, atuo ativamente no refinamento técnico do Design System. Implementei estruturas avançadas de variáveis e componentização complexa no Figma, focando em Eficiência Operacional para reduzir o débito técnico e otimizar o processo de handover.",
    "about.skills.title": "Habilidades & Stack:",
    "about.button": "Saiba mais sobre mim",
    "about.card1.title": "Tecnologia e Desenvolvimento",
    "about.card1.desc": "Colaboração técnica com desenvolvedores, garantindo a viabilidade do projeto e a fidelidade na implementação do design.",
    "about.card2.title": "UI/UX Design",
    "about.card2.desc": "Criar interfaces e experiências de usuário intuitivas e visualmente atraentes.",
    "about.card3.title": "Design responsivo",
    "about.card3.desc": "Garantir que os aplicativos funcionem perfeitamente em todos os dispositivos e tamanhos de tela.",
    "about.card4.title": "Colaboração",
    "about.card4.desc": "Trabalhar eficazmente em equipe para entregar projetos com sucesso e dentro do prazo.",

    // --- Projetos (Home) ---
    "projects.section.title": "Projetos selecionados",

    // --- Footer ---
    "footer.created": "Criado por Letícia Giostri.",
    "footer.links": "Links rápidos",
    "footer.contact.title": "Entre em contato",
    "footer.contact.email": "Email:",
    "footer.contact.location": "Localização:",
    "footer.rights": "© 2026 Letícia Giostri. Todos os direitos reservados.",

    // --- Página Inteira - Sobre Mim (AboutPage) ---
    "aboutpage.hero.title": "Sobre mim",
    "aboutpage.hero.subtitle": "UI/UX Designer com foco em produtos digitais complexos, sistemas corporativos e decisões orientadas a dados.",
    "aboutpage.trajectory": "Minha trajetória",
    "aboutpage.skills": "Habilidades",
    "aboutpage.cat.ux": "UX & Produto",
    "aboutpage.cat.ui": "UI & Design System",
    "aboutpage.cat.tools": "Ferramentas",
    "about.bio.highlight": "Projeto destaque:",
    "about.bio.p3": "Responsável pela concepção e design do novo sistema de gerenciamento de desperdícios em restaurantes, focado em transformar regras de negócio densas em uma interface digital intuitiva para cozinhas industriais. Por meio de UX Research e Discovery (entrevistas qualitativas e desk research), mapeei dores reais para projetar um fluxo de pesagem eficiente, visando a futura redução de perdas financeiras e maior precisão nos dados operacionais dos clientes.",
    "about.bio.p4": "Tenho passagens estratégicas pelo CDC Bank, redesenhando fluxos financeiros críticos (Conciliação e Operações), e pela JCM Consultores.",

    // --- Página de Contato ---
    "contact.hero.title": "Entre em Contato",
    "contact.hero.subtitle": "Este portfólio reúne projetos e experiências desenvolvidos em contextos corporativos. Sinta-se à vontade para entrar em contato para discutir oportunidades ou dizer olá!",
    "contact.info.title": "Informações de Contato",
    "contact.info.email": "Email",
    "contact.info.location": "Localização",
    "contact.info.city": "Belo Horizonte, MG - BR",
    "contact.info.status": "Disponível para contato.",
    "contact.social.title": "Links para minhas redes"
  },
  en: {
    // --- Menu / Navigation ---
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "lang.switch": "🇺🇸 EN",

    // --- Hero Section (Home) ---
    "hero.greeting": "Hello, I'm Letícia",
    "hero.title.1": "Behavior and ",
    "hero.title.blue1": "data-driven",
    "hero.title.2": " ",
    "hero.title.blue2": "design",
    "hero.title.3": " for digital products.",
    "hero.subtitle": "Hi, I'm Letícia, a designer focused on creating visual solutions based on usability and business metrics.",

    // --- About Section (Home) ---
    "about.title": "About me",
    "about.history.title": "My story",
    "about.bio.p1": "Product Designer (UI/UX) with 4 years of experience in B2B digital products and high-complexity ecosystems. My work is guided by delivering strategic value through UX Research, scalable Design Systems, and product KPI analysis.",
    "about.bio.p2": "Currently, I actively work on the technical refinement of the Design System. I implemented advanced variables and complex component structures in Figma, focusing on Operational Efficiency to reduce technical debt and optimize the handover process.",
    "about.skills.title": "Skills & Stack:",
    "about.button": "Learn more about me",
    "about.card1.title": "Technology and Development",
    "about.card1.desc": "Technical collaboration with developers, ensuring project feasibility and fidelity in design implementation.",
    "about.card2.title": "UI/UX Design",
    "about.card2.desc": "Creating intuitive and visually appealing interfaces and user experiences.",
    "about.card3.title": "Responsive Design",
    "about.card3.desc": "Ensuring applications work perfectly across all devices and screen sizes.",
    "about.card4.title": "Collaboration",
    "about.card4.desc": "Working effectively in teams to deliver successful projects on time.",

    // --- Projects (Home) ---
    "projects.section.title": "Selected projects",

    // --- Footer ---
    "footer.created": "Created by Letícia Giostri.",
    "footer.links": "Quick links",
    "footer.contact.title": "Get in touch",
    "footer.contact.email": "Email:",
    "footer.contact.location": "Location:",
    "footer.rights": "© 2026 Letícia Giostri. All rights reserved.",

    // --- Full Page - About Me (AboutPage) ---
    "aboutpage.hero.title": "About me",
    "aboutpage.hero.subtitle": "UI/UX Designer focused on complex digital products, corporate systems, and data-driven decisions.",
    "aboutpage.trajectory": "My trajectory",
    "aboutpage.skills": "Skills",
    "aboutpage.cat.ux": "UX & Product",
    "aboutpage.cat.ui": "UI & Design System",
    "aboutpage.cat.tools": "Tools",
    "about.bio.highlight": "Highlight project:",
    "about.bio.p3": "Responsible for the conception and design of a new waste management system for restaurants, focused on translating dense business rules into an intuitive digital interface for industrial kitchens. Through UX Research and Discovery (qualitative interviews and desk research), I mapped real pain points to design an efficient weighing flow, aiming at future financial loss reduction and greater accuracy in clients' operational data.",
    "about.bio.p4": "I have strategic experience at CDC Bank, redesigning critical financial flows (Reconciliation and Operations), and at JCM Consultores.",

    // --- Contact Page ---
    "contact.hero.title": "Get in touch",
    "contact.hero.subtitle": "This portfolio brings together projects and experiences developed in corporate contexts. Feel free to reach out to discuss opportunities or just say hi!",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.location": "Location",
    "contact.info.city": "Belo Horizonte, MG - Brazil",
    "contact.info.status": "Available for contact.",
    "contact.social.title": "My social links"
  }
};

type Language = 'pt' | 'en';

interface LanguageContextData {
  language: Language;
  toggleLanguage: () => void;
  t: (key: keyof typeof translations['pt']) => string;
}

const LanguageContext = createContext<LanguageContextData>({} as LanguageContextData);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const t = (key: keyof typeof translations['pt']) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
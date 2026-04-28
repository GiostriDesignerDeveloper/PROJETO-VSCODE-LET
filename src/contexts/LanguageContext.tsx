import { createContext, useState, useContext, ReactNode } from 'react';

// 1. ESTE É O BLOCO ÚNICO. Não crie outro 'const translations'!
const translations = {
  pt: {
    // --- Menu / Navegação ---
    "nav.home": "Início",
    "nav.projects": "Projetos",
    "nav.experience": "Experiências",
    "nav.contact": "Contato",
    "lang.switch": "🇧🇷 PT",

    // --- Seção Hero ---
    "hero.title.1": "Design orientado por ",
    "hero.title.blue1": "comportamentos",
    "hero.title.2": " e ",
    "hero.title.blue2": "dados",
    "hero.title.3": " para produtos digitais.",
    "hero.subtitle": "Olá, sou a Letícia designer focada em criar soluções visuais baseadas em usabilidade e métricas de negócio.",

    // --- Seção Sobre Mim (About) ---
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
  },
  en: {
    // --- Menu / Navigation ---
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "lang.switch": "🇺🇸 EN",

    // --- Hero Section ---
    "hero.title.1": "Behavior and ",
    "hero.title.blue1": "data-driven",
    "hero.title.2": " ",
    "hero.title.blue2": "design",
    "hero.title.3": " for digital products.",
    "hero.subtitle": "Hi, I'm Letícia, a designer focused on creating visual solutions based on usability and business metrics.",

    // --- About Section ---
    "about.title": "About me",
    "about.history.title": "My story",
    "about.bio.p1": "Product Designer (UI/UX) with 4 years of experience in B2B digital products and high-complexity ecosystems. My work is guided by delivering strategic value through UX Research, scalable Design Systems, and product KPI analysis.",
    "about.bio.p2": "Currently at Teknisa, I actively work on the technical refinement of the Design System. I implemented advanced variables and complex component structures in Figma, focusing on Operational Efficiency to reduce technical debt and optimize the handover process.",
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
  }
};

// ... DAQUI PARA BAIXO O CÓDIGO CONTINUA IGUAL (Provider, useLanguage, etc)

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

  // Função mágica que busca o texto na língua certa
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
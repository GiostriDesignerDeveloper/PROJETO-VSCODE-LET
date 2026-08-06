import { createContext, useState, useContext, ReactNode } from 'react';

const translations = {
  pt: {
    // Menu
    "nav.home": "Início",
    "nav.projects": "Projetos",
    "nav.experience": "Experiências",
    "nav.contact": "Contato",
    "lang.switch": "🇧🇷 PT",

    // Hero
    "hero.greeting": "Olá, sou a Letícia",
    "hero.title.1": "Design orientado por ",
    "hero.title.blue1": "comportamentos",
    "hero.title.2": " e ",
    "hero.title.blue2": "dados",
    "hero.title.3": " para produtos digitais.",
    "hero.subtitle": "Olá, sou a Letícia, designer focada em transformar fluxos complexos em experiências mais claras, acessíveis e eficientes para usuários e negócios.",

    // About (Home e Interna)
    "about.title": "Sobre mim",
    "about.history.title": "Minha trajetória",
    "about.bio.p1": "Product Designer (UI/UX) com 4 anos de experiência em produtos digitais B2B e ecossistemas de alta complexidade. Minha atuação é pautada pela entrega de valor estratégico através de UX Research, Design Systems escaláveis e análise de KPIs de produto.",
    "about.bio.p2": "Atualmente, na Teknisa, atuo ativamente no refinamento técnico do Design System. Implementei estruturas avançadas de variáveis e componentização complexa no Figma, focando em Eficiência Operacional para reduzir o débito técnico e otimizar o processo de handover.",
    "about.skills.title": "Habilidades & Stack:",
    "about.button": "Saiba mais sobre mim",
    "about.bio.highlight": "Projeto destaque:",
    
    "aboutpage.hero.title": "Sobre mim",
    "aboutpage.hero.subtitle": "UI/UX Designer com foco em produtos digitais complexos, sistemas corporativos e decisões orientadas a dados.",
    "aboutpage.trajectory": "Minha trajetória",
    "aboutpage.skills": "Habilidades",
    "aboutpage.cat.ux": "UX & Produto",
    "aboutpage.cat.ui": "UI & Design System",
    "aboutpage.cat.tools": "Ferramentas",

    // Cards Skills
    "about.card1.title": "Tecnologia e Desenvolvimento",
    "about.card1.desc": "Colaboração técnica com desenvolvedores, garantindo a viabilidade do projeto e a fidelidade na implementação do design.",
    "about.card2.title": "UI/UX Design",
    "about.card2.desc": "Criar interfaces e experiências de usuário intuitivas e visualmente atraentes.",
    "about.card3.title": "Design responsivo",
    "about.card3.desc": "Garantir que os aplicativos funcionem perfeitamente em todos os dispositivos e tamanhos de tela.",
    "about.card4.title": "Colaboração",
    "about.card4.desc": "Trabalhar eficazmente em equipe para entregar projetos com sucesso e dentro do prazo.",

    // Projetos
    "projects.section.title": "Projetos selecionados",

    // Contato
    "contact.title": "Entre em contato",
    "contact.subtitle": "Tem um projeto em mente ou quer apenas bater um papo? Sinta-se à vontade para me contatar pelos canais abaixo.",
    "contact.info.title": "Informações de Contato",
    "contact.info.email.label": "Email",
    "contact.info.location.label": "Localização",
    "contact.info.location.value": "Belo Horizonte, MG - BR",
    "contact.social.label": "Redes Sociais",

    // Footer
    "footer.created": "Criado por Letícia Giostri.",
    "footer.links": "Links rápidos",
    "footer.contact.title": "Entre em contato",
    "footer.rights": "© 2026 Letícia Giostri. Todos os direitos reservados."
  },
  en: {
    // Menu
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "lang.switch": "🇺🇸 EN",

    // Hero
    "hero.greeting": "Hello, I'm Letícia",
    "hero.title.1": "Behavior and ",
    "hero.title.blue1": "data-driven",
    "hero.title.2": " ",
    "hero.title.blue2": "design",
    "hero.title.3": " for digital products.",
    "hero.subtitle": "Hi, I'm Letícia, a designer focused on transforming complex flows into clearer, more accessible, and efficient experiences for users and businesses.",

    // About
    "about.title": "About me",
    "about.history.title": "My trajectory",
    "about.bio.p1": "Product Designer (UI/UX) with 4 years of experience in B2B digital products and high-complexity ecosystems. My work is guided by delivering strategic value through UX Research, scalable Design Systems, and product KPI analysis.",
    "about.bio.p2": "Currently at Teknisa, I actively work on the technical refinement of the Design System. I implemented advanced variables and complex component structures in Figma, focusing on Operational Efficiency to reduce technical debt and optimize the handover process.",
    "about.skills.title": "Skills & Stack:",
    "about.button": "Learn more about me",
    "about.bio.highlight": "Highlight project:",

    "aboutpage.hero.title": "About me",
    "aboutpage.hero.subtitle": "UI/UX Designer focused on complex digital products, corporate systems, and data-driven decisions.",
    "aboutpage.trajectory": "My trajectory",
    "aboutpage.skills": "Skills",
    "aboutpage.cat.ux": "UX & Product",
    "aboutpage.cat.ui": "UI & Design System",
    "aboutpage.cat.tools": "Tools",

    "about.card1.title": "Technology and Development",
    "about.card1.desc": "Technical collaboration with developers, ensuring project feasibility and fidelity in design implementation.",
    "about.card2.title": "UI/UX Design",
    "about.card2.desc": "Creating intuitive and visually appealing interfaces and user experiences.",
    "about.card3.title": "Responsive Design",
    "about.card3.desc": "Ensuring applications work perfectly across all devices and screen sizes.",
    "about.card4.title": "Collaboration",
    "about.card4.desc": "Working effectively in teams to deliver successful projects on time.",

    // Projetos
    "projects.section.title": "Selected projects",

    // Contato
    "contact.title": "Get in touch",
    "contact.subtitle": "Have a project in mind or just want to chat? Feel free to contact me through the channels below.",
    "contact.info.title": "Contact Information",
    "contact.info.email.label": "Email",
    "contact.info.location.label": "Location",
    "contact.info.location.value": "Belo Horizonte, MG - Brazil",
    "contact.social.label": "Social Media",

    // Footer
    "footer.created": "Created by Letícia Giostri.",
    "footer.links": "Quick links",
    "footer.contact.title": "Get in touch",
    "footer.rights": "© 2026 Letícia Giostri. All rights reserved."
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
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);

    // Rastreamento da troca de idioma
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('event', 'toggle_language', {
        event_category: 'behavior',
        selected_language: newLanguage
      });
    }
  };

  const t = (key: keyof typeof translations['pt']) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
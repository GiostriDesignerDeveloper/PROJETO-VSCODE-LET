import { createContext, useState, useContext, ReactNode } from 'react';

// Aqui fica o nosso dicionário ÚNICO e unificado!
const translations = {
  pt: {
    "nav.home": "Início",
    "nav.projects": "Projetos",
    "nav.experience": "Experiências",
    "nav.contact": "Contato",
    "lang.switch": "🇧🇷 PT",
    
    // Textos do Hero divididos para manter o azul!
    "hero.title.1": "Design orientado por ",
    "hero.title.blue1": "comportamentos",
    "hero.title.2": " e ",
    "hero.title.blue2": "dados",
    "hero.title.3": " para produtos digitais.",
    "hero.subtitle": "Olá, sou a Letícia designer focada em criar soluções visuais baseadas em usabilidade e métricas de negócio.",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "lang.switch": "🇺🇸 EN",
    
    // Textos do Hero em Inglês (adaptando a gramática)
    "hero.title.1": "Behavior and ",
    "hero.title.blue1": "data-driven",
    "hero.title.2": " ",
    "hero.title.blue2": "design",
    "hero.title.3": " for digital products.",
    "hero.subtitle": "Hi, I'm Letícia, a designer focused on creating visual solutions based on usability and business metrics.",
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
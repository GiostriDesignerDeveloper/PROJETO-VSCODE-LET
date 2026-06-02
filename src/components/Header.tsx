import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Adicionei a extração da variável 'language' para podermos usar na tradução manual
  const { t, toggleLanguage, language } = useLanguage();
  const location = useLocation();

  // Solução de Engenharia para corrigir o comportamento de rotas e âncoras (Hash Scrolling)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Timeout de 120ms garante que o DOM da home já carregou caso o usuário venha de outra página
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 120);
      return () => clearTimeout(timer);
    } else {
      // Se o usuário mudar para uma rota sem âncora, garante que a página comece do topo
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location.pathname, location.hash]);

  // AQUI ESTÁ A MÁGICA: Atualizamos a lista de links para refletir Currículo e Contato
  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.projects"), path: "/#projects" },
    { name: language === 'en' ? 'Resume' : 'Currículo', path: "/about" },
    { name: language === 'en' ? 'Contact' : 'Contato', path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-[100] border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Minimalista */}
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 tracking-tight hover:text-gray-600 transition-colors"
          >
            Letícia Giostri.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm text-gray-500 hover:text-gray-900 font-bold tracking-widest uppercase transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest border-l border-gray-200 pl-10"
              aria-label="Toggle language"
            >
              <Globe size={16} />
              {t("lang.switch")}
            </button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-6 md:hidden">
            <button
              onClick={toggleLanguage}
              className="text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={20} />
            </button>

            <button
              className="text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full left-0 top-24">
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-bold text-gray-900 tracking-tight border-b border-gray-100 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
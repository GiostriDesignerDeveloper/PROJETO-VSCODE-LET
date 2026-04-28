import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, toggleLanguage } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.projects"), path: "/#projects" },
    { name: t("nav.experience"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    /* ALTERAÇÃO 1: 
       - Mudamos 'bg-white/80' para 'bg-white' (fundo sólido para não vazar texto atrás).
       - Garantimos 'z-[100]' (valor bem alto para ficar acima de qualquer card).
       - Adicionamos uma sombra leve 'shadow-sm' para destacar do conteúdo.
    */
    <header className="fixed top-0 left-0 w-full bg-white z-[100] border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 tracking-tight"
          >
            Letícia<span className="text-blue-600">Giostri</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-bold text-gray-700"
            >
              <Globe size={16} />
              {t("lang.switch")}
            </button>
          </nav>

          {/* Mobile Menu Button + Language Switch */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-sm font-bold text-gray-700 active:bg-gray-200"
            >
              <Globe size={16} />
              {t("lang.switch")}
            </button>

            <button
              className="text-gray-900 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        /* ALTERAÇÃO 2: 
           - Garantimos que o menu aberto também seja 'bg-white' sólido.
           - 'h-screen' garante que ele cubra o conteúdo se necessário.
        */
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300 shadow-xl">
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xl font-bold text-gray-900 border-b border-gray-50 pb-4"
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

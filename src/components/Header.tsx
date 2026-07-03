import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 120);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location.pathname, location.hash]);

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
          
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 tracking-tight hover:text-gray-600 transition-colors"
          >
            Letícia Giostri.
          </Link>

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

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest border-l border-gray-200 pl-10"
              aria-label="Toggle language"
            >
              <Globe size={16} />
              {t("lang.switch")}
            </button>
          </nav>

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
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext"; // 👈 NOSSA FUNÇÃO MÁGICA

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Puxando as ferramentas de tradução
  const { toggleLanguage, t, language } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Agora usamos a função t("chave") em vez de texto fixo!
  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.projects"), path: "/#projects", isAnchor: true },
    { name: t("nav.experience"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold text-gray-900 relative z-[1000] tracking-tight">
          Letícia<span className="text-blue-600">Giostri</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {navLinks.map((link, index) =>
              link.isAnchor ? (
                <a
                  key={index}
                  href={link.path}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    location.hash === link.path.replace("/", "") ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === link.path ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>
          
          {/* BOTÃO DE IDIOMA - DESKTOP */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-full font-medium transition-colors text-sm"
          >
            <Globe size={16} />
            {t("lang.switch")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4 relative z-[1000]">
          {/* BOTÃO DE IDIOMA - MOBILE */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded-md font-medium text-xs"
          >
            {language === 'pt' ? '🇺🇸' : '🇧🇷'}
          </button>

          <button
            onClick={toggleMenu}
            className="text-gray-900 hover:text-blue-600 transition-colors focus:outline-none"
            aria-label="Alternar menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed top-0 left-0 w-full h-[100dvh] bg-white z-[998] flex flex-col items-center justify-center transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center space-y-8 text-2xl">
            {navLinks.map((link, index) =>
              link.isAnchor ? (
                <a
                  key={index}
                  href={link.path}
                  onClick={toggleMenu}
                  className="font-bold text-gray-800 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  onClick={toggleMenu}
                  className={`font-bold transition-colors hover:text-blue-600 ${
                    location.pathname === link.path ? "text-blue-600" : "text-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
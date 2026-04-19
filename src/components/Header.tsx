import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Projetos", path: "/#projects", isAnchor: true },
    { name: "Experiências", path: "/about" },
    { name: "Contato", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO ATUALIZADA: Tipografia Pessoal */}
        <Link to="/" className="text-2xl font-bold text-gray-900 z-50 tracking-tight">
          Letícia<span className="text-blue-600">Giostri</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <a
                key={link.name}
                href={link.path}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  location.hash === link.path.replace("/", "")
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-900 hover:text-blue-600 transition-colors focus:outline-none z-50"
          aria-label="Alternar menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center space-y-8 text-xl">
            {navLinks.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={toggleMenu}
                  className="font-bold text-gray-800 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={toggleMenu}
                  className={`font-bold transition-colors hover:text-blue-600 ${
                    location.pathname === link.path
                      ? "text-blue-600"
                      : "text-gray-800"
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
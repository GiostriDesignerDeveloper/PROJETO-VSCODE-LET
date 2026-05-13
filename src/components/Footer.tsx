import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { trackContactClick } from '../utils/analytics';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Coluna 1: Logo e Social */}
          <div>
            <Link to="/" onClick={scrollToTop} className="text-2xl font-bold text-white mb-6 inline-block tracking-tight">
              Letícia<span className="text-blue-500">Giostri</span>
            </Link>
            <p className="text-gray-400 mb-6">
              {t("footer.created")}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/GiostriDesignerDeveloper" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => trackContactClick('GitHub')}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/leticiagouveiag" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => trackContactClick('LinkedIn')}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:leticiagouveiadesign@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => trackContactClick('Email')}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t("footer.links")}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <a href="/#projects" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.experience")}
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato Direto */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t("footer.contact.title")}</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="block text-gray-500 text-sm">Email</span>
                <a 
                  href="mailto:leticiagouveiadesign@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => trackContactClick('Email_Footer')}
                >
                  leticiagouveiadesign@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-gray-500 text-sm">{t("contact.info.location.label")}</span>
                <span className="text-gray-400">Belo Horizonte, MG - BR</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
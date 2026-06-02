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
    <footer className="bg-gray-950 text-white pt-24 pb-12 border-t border-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Coluna 1: Logo e Social */}
          <div>
            <Link 
              to="/" 
              onClick={scrollToTop} 
              className="text-2xl font-bold text-white mb-6 inline-block tracking-tight hover:text-gray-300 transition-colors"
            >
              Letícia Giostri.
            </Link>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed max-w-xs">
              {t("footer.created")}
            </p>
            <div className="flex space-x-5">
              <a href="https://github.com/GiostriDesignerDeveloper" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" onClick={() => trackContactClick('GitHub')} aria-label="GitHub">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/leticiagouveiag" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" onClick={() => trackContactClick('LinkedIn')} aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="mailto:leticiagouveiadesign@gmail.com" className="text-gray-500 hover:text-white transition-colors" onClick={() => trackContactClick('Email')} aria-label="Email">
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
              {t("footer.links")}
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">{t("nav.home")}</Link></li>
              <li><a href="/#projects" className="text-gray-400 hover:text-white transition-colors">{t("nav.projects")}</a></li>
              <li><Link to="/about" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">{t("nav.experience")}</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato Direto */}
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
              {t("footer.contact.title")}
            </h3>
            <ul className="space-y-6 text-sm">
              <li>
                <span className="block text-gray-600 font-medium mb-1">Email</span>
                <a href="mailto:leticiagouveiadesign@gmail.com" className="text-gray-300 hover:text-white transition-colors font-medium border-b border-gray-700 hover:border-white pb-0.5" onClick={() => trackContactClick('Email_Footer')}>
                  leticiagouveiadesign@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-gray-600 font-medium mb-1">{t("contact.info.location.label")}</span>
                <span className="text-gray-300 font-medium">Belo Horizonte, MG - BR</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs font-medium uppercase tracking-wider">
          <p>{t("footer.rights")}</p>
          <p>Product Design & Architecture</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
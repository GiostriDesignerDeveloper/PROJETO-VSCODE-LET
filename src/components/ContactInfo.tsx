import { Mail, MapPin, Linkedin, Github, Smartphone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { trackContactClick } from '../utils/analytics';

const ContactInfo = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white rounded-none border border-gray-100 p-8 md:p-10 h-full">
      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-10">
        {t("contact.info.title")}
      </h3>

      <div className="space-y-0 flex flex-col">
        
        {/* Item Email */}
        <div className="flex items-center gap-6 py-6 border-t border-gray-100">
          <Mail size={24} className="text-gray-900 shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              {t("contact.info.email.label")}
            </p>
            <a
              href="mailto:leticiagouveiadesign@gmail.com"
              onClick={() => trackContactClick('Email_Info')}
              className="text-lg font-medium text-gray-900 hover:text-gray-500 transition-colors"
            >
              leticiagouveiadesign@gmail.com
            </a>
          </div>
        </div>

        {/* Item Celular (WhatsApp) */}
        <div className="flex items-center gap-6 py-6 border-t border-gray-100">
          <Smartphone size={24} className="text-gray-900 shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              {language === 'pt' ? 'Celular / WhatsApp' : 'Phone / WhatsApp'}
            </p>
            <a
              href="https://wa.me/5531988802901"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactClick('WhatsApp')}
              className="text-lg font-medium text-gray-900 hover:text-gray-500 transition-colors"
            >
              (31) 98880-2901
            </a>
          </div>
        </div>

        {/* Item Localização */}
        <div className="flex items-center gap-6 py-6 border-t border-b border-gray-100">
          <MapPin size={24} className="text-gray-900 shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              {t("contact.info.location.label")}
            </p>
            <p className="text-lg font-medium text-gray-900">
              Belo Horizonte, MG - BR
            </p>
          </div>
        </div>
      </div>

      {/* Redes Sociais Brutalistas */}
      <div className="pt-10">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
          {t("contact.social.label")}
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/leticiagouveiag"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactClick('LinkedIn_Info')}
            className="flex items-center justify-center w-14 h-14 bg-white border border-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/GiostriDesignerDeveloper"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactClick('GitHub_Info')}
            className="flex items-center justify-center w-14 h-14 bg-white border border-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
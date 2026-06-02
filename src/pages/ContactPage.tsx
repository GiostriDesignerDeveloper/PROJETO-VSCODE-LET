import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        {/* Header da Página */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-lg text-gray-600">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Card de Contato */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12">
          <h2 className="text-xl font-bold text-gray-900 mb-8">
            {t("contact.info.title")}
          </h2>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-4 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                  E-mail
                </h3>
                <a href="mailto:leticiagouveiadesign@gmail.com" className="text-lg text-gray-800 hover:text-blue-600 transition-colors font-medium break-all">
                  leticiagouveiadesign@gmail.com
                </a>
              </div>
            </div>

            {/* Telefone / WhatsApp */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-4 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Celular / WhatsApp
                </h3>
                <a href="https://wa.me/5531988802901" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-800 hover:text-blue-600 transition-colors font-medium">
                  +55 (31) 98880-2901
                </a>
              </div>
            </div>

            {/* Localização */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-4 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Localização
                </h3>
                <p className="text-lg text-gray-800 font-medium">
                  Belo Horizonte, MG - Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/leticiagouveiag" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 text-gray-600 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/GiostriDesignerDeveloper" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 text-gray-600 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm">
                <Github size={24} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
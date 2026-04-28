import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext"; // 1. Importando o idioma

const Contact = () => {
  const { t } = useLanguage(); // 2. Ativando o tradutor

  return (
    <div className="pt-24 pb-20">
      {/* --- HERO SECTION (Azul) --- */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("contact.hero.title")}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </div>

      {/* --- CARTÃO DE CONTATO (Centralizado) --- */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t("contact.info.title")}
            </h3>

            <div className="space-y-6">
              {/* Item: Email */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 shrink-0">
                  <Mail className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    {t("contact.info.email")}
                  </p>
                  <a
                    href="mailto:leticiagouveiadesign@gmail.com"
                    className="text-gray-900 font-medium hover:text-blue-600 transition-colors break-all"
                  >
                    leticiagouveiadesign@gmail.com
                  </a>
                </div>
              </div>

              {/* Item: Localização */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 shrink-0">
                  <MapPin className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    {t("contact.info.location")}
                  </p>
                  <p className="text-gray-900 font-medium">
                    {t("contact.info.city")}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t("contact.info.status")}
                  </p>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="pt-8 border-t border-gray-200 mt-8">
                <p className="text-sm font-medium text-gray-500 mb-4 text-center">
                  {t("contact.social.title")}  
                </p>
                <div className="flex justify-center gap-4">
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/leticiagouveiag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-4 rounded-xl border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    <Linkedin size={24} />
                  </a>
                  {/* GitHub (Corrigido com o seu link real!) */}
                  <a
                    href="https://github.com/GiostriDesignerDeveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-4 rounded-xl border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
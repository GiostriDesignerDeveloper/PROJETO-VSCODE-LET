import { Mail, MapPin, Github, Linkedin } from "lucide-react";
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

          <div className="space-y-8">
            {/* Item: Email */}
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">
                  {t("contact.info.email.label")}
                </p>
                <a href="mailto:leticiagouveiadesign@gmail.com" className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
                  leticiagouveiadesign@gmail.com
                </a>
              </div>
            </div>

            {/* Item: Localização */}
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">
                  {t("contact.info.location.label")}
                </p>
                <p className="text-lg font-medium text-gray-900">
                  {t("contact.info.location.value")}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-50 pt-8 mt-8">
               <p className="text-sm font-medium text-gray-400 mb-4">
                  {t("contact.social.label")}
               </p>
               <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/leticiagouveiag" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/GiostriDesignerDeveloper" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all"
                  >
                    <Github size={20} />
                  </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
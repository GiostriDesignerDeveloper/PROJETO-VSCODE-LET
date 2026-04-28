import React from "react";
import ContactInfo from "./ContactInfo";
import { useLanguage } from "../contexts/LanguageContext"; // 1. Importa o hook de idioma

const ContactSection: React.FC = () => {
  const { t } = useLanguage(); // 2. Ativa a função de tradução

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* 3. Troca o texto fixo pelas chaves do dicionário */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

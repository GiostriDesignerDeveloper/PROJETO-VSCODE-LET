import { ContactCard } from "../components/ContactCard";
import { useLanguage } from "../contexts/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 min-h-screen bg-transparent">
      <div className="container mx-auto px-4">
        {/* Cabeçalho limpo */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
            {t("contact.title") || "Entre em contato."}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
            {t("contact.subtitle") ||
              "Tem um projeto em mente ou quer apenas bater um papo? Sinta-se à vontade para me contatar pelos canais abaixo."}
          </p>
        </div>

        {/* O Cartão centralizado com a foto dentro */}
        <ContactCard />
      </div>
    </div>
  );
};

export default ContactPage;

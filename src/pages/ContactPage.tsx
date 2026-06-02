import { ContactCard } from "../components/ContactCard";
import { useLanguage } from "../contexts/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("contact.title") || "Entre em contato"}
          </h1>
          <p className="text-lg text-gray-600">
            {t("contact.subtitle") || "Tem um projeto em mente ou quer apenas bater um papo? Sinta-se à vontade para me contatar pelos canais abaixo."}
          </p>
        </div>

        {/* Aqui chamamos o seu card estiloso */}
        <ContactCard />
        
      </div>
    </div>
  );
};

export default ContactPage;
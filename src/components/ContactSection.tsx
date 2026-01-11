import React from "react";
import ContactInfo from "./ContactInfo";

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Entre em contato
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Tem um projeto em mente ou quer apenas bater um papo? Sinta-se à
            vontade para me contatar pelos canais abaixo.
          </p>
        </div>

        {/* Aqui entra o novo cartão, centralizado */}
        <div className="max-w-xl mx-auto">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

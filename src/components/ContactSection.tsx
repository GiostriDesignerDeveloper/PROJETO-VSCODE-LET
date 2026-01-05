import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Caso queira entrar em contato, sinta-se à vontade para preencher o
            formulário abaixo.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ContactForm />

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Gostaria de saber mais?{" "}
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Página de contato
              </Link>{" "}
              para mais informações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

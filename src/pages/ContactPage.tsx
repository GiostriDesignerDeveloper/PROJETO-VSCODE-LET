import React from "react";
import ContactForm from "../components/ContactForm";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header / Hero Section traduzido */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Este portfólio reúne projetos e experiências desenvolvidos em
            contextos corporativos, produtos digitais e sistemas. Sinta-se à
            vontade para explorar e se desejar, entrar em contato para discutir
            oportunidades de colaboração ou simplesmente para dizer olá!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Lado Esquerdo: Formulário */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envie uma mensagem
            </h2>
            <ContactForm />
          </div>

          {/* Lado Direito: Suas Informações */}
          <div>
            <div className="bg-gray-50 rounded-xl p-8 sticky top-24 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Mail className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:leticiagouveiadesign@gmail.com"
                      className="text-gray-900 font-medium hover:text-blue-600 transition-colors break-all"
                    >
                      leticiagouveiadesign@gmail.com
                    </a>
                  </div>
                </div>

                {/* Localização */}
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MapPin className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      Localização
                    </p>
                    <p className="text-gray-900 font-medium">
                      Belo Horizonte, MG - BR
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Disponível para trabalho remoto
                    </p>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-500 mb-4">
                    Redes Sociais
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-lg border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all shadow-sm"
                    >
                      <Github size={20} />
                    </a>
                  </div>
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

import React from "react";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-8">
        Informações de Contato
      </h3>

      <div className="space-y-6 mb-8">
        {/* Item Email */}
        <div className="flex items-start gap-4">
          <div className="bg-blue-50 p-3 rounded-lg text-blue-600 shrink-0">
            <Mail size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
            <a
              href="mailto:leticiagouveiadesign@gmail.com"
              className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
            >
              leticiagouveiadesign@gmail.com
            </a>
          </div>
        </div>

        {/* Item Localização */}
        <div className="flex items-start gap-4">
          <div className="bg-blue-50 p-3 rounded-lg text-blue-600 shrink-0">
            <MapPin size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">
              Localização
            </p>
            <p className="text-gray-900 font-medium">Belo Horizonte, MG - BR</p>
            <p className="text-sm text-gray-500 mt-1">
              Disponível para trabalho remoto
            </p>
          </div>
        </div>
      </div>

      {/* Divisória e Redes Sociais */}
      <div className="border-t border-gray-100 pt-8">
        <p className="text-sm font-medium text-gray-500 mb-4">Redes Sociais</p>
        <div className="flex gap-3">
          {/* LinkedIn */}
          <a
            href="http://www.linkedin.com/in/leticiagouveiag" // ⚠️ LEMBRE DE TROCAR AQUI
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 p-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-gray-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/GiostriDesignerDeveloper" // ⚠️ LEMBRE DE TROCAR AQUI
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 p-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors border border-gray-200"
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

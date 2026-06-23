import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";

export const ContactCard = () => {
  return (
    <div className="bg-white border border-gray-200 p-8 md:p-12 w-full max-w-2xl mx-auto rounded-[4px]">
      <h2 className="text-xs font-bold text-gray-900 mb-10 uppercase tracking-widest border-b border-gray-100 pb-4">
        Informações de Contato
      </h2>

      {/* Grid interno: Contatos na esquerda, Foto na direita */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
        {/* Esquerda: Lista de Contatos */}
        <div className="space-y-8 flex-1 w-full">
          {/* E-mail */}
          <div className="flex items-start md:items-center flex-col md:flex-row gap-4">
            <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center shrink-0">
              <Mail size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                E-mail
              </h3>
              <a
                href="mailto:leticiagouveiadesign@gmail.com"
                className="text-lg text-gray-900 hover:text-gray-500 transition-colors font-medium break-all"
              >
                leticiagouveiadesign@gmail.com
              </a>
            </div>
          </div>

          {/* Telefone */}
          <div className="flex items-start md:items-center flex-col md:flex-row gap-4">
            <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center shrink-0">
              <Phone size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                Celular / WhatsApp
              </h3>
              <a
                href="https://wa.me/5531988802901"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-900 hover:text-gray-500 transition-colors font-medium"
              >
                +55 (31) 98880-2901
              </a>
            </div>
          </div>

          {/* Localização */}
          <div className="flex items-start md:items-center flex-col md:flex-row gap-4">
            <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center shrink-0">
              <MapPin size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                Localização
              </h3>
              <p className="text-lg text-gray-900 font-medium">
                Belo Horizonte, MG - BR
              </p>
            </div>
          </div>
        </div>

        {/* Direita: Foto Discreta */}
        {/* Lembre-se de ajustar o src="/sua-foto.jpg" */}
        <div className="w-40 h-48 border border-gray-200 bg-gray-50 overflow-hidden shrink-0 hidden sm:block rounded-[4px]">
          <img
            src="/IM.G_0611.jpg"
            alt="Letícia Giostri"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Redes Sociais no final */}
      <div className="mt-12 pt-8 border-t border-gray-100">
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
          Redes Sociais
        </h3>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/leticiagouveiag"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-gray-200 text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 flex items-center justify-center transition-all"
          >
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <a
            href="https://github.com/GiostriDesignerDeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-gray-200 text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 flex items-center justify-center transition-all"
          >
            <Github size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  );
};

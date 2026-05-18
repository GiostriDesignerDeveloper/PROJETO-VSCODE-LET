import React from "react";
import { X } from "lucide-react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Função que transforma **texto** em negrito da forma correta (inline)
  const renderDescription = (text: string) => {
    if (!text) return null;
    return text.split("**").map((part, index) =>
      index % 2 === 1 ? (
        <strong key={index} className="text-gray-900 font-bold">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6">
      {/* Fundo escuro */}
      <div
        className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Principal (Cantos Retos e Fundo Branco Puro) */}
      <div className="relative w-full max-w-5xl h-full md:max-h-[95vh] bg-white rounded-none shadow-2xl overflow-y-auto flex flex-col animate-in fade-in zoom-in-95 duration-300">
        
        {/* Botão Fechar (Brutalista) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 bg-white border border-gray-200 rounded-none hover:bg-gray-900 hover:text-white hover:border-gray-900 text-gray-900 transition-colors shadow-sm"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        {/* Capa */}
        <div className="w-full relative bg-gray-50 border-b border-gray-100">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto max-h-[500px] object-cover mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end">
            <div className="p-8 md:p-16 text-white w-full max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                {project.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-300">
                <span>{project.client}</span>
                <span className="w-1.5 h-1.5 bg-white rounded-full opacity-50"></span>
                <span>{project.role}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-16 max-w-4xl mx-auto w-full">
          {/* Tags (Pretas e Sólidas) */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Descrição com suporte a Negrito (Tipografia de Leitura) */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-loose whitespace-pre-line text-[1.1rem]">
            {renderDescription(project.fullDescription || project.description)}
          </div>

          {/* Protótipo Interativo */}
          {project.embedUrl && (
            <div className="mt-16 mb-16">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-4 mb-8">
                Protótipo Interativo
              </h3>
              <p className="text-gray-500 mb-6 text-sm">
                Teste a interface real abaixo (pode levar alguns segundos para carregar):
              </p>
              {/* Moldura do Protótipo (Reta) */}
              <div className="w-full h-[500px] md:h-[650px] bg-gray-50 border border-gray-200 rounded-none overflow-hidden">
                <iframe
                  style={{ border: "none" }}
                  width="100%"
                  height="100%"
                  src={project.embedUrl}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Galeria */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-20 space-y-16">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-4">
                Galeria do Projeto
              </h3>
              <div className="grid grid-cols-1 gap-20 mt-12">
                {project.gallery.map((item, index) => (
                  <div key={index} className="space-y-6 flex flex-col">
                    {/* Imagens sem sombras fofinhas, apenas contorno sutil */}
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-auto object-contain border border-gray-100 bg-gray-50"
                    />
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest border-l-2 border-gray-900 pl-4">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer (Tecnologias) */}
          <div className="mt-24 pt-12 border-t border-gray-200">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-8">
              Stack & Tools
            </h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {(project.technologies || []).map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-wider rounded-sm bg-gray-50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
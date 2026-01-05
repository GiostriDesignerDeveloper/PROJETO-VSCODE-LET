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

  // Função mágica que transforma **texto** em negrito
  const renderDescription = (text: string) => {
    if (!text) return null;
    return text.split("**").map((part, index) =>
      index % 2 === 1 ? (
        // 👇 MUDANÇA AQUI: Troquei 'mb-4' por 'mb-1' para diminuir o espaço
        <strong key={index} className="text-gray-900 font-bold block mt-8 mb-1">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-5xl max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-y-auto flex flex-col animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-white/80 rounded-full hover:bg-white text-gray-800 transition-colors shadow-lg"
        >
          <X size={24} />
        </button>

        {/* Capa */}
        <div className="w-full relative">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto max-h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
            <div className="p-8 md:p-12 text-white w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-4 text-lg opacity-90">
                <span>{project.client}</span>
                <span>•</span>
                <span>{project.role}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 max-w-4xl mx-auto w-full">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Descrição com suporte a Negrito */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
            {renderDescription(project.fullDescription || project.description)}
          </div>

          {/* Protótipo Interativo */}
          {project.embedUrl && (
            <div className="mt-12 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 border-b pb-4 mb-6">
                Protótipo Interativo
              </h3>
              <p className="text-gray-600 mb-4">
                Teste a interface real abaixo (pode levar alguns segundos para
                carregar):
              </p>
              <div className="w-full h-[500px] md:h-[600px] bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
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
            <div className="mt-16 space-y-16">
              <h3 className="text-2xl font-bold text-gray-900 border-b pb-4">
                Galeria do Projeto
              </h3>
              <div className="grid grid-cols-1 gap-16">
                {project.gallery.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full rounded-xl shadow-lg border border-gray-100"
                    />
                    <p className="text-center text-gray-600 font-medium text-lg italic border-l-4 border-blue-600 pl-4 py-1 bg-gray-50 rounded-r">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-16 pt-10 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Tecnologias Utilizadas
            </h3>
            <div className="flex flex-wrap gap-3 mb-10">
              {(project.technologies || []).map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium bg-gray-50"
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

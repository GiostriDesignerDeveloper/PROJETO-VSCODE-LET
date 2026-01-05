import React from "react";
import { ArrowRight, Lock } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  // Verificação de segurança: se o status não estiver definido, assume que é ativo
  const isComingSoon = project.status === "coming-soon";

  return (
    <div
      className={`
        group rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300
        ${
          isComingSoon
            ? "bg-gray-50 border-2 border-dashed border-gray-300 cursor-default opacity-80"
            : "bg-white border border-gray-100 shadow-sm hover:shadow-xl cursor-pointer"
        }
      `}
      onClick={() => !isComingSoon && onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        {/* Container da Imagem ou Placeholder */}
        <div className={`w-full h-full ${isComingSoon ? "bg-gray-200" : ""}`}>
          {/* Se for Ativo, mostra a imagem */}
          {!isComingSoon && (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          )}

          {/* Se for Em Breve, mostra o cadeado */}
          {isComingSoon && (
            <div className="flex items-center justify-center h-full text-gray-400">
              <Lock size={32} />
            </div>
          )}
        </div>

        {/* Overlay Hover (Apenas para ativos) */}
        {!isComingSoon && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium flex items-center gap-2">
              Ver detalhes <ArrowRight size={18} />
            </span>
          </div>
        )}

        {/* Badge "Em Breve" */}
        {isComingSoon && (
          <div className="absolute top-3 right-3 bg-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Em Breve
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex gap-2 mb-3">
          <span
            className={`px-2 py-1 text-xs font-semibold rounded uppercase tracking-wide ${
              isComingSoon
                ? "bg-gray-200 text-gray-500"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            {project.category}
          </span>
        </div>

        <h3
          className={`text-xl font-bold mb-2 transition-colors ${
            isComingSoon ? "text-gray-500" : "text-gray-900 hover:text-blue-600"
          }`}
        >
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          disabled={isComingSoon}
          className={`
            w-full py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors border
            ${
              isComingSoon
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            }
          `}
        >
          {isComingSoon ? (
            <>
              {" "}
              <Lock size={14} /> Em Desenvolvimento{" "}
            </>
          ) : (
            "Ver Detalhes"
          )}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

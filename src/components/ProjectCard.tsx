import React from "react";
import { ArrowRight } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void; // Adicionamos essa propriedade nova
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Imagem com Overlay */}
      <div
        className="relative h-48 overflow-hidden cursor-pointer"
        onClick={() => onClick(project)}
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white font-medium flex items-center gap-2">
            Ver detalhes <ArrowRight size={18} />
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex gap-2 mb-3">
          <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded uppercase tracking-wide">
            {project.category}
          </span>
        </div>

        <h3
          className="text-xl font-bold text-gray-900 mb-2 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => onClick(project)}
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
          onClick={() => onClick(project)}
          className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium flex items-center justify-center gap-2"
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

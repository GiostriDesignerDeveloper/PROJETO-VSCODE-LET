import { ArrowRight, Lock } from "lucide-react";
import { Project } from "../types";
import { useLanguage } from "../contexts/LanguageContext"; // 1. Importamos a inteligência de idioma

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const { language } = useLanguage(); // 2. Descobrimos qual idioma está ativo ('pt' ou 'en')
  
  const isComingSoon = project.status === "coming-soon";

  // 3. Mini-dicionário local para os botõezinhos do card
  const viewDetailsText = language === 'pt' ? 'Ver detalhes' : 'View details';
  const comingSoonText = language === 'pt' ? 'Em Desenvolvimento' : 'In Development';

  return (
    <div
      className={`
        group rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300
        ${
          isComingSoon
            ? "bg-gray-50 border-2 border-dashed border-gray-300 cursor-default opacity-80"
            : "bg-white border border-gray-100 shadow-sm hover:shadow-xl cursor-pointer hover:-translate-y-1"
        }
      `}
      onClick={() => !isComingSoon && onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <div className={`w-full h-full ${isComingSoon ? "bg-gray-200" : ""}`}>
          {!isComingSoon && (
            <img
              src={project.imageUrl}
              alt={project.title[language]} // Lemos a imagem com o título traduzido
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          )}

          {isComingSoon && (
            <div className="flex items-center justify-center h-full text-gray-400">
              <Lock size={32} />
            </div>
          )}
        </div>

        {!isComingSoon && (
          <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              {viewDetailsText} <ArrowRight size={18} />
            </span>
          </div>
        )}

        {isComingSoon && (
          <div className="absolute top-3 right-3 bg-gray-200 text-gray-600 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
            <Lock size={12} /> {comingSoonText}
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
          className={`text-xl font-bold mb-3 transition-colors duration-300 ${
            isComingSoon ? "text-gray-500" : "text-gray-900 group-hover:text-blue-600"
          }`}
        >
          {/* AQUI A MÁGICA: Puxamos o título na língua certa! */}
          {project.title[language]} 
        </h3>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
          {/* E aqui puxamos a descrição! */}
          {project.description[language]}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
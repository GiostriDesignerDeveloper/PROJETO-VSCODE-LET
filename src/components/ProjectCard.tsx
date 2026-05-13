import { ArrowRight, Lock } from "lucide-react";
import { Project } from "../types";
import { useLanguage } from "../contexts/LanguageContext";
import { trackProjectView } from "../utils/analytics";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const { language } = useLanguage();

  const handleInteraction = () => {
    // 1. Rastreia o clique no Analytics antes de abrir
    trackProjectView(project.title.pt);
    
    // 2. Chama a função de abrir o modal/página que vem via props
    if (project.status !== "coming-soon") {
      onClick(project);
    }
  };

  return (
    <div 
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 ${
        project.status === "coming-soon" 
          ? "bg-gray-50 border-gray-100 opacity-80" 
          : "bg-white border-gray-100 hover:border-blue-200 hover:shadow-xl cursor-pointer"
      }`}
      onClick={handleInteraction}
    >
      {/* Imagem do Projeto */}
      <div className="aspect-video overflow-hidden bg-gray-100 relative">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title[language]} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {project.status === "coming-soon" && <Lock className="text-gray-300" size={40} />}
          </div>
        )}
        
        {project.status === "coming-soon" && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-100">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
              <Lock size={12} /> {language === 'pt' ? 'Em breve' : 'Coming soon'}
            </span>
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title[language]}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-6">
          {project.description[language]}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] text-gray-400 font-medium px-2 py-0.5 bg-gray-50 rounded border border-gray-100">
                {tag}
              </span>
            ))}
          </div>
          
          {project.status !== "coming-soon" && (
            <div className="text-blue-600 flex items-center gap-1 font-bold text-sm">
              {language === 'pt' ? 'Ver case' : 'View case'}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
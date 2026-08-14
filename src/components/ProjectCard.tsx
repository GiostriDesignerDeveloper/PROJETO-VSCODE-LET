import { ArrowRight, Lock } from "lucide-react";
import { Project } from "../types";
import { useLanguage } from "../contexts/LanguageContext";
import { trackProjectView } from "../utils/analytics";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const { language } = useLanguage();

  // Função auxiliar para lidar com as listas bilíngues
  const getArray = (field: any) => {
    if (!field) return [];
    if (Array.isArray(field)) return field; 
    return field[language] || field.pt || [];
  };

  const handleInteraction = () => {
    trackProjectView(project.title.pt);
    if (project.status !== "coming-soon") {
      onClick(project);
    }
  };

  // Função para deixar em negrito apenas o que vem antes do dois-pontos
  const formatEditorialTitle = (title: string) => {
    if (!title.includes(':')) {
      return <span className="font-bold text-gray-900">{title}</span>;
    }
    
    const [boldPart, ...rest] = title.split(':');
    return (
      <>
        <span className="font-bold text-gray-900">{boldPart}:</span>
        <span className="font-medium text-gray-500">{rest.join(':')}</span>
      </>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`group flex flex-col md:flex-row gap-8 md:gap-12 py-12 border-b border-gray-200 transition-all ${
        project.status === "coming-soon" 
          ? "opacity-60" 
          : "cursor-pointer"
      }`}
      onClick={handleInteraction}
    >
      {/* Imagem do Projeto */}
      <div className="w-full md:w-[300px] aspect-[4/3] overflow-hidden bg-gray-50 border border-gray-100 relative shrink-0">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt="Capa do projeto" 
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {project.status === "coming-soon" && <Lock className="text-gray-300" size={32} />}
          </div>
        )}
        
        {project.status === "coming-soon" && (
          <div className="absolute top-3 right-3 bg-white px-2 py-1 border border-gray-200">
            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <Lock size={10} /> {language === 'pt' ? 'Em breve' : 'Soon'}
            </span>
          </div>
        )}
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col flex-grow justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {project.category}
          </span>
          <div className="flex gap-2">
            {/* CORREÇÃO APLICADA AQUI */}
            {getArray(project.tags).slice(0, 2).map((tag: string) => (
              <span key={tag} className="text-[9px] text-gray-600 font-bold px-2 py-0.5 border border-gray-200 uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Título */}
        <h3 className="text-2xl md:text-3xl mb-4 tracking-tight leading-snug group-hover:text-gray-600 transition-colors">
          {formatEditorialTitle(project.title[language])}
        </h3>
        
        <p className="text-gray-500 text-sm md:text-base line-clamp-2 md:line-clamp-3 mb-6 leading-relaxed max-w-2xl">
          {project.description[language]}
        </p>

        {/* CTA Discreto */}
        <div className="mt-auto">
          {project.status !== "coming-soon" && (
            <div className="text-gray-900 flex items-center gap-2 font-bold text-xs uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              {language === 'pt' ? 'Acessar mais' : 'View more'}
              <ArrowRight size={16} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
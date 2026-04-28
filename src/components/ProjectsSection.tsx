import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projects";
import { Project } from "../types";
import { useLanguage } from "../contexts/LanguageContext"; // Puxando o idioma

const ProjectsSection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage(); // Ativando a ferramenta

  const handleProjectClick = (project: Project) => {
    navigate(`/project/${project.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          {t("projects.section.title")} {/* Título dinâmico! */}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={handleProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projects";
import { Project } from "../types";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const handleProjectClick = (project: Project) => {
    navigate(`/project/${project.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-white border-t border-gray-100 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

          {/* COLUNA ESQUERDA: STICKY (Fica colada na tela) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                {t("projects.section.title")}
              </h2>
              
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                {language === "pt" 
                  ? "Cases onde a arquitetura de informação e a redução de carga cognitiva geraram impacto direto nas métricas de negócio." 
                  : "Cases where information architecture and cognitive load reduction directly impacted business metrics."}
              </p>

              <div className="hidden lg:flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 mt-12">
                <span className="w-12 h-[1px] bg-gray-300"></span>
                {language === "pt" ? "Scroll para explorar" : "Scroll to explore"}
              </div>
            </motion.div>
          </div>

          {/* COLUNA DIREITA: SCROLL (Agora com 1 projeto por linha!) */}
          <div className="lg:w-2/3 w-full">
            {/* Trocamos o Grid por um Flex Column com um respiro gigante (gap-20) */}
            <div className="flex flex-col gap-16 md:gap-24">
              {projectsData.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={handleProjectClick}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
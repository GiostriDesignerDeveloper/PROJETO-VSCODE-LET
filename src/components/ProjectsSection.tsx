import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projects";
import ProjectModal from "./ProjectModal";
import { Project } from "../types";

const ProjectsSection = () => {
  // Mantemos o estado como "all" para mostrar tudo, mas não precisamos mais da função de trocar
  const [activeFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filtramos os projetos (como o filtro é sempre 'all', ele mostra todos)
  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="pt-10 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projetos selecionados
          </h2>
        </div>

        {/* REMOVI OS BOTÕES DE FILTRO QUE FICAVAM AQUI */}

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Modal do Projeto */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;

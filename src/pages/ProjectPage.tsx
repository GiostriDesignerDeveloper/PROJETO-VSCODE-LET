import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, ExternalLink, Github as GitHub } from 'lucide-react';
import { Project } from '../types';

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === id);
      setProject(foundProject || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  // Nossa função mágica de negrito importada do Modal para a Página!
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 pt-32 pb-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Projeto não encontrado</h1>
        <p className="text-gray-600 mb-8">Desculpe, o projeto que você procura não existe ou foi removido.</p>
        <Link 
          to="/#projects"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
        >
          Voltar aos Projetos
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/#projects"
            className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Voltar aos Projetos
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block px-3 py-1 bg-blue-900/50 text-blue-100 text-sm font-medium rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl">{project.description}</p>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg border border-gray-100">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>
            
            {/* Description */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
              {renderDescription(project.fullDescription || project.description)}
              
              {/* Protótipo Interativo */}
              {project.embedUrl && (
                <div className="mt-12 mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 border-b pb-4 mb-6">
                    Protótipo Interativo
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Teste a interface real abaixo (pode levar alguns segundos para carregar):
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
                  <div className="grid grid-cols-1 gap-16 not-prose">
                    {project.gallery.map((item: any, index: number) => (
                      <div key={index} className="space-y-4 flex flex-col items-center">
                        <img 
                          src={item.url} 
                          alt={item.title} 
                          className="max-w-full h-auto max-h-[700px] object-contain rounded-xl shadow-lg border border-gray-100"
                        />
                        <p className="w-full text-center text-gray-600 font-medium text-lg italic border-l-4 border-blue-600 pl-4 py-1 bg-gray-50 rounded-r">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar Lateral */}
          <div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md sticky top-24 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Detalhes do Projeto</h3>
              
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">CLIENTE</h4>
                  <p className="text-gray-800 font-medium">{project.client || 'Projeto Pessoal'}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">ATUAÇÃO</h4>
                  <p className="text-gray-800 font-medium">{project.role || 'UX/UI Designer'}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">TECNOLOGIAS</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies?.map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded-md shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-3">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-md"
                  >
                    Acessar Projeto <ExternalLink size={18} className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
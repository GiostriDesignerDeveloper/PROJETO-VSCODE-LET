import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, ExternalLink, Github as GitHub } from 'lucide-react';
import { Project } from '../types';

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data from an API
    const timer = setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === id);
      setProject(foundProject || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, the project you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/#projects"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
        >
          Back to Projects
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
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block px-3 py-1 bg-blue-900/50 text-blue-100 text-sm rounded-md"
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
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>
            
            {/* Description */}
            <div className="prose prose-lg max-w-none">
              <h2>About this Project</h2>
              <p>
                {project.fullDescription || project.description + " " + project.description}
              </p>
              
              <h2>Challenges</h2>
              <p>
                During the development of this project, several challenges were encountered. The main challenge was ensuring optimal performance across all devices while maintaining a rich, interactive user experience.
              </p>
              
              <h2>Solution</h2>
              <p>
                To address these challenges, a combination of modern frontend technologies was employed. Performance optimizations included code splitting, lazy loading, and asset optimization. The responsive design was implemented using a mobile-first approach to ensure a seamless experience across devices.
              </p>
              
              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <>
                  <h2>Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${index + 1}`} 
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">CLIENT</h4>
                  <p className="text-gray-800">{project.client || 'Personal Project'}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">TIMELINE</h4>
                  <p className="text-gray-800">{project.timeline || '4 weeks'}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">ROLE</h4>
                  <p className="text-gray-800">{project.role || 'Full-stack Developer'}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies?.map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-3">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
                  >
                    View Live Site <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition-colors font-medium"
                  >
                    View Source Code <GitHub size={16} className="ml-2" />
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
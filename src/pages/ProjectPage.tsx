import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";
import { projectsData } from "../data/projects";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 font-bold text-2xl tracking-tight">
        Projeto não encontrado.
      </div>
    );
  }

  const getText = (field: any) => {
    if (!field) return "";
    return typeof field === "string" ? field : field[language] || field.pt || "";
  };

  const hasInlineImages = getText(project.fullDescription).includes("[IMG");

  const renderEditorialCase = (text: string) => {
    if (!text) return null;

    const blocks = text.split("\n").map((b) => b.trim()).filter(Boolean);
    let currentSection = "";

    return (
      <div className="space-y-6 text-gray-600 text-[1.1rem] leading-relaxed">
        {blocks.map((block, index) => {
          if (block.startsWith("**") && block.endsWith("**") && !block.includes(":")) {
            const titleText = block.replace(/\*\*/g, "").trim();
            currentSection = titleText;
            
            return (
              <h4 
                key={index} 
                className="clear-both text-xs font-bold text-gray-900 uppercase tracking-widest block mb-4 mt-12 pt-4 border-t border-gray-100"
              >
                {titleText}
              </h4>
            );
          }

          if (block.startsWith("[IMG:") && block.endsWith("]")) {
            const imgIndex = parseInt(block.replace("[IMG:", "").replace("]", ""));
            const image = project.gallery?.[imgIndex];
            if (!image) return null;

            return (
              <div key={index} className="my-10 clear-both">
                <div className="border border-gray-100 bg-gray-50 p-2">
                  <img src={image.url} alt={image.title} className="w-full h-auto object-contain" />
                </div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest border-l-2 border-gray-900 pl-4 py-1 mt-4">
                  {image.title}
                </p>
              </div>
            );
          }

          if (block.startsWith("[IMG_SIDE:") && block.endsWith("]")) {
            const imgIndex = parseInt(block.replace("[IMG_SIDE:", "").replace("]", ""));
            const image = project.gallery?.[imgIndex];
            if (!image) return null;

            return (
              <div key={index} className="my-6 sm:float-right sm:w-6/12 sm:ml-8 sm:mb-6">
                <div className="border border-gray-100 bg-gray-50 p-2">
                  <img src={image.url} alt={image.title} className="w-full h-auto object-contain" />
                </div>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-3">
                  {image.title}
                </p>
              </div>
            );
          }

          if (block.startsWith("[AI_NOTE]")) {
            const cleanText = block.replace("[AI_NOTE]", "").trim();
            return (
              <div key={index} className="my-8 p-5 bg-gray-50 border border-gray-100 clear-both">
                <p className="text-sm text-gray-500 italic m-0">
                  {cleanText.split("**").map((part, pIdx) => 
                    pIdx % 2 === 1 ? <strong key={pIdx} className="text-gray-700 font-bold not-italic">{part}</strong> : part
                  )}
                </p>
              </div>
            );
          }

          if (block.startsWith("•")) {
            const cleanBlock = block.replace("•", "").trim();
            const parts = cleanBlock.split("**");
            return (
              <div key={index} className="pl-6 relative before:content-[''] before:absolute before:left-1 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-900 mb-4 text-gray-600">
                {parts.map((part, pIdx) => 
                  pIdx % 2 === 1 ? <strong key={pIdx} className="text-gray-900 font-bold">{part}</strong> : part
                )}
              </div>
            );
          }

          const isHighlightSection = currentSection === "PROBLEMA" || currentSection === "PROBLEM" || currentSection === "RESULTADO" || currentSection === "RESULT";
          if (isHighlightSection) {
            return (
              <div key={index} className="bg-gray-50 p-8 border-l-2 border-gray-900 my-6 shadow-sm clear-both">
                <p className="text-base text-gray-900 font-medium leading-relaxed m-0">
                  {block.split("**").map((part, pIdx) => 
                    pIdx % 2 === 1 ? <strong key={pIdx} className="text-black font-black">{part}</strong> : part
                  )}
                </p>
              </div>
            );
          }

          return (
            <p key={index} className="mb-6 text-gray-600">
              {block.split("**").map((part, pIdx) => 
                pIdx % 2 === 1 ? <strong key={pIdx} className="text-gray-900 font-bold">{part}</strong> : part
              )}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen pt-24">
      <div className="bg-gray-50 border-b border-gray-200 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors mb-12"
          >
            <ArrowLeft size={16} strokeWidth={2} />
            {language === 'pt' ? 'Voltar aos Projetos' : 'Back to Projects'}
          </button>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-8 max-w-4xl"
          >
            {getText(project.title)}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider rounded-none"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <p className="text-lg md:text-xl text-gray-500 font-medium">
            {getText(project.description)}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <div className="lg:w-2/3">
            {project.status === "coming-soon" ? (
              <div className="bg-gray-50 p-12 border border-gray-200 text-center flex flex-col items-center">
                <Lock className="text-gray-300 mb-4" size={48} strokeWidth={1} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Em fase de documentação</h3>
                <p className="text-gray-500">O case completo estará disponível em breve.</p>
              </div>
            ) : (
              <div className="prose-editorial">
                {renderEditorialCase(getText(project.fullDescription))}
              </div>
            )}

            {project.embedUrl && (
              <div className="mt-24 clear-both">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-4 mb-8">
                  {language === 'pt' ? 'Protótipo Interativo' : 'Interactive Prototype'}
                </h3>
                <div className="w-full h-[500px] md:h-[650px] bg-gray-50 border border-gray-200 rounded-none overflow-hidden p-2">
                  <iframe
                    style={{ border: "none" }}
                    width="100%"
                    height="100%"
                    src={project.embedUrl}
                    allowFullScreen
                    title="Protótipo"
                  ></iframe>
                </div>
              </div>
            )}

            {!hasInlineImages && project.gallery && project.gallery.length > 0 && (
              <div className="mt-24 space-y-16 clear-both">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-4">
                  {language === 'pt' ? 'Galeria do Projeto' : 'Project Gallery'}
                </h3>
                <div className="grid grid-cols-1 gap-16 mt-12">
                  {project.gallery.map((item, index) => (
                    <div key={index} className="space-y-4">
                      <div className="border border-gray-100 bg-gray-50 p-2">
                        <img src={item.url} alt={item.title} className="w-full h-auto object-contain" />
                      </div>
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest border-l-2 border-gray-900 pl-4 py-1">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:w-1/3 lg:sticky lg:top-32 w-full border-t lg:border-t-0 lg:border-l border-gray-200 pt-12 lg:pt-0 lg:pl-12">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-10">
              {language === 'pt' ? 'Ficha Técnica' : 'Project Details'}
            </h3>
            
            <div className="space-y-10">
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  {language === 'pt' ? 'Cliente' : 'Client'}
                </span>
                <span className="text-lg font-medium text-gray-900">
                  {project.client}
                </span>
              </div>
              
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  {language === 'pt' ? 'Atuação' : 'Role'}
                </span>
                <span className="text-lg font-medium text-gray-900">
                  {project.role}
                </span>
              </div>

              <div>
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                  {language === 'pt' ? 'Ferramentas' : 'Tools'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-wider rounded-none bg-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.methods && (
                <div>
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                    {language === 'pt' ? 'Métodos Utilizados' : 'Methods Used'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.methods.map((method: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-wider rounded-none bg-white"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.principles && (
                <div>
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                    {language === 'pt' ? 'Princípios de UX' : 'Applied UX Principles'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.principles.map((principle: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-wider rounded-none bg-white"
                      >
                        {principle}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
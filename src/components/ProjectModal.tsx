import React from "react";
import { X } from "lucide-react";
import { Project } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const getText = (field: any) => {
    if (!field) return "";
    return typeof field === "string" ? field : field[language] || field.pt || "";
  };

  const renderEditorialCase = (text: string) => {
    if (!text) return null;

    // Remove espaços extras e quebra em blocos
    const blocks = text.split("\n").map((b) => b.trim()).filter(Boolean);
    const elements = [];

    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];

      // 1. Títulos de Seção
      if (block.startsWith("**") && block.endsWith("**") && !block.includes(":")) {
        const titleText = block.replace(/\*\*/g, "").trim();
        elements.push(
          <h4 key={i} className="clear-both text-xs font-bold text-gray-900 uppercase tracking-widest block mb-4 mt-12 pt-4 border-t border-gray-100">
            {titleText}
          </h4>
        );
        continue;
      }

      // 2. Imagens de largura total [IMG:x]
      if (block.startsWith("[IMG:") && block.endsWith("]")) {
        const imgIndex = parseInt(block.replace("[IMG:", "").replace("]", ""));
        const image = project.gallery?.[imgIndex];
        if (image) {
          elements.push(
            <div key={i} className="my-10 clear-both">
              <div className="border border-gray-100 bg-gray-50 p-4 shadow-sm">
                <img src={image.url} alt={typeof image.title === 'string' ? image.title : (image.title as any)[language]} className="w-full h-auto object-contain" />
              </div>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest border-l-2 border-gray-900 pl-4 py-1 mt-4">
                {typeof image.title === 'string' ? image.title : (image.title as any)[language]}
              </p>
            </div>
          );
        }
        continue;
      }

      // 3. Imagem lateral [IMG_SIDE:x]
      if (block.startsWith("[IMG_SIDE:") && block.endsWith("]")) {
        const imgIndex = parseInt(block.replace("[IMG_SIDE:", "").replace("]", ""));
        const image = project.gallery?.[imgIndex];
        const nextBlock = blocks[i + 1]; // Pega o próximo texto
        
        if (image) {
          elements.push(
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-start clear-both">
              <div className="border border-gray-100 bg-gray-50 p-3 shadow-sm">
                <img src={image.url} alt={typeof image.title === 'string' ? image.title : (image.title as any)[language]} className="w-full h-auto object-contain" />
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-3">
                  {typeof image.title === 'string' ? image.title : (image.title as any)[language]}
                </p>
              </div>
              <div className="text-gray-600 text-[1.1rem] leading-relaxed">
                {nextBlock?.split("**").map((part, pIdx) => 
                  pIdx % 2 === 1 ? <strong key={pIdx} className="text-gray-900 font-bold">{part}</strong> : part
                )}
              </div>
            </div>
          );
          i++; // Pula o próximo bloco pois já o renderizamos aqui
        }
        continue;
      }

      // 4. Notas de IA
      if (block.startsWith("[AI_NOTE]")) {
        const cleanText = block.replace("[AI_NOTE]", "").trim();
        elements.push(
          <div key={i} className="my-8 p-5 bg-gray-50 border border-gray-100 clear-both">
            <p className="text-sm text-gray-500 italic m-0">
              {cleanText.split("**").map((part, pIdx) => 
                pIdx % 2 === 1 ? <strong key={pIdx} className="text-gray-700 font-bold not-italic">{part}</strong> : part
              )}
            </p>
          </div>
        );
        continue;
      }

      // 5. Parágrafo Padrão ou Bullet Point
      const isBullet = block.startsWith("•");
      elements.push(
        <p key={i} className={`mb-6 text-gray-600 clear-both ${isBullet ? "pl-6 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-gray-900" : ""}`}>
          {block.replace("•", "").split("**").map((part, pIdx) => 
            pIdx % 2 === 1 ? <strong key={pIdx} className="text-gray-900 font-bold">{part}</strong> : part
          )}
        </p>
      );
    }

    return <div className="space-y-6 leading-relaxed">{elements}</div>;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6">
      <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-5xl h-full md:max-h-[95vh] bg-white rounded-none shadow-2xl overflow-y-auto flex flex-col animate-in fade-in zoom-in-95 duration-300">
        
        <button onClick={onClose} className="absolute top-4 right-4 z-50 p-3 bg-white border border-gray-200 rounded-none hover:bg-gray-900 hover:text-white transition-colors shadow-sm">
          <X size={24} strokeWidth={1.5} />
        </button>

        <div className="w-full relative bg-gray-50 border-b border-gray-100">
          <img src={project.imageUrl} alt={getText(project.title)} className="w-full h-auto max-h-[500px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
            <div className="p-8 md:p-16 text-white w-full max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{getText(project.title)}</h2>
              <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-gray-300">
                <span>{project.client}</span>
                <span>•</span>
                <span>{project.role}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-16 max-w-4xl mx-auto w-full">
          <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-8">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-wider">{tag}</span>
            ))}
          </div>

          <div className="text-[1.1rem] text-gray-700">
            {renderEditorialCase(getText(project.fullDescription) || getText(project.description))}
          </div>

          {/* Ficha Técnica */}
          <div className="mt-24 pt-12 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Stack & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {(project.technologies || []).map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 border border-gray-200 text-xs font-bold uppercase text-gray-600">{tech}</span>
                ))}
              </div>
            </div>
            {project.methods && (
              <div>
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Process</h3>
                <div className="flex flex-wrap gap-2">
                  {project.methods.map((m, i) => (
                    <span key={i} className="px-3 py-1.5 border border-gray-200 text-xs font-bold uppercase text-gray-600">{m}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
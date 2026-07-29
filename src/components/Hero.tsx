import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projetos") || document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight - 80, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-4 pt-32 pb-12 md:pt-40 relative bg-transparent">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LADO ESQUERDO: Textos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-3/5"
          >
            {/* ESCUDO DE LEITURA: Caixa com fundo branco */}
            <div className="bg-white py-4 pr-4 rounded-xl inline-block">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.2] mb-6">
                {language === "pt" ? (
                  <>
                    Product Designer transformando problemas complexos em <span className="text-gray-500">eficiência operacional.</span>
                  </>
                ) : (
                  <>
                    Product Designer turning complex problems into <span className="text-gray-500">operational efficiency.</span>
                  </>
                )}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl">
                {language === "pt"
                  ? "Sou Letícia Giostri. Crio produtos digitais escaláveis através de arquiteturas densas, Design Systems e decisões pautadas em métricas de negócio."
                  : "I'm Letícia Giostri. I create scalable digital products through dense architectures, Design Systems, and decisions driven by business metrics."}
              </p>
            </div>

            {/* BOTÃO FUNCIONANDO: Tag button com onClick */}
            <div className="bg-white inline-block mt-12 pr-4 py-2 rounded-lg">
              <button 
                onClick={scrollToProjects}
                className="flex items-center gap-3 text-gray-400 hover:text-gray-900 font-medium cursor-pointer transition-colors duration-300 outline-none group"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <ArrowDown size={20} className="group-hover:text-gray-900 transition-colors" />
                </motion.div>
                <span className="text-xs uppercase tracking-widest font-bold group-hover:text-gray-900 transition-colors">
                  {language === "pt" ? "Explorar Cases" : "Explore Cases"}
                </span>
              </button>
            </div>
          </motion.div>

          {/* LADO DIREITO: Coluna de Experiência */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:w-2/5 w-full border-t lg:border-t-0 lg:border-l border-gray-200 pt-10 lg:pt-0 lg:pl-12"
          >
            {/* ESCUDO DE LEITURA: bg-white na lista inteira */}
            <ul className="space-y-8 bg-white p-2 lg:p-4 rounded-xl inline-block w-full">
              <li>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {language === "pt" ? "Experiência" : "Experience"}
                </span>
                <span className="text-lg font-medium text-gray-900">
                  {language === "pt" ? "4 anos no mercado digital" : "4 years in digital products"}
                </span>
              </li>
              <li>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {language === "pt" ? "Especialidade" : "Specialty"}
                </span>
                <span className="text-lg font-medium text-gray-900">
                  {language === "pt" ? "Sistemas Complexos, BaaS, CaaS, B2C e B2B, ERP e SaaS" : "Complex Systems, BaaS, CaaS, B2C and B2B, ERP and SaaS"}
                </span>
              </li>
              <li>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {language === "pt" ? "Foco Atual" : "Current Focus"}
                </span>
                <span className="text-lg font-medium text-gray-900">
                  {language === "pt" 
                    ? "UX Research, UI/UX, Arquitetura, Design Systems e Métricas" 
                    : "UX Research, UI/UX, Architecture, Design Systems and Metrics"}
                </span>
              </li>
              <li>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {language === "pt" ? "Localização" : "Location"}
                </span>
                <span className="text-lg font-medium text-gray-900">
                  Belo Horizonte, MG - Brasil
                </span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="min-h-[85vh] flex flex-col justify-center bg-white px-4 pt-32 pb-12 md:pt-40">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LADO ESQUERDO: A Proposta de Valor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-3/5"
          >
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

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 flex items-center gap-3 text-gray-400 font-medium"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ArrowDown size={20} />
              </motion.div>
              <span className="text-xs uppercase tracking-widest font-bold">
                {language === "pt" ? "Explorar Cases" : "Explore Cases"}
              </span>
            </motion.div>
          </motion.div>

          {/* LADO DIREITO: O "Fast-Fact" para o recrutador ler em 5 segundos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:w-2/5 w-full border-t lg:border-t-0 lg:border-l border-gray-200 pt-10 lg:pt-0 lg:pl-12"
          >
            <ul className="space-y-8">
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
                  {language === "pt" ? "Sistemas Complexos, ERP e SaaS" : "Complex Systems, ERP and SaaS"}
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
                  Belo Horizonte, MG — Brasil
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
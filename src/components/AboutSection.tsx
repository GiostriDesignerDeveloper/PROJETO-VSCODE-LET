import { Code, PenTool, Monitor, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { t, language } = useLanguage();

  const skills = [
    {
      icon: <Code size={24} strokeWidth={1.5} className="text-gray-900" />,
      title: t("about.card1.title"),
      description: t("about.card1.desc"),
    },
    {
      icon: <PenTool size={24} strokeWidth={1.5} className="text-gray-900" />,
      title: t("about.card2.title"),
      description: t("about.card2.desc"),
    },
    {
      icon: <Monitor size={24} strokeWidth={1.5} className="text-gray-900" />,
      title: t("about.card3.title"),
      description: t("about.card3.desc"),
    },
    {
      icon: <Users size={24} strokeWidth={1.5} className="text-gray-900" />,
      title: t("about.card4.title"),
      description: t("about.card4.desc"),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Layout Assimétrico: Mesma estrutura da área de Projetos */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          
          {/* COLUNA ESQUERDA: Texto e CTA (Sticky no Desktop) */}
          <div className="lg:w-5/12 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10 tracking-tight leading-[1.1]">
                {t("about.title")}
              </h2>

              <div className="space-y-6 text-gray-500 leading-relaxed text-lg mb-12">
                <p>
                  <strong className="text-gray-900">
                    {language === "pt"
                      ? "Product Designer (UI/UX) com 4 anos de experiência"
                      : "Product Designer (UI/UX) with 4 years of experience"}
                  </strong>
                  {/* 👇 AQUI ESTÁ A CORREÇÃO DO ESPAÇO E DAS MÉTRICAS */}
                  {" "}
                  {t("about.bio.p1")
                    .replace(
                      "Product Designer (UI/UX) com 4 anos de experiência ",
                      ""
                    )
                    .replace(
                      "Product Designer (UI/UX) with 4 years of experience ",
                      ""
                    )
                    .replace("KPIs", "métricas")
                    .replace("KPIs", "metrics")}
                </p>
                <p>{t("about.bio.p2")}</p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 hover:bg-black text-white rounded-none transition-colors font-bold tracking-wide uppercase text-sm"
              >
                {t("about.button")}
              </Link>
            </motion.div>
          </div>

          {/* COLUNA DIREITA: Grid de Skills e Listas (Scroll) */}
          <div className="lg:w-7/12 w-full space-y-16">
            
            {/* Grid Brutalista de Habilidades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 border border-gray-200 rounded-none hover:bg-white hover:border-gray-900 transition-colors group"
                >
                  <div className="mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                    {skill.icon}
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-widest">
                    {skill.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Lista Técnica (Estilo Especificação de Produto) */}
            <div className="pt-10 border-t border-gray-200">
              <h4 className="text-xs font-bold text-gray-900 mb-8 uppercase tracking-widest">
                {t("about.skills.title")}
              </h4>
              
              <ul className="grid grid-cols-1 gap-6 text-sm">
                <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 border-b border-gray-100 pb-4">
                  <span className="text-gray-900 font-bold uppercase tracking-wider w-32 shrink-0 text-xs mt-1">
                    {language === "pt" ? "Estratégia" : "Strategy"}
                  </span>
                  <span className="text-gray-600 leading-relaxed">UX Research, Discovery, Design Systems, Usability Metrics.</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 border-b border-gray-100 pb-4">
                  <span className="text-gray-900 font-bold uppercase tracking-wider w-32 shrink-0 text-xs mt-1">
                    {language === "pt" ? "Design" : "Design"}
                  </span>
                  <span className="text-gray-600 leading-relaxed">Figma (Tokens/Variables), Information Architecture.</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 border-b border-gray-100 pb-4">
                  <span className="text-gray-900 font-bold uppercase tracking-wider w-32 shrink-0 text-xs mt-1">
                    {language === "pt" ? "Tech" : "Tech"}
                  </span>
                  <span className="text-gray-600 leading-relaxed">React, HTML/CSS.</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                  <span className="text-gray-900 font-bold uppercase tracking-wider w-32 shrink-0 text-xs mt-1">
                    {language === "pt" ? "Ferramentas" : "Tools"}
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    Figma, Figma AI, Claude, Gemini, GPT, Lovable, Cursor, V0, Bolt, Google Workspace, Miro, FigJam, ClickUp, Jira, Trello, Maze, Google Forms, FlowMapp, Uizard, Stark {language === "pt" ? "e" : "and"} Google Analytics.
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
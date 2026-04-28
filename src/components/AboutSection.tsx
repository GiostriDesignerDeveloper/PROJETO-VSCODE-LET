import { Code, PenTool, Monitor, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const AboutSection = () => {
  const { t, language } = useLanguage();

  const skills = [
    {
      icon: <Code size={24} className="text-blue-600" />,
      title: t("about.card1.title"),
      description: t("about.card1.desc"),
    },
    {
      icon: <PenTool size={24} className="text-blue-600" />,
      title: t("about.card2.title"),
      description: t("about.card2.desc"),
    },
    {
      icon: <Monitor size={24} className="text-blue-600" />,
      title: t("about.card3.title"),
      description: t("about.card3.desc"),
    },
    {
      icon: <Users size={24} className="text-blue-600" />,
      title: t("about.card4.title"),
      description: t("about.card4.desc"),
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("about.title")}
          </h2>
        </div>

        {/* Grid Principal: Flex-col no mobile garante que um bloco venha DEPOIS do outro */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* BLOCO DE CARDS: No mobile ele vem primeiro agora para limpar o fluxo */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative z-20"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* BLOCO DE TEXTO: Biografia */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 relative z-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t("about.history.title")}
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                <strong>{language === 'pt' ? 'Product Designer (UI/UX) com 4 anos de experiência' : 'Product Designer (UI/UX) with 4 years of experience'}</strong> 
                {t("about.bio.p1").replace("Product Designer (UI/UX) com 4 anos de experiência ", "").replace("Product Designer (UI/UX) with 4 years of experience ", "")}
              </p>
              
              <p>{t("about.bio.p2")}</p>
              
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {t("about.skills.title")}
                </h4>
                <ul className="grid grid-cols-1 gap-2 text-base">
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">Strategy:</span> 
                    UX Research, Discovery, Design Systems, Metrics.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">Design:</span> 
                    Figma (Variables), Information Architecture.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">Tech:</span> 
                    React, Tailwind, HTML/CSS.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <Link
                to="/about"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all font-bold shadow-lg shadow-blue-200"
              >
                {t("about.button")}
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
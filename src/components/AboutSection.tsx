import { Code, PenTool, Monitor, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

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
    <section className="py-20 bg-white relative"> {/* Garantindo fundo branco na seção */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("about.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Lado do Texto (Bio) - Adicionamos order-2 no mobile para os cards virem antes ou vice-versa, 
              mas aqui vamos manter a ordem e garantir que o texto não sobreponha */}
          <div className="order-2 lg:order-1 relative z-0"> 
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t("about.history.title")}
            </h3>
            
            <div className="space-y-4 text-gray-600 mb-8 leading-relaxed">
              <p>{t("about.bio.p1")}</p>
              <p>{t("about.bio.p2")}</p>
              
              <div className="pt-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {t("about.skills.title")}
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Estratégia:</strong> UX Research, Discovery, Design Systems, Usability Metrics.</li>
                  <li><strong>Design:</strong> Figma (Tokens/Variables), Information Architecture.</li>
                  <li><strong>Tech:</strong> React, HTML/CSS.</li>
                </ul>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium shadow-sm"
            >
              {t("about.button")}
            </Link>
          </div>

          {/* Lado dos Cards - O segredo está no bg-white sólido e z-10 */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6 sticky top-24 z-10">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative z-20"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
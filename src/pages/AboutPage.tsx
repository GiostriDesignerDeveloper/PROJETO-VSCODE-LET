import { Briefcase } from "lucide-react"; // Removido GraduationCap que não era usado
import { useLanguage } from "../contexts/LanguageContext";

const AboutPage = () => {
  const { t, language } = useLanguage();

  // Mantenha as constantes de dados (experiencesPT, etc) que já definimos antes aqui dentro...

  return (
    <div className="pt-32 pb-20 bg-white">
      {/* Header da Página */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t("aboutpage.hero.title" as any)}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t("aboutpage.hero.subtitle" as any)}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            
            {/* Bio */}
            <section className="mb-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                {t("aboutpage.trajectory" as any)}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p>{t("about.bio.p1")}</p>
                <p>{t("about.bio.p2")}</p>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-20">
              <div className="flex items-center mb-10">
                <Briefcase size={28} className="text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
                </h2>
              </div>
              {/* O mapeamento das experiências continua aqui... */}
            </section>
          </div>

          {/* Sidebar Lateral */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 sticky top-32 z-10">
              {/* Conteúdo da sidebar igual ao anterior... */}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
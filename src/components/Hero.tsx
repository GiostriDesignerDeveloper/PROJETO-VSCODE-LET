import React from "react";
// 1. IMPORTAÇÃO: Trazemos a nossa ferramenta mágica de tradução
import { useLanguage } from "../contexts/LanguageContext"; 

const Hero = () => {
  // 2. ATIVAÇÃO: Puxamos a função 't' que vai buscar o texto certo lá no dicionário
  const { t } = useLanguage(); 

  return (
    <section className="relative overflow-hidden pt-28 pb-0 md:pt-36 md:pb-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      <div className="absolute top-40 right-0 w-80 h-80 bg-teal-100 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-20 w-64 h-64 bg-orange-100 rounded-full opacity-20 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            {/* 3. SUBSTITUIÇÃO: Olha como montamos o lego mantendo as cores! */}
            {t("hero.title.1")}
            <span className="text-blue-600">{t("hero.title.blue1")}</span>
            {t("hero.title.2")}
            <span className="text-blue-600">{t("hero.title.blue2")}</span>
            {t("hero.title.3")}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto pb-8">
            {/* Aqui é mais simples, pois não tem palavra colorida no meio */}
            {t("hero.subtitle")}
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;

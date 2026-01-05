import React from "react";

const Hero = () => {
  return (
    // MUDEI AQUI:
    // pt-28 (era 32): Sobe o conteúdo um pouco mais para o topo.
    // pb-0 (era 12): Remove TOTALMENTE o espaço interno inferior.
    <section className="relative overflow-hidden pt-28 pb-0 md:pt-36 md:pb-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      <div className="absolute top-40 right-0 w-80 h-80 bg-teal-100 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-20 w-64 h-64 bg-orange-100 rounded-full opacity-20 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Design orientado por{" "}
            <span className="text-blue-600">comportamentos</span> e{" "}
            <span className="text-blue-600">dados</span> para produtos digitais.
          </h1>

          {/* Adicionei 'pb-8' aqui no parágrafo para dar só um respiro mínimo antes de acabar a seção */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto pb-8">
            Olá, sou a Letícia designer focada em criar soluções visuais
            baseadas em usabilidade e métricas de negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

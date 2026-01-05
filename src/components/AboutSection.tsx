import React from "react";
import { Code, PenTool, Monitor, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const skills = [
    {
      // Mantivemos o ícone <Code /> porque tem tudo a ver com a área técnica
      icon: <Code size={24} className="text-blue-600" />,
      title: "Tecnologia e Desenvolvimento",
      description:
        "Colaboração técnica com desenvolvedores, garantindo a viabilidade do projeto e a fidelidade na implementação do design.",
    },
    {
      icon: <PenTool size={24} className="text-blue-600" />,
      title: "UI/UX Design",
      description:
        "Criar interfaces e experiências de usuário intuitivas e visualmente atraentes.",
    },
    {
      icon: <Monitor size={24} className="text-blue-600" />,
      title: "Design responsivo",
      description:
        "Garantir que os aplicativos funcionem perfeitamente em todos os dispositivos e tamanhos de tela.",
    },
    {
      icon: <Users size={24} className="text-blue-600" />,
      title: "Colaboração",
      description:
        "Trabalhar eficazmente em equipe para entregar projetos com sucesso e dentro do prazo.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre mim
          </h2>
          <p className="text-lg text-gray-600"></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Minha história
            </h3>
            <p className="text-gray-600 mb-4">
              Atualmente, sou UX/UI Designer com formação em Design de Ambientes
              pela Universidade Estadual de Minas Gerais e estou envolvida com
              design de interfaces e experiência do usuário há 3 anos.
            </p>
            <p className="text-gray-600 mb-6">
              Designer de UX/UI com foco em transformar comportamento humano em
              decisões de interface claras, eficientes e embasadas. Atuo
              conectando estética e funcionalidade com base em heurísticas de
              usabilidade, KPIs e fundamentos da psicologia cognitiva. Tenho
              experiência em pesquisa comportamental, arquitetura da informação,
              prototipação (Figma), testes de usabilidade e desenvolvimento de
              soluções digitais responsivas. Valorizo consistência visual,
              lógica de navegação e colaboração com times de produto, tecnologia
              e negócio.
              <p className="text-gray-600 mb-6">
                Estou constantemente me atualizando, aprendendo novas linguagens
                de programação (HTML,CSS, Javascript) e aprofundando meu
                conhecimento em front-end, o que tem sido desafiador e
                enriquecedor. Me interesso especialmente por produtos digitais
                complexos, fluxos sistêmicos e ambientes em que o design resolve
                problemas reais. Estou sempre buscando formas de validar
                decisões com dados, e priorizo decisões orientadas por testes e
                evidências.
              </p>
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
            >
              Saiba mais sobre mim
            </Link>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

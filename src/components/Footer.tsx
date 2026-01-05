import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1: Marca e Redes */}
          <div>
            <h3 className="text-xl font-bold mb-4">Portfólio</h3>
            <p className="text-gray-400 mb-4">Criado por Letícia Gouveia.</p>
            <div className="flex space-x-4">
              {/* Lembre-se de colocar os links reais do seu LinkedIn/Github aqui no href */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:leticiagouveiadesign@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                {/* O link de projetos leva para a âncora #projects na home */}
                <a
                  href="/#projects"
                  className="hover:text-white transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Experiências
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato (Sem o botão) */}
          <div>
            <h3 className="text-xl font-bold mb-4">Entre em contato</h3>
            <div className="space-y-4 text-gray-400">
              <p>
                Email:
                <br />
                <a
                  href="mailto:leticiagouveiadesign@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  leticiagouveiadesign@gmail.com
                </a>
              </p>
              <p>
                Localização:
                <br />
                Belo Horizonte, MG - BR
              </p>

              {/* ❌ O BOTÃO "CONTACT ME" FOI REMOVIDO DAQUI */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Letícia Gouveia. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

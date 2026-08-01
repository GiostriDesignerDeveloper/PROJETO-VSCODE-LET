# Letícia Giostri | Product & UX/UI Designer Portfolio

Portfólio digital focado em alta performance, minimalismo e escaneabilidade, desenvolvido para apresentar cases complexos de UX/UI.

![Status](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC)
![FramerMotion](https://img.shields.io/badge/Framer_Motion-11.x-black)

Visão Geral

Este projeto é a materialização da minha visão como Product Designer: **transformar complexidade em eficiência operacional**. O portfólio não é apenas uma vitrine de imagens, mas uma plataforma editorial bilíngue estruturada para reduzir a carga cognitiva do leitor (recrutadores e stakeholders), garantindo foco total no impacto das métricas de negócio e na tomada de decisão.

Decisões de UX e Arquitetura

- **Design Editorial e Escaneabilidade:** Uso rigoroso de hierarquia tipográfica e espaços em branco (*White Space*) para guiar a leitura. O layout simula a estrutura de documentações técnicas de produto.
- **Redução de Carga Cognitiva:** Background interativo responsivo ao cursor construído com *CSS Mask Compositing*. A interface permanece limpa ("folha em branco"), revelando o *grid* pastel apenas na área de foco do usuário.
- **Suporte Bilíngue Nativo:** Sistema de internacionalização (PT/EN) via React Context API, garantindo troca de idioma instantânea sem *reload* da página, otimizando o *Time on Task* de recrutadores internacionais.
- **Performance e Componentização:** Construído sob uma arquitetura baseada em componentes escaláveis, separando estritamente os *dados* (JSON) da *interface* (UI), facilitando a manutenção e adição de novos cases.

Stack Tecnológica

O projeto foi desenvolvido utilizando as melhores práticas de front-end para garantir carregamento rápido e transições fluidas:

- **Framework:** React + Vite
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Roteamento:** React Router DOM
- **Ícones:** Lucide React

Estrutura do Projeto

A arquitetura de pastas foi desenhada para ser modular e previsível:

```bash
src/
├── components/       # Componentes de UI reutilizáveis (Header, Cards, Hero)
├── contexts/         # Gerenciamento de estado global (LanguageContext)
├── data/             # Base de dados estruturada (projects.ts)
├── pages/            # Views de roteamento (Home, ProjectPage, AboutPage)
├── types/            # Definições de interfaces do TypeScript
└── index.css         # Configurações globais do Tailwind CSS

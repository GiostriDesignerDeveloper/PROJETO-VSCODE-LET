import { Project } from "../types";

export const projectsData: Project[] = [
  // ========================================================================
  // PROJETOS ATIVOS (Seus 2 projetos reais)
  // ========================================================================
  {
    id: "prevmax-previdência",
    title: "PrevMax — previdência",
    status: "active", // Marcado como ativo
    embedUrl:
      "https://embed.figma.com/proto/UowipTJL4ggqVwP828F6Eb/Portf%C3%B3lio-PLATAFORMA?page-id=0%3A1&node-id=4-4108&viewport=575%2C347%2C0.06&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A4094&embed-host=share",
    description:
      "Plataforma de previdência complementar com foco em acessibilidade, clareza de informações financeiras e conformidade regulatória.",
    fullDescription: `
**VISÃO GERAL DO PROJETO**
Projeto de design e estruturação de uma plataforma digital de previdência complementar fechada, voltada para participantes de fundos de pensão privados. O foco esteve em clareza, conformidade legal, acessibilidade e suporte à tomada de decisão consciente, considerando um público majoritariamente maduro e com baixo letramento digital.

**O DESAFIO**
Traduzir regras previdenciárias complexas, altamente reguladas e sensíveis, em uma experiência simples, confiável e orientada à autonomia do usuário, sem comprometer segurança, precisão das informações ou requisitos legais.

**PROCESSO DE DISCOVERY**
O projeto seguiu uma abordagem estruturada, colaborativa e orientada a negócio:

**1. Levantamento de Requisitos e Stakeholders**
• Alinhamento com stakeholders sobre expectativas, restrições legais e regras previdenciárias
• Mapeamento de requisitos funcionais, técnicos e de interface
• Priorização de transparência, segurança de dados e acessibilidade

**2. Pesquisa e Estratégia**
• Pesquisa qualitativa com operadores que lidam com fundos de pensão para entender dores, necessidades e comportamentos
• Benchmarking de plataformas do mesmo segmento
• Definição de personas com foco em perfil etário, comportamento financeiro e letramento digital
• User story mapping para visualização de fluxos críticos e priorização de backlog
• Criação de sitemap alinhado às regras de negócio

**3. Ideação, Prototipação e Testes**
• Prototipação orientada às regras de negócio, não apenas à estética
• Criação de design system escalável, com componentes reutilizáveis
• Aplicação de boas práticas de usabilidade e design inclusivo
• Testes com usuários e stakeholders, com ajustes contínuos baseados em feedback qualitativo

**A SOLUÇÃO**
• Experiência digital clara, segura e adequada a um contexto financeiro sensível
• Fluxos simplificados para:
  – Adesão ao plano
  – Consulta de saldos e movimentações
  – Simulação de contribuições e benefícios

**DESIGN SYSTEM**
O Design System foi desenvolvido de forma colaborativa com o time de Front-end, atuando como um ativo estratégico do produto para garantir consistência visual, eficiência no desenvolvimento e previsibilidade da experiência do usuário.

Os componentes foram projetados no Figma e implementados de forma paralela no Storybook, permitindo documentação viva, versionamento e reutilização consistente ao longo do produto. Cada componente passou por validação visual e de comportamento utilizando o Chromatic, assegurando fidelidade entre design e implementação.

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins de portfólio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo, às decisões de design e aos desafios enfrentados.
    `,
    imageUrl: "/prevmax-capa.png",
    category: "UX Strategy",
    tags: ["UX Research", "Design System", "Acessibilidade"],
    technologies: ["Figma", "Miro", "Microsoft Clarity", "Prototipagem"],
    client: "PrevMax",
    role: "Product Designer",
    liveUrl: "#",
    githubUrl: "#",
    gallery: [
      {
        url: "/prevmax-processo.png",
        title: "Processo de Design & Metodologia",
      },
      {
        url: "/prevmax-benchmark.png",
        title: "Análise de Mercado (Benchmarking)",
      },
      {
        url: "/prevmax-research.png",
        title: "Personas e Mapeamento de Histórias (User Story Map)",
      },
      {
        url: "/prevmax-flow.png",
        title: "Fluxo do Usuário e Arquitetura de Informação",
      },
      {
        url: "/prevmax-styleguide.png",
        title: "Style Guide: Tipografia e Cores Acessíveis",
      },
      {
        url: "/prevmax-components.png",
        title: "Biblioteca de Componentes e UI Kit",
      },
    ],
  },
  {
    id: "sistema-notificacoes",
    title: "Redesign de Navegação e Sistema de Notificações",
    status: "active", // Marcado como ativo
    embedUrl: "",
    description:
      "Solução focada em resolver gaps de comunicação crítica e modernizar a navegação de um sistema legado, utilizando heurísticas de Nielsen e padrões mentais consolidados.",
    fullDescription: `
**CONTEXTO**
O sistema legado sofria com um gap de comunicação crítica. Informações vitais (como atualizações de sistema ou avisos de conformidade) eram ignoradas ou perdidas em e-mails externos. Além disso, a navegação superior (Header) estava visualmente datada e consumia espaço excessivo sem entregar valor operacional.

**A SOLUÇÃO VISUAL**
A solução foi desenhada em três pilares, focando na consistência visual e na redução da carga cognitiva:

**1. Redesign do Header**
• Limpeza Visual: Apliquei a Heurística de Estética e Design Minimalista (Nielsen), removendo ruídos visuais e reorganizando os elementos.
• Feedback de Status: Introdução do ícone de sino com badge de contador. Isso atende à heurística de Visibilidade do Status do Sistema, informando o usuário passivamente sobre novas interações.
• Acessibilidade: Melhor contraste e áreas de clique (Lei de Fitts) otimizadas para o menu de perfil e ações rápidas.

**2. Painel do Gestor**
A maior complexidade do projeto. O gestor precisava de poder de segmentação granular.
• Fluxo de Criação: Desenvolvi um fluxo onde o gestor define "Quem recebe" (Grupos: Admin, Operadores, etc.), "Onde estão" (Filtro por UF) e "Validade da mensagem".
• Rastreabilidade: Implementação de um dashboard que exibe não apenas o envio, mas a taxa de leitura. Isso transforma a notificação em uma ferramenta jurídica/administrativa de comprovação de ciência.

**3. Painel do Usuário**
• Lei de Jakob: Utilizei o padrão mental de "Caixa de Entrada" de e-mails (Inbox / Lidos / Arquivados). Ao replicar um padrão conhecido, reduzimos a curva de aprendizado a zero.
• Controle do Usuário: Adicionei uma tela de "Preferências de Notificação". Permitir que o usuário decida o que quer receber (Toggle On/Off) respeita a heurística de Controle e Liberdade do Usuário, evitando frustração e descadastramentos mentais.

**IMPACTOS E MÉTRICAS**

**Taxa de Abertura**
Aumento esperado devido à centralização no Header (onde o usuário já olha frequentemente).

**Conformidade**
Garantia de 100% de rastreabilidade de quem leu os comunicados obrigatórios via Painel do Gestor.

**Satisfação do Usuário**
Melhoria na percepção visual do sistema devido ao facelift do Header e organização da Inbox.

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins de portfólio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo, às decisões de design e aos desafios enfrentados.
    `,
    imageUrl: "/notificacoes-capa.png",
    category: "UI Design",
    tags: ["UI Design", "Heurísticas", "Arquitetura de Informação"],
    technologies: ["Figma", "Design System", "Prototipagem"],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    githubUrl: "#",
    gallery: [
      {
        url: "/notificacoes-header.png",
        title: "Redesign do Header com Heurísticas de Nielsen",
      },
      {
        url: "/notificacoes-gestor.png",
        title: "Painel do Gestor: Segmentação e Rastreabilidade",
      },
      {
        url: "/notificacoes-user.png",
        title: "Painel do Usuário: Inbox e Preferências",
      },
    ],
  },
// --- PROJETO 3: DESIGN SYSTEM (NOVO) ---
  {
    id: "evolucao-design-system",
    title: "Evolução e Escalabilidade de Design System",
    embedUrl: "", // Deixe vazio se não for embedar o Figma
    description:
      "Estruturação de Design Ops, adoção de Figma Variables e mentoria técnica para elevar a maturidade de um Design System corporativo em constante evolução.",
    fullDescription: `
**O CONTEXTO**
Ao assumir o projeto, a empresa já possuía um Design System inicial, porém com uma estrutura "básica" que não acompanhava a velocidade de crescimento dos produtos. Faltava padronização em níveis mais profundos (tokens) e documentação funcional, o que gerava gargalos no hand-off e retrabalho constante.

**O DESAFIO**
Transformar uma biblioteca visual estática em um ecossistema de design vivo, escalável e de fácil manutenção, sem pausar as entregas do dia a dia (trocar o pneu com o carro andando). Além disso, havia o desafio cultural de aculturar o time de design sobre boas práticas de componentização.

**ESTRATÉGIA E EXECUÇÃO (DESIGN OPS)**
Para garantir que o Design System fosse não apenas um repositório, mas uma ferramenta de aceleração, atuei nas seguintes frentes:

**1. Arquitetura de Variáveis e Tokens**
• Implementação avançada de Figma Variables, estruturando coleções lógicas para Espaçamentos, Border Radius e Cores (com suporte nativo a Light/Dark Mode).
• Separação de cores primitivas (paleta base) de cores semânticas (tokens de ação, erro, sucesso), blindando o sistema contra quebras visuais e facilitando a manutenção em massa.

**2. Componentização Avançada e Documentação**
• Reestruturação de componentes complexos (Headers, Side Navigations, Badges) utilizando Auto Layout, propriedades de componentes (Variants, Booleans) e regras de acessibilidade.
• Criação de guias de uso exaustivos: cada componente passou a ter documentação de anatomia, estados (Default, Hover, Disabled), regras de comportamento e princípios de UX atrelados (ex: quando usar cada tipo de navegação).

**3. Cultura e Mentoria**
• A tecnologia não se sustenta sem as pessoas. Promovi o repasse de conhecimento prático sobre componentização e uso de variáveis, elevando a barra técnica de todo o time de design e garantindo que o sistema fosse adotado e mantido corretamente.

**IMPACTOS E MÉTRICAS**

**Redução de Design Debt (Dívida Técnica)**
A padronização via variáveis reduziu drasticamente o tempo gasto corrigindo inconsistências visuais em diferentes telas do produto.

**Time-to-Market (Velocidade de Entrega)**
Com componentes robustos e bem documentados, o esforço cognitivo na criação de novas interfaces caiu consideravelmente, permitindo ao time focar na estratégia e no usuário, não no "desenho do botão".

**Onboarding e Curva de Aprendizado**
A documentação profunda está servindo como material de treinamento instantâneo para novos designers e desenvolvedores, garantindo alinhamento técnico desde o dia inicial.

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins de portfólio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo, às decisões de design e aos desafios enfrentados.
    `,
    imageUrl: "/ds-capa.png", // ⚠️ Lembre de salvar uma capa com esse nome
    category: "design",
    tags: ["Design System", "Design Ops", "Figma Variables"],
    technologies: ["Figma", "Tokens", "Documentação", "Mentoria"],
    client: "Teknisa", // Ou "Confidencial"
    role: "Product Designer / UI",
    liveUrl: "#",
    githubUrl: "#",
    gallery: [
      {
        url: "/ds-variaveis.png", // ⚠️ Imagem das suas Figma Variables
        title: "Estruturação de Variáveis: Espaçamentos, Radius e Modos de Cor",
      },
      {
        url: "/ds-cores.png", // ⚠️ Imagem da sua paleta de cores primitivas
        title: "Inventário de Cores Primitivas e Escalas",
      },
      {
        url: "/ds-documentacao.png", // ⚠️ Imagem da documentação do Header
        title: "Documentação Funcional: Regras de UX e Anatomia de Componentes",
      },
      {
        url: "/ds-pastas.png", // ⚠️ Imagem da organização das pastas
        title: "Taxonomia e Organização Lógica do Repositório",
      },
    ],
  },
  // --- PROJETO 4: PLATAFORMA B2B DE COMPRAS (ATUALIZADO COM IMAGENS REAIS) ---
  {
    id: "plataforma-b2b-compras",
    title: "Plataforma B2B de Compras e Cotações",
    embedUrl: "", // Adicione o link do protótipo do Figma se houver
    description:
      "Estruturação end-to-end de um sistema B2B, otimizando o fluxo de negociação entre empresas e fornecedores com foco em eficiência operacional e redução de carga cognitiva.",
    fullDescription: `
**O CONTEXTO E O DESAFIO**
O ecossistema de compras corporativas costuma ser fragmentado e burocrático. O desafio deste projeto foi centralizar todo o fluxo de compras, da solicitação de cotação à geração da ordem de compra final. O objetivo do negócio era claro: aumentar a governança, garantir o melhor custo-benefício nas negociações e acelerar a tomada de decisão através de um ambiente transparente e estruturado.

**PAIR DESIGN E CO-CRIAÇÃO**
A complexidade de um produto B2B dessa magnitude exige colaboração contínua. Atuei neste projeto em forte dinâmica com a designer Amanda Guimarães. Dividir o discovery e o delivery nos permitiu debater fluxos críticos com maior profundidade, cruzar diferentes perspectivas de usabilidade e garantir entregas mais robustas, mantendo o alinhamento constante com os times de Produto e Engenharia.

**ESTRATÉGIA DE UX E MINHA ATUAÇÃO**
Foquei na estruturação do produto e no desenho de fluxos de alta criticidade, garantindo que a complexidade do sistema legado não fosse repassada para a interface do usuário:

**1. Mapeamento de Perfis e Permissões**
• Modelagem de arquitetura de informação e jornadas distintas para múltiplos usuários (Compradores, Fornecedores e Administradores), blindando o sistema com uma definição clara de regras de negócio e acessos.

**2. Redução de Carga Cognitiva**
• Desenho de interfaces focadas na comparação simultânea de propostas. O uso de padrões visuais claros e hierarquia de informação bem definida facilitou a análise de variáveis complexas por parte dos compradores, apoiando uma tomada de decisão mais rápida e segura.

**3. Equilíbrio entre Automação e Controle Humano**
• Estruturação de fluxos de cotação e negociação que aproveitam a automação do sistema para eliminar retrabalho, mas mantêm pontos de verificação cruciais na mão do usuário, garantindo segurança operacional.

**4. Validação e Usabilidade**
• Planejamento estratégico de testes de usabilidade para validação das interfaces pós-desenvolvimento, definindo objetivos da pesquisa, recrutamento de perfis corretos e métricas de sucesso baseadas na experiência real do usuário B2B.

**IMPACTOS E MÉTRICAS**

**Time-to-Task (Eficiência Operacional)**
A centralização do fluxo e a integração inteligente com sistemas legados reduziram o tempo de execução e o retrabalho histórico nas negociações.

**Task Success Rate**
A clareza na interface de comparação de múltiplas propostas elevou a taxa de sucesso e a assertividade na escolha de fornecedores, impactando diretamente oS resultados finais da empresa.

**Adoção e Governança**
A criação de um ambiente controlado e rastreável melhorou os níveis de compliance (conformidade) do processo de compras corporativas.

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins de portfólio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo, às decisões de design e aos desafios enfrentados.
    `,
    // 👇 ESCOLHI ESTA IMAGEM COMO CAPA POR MOSTRAR O CORAÇÃO DO SISTEMA
    imageUrl: "/cotação.png", 
    category: "design",
    tags: ["UX Strategy", "B2B", "Pair Design"],
    technologies: ["Figma", "Auto Layout", "Pair Design", "Testes de Usabilidade"],
    client: "Confidencial",
    role: "UX/UI Designer",
    liveUrl: "#",
    githubUrl: "#",
    gallery: [
      {
        url: "/negociação.png",
        title: "Fluxo de Negociação: Gestão de status e termos entre partes.",
      },
      {
        url: "/cadastro-preços-fornecedores.png",
        title: "Comparação de Propostas: Base de dados estruturada para análise de preços e fornecedores.",
      },
      {
        url: "/cadastro_fornecedor.jpg",
        title: "Cadastro de Fornecedor: Estruturação de dados complexos com Auto Layout.",
      },
      {
        url: "/perfil-edição.png",
        title: "Edição de Perfil: Mapeamento de perfis e gestão de dados do usuário.",
      },
      {
        url: "/login.jpg",
        title: "Portal de Acesso: Entrada do ecossistema B2B.",
      },
    ],
  },
  // --- PROJETO 5: HEALTHDASH (AUDITORIA UX) ---
  {
    id: "healthdash-auditoria-usabilidade",
    title: "Auditoria e Interface Responsiva",
    embedUrl: "", 
    description:
      "Auditoria heurística e proposta de redesign responsivo para um sistema de gestão nutricional hospitalar, focado em eficiência operacional e segurança do paciente.",
    fullDescription: `
**1. O DESAFIO (CONTEXTO)**
Otimizar a interface de um sistema de gestão nutricional hospitalar utilizado em dispositivos móveis (tablets). O objetivo era garantir que nutricionistas e equipes de copa pudessem acessar dados críticos de pacientes com rapidez e precisão, mesmo em ambientes de alta pressão.

**2. METODOLOGIA: AUDITORIA DE INTERFACE (HEURÍSTICAS DE UX)**
Realizei uma análise minuciosa identificando falhas críticas que impactavam a Eficiência Operacional e a Acessibilidade.

**Principais Problemas Mapeados:**
• **Hierarquia Visual e Legibilidade:** Títulos e dados do paciente tinham o mesmo peso visual, dificultando a leitura rápida (Scannability).
• **Conflito de Atenção:** Imagens de fundo competiam com dados vitais do paciente, prejudicando o contraste.
• **Falhas de Acessibilidade em Touch Targets:** Ícones e botões possuíam áreas de toque inferiores ao padrão de 44x44px, gerando erros de interação em tablets.
• **Quebra de Responsividade:** O layout "desintegrava" ao alternar entre as orientações paisagem e retrato, ocultando botões de ação críticos como "Salvar".

**3. SOLUÇÕES E MELHORIAS PROPOSTAS**
Com base em fundamentos científicos de design e usabilidade, propus as seguintes refatorações:

• **Estabelecimento de Hierarquia Tipográfica:** Uso de pesos variados (Bold para dados, Regular para rótulos) para guiar o olho do usuário instantaneamente para a informação necessária.
• **Otimização de Componentes de Formulário:** Substituição de modais centrais (que eram cobertos pelo teclado virtual) por páginas dedicadas ou grids fluidos.
• **Feedback Visual de Status:** Implementação de estados visuais claros (Tags/Badges) para indicar o status da prescrição (Ativa, Em Espera, Concluída).
• **Grid Responsivo e Ergonômico:** Reconstrução da interface sobre um grid fluido, permitindo a navegação lateral facilitada para o alcance do polegar em tablets.
• **Redução de Carga Cognitiva:** Padronização de ícones universais (como a lupa para busca e setas para navegação entre pacientes) para tornar a interface intuitiva sem necessidade de treinamento.

**4.IMPACTOS E MÉTRICAS**
As melhorias propostas visam impactar diretamente os seguintes indicadores:

**Time-on-Task (Eficiência)**
Redução do tempo necessário para preencher uma prescrição dietética ao eliminar ciclos de erro com teclado e rolagem de modal.

**Error Rate (Segurança do Paciente)**
Minimizar toques acidentais e interpretação errada de dados através de contraste e touch targets adequados.

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins de portfólio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo, às decisões de design e aos desafios enfrentados.
    `,
    imageUrl: "/healthdash-capa.png", // ⚠️ Lembre de colocar essa imagem de ilustração na pasta public
    category: "design",
    tags: ["UX Audit", "Healthcare", "Responsive Design", "Heurísticas"],
    technologies: ["Figma", "UX Research", "Acessibilidade", "UI Design"],
    client: "HealthDash", 
    role: "UX/UI Designer",
    liveUrl: "#",
    githubUrl: "#",
    // Galeria removida para focar na capa ilustrativa e no peso estratégico do texto.
  },
  // --- PROJETO 6: SMARTSETTLEMENT (FINTECH / AGILIDADE) ---
  {
    id: "smartsettlement-gestao-financeira",
    title: "Gestão de Conciliação Financeira",
    status: "active",
    embedUrl: "", 
    description:
      "Refatoração ágil de fluxo de conciliação bancária, focando em visibilidade de processamento, redução de carga cognitiva e eficiência operacional sob restrições técnicas.",
    fullDescription: `
**1. O DESAFIO E A DEMANDA**
O projeto consistiu na refatoração ágil de um sistema de gestão financeira robusto, focado na **Conciliação de Parcelas em Lote**. A demanda exigia solucionar falhas críticas de usabilidade e visibilidade de processos sob uma condição de alta pressão por entrega e implementação imediata.

**2. ESTRATÉGIA DE DESIGN E RESTRIÇÕES**
Para garantir a viabilidade do projeto e o cumprimento dos prazos, adotei uma postura pragmática baseada em dois pilares fundamentais:

• **Preservação do Ecossistema:** O UI Kit e o Design System não foram alterados para evitar impactos em um sistema já consolidado e garantir que a prioridade permanecesse na funcionalidade e na segurança da informação.
• **Documentação Ágil (Lean Design):** Devido à urgência, utilizei anotações de fluxo e sinalizações visuais diretamente sobre as interfaces (redlining), acelerando o entendimento do time de engenharia e eliminando o custo de tempo de protótipos interativos complexos.

**3. SOLUÇÕES IMPLEMENTADAS: UX & CARGA COGNITIVA**

**A. Visibilidade e Feedback de Sistema**
Apliquei a heurística de visibilidade do status do sistema para reduzir a incerteza do operador financeiro durante o processamento de grandes volumes de dados:
• **Indicação de Progresso:** Introdução de barras de progresso e mensagens de status (Aguardando, Processando) para evitar interrupções precoces pelo usuário.
• **Scanning Veloz:** Tabela otimizada com feedbacks visuais imediatos (ícones de sucesso e erro), permitindo a identificação de falhas em segundos.

**B. Prevenção de Erros em Operações Críticas**
• **Modais de Confirmação:** Implementação de interrupções deliberadas em ações de alto impacto (como o envio da conciliação), garantindo que o usuário valide a operação e mitigando riscos financeiros.
• **Navegação Orientada:** Reorganização do fluxo de conciliação através de botões de "Avançar" e "Voltar", transformando um processo denso em uma jornada lógica e sequencial.

**4. IMPACTO E BUSINESS**

**Agilidade de Desenvolvimento (Time-to-Market)**
A metodologia de design direto para produção reduziu drasticamente o ciclo de entrega das melhorias.

**Eficiência Operacional (Time-on-Task)**
A centralização de ações (Enviar, Limpar, Relatórios) e a flexibilidade de exportação (PDF/CSV) otimizaram o tempo gasto pelo colaborador em cada sessão de conciliação.

**Redução de Suporte**
A clareza nos feedbacks de erro e progresso visam reduzir chamados de suporte relacionados à incerteza do processamento de dados.

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins de portfólio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo, às decisões de design e aos desafios enfrentados.
    `,
    imageUrl: "/smartsettlement-capa.png", 
    category: "design",
    tags: ["Fintech", "UX Strategy", "Agile Design", "Finance"],
    technologies: ["Figma", "Redlining", "Arquitetura de Informação", "Lean UX"],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    githubUrl: "#",
    gallery: [
      {
        url: "/smartsettlement-dados.png",
        title: "Interface Principal: Hierarquia de dados e ações rápidas.",
      },
      {
        url: "/smartsettlement-loading.png",
        title: "Feedback de Sistema: Visibilidade do status de processamento.",
      },
      {
        url: "/smartsettlement-modal.png",
        title: "Prevenção de Erro: Modal de confirmação para ações críticas.",
      },
      {
        url: "/smartsettlement-fluxo.png",
        title: "Documentação de Fluxo: Mapeamento de interações e estados.",
      },
    ],
  },
  // ========================================================================
  // PROJETOS FUTUROS (EM BREVE)
  // ========================================================================
    {
    id: "crm-financeiro",
    title: "Portal CRM ",
    status: "coming-soon",
    description:
      "Gestão de relacionamento com cliente focado em cashback e portais administrativos.",
    imageUrl: "",
    category: "Web",
    tags: ["Product Design", "B2B"],
  },
  {
    id: "gestao-buffet",
    title: "Sistema de Gestão de Buffet",
    status: "coming-soon",
    description:
      "Interface para configuração de layouts de rampas e gestão de recipientes gastronômicos.",
    imageUrl: "",
    category: "Tablet App",
    tags: ["UX Strategy", "User Flow"],
  },
  {
    id: "sistema-pesagem",
    title: "App de reserva de restaurante",
    status: "coming-soon",
    description:
      "Solução para agendamento de reservas e otimização de filas em restaurante",
    imageUrl: "",
    category: "UI",
    tags: ["Research", "UX/UI Design"],
  },
  
   {
    id: "dashboard-analytics",
    title: "Esteira de sessão e CNAB",
    status: "coming-soon",
    description: "Painel de controle para esteira de sessão e CNAB.",
    imageUrl: "",
    category: "UX/UI Design",
    tags: ["Dashboard", "UI Design"],
  },
];

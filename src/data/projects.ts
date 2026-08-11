import { Project } from "../types";

export const projectsData: Project[] = [
  // ==========================================================
  // PROJETOS ATIVOS
  // ==========================================================
{
    id: "plataforma-b2b-compras",
    title: {
      pt: "Transformando um processo de compras fragmentado em decisões mais rápidas e confiáveis",
      en: "Transforming a fragmented purchasing process into faster and more reliable decisions",
    },
    status: "active",
    embedUrl: "",
    description: {
      pt: "Como transformamos um processo de compras baseado em planilhas, ligações e WhatsApp em uma experiência centralizada, reduzindo esforço operacional e facilitando a tomada de decisão.",
      en: "How we transformed a purchasing process based on spreadsheets, phone calls, and WhatsApp into a centralized experience, reducing operational effort and improving decision-making.",
    },
    fullDescription: {
      pt: `
**CONFIDENCIALIDADE**
Nome, identidade visual e algumas informações foram adaptados para preservar a confidencialidade do projeto.

**VISÃO GERAL**
• **Projeto:** Plataforma B2B de compras e cotações.
• **Meu papel:** Product Designer (Discovery, arquitetura de informação, criação de fluxos, design de interface no Figma e testes de usabilidade).
• **Colaboração:** Trabalho em dupla com outra product designer nas fases de Discovery e de criação de telas. Validação de regras de negócio (fiscais) e de viabilidade técnica construídas a quatro mãos com a Engenharia.
• **Escopo:** Discovery, UX research, arquitetura da informação, fluxos, UX/UI e usabilidade.
• **Métodos de pesquisa:** Entrevistas qualitativas, Mapeamento de Jornada, Benchmarking, Testes de Usabilidade e Análise Comportamental Quantitativa (Microsoft Clarity).
• **Objetivo:** Centralizar a jornada de compras, reduzindo retrabalho e otimizando as decisões de negócio.
• **Handover:** Componentes e variáveis documentados no Figma para garantir a transição para o código sem atrito.

**CONTEXTO**
O processo de compras dependia de um ERP, de planilhas e de comunicação externa, o que tornava a operação lenta e difícil de auditar. A falta de precisão impactava diretamente a rentabilidade do negócio.

**PROBLEMA**
Identificamos cinco desafios críticos:
• Processo fragmentado entre múltiplas ferramentas.
• Dados descentralizados que impediam comparações precisas.
• Negociações externas sem rastreabilidade.
• Alto esforço manual e retrabalho constante.

**Impacto:** Ciclos de cotação longos, margem de erro maior e baixa visibilidade operacional.

**DISCOVERY E ESTRATÉGIA**
Realizamos uma análise aprofundada do sistema legado, mapeando as regras de negócio e as jornadas dos usuários.
• **Pesquisa:** Conduzi entrevistas e testes de usabilidade para validar as dores.
• **Estratégia:** Centralizar a jornada para reduzir a carga cognitiva dos compradores.

[IMG_SIDE:6]
**DESCONSTRUÇÃO DO LEGADO E REDUÇÃO DA CARGA COGNITIVA**
O sistema original era um exemplo clássico de débito técnico em interfaces de alta densidade. Ao analisar o legado, mapeei três ofensores principais que transformavam a tela em uma barreira operacional:
• **Contraste nulo e escala tipográfica:**Textos minúsculos e absoluta falta de variação de peso (font-weight). Valores monetários, códigos e descrições competiam pela mesma atenção, exigindo esforço extremo na leitura e na comparação de cotações.
• **Quebra de Grid e Alinhamento:** A ausência de um sistema de grid rígido e o desalinhamento das colunas financeiras (que deveriam ser numéricas e alinhadas à direita) destruíam os padrões de escaneabilidade em “F” ou “Z”. O olho do usuário não tinha um caminho lógico para seguir.
• **Sobrecarga Cognitiva:** Sem distinção clara entre áreas de navegação, ações primárias (escondidas e pequenas no rodapé) e dados críticos, tudo tinha o mesmo peso visual. O usuário simplesmente não sabia por onde começar, o que aumentou o tempo de tarefa (Time on Task) e a probabilidade de erros graves.

**SOLUÇÃO**
Chegando à solução visual, estruturamos um fluxo linear: Cotação → Negociação → Apuração → Ordem de Compra.
• **Hierarquia de Dados Tabulares:** Como a densidade de informação é alta, projetamos a tabela principal priorizando a escaneabilidade horizontal e vertical. O uso de pesos tipográficos (Bold para valores críticos e Regular para metadados secundários) guia instantaneamente o olhar do operador para discrepâncias de preço.
• **Cards de Metadados e Contexto:** Ao interagir com uma linha, a tela é redirecionada para o painel detalhado de cotação. Os cards foram estruturados (Cliente, Localização, Queda de Valores e Notas do Comprador) com espaçamentos baseados em múltiplos consistentes do grid, separando visualmente os blocos de ação primária e secundária.
• **Gestão de Estados e Feedback:** Cada componente de input e botão possui estados bem definidos (default, hover, active, disabled e loading) para mitigar erros de interpretação por parte do usuário durante a inserção de dados fiscais (NCM/EAN) e de cotações.
• **Iteração:**  hipótese inicial era um fluxo passo a passo para reduzir a carga cognitiva. Usamos a estratégia de iteração para telas organizadas por peso tipográfico.
[IMG:5]
[IMG:1]

**DECISÕES DE UI**
Para elevar o padrão visual e garantir a usabilidade em um sistema de alta densidade de dados, o processo de interface foi tratado com rigor técnico, focando em escalabilidade e redução da carga cognitiva:
• **Sistema de Grids e Espaçamento:**Estruturei toda a interface com uma base-grid rígida de 8px. Essa decisão matemática garantiu ritmo vertical e horizontal constantes, permitindo que tabelas complexas respirassem (uso intencional de White Space) sem perder a densidade de informação necessária à operação.
• **Data e Escala Tipográfica:** Em telas de cotação financeira, o design visual é uma ferramenta de governança. Apliquei uma hierarquia tipográfica estrita: uso de fontes monoespaçadas (tabular figures) para valores monetários (garantindo alinhamento perfeito das decimais) e pesos de fonte contrastantes (Bold vs Regular) para guiar o olhar do operador diretamente para as discrepâncias de preços e de *savings*.
• **Anatomia e Estados dos Componentes:** A arquitetura visual não se limitou ao “caminho feliz”. Cada elemento interativo (inputs de NCM, botões de ação primária/secundária e data tables) foi projetado e documentado com todos os seus estados lógicos (*default*, *hover*, *active*, *disabled* e *error*), utilizando Auto Layout avançado e variáveis no Figma para garantir um handover sem atritos com a Engenharia.
• **Acessibilidade (WCAG) e Semântica de Cores:** O sistema de feedback operacional (sucesso na ordem de compra, alertas de negociação, erros fiscais) não depende exclusivamente de cor. Integrei iconografia de apoio e testei exaustivamente os contrastes das paletas semânticas para garantir aprovação no nível AA do WCAG, mitigando erros de interpretação por daltônicos ou usuários com fadiga visual.

**RESULTADOS**
Métricas validadas via Microsoft Clarity (Heatmaps e Logs): Comparamos o comportamento no sistema legado com o novo fluxo. O redesign gerou ganhos de eficiência mensuráveis:
• **Aumento de Produtividade:** 60% menos tempo na jornada de compra e 62% menos cliques por tarefa, eliminando barreiras operacionais.
• **Redução de Erros (Impacto Direto):** A hierarquia visual clara reduziu drasticamente os tickets de suporte relacionados a erros de inserção fiscal, protegendo a rentabilidade da operação.


**OUTROS FLUXOS DO PRODUTO**

**Login e Registro**
Ponto de entrada unificado com roteamento seguro baseado no perfil do usuário (comprador, fornecedor ou administrador).
[IMG:0]

**Cadastro de fornecedores**
Estruturação do onboarding e organização das informações essenciais.
[IMG:4]

**Negociação e acompanhamento**
Comparação, renegociação e acompanhamento de propostas.
[IMG:2]

**Cadastro de produtos (SKU)**
Padronização do código, da unidade e da classificação fiscal (NCM/EAN) para manter a consistência da base de itens.
[IMG:3]


[AI_NOTE] **Uso de IA:** Utilizei IA generativa para acelerar a exploração de cenários, o refinamento de fluxos e a geração de alternativas durante o processo de design. As decisões finais permaneceram orientadas pela pesquisa, pelo contexto operacional e pelas necessidades dos usuários.

**APRENDIZADOS**
• Simplificar fluxos complexos gera mais valor do que adicionar novas funcionalidades.
• Decisões estratégicas dependem de dados organizados.
• Design é uma ferramenta de governança e de confiança operacional.
      `,
      en: `
**CONFIDENTIALITY**
Project name, visual identity, and selected information were adapted to preserve confidentiality.

**OVERVIEW**
• **Project:** B2B purchasing and quotation platform.
• **Role:** Product Designer (Discovery, information architecture, flow creation, UI design in Figma, and usability testing).
• **Collaboration:** Work in a team with another product designer during Discovery and UI creation phases. Validated business rules (tax) and technical feasibility hand-in-hand with Engineering.
• **Scope:** Discovery, UX research, information architecture, user flows, UX/UI, and usability.
• **Methods:** Qualitative Research (Interviews), Benchmarking, Usability Testing, and Quantitative Analysis (Microsoft Clarity).
• **Goal:** Centralize the purchasing journey, reducing rework and increasing process visibility.
• **Handover:** Components and variables documented in Figma to ensure a frictionless transition to code.


**CONTEXT**
The purchasing process relied on legacy ERP modules, spreadsheets, and external communication, making it slow and difficult to audit. Inaccuracies directly impacted profitability in a low-margin industry.


**PROBLEM**
Key challenges identified:
• Fragmented workflows across disconnected tools.
• Decentralized data hindering accurate supplier comparison.
• Negotiations occurring outside the system.
• Excessive manual rework and effort.

**Impact:** Longer quotation cycles, increased purchasing risk, and poor process visibility.

**DISCOVERY AND STRATEGY**
We mapped workflows and business rules to identify bottlenecks.
• **Research:** I conducted user research and usability testing to validate pain points.
• **Strategy:** Centralized the purchasing journey to reduce cognitive load for buyers.

[IMG_SIDE:6]
**LEGACY DECONSTRUCTION AND COGNITIVE LOAD REDUCTION**
The original system was a classic example of technical debt in high-density interfaces. Upon analyzing the legacy UI, I mapped three main offenders that turned the screen into an operational barrier:
• **Zero Contrast and Typographic Scale:** Tiny text and an absolute lack of font-weight variation. Monetary values, codes, and descriptions competed for the same attention, requiring extreme effort to read and compare quotations.
• **Broken Grid and Alignment:** The absence of a rigid grid system and misaligned financial columns (which should be tabular and right-aligned) destroyed standard “F” or “Z” scannability patterns. The user’s eye had no logical path to follow.
• **Cognitive Overload:** With no clear distinction between navigation areas, primary actions (hidden and small in the footer), and critical data, everything carried the same visual weight. Users didn’t know where to look first, drastically increasing Time on Task and the likelihood of critical errors.


**SOLUTION**
Moving to the visual solution, we structured a linear flow (Quotation → Negotiation → Evaluation → Purchase Order).
• **Tabular Data Hierarchy:** Given the high information density, we designed the main table prioritizing horizontal and vertical scannability. The use of typographic weights (Bold for critical values and Regular for secondary metadata) instantly guides the operator’s eye to price discrepancies.
• **Metadata and Context Cards:** Upon interacting with a row, the screen transitions to the detailed quotation panel. The cards were structured (Client, Location, Value Drops, and Buyer Notes) using spacings based on consistent grid multiples, visually separating primary and secondary action blocks.
• **State Management and Feedback:** Each input component and button has well-defined states (default, hover, active, disabled, and loading) to mitigate user interpretation errors when entering tax data (NCM/EAN) and quotations.
• **Iteration:** The initial hypothesis was a step-by-step flow to reduce cognitive load. We used an iteration strategy, organizing screens by typographic weight.

[IMG:5]
[IMG:1]

**UI DECISIONS**
To elevate the visual standard and ensure usability in a high-data-density system, the interface process was handled with technical rigor, focusing on scalability and cognitive load reduction:
• **Grid System and Spacing:** I structured the entire interface using a strict 8px base grid. This mathematical decision ensured a constant vertical and horizontal rhythm, allowing complex tables to breathe (intentional use of White Space) without losing the data density required for the operation.
• **Data and Typographic Scale:** In financial quotation screens, visual design is a governance tool. I applied a strict typographic hierarchy: using monospaced fonts (tabular figures) for monetary values (ensuring perfect decimal alignment) and contrasting font weights (Bold vs. Regular) to guide the operator’s eye directly to price discrepancies and savings.
• **Component Anatomy and States:** The visual architecture didn’t stop at the “happy path”. Every interactive element (NCM inputs, primary/secondary action buttons, and data tables) was designed and documented with all its logical states (default, hover, active, disabled, and error), using advanced Auto Layout and Figma variables to ensure frictionless handover to Engineering.
• **Accessibility (WCAG) and Color Semantics:** The operational feedback system (purchase order success, negotiation alerts, tax errors) does not rely exclusively on color. I integrated supporting iconography and exhaustively tested semantic palette contrasts to ensure WCAG AA compliance, mitigating interpretation errors by colorblind users or those with visual fatigue.

**RESULTS AND BUSINESS IMPACT**
Metrics validated via Microsoft Clarity (Heatmaps and Logs): We compared behavior in the legacy system with the new flow. The redesign generated measurable efficiency gains:
• **Increased Team Productivity:**  60% reduction in journey completion time and 62% fewer clicks per task, eliminating operational barriers.
• **Reduction in Purchasing Errors (Direct Impact):** Clear visual hierarchy drastically reduced support tickets related to tax insertion errors, protecting the operation’s profitability.

**OTHER PRODUCT FLOWS**

**Login and Registration**
Unified entry point with secure routing based on user profile (buyer, supplier, or administrator).
[IMG:0]

**Supplier Registration** 
Onboarding, structuring, and organization of essential information.
[IMG:4]

**Negotiation and Tracking**
Comparison, renegotiation, and tracking of proposals.
[IMG:2]

**Product (SKU) Registration**
Standardization of code, unit, and tax classification (NCM/EAN) to maintain a consistent item base.
[IMG:3]

[AI_NOTE] **AI Usage:** Generative AI was used to accelerate ideation, workflow exploration, and concept refinement. Final decisions remained driven by research insights, business constraints, and user needs.

**KEY LEARNINGS**
• Simplifying complex processes creates more value than adding features.
• Better decisions depend on well-organized information.
• Design acts as a tool for governance and operational trust.
      `,
    },
    imageUrl: "/b2b-cotacao.png",
    category: "UX/UI Design",
    tags: {
      pt: [
        "Sistemas complexos",
        "Tomada de decisão",
        "Experiência B2B",
        "Simplificação de processos",
        "Organização da informação",
        "Fluxos operacionais",
        "Rastreabilidade"
      ],
      en: [
        "Complex systems",
        "Decision making",
        "B2B Experience",
        "Process simplification",
        "Information organization",
        "Operational workflows",
        "Traceability"
      ]
    },
    technologies: {
      pt: ["Figma", "Miro", "IA Generativa"],
      en: ["Figma", "Miro", "Generative AI"]
    },
    methods: {
      pt: [
        "Discovery",
        "User Research",
        "Testes de Usabilidade",
        "Arquitetura da Informação",
        "Handoff"
      ],
      en: [
        "Discovery",
        "User Research",
        "Usability Testing",
        "Information Architecture",
        "Handoff"
      ]
    },
    principles: {
      pt: [
        "Redução de esforço mental",
        "Comparação facilitada",
        "Prevenção de erros",
        "Clareza das informações"
      ],
      en: [
        "Cognitive load reduction",
        "Easy comparison",
        "Error prevention",
        "Information clarity"
      ]
    },
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    gallery: [
      { url: "/b2b-login.png", title: { pt: "Portal de Acesso", en: "Access Portal" } },
      { url: "/b2b-cotacao.png", title: { pt: "Fluxo de Cotação e Comparação", en: "Quotation and Comparison Flow" } },
      { url: "/b2b-negociacao.png", title: { pt: "Interface de Negociação", en: "Negotiation Interface" } },
      { url: "/b2b-produtos-fornecedores.png", title: { pt: "Gestão de Preços e Fornecedores", en: "Price and Supplier Management" } },
      { url: "/b2b-cadastro-fornecedor.png", title: { pt: "Cadastro de Fornecedor", en: "Supplier Registration" } },
      { url: "/b2b-cotacoes-fornecedor.png", title: { pt: "Lista de Cotações - Visão Fornecedor", en: "Quotations List - Supplier View" } },
      { url: "/b2b-legado.png", title: { pt: "Interface Legada - Alta Carga Cognitiva", en: "Legacy Interface - High Cognitive Load" } }
    ],
  },
   {
    id: "smartsettlement-gestao-financeira",
    title: {
      pt: "Design sob restrição: como entregar resultados sem mexer na estrutura do sistema, e por que isso foi a decisão certa.",
      en: "Constrained design as strategy: maximum impact without breaking the system and the behavioral logic behind it.",
    },
    status: "active",
    embedUrl: "",
    description: {
      pt: "Gestão de Conciliação Financeira",
      en: "Financial Reconciliation Management",
    },
    fullDescription: {
      pt: `
**VISÃO GERAL**
• **Projeto:** Gestão de Conciliação Financeira.
• **Meu papel:** Product Designer.
• **Escopo:** UX Research, arquitetura da interface, prevenção de erros e usabilidade.
• **Métodos:** Análise Quantitativa (Métricas de Suporte) e Pesquisa Qualitativa (Entrevistas e Observação Contextual).
• **Objetivo:** Mitigar pagamentos duplicados e erros operacionais sob rigorosas restrições de engenharia.

**PROBLEMA**
Os operadores financeiros sofriam com a falta de retorno visual ao processar pagamentos. Como não sabiam se o sistema estava trabalhando, eles recarregavam a página, o que causava pagamentos em duplicidade e sobrecarregava o suporte.

**PESQUISA E ESTRATÉGIA**
Para entender o impacto real, analisei os chamados de suporte recebidos antes da mudança. Também conversei diretamente com os operadores financeiros para entender por que eles sentiam necessidade de clicar várias vezes no mesmo botão.
• **Insight:** O erro não era do usuário, mas da falta de clareza visual do sistema.
• **Decisão:** Em vez de redesenhar tudo, focamos em injeções pontuais de feedback visual e em criar pequenas barreiras (fricção) para evitar cliques acidentais em botões de exclusão.

**SOLUÇÃO**
• **Feedback visual:** Adicionamos barras de progresso e status de texto em tempo real sobre os elementos existentes.
• **Prevenção de erro:** Criamos uma etapa extra de confirmação antes de ações financeiras irreversíveis.

[IMG:0]
*Interface principal e hierarquia de ações.*

[IMG:1]
*Status de processamento em tempo real.*

[IMG:2]
*Confirmação de segurança para evitar erros.*

**RESULTADOS**
Comparamos os dados de chamados de suporte de antes e depois da mudança.
• Queda de 75% nos chamados de suporte.
• Fim das execuções financeiras acidentais.
• Depoimentos dos operadores confirmaram que o sistema ficou mais confiável e menos estressante.

**APRENDIZADOS**
• Às vezes, o design precisa de cirurgia, às vezes, apenas de curativo.
• Entender a rotina de quem usa o sistema vale mais que qualquer dashboard.
• Pequenas mudanças na interface podem salvar operações financeiras inteiras.
      `,
      en: `
**OVERVIEW**
• **Project:** Financial Reconciliation Management.
• **Role:** Product Designer.
• **Scope:** UX Research, interface architecture, error prevention, and usability.
• **Methods:** Quantitative Analysis (Support Tickets) and Qualitative Research (Interviews and Contextual Observation / Shadowing).
• **Goal:** Mitigate duplicate payments and operational errors under strict engineering constraints.

**PROBLEM**
Financial operators lacked visual feedback when processing batches. Uncertain if the system was working, they would reload the page, leading to duplicate payments and an overflow of support tickets.

**RESEARCH AND STRATEGY**
To understand the real impact, I analyzed support tickets from before the changes and interviewed the financial operators to learn why they felt forced to click buttons repeatedly.
• **Insight:** The error wasn't user-driven; it was caused by the lack of clear visual feedback.
• **Decision:** Instead of a full redesign, we focused on targeted visual feedback and adding friction to prevent accidental clicks on sensitive buttons.

**SOLUTION**
• **Visual feedback:** Added real-time progress bars and status text over existing elements.
• **Error prevention:** Added a confirmation step before irreversible financial actions.

[IMG:0]
*Main interface and action hierarchy.*

[IMG:1]
*Real-time processing status.*

[IMG:2]
*Safety confirmation to prevent errors.*

**RESULTS**
We compared support ticket data from before and after the intervention.
• 75% reduction in support tickets.
• Zero accidental financial executions.
• Operator feedback confirmed the system became more reliable and less stressful.

**KEY LEARNINGS**
• Sometimes design needs surgery; sometimes, it just needs a bandage.
• Understanding the user's daily routine is more valuable than any dashboard.
• Small interface changes can save entire financial operations.
      `,
    },
    imageUrl: "/smartsettlement-capa.png",
    category: "Fintech",
    tags: [
      "Tomada de decisão",
      "UX para finanças",
      "Prevenção de erros",
      "Visibilidade de sistema",
      "Pesquisa com usuário"
    ],
    technologies: ["Figma", "Arquitetura da Informação"],
    methods: [
      "Análise de chamados de suporte",
      "Entrevistas com usuários",
      "Mapeamento de fluxo de erros", "Handoff para engenharia"
    ],
    principles: [
      "Prevenção de erros",
      "Visibilidade do status",
      "Clareza visual"
    ],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    gallery: [
      {
        url: "/smartsettlement-dados.png",
        title: { pt: "Interface Principal", en: "Main Interface" },
      },
      {
        url: "/smartsettlement-loading.png",
        title: { pt: "Feedback de Sistema", en: "System Feedback" },
      },
      {
        url: "/smartsettlement-modal.png",
        title: { pt: "Prevenção de Erro", en: "Error Prevention" },
      },
      {
        url: "/smartsettlement-fluxo.png",
        title: { pt: "Documentação de Fluxo", en: "Flow Documentation" },
      },
    ],
  },

  {
    id: "compliance-kyc",
    title: {
      pt: "Visualização de risco como decisão de design: como estruturar informação para que analistas detectem fraudes mais rápido e com menos erro.",
      en: "Risk visualization as a design decision: structuring information to reduce false negatives in fraud detection.",
    },
    status: "active",
    embedUrl: "",
    description: {
      pt: "Plataforma de Inteligência em Compliance e Fraudes",
      en: "Compliance and Fraud Intelligence Platform",
    },
    fullDescription: {
      pt: `
**CONTEXTO**
Construção e evolução arquitetural de uma Plataforma de Inteligência em Compliance e PLD (Prevenção à Lavagem de Dinheiro). O objetivo de produto era capacitar analistas a aprovarem ou rejeitarem entidades jurídicas com alta precisão sob forte pressão regulatória.

**PROBLEMA**
Ferramentas fragmentadas exibiam dados textuais crus, obrigando o analista a fazer correlações cruzadas complexas de cabeça. O resultado prático era uma alta fadiga de decisão, elevando o risco e o custo milionário de se aprovar um falso negativo (Beneficiário Final ilícito).

**SOLUÇÃO**
• **Organograma Visual Societário:** Transformação das tabelas lineares de dados de empresas em fluxos visuais hierárquicos, facilitando a identificação imediata do dono (UBO).
• **Dashboards de Anomalias:** Criação de agrupamentos visuais evidenciando "Red Flags" e listas PEP logo no topo da interface.

**PROCESSO DE TRABALHO**
Fizemos um Discovery imersivo e mapeamento de fluxo. O processo focou fortemente em Arquitetura da Informação para alterar a exibição de dados.
Os insights extraídos da pesquisa foram:
• O problema principal não era a ausência do dado em si, mas a altíssima carga cognitiva necessária para estruturá-lo mentalmente.
• A aprovação automática via Inteligência Artificial não serve para o contexto legal, pois o compliance exige julgamento e responsabilidade humana perante ambiguidades da lei.
• Red Flags devem operar como prevenção direta de erros e devem prender a atenção visual antes que a fadiga mental do turno do analista se instale.

**RESULTADO**
Ao tratar a visualização hierárquica como alicerce do compliance, o sistema poupou horas semanais de investigação braçal. Reduziu drasticamente o tempo para identificação de fraudes, elevando significativamente o Task Success Rate da equipe operacional.
      `,
      en: `
**CONTEXT**
Construction and architectural evolution of a Compliance and AML (Anti-Money Laundering) Intelligence Platform. The product goal was to empower analysts to approve or reject legal entities with high precision under strong regulatory pressure.

**PROBLEM**
Fragmented tools displayed raw textual data, forcing the analyst to make complex cross-correlations in their head. The practical result was high decision fatigue, raising the risk and million-dollar cost of approving a false negative (illicit Ultimate Beneficial Owner).

**SOLUTION**
• **Visual Corporate Org Chart:** Transformation of linear company data tables into hierarchical visual flows, facilitating immediate identification of the owner (UBO).
• **Anomaly Dashboards:** Creation of visual groupings highlighting "Red Flags" and PEP lists right at the top of the interface.

**WORKING PROCESS**
We conducted immersive Discovery and flow mapping. The process focused heavily on Information Architecture to alter data display.
Insights extracted from the research were:
• The main problem was not the absence of the data itself, but the extremely high cognitive load required to structure it mentally.
• Automatic approval via Artificial Intelligence does not fit the legal context, as compliance requires human judgment and responsibility in the face of legal ambiguities.
• Red Flags must operate as direct error prevention and must capture visual attention before the analyst's shift mental fatigue sets in.

**RESULT**
By treating hierarchical visualization as the foundation of compliance, the system saved weekly hours of manual investigation. It drastically reduced the time required to identify fraud, significantly increasing the operational team's Task Success Rate.
      `,
    },
    imageUrl: "/compliance-capa.png",
    category: "UX/UI Design e Arquitetura",
    tags: [
      "Fadiga de decisão",
      "Hierarquia da informação",
      "UX orientada a riscos",
      "Da descoberta à arquitetura",
      "Design de AML(Anti-Money Laundering)",
      "Análise de dados/conformidade",
    ],
    technologies: [
      "Miro",
      "Mapeamento de Fluxos",
      "Arquitetura de Informação",
      "UX Research",
    ],
    methods: ["Benchmarking", "Discovery", "Mapeamento de Fluxos", "Arquitetura da Informação"],
    principles: [],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    gallery: [
      {
        url: "/compliance-dores-ganhos.png",
        title: { pt: "Discovery: Levantamento de dores e ganhos dos operadores.", en: "Discovery: Mapping operators' pains and gains." },
      },
      {
        url: "/compliance-personas.png",
        title: { pt: "Personas: Perfis detalhados do time de operação.", en: "Personas: Detailed profiles of the operations team." },
      },
      {
        url: "/compliance-hipoteses.png",
        title: { pt: "Hipóteses: Matriz de validação de problemas e soluções.", en: "Hypotheses: Validation matrix for problems and solutions." },
      },
      {
        url: "/compliance-arquitetura.png",
        title: { pt: "Arquitetura: Estrutura da plataforma e fases de entrega.", en: "Architecture: Platform structure and delivery phases." },
      },
      {
        url: "/compliance-fluxo-novo.png",
        title: { pt: "Novo Fluxo: Jornada otimizada para o analista.", en: "New Flow: Optimized journey for the analyst." },
      },
      {
        url: "/compliance-dashboard-geral.png",
        title: { pt: "Dashboard Geral: Monitoramento gerencial de volumes e cadastros.", en: "General Dashboard: Management monitoring of volumes and registrations." },
      },
      {
        url: "/compliance-visao-geral.png",
        title: { pt: "Visão Geral UI: Mapeamento de telas, componentes e estados.", en: "UI Overview: Mapping of screens, components, and states." },
      },
      {
        url: "/compliance-monitoramento.png",
        title: { pt: "Monitoramento: Dashboard core com Score de Risco e alertas PEP.", en: "Monitoring: Core dashboard with Risk Score and PEP alerts." },
      },
      {
        url: "/compliance-estrutura-societaria.png",
        title: { pt: "Estrutura Societária: Visualização hierárquica para identificação de UBO.", en: "Corporate Structure: Hierarchical visualization for UBO identification." },
      },
      {
        url: "/compliance-gestao-cadastros.png",
        title: { pt: "Gestão de Cadastros: Listagem inteligente com status visuais.", en: "Registration Management: Smart listing with visual statuses." },
      },
      {
        url: "/compliance-filtros.png",
        title: { pt: "Filtros Avançados: Otimização da busca e refinamento de dados.", en: "Advanced Filters: Search optimization and data refinement." },
      },
      {
        url: "/compliance-info-cnpj.png",
        title: { pt: "Informações CNPJ: Perfil detalhado organizado por módulos.", en: "CNPJ Information: Detailed profile organized by modules." },
      },
      {
        url: "/compliance-documentos.png",
        title: { pt: "Documentos: Interface de gestão e validação documental.", en: "Documents: Interface for document management and validation." },
      },
      {
        url: "/compliance-detalhes-doc.png",
        title: { pt: "Detalhes Documentais: Rastreabilidade e histórico de alterações.", en: "Document Details: Traceability and alteration history." },
      },
      {
        url: "/compliance-contratos.png",
        title: { pt: "Contratos: Organização de vigências e arquivos contratuais.", en: "Contracts: Organization of validities and contractual files." },
      },
    ],
  },
 {
    id: "healthdash-analise-usabilidade",
    title: {
      pt: "Quando a interface falha, o paciente paga o preço: como heurísticas de Nielsen se tornam questão de segurança operacional.",
      en: "Interface failure as clinical risk: applying behavioral heuristics to redesign a hospital nutrition system.",
    },
    status: "active",
    embedUrl: "",
    description: {
      pt: "HealthDash: Análise de Usabilidade Hospitalar",
      en: "HealthDash: Hospital Usability Analysis",
    },
    fullDescription: {
      pt: `
**CONTEXTO**
Melhoria de um sistema usado para gerenciar a nutrição de pacientes. O objetivo era adaptar a tela do tablet, usada pela equipe médica, para a realidade corrida e física dos corredores do hospital.

**PROBLEMA**
As janelas sobrepostas da tela escondiam informações importantes enquanto os profissionais andavam pelo hospital. A tela travada dificultava o uso e criava um ambiente perigoso, com alto risco de a equipe receitar a dieta errada para o paciente.

**SOLUÇÃO**
• **Botões maiores:** Aumentamos o tamanho dos botões para evitar cliques acidentais quando o profissional estivesse andando.
• **Telas limpas e diretas:** Trocamos as janelas pequenas (pop-ups) por telas inteiras, para que o teclado do tablet não escondesse o botão de salvar.
• **Informação dividida:** Separamos os dados dos pacientes por páginas, acabando com a necessidade de rolar a tela até o final e se perder.

**PROCESSO DE TRABALHO**
O foco da pesquisa foi entender os riscos físicos do uso do aplicativo.
Os principais aprendizados foram:
• O teclado nativo do tablet subia e escondia o botão de salvar a dieta, atrasando o trabalho.
• As nutricionistas seguravam o tablet com uma mão e digitavam com a outra enquanto andavam, exigindo botões muito fáceis de acertar.
• Rolar a tela longa para baixo fazia as profissionais clicarem em botões errados sem querer.

**RESULTADO**
Diminuímos drasticamente os cliques errados e o tempo gasto para receitar dietas. A mudança garantiu a segurança dos dados dos pacientes e provou que uma tela bem pensada ajuda a evitar erros de saúde graves.
      `,
      en: `
**CONTEXT**
Improvement of a system used to manage patient nutrition. The goal was to adapt the tablet screen, used by the medical team, to the fast-paced and physical reality of hospital corridors.

**PROBLEM**
Overlapping screen windows hid important information while professionals walked through the hospital. The freezing screens made it difficult to use and created a dangerous environment, with a high risk of the team prescribing the wrong diet for the patient.

**SOLUTION**
• **Larger buttons:** We increased button sizes to prevent accidental clicks when the professional was walking.
• **Clean and direct screens:** We replaced small windows (pop-ups) with full screens, so the tablet keyboard wouldn't hide the save button.
• **Divided information:** We separated patient data by pages, eliminating the need to scroll to the bottom and get lost.

**WORKING PROCESS**
The research focused on understanding the physical risks of using the application.
The main learnings were:
• The native tablet keyboard popped up and hid the save diet button, delaying work.
• Nutritionists held the tablet with one hand and typed with the other while walking, requiring very easy-to-hit buttons.
• Scrolling down a long screen made professionals accidentally click the wrong buttons.

**RESULT**
We drastically reduced wrong clicks and the time spent prescribing diets. The change ensured the security of patient data and proved that a well-designed screen helps prevent serious healthcare errors.
      `,
    },
    imageUrl: "/healthdash-capa.png",
    category: "UX Research",
    tags: [
      "Heuristic evaluation",
      "Ergonomics",
      "Error prevention",
      "Context of use",
      "Risk-driven design",
    ],
    technologies: ["Figma", "UX Research", "Accessibility", "UI Design"],
    methods: [],
    principles: [],
    client: "HealthDash",
    role: "UX/UI Designer",
    liveUrl: "#",
  },

  {
    id: "redesign-navegacao-notificacoes",
    title: {
      pt: "Quando comunicação interna se torna risco de compliance: como redesenhamos um sistema de notificações para ser juridicamente rastreável.",
      en: "Notification design as legal infrastructure: building traceability into internal communication systems.",
    },
    status: "active",
    embedUrl: "",
    description: {
      pt: "Redesign de Navegação e Sistema de Notificações",
      en: "Navigation Redesign and Notification System",
    },
    fullDescription: {
      pt: `
**CONTEXTO**
Refatoração da comunicação interna de mensagens regulatórias e atualizações de processos críticos. Era preciso internalizar o contato que antes ocorria por e-mails corporativos soltos para dentro do sistema nativo da empresa.

**PROBLEMA**
A comunicação pulverizada não possuía rastreabilidade documental. Se uma diretriz não fosse lida pelo usuário, o erro gerado na operação criava um passivo jurídico de "falta de aviso". O Header ineficiente era um sintoma dessa falha de governança.

**SOLUÇÃO**
• **Central de Inbox Familiar:** Réplica da experiência de Caixa de Entrada e Arquivados no Header.
• **Ações em Lote:** Inclusão de botões ergonômicos de "Marcar tudo como lido" mapeados para menor esforço motor.
• **Registro de Aceite Legal:** Vínculo automático no banco de dados entre a visualização da notificação e o log de usuário.

**PROCESSO DE TRABALHO**
Baseamos todo o redesign em Heurísticas Comportamentais consolidadas. O foco analítico evitou a invenção da roda e validou as soluções via princípios psicológicos (Leis de UX).
Os principais insights foram:
• Interrupções via pop-ups ou modais no login desenvolvem rapidamente o fenômeno de Banner Blindness (fechamento automático).
• Segundo a Lei de Jakob, replicar a interface de e-mails clássicos zera a curva de aprendizado para uso da feature.
• A Lei de Fitts guiou o tamanho e a proximidade das ações de limpeza de tela para reduzir atrito da usabilidade.

**RESULTADO**
A comunicação crítica ganhou padronização e o produto obteve rastreabilidade total (Legal infrastructure). A nova governança garantiu métricas de abertura rastreáveis, protegendo os passivos da empresa de forma orgânica.
      `,
      en: `
**CONTEXT**
Refactoring of internal communication of regulatory messages and critical process updates. It was necessary to internalize the contact that previously occurred via loose corporate emails into the company's native system.

**PROBLEM**
Pulverized communication lacked documented traceability. If a guideline was not read by the user, the error generated in the operation created a legal liability of "lack of notice". The inefficient Header was a symptom of this governance failure.

**SOLUTION**
• **Familiar Inbox Center:** Replica of the Inbox and Archived experience in the Header.
• **Batch Actions:** Inclusion of ergonomic "Mark all as read" buttons mapped for lower motor effort.
• **Legal Acceptance Record:** Automatic link in the database between notification view and user log.

**WORKING PROCESS**
We based the entire redesign on consolidated Behavioral Heuristics. The analytical focus avoided reinventing the wheel and validated solutions via psychological principles (UX Laws).
The main insights were:
• Interruptions via pop-ups or modals at login quickly develop the Banner Blindness phenomenon (automatic closing).
• According to Jakob's Law, replicating classical email interfaces zeroes the learning curve for feature use.
• Fitts's Law guided the size and proximity of screen-clearing actions to reduce usability friction.

**RESULT**
Critical communication gained standardization and the product obtained full traceability (Legal infrastructure). The new governance ensured traceable open metrics, organically protecting the company's liabilities.
      `,
    },
    imageUrl: "/notificacoes-capa.png",
    category: "UI Design",
    tags: [
      "Heutísticas de Nielsen",
      "Modelos mentais de UX",
      "Design de notificações e compliance",
      "Leis de UX e Fitts",
      "Leis de Jakob",
    ],
    technologies: ["Figma", "Design System", "Prototyping","Variables","Tokens", "Benchmarking"],
    methods: [],
    principles: [],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    gallery: [
      {
        url: "/notificacoes-header.png",
        title: { pt: "Redesign do Header com Heurísticas de Nielsen", en: "Header Redesign using Nielsen Heuristics" },
      },
      {
        url: "/notificacoes-gestor.png",
        title: { pt: "Painel do Gestor: Segmentação e Rastreabilidade", en: "Manager Panel: Segmentation and Traceability" },
      },
      {
        url: "/notificacoes-user.png",
        title: { pt: "Painel do Usuário: Inbox e Preferências", en: "User Panel: Inbox and Preferences" },
      },
    ],
  },

  {
    id: "evolucao-design-system",
    title: {
      pt: "Design System como alavanca: como uma arquitetura de tokens reduziu inconsistências e acelerou o ciclo de entrega do time.",
      en: "Design System as leverage: how a token architecture reduced visual debt and accelerated team delivery velocity.",
    },
    status: "active",
    embedUrl: "",
    description: {
      pt: "Evolução e Escalabilidade de Design System",
      en: "Design System Evolution and Scalability",
    },
    fullDescription: {
      pt: `
**CONTEXTO**
Projeto focado em melhorar a fundação e a esteira de design de um produto existente. O desafio surgiu à medida que o time interno escalava e necessitava de uma base visual sólida para guiar desenvolvedores e novos designers.

**PROBLEMA**
A falta de uma arquitetura matemática nos componentes gerava inconsistências extremas. Desenvolvedores precisavam reconstruir componentes básicos e aprovações de design lidavam com constante dívida visual, criando atritos operacionais e estagnando o go-to-market.

**SOLUÇÃO**
• **Implementação de Figma Variables:** Criação de lógicas estritas e matemáticas para tipografia, cor e espaçamento.
• **Tokenização Semântica:** Separação entre cor bruta e cor de intenção funcional (ex: mudar o valor do erro não altera o vermelho geral da marca).
• **Biblioteca de Documentação:** Diretrizes de UX e anatomia comportamental acopladas a cada componente publicado.

**PROCESSO DE TRABALHO**
Atuei ativamente aplicando metodologias de Design System em conjunto com outra Designer e sempre em contato com a equipe de desenvolvimento para saber viabilidades e entender tipos de linguagem que serão usadas. Focamos no alinhamento entre as especificações de tela e as variáveis CSS utilizadas pelo Front-end.
Os insights críticos que guiaram a evolução foram:
• Tokens isolados não funcionam sem adoção cultural. Era preciso criar rituais de mentoria técnica para o time entender o uso avançado.
• A separação semântica blindou o sistema contra quebras durante alterações globais (como temas escuros).
• Refatorar todo o legado de uma vez congelaria a squad. Optamos por criar as fundações para novas interfaces e tratar os componentes antigos como "débito técnico" de longo prazo.

**RESULTADO**
Escalabilidade e velocidade exponencial. A fundação de Tokens solidificou a ponte entre Design e Front-end, resultando em prototipações extremamente rápidas e reduzindo quase a zero os atritos sobre especificações de tela nas rotinas da equipe.
      `,
      en: `
**CONTEXT**
Project focused on improving the foundation and design pipeline of an existing product. The challenge arose as the internal team scaled and needed a solid visual base to guide developers and new designers.

**PROBLEM**
The lack of mathematical architecture in components generated extreme inconsistencies. Developers had to rebuild basic components and design approvals dealt with constant visual debt, creating operational friction and stagnating go-to-market.

**SOLUTION**
• **Implementation of Figma Variables:** Creation of strict, mathematical logic for typography, color, and spacing.
• **Semantic Tokenization:** Separation between raw color and functional intention color (e.g., changing the error value does not alter the brand's general red).
• **Documentation Library:** UX guidelines and behavioral anatomy coupled with each published component.

**WORKING PROCESS**
I actively applied Design System methodologies together with another designer, always in contact with the development team to understand feasibility and the types of languages ​​that would be used. We focused on aligning screen specifications with the CSS variables used by the front-end.
The critical insights that guided the evolution were:
• Isolated tokens do not work without cultural adoption. It was necessary to create technical mentoring rituals for the team to understand advanced use.
• Semantic separation shielded the system against breaks during global changes (such as dark themes).
• Refactoring all legacy at once would freeze the squad. We opted to create foundations for new interfaces and treat old components as long-term "Tech Debt".

**RESULT**
Exponential scalability and velocity. The Token foundation solidified the bridge between Design and Front-end, resulting in extremely rapid prototyping and reducing friction over screen specifications in team routines to almost zero.
      `,
    },
    imageUrl: "/ds-capa.png",
    category: "Design System",
    tags: [
      "Design System",
      "Arquitetura de Tokens",
      "Escalabilidade de Design",
      "Alavancar equipe",
      "Estratégia de documentação",
    ],
    technologies: ["Figma", "Tokens", "Documentation", "Mentorship"],
    methods: [],
    principles: [],
    client: "Confidencial",
    role: "Product Designer / UI / Design system",
    liveUrl: "#",
    gallery: [
      {
        url: "/ds-cores.png",
        title: { pt: "Inventário de Cores Primitivas e Escalas", en: "Primitive Colors and Scales Inventory" },
      },
      {
        url: "/ds-documentacao.png",
        title: { pt: "Documentação Funcional: Regras de UX e Anatomia de Componentes", en: "Functional Documentation: UX Rules and Component Anatomy" },
      },
    ],
  },

  {
    id: "prevmax-previdencia",
    title: {
      pt: "Confiança como variável de design: como traduzimos um produto financeiro complexo para um público de baixo letramento digital.",
      en: "Trust as a design variable: making a complex financial product accessible to low digital-literacy users.",
    },
    status: "active",
    embedUrl:
      "https://embed.figma.com/proto/UowipTJL4ggqVwP828F6Eb/Portf%C3%B3lio-PLATAFORMA?page-id=0%3A1&node-id=4-4108&viewport=575%2C347%2C0.06&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A4094&embed-host=share",
    description: {
      pt: "Plataforma Digital de Gestão de Previdência Privada",
      en: "Digital Private Pension Management Platform",
    },
    fullDescription: {
      pt: `
**VISÃO GERAL**
• **Projeto:** Plataforma Digital de Gestão de Previdência Privada.
• **Meu papel:** Product Designer.
• **Escopo:** Pesquisa contextual, arquitetura da informação, UI/UX, criação de componentes e testes de validação.
• **Métodos:** Pesquisa de Imersão em Domínio Regulatório, Entrevistas Estruturadas, Benchmarking e Mapeamento de Fluxos.
• **Objetivo:** Reduzir a fricção na adesão e tornar dados financeiros/regulatórios acessíveis sem simplificação indevida.

**CONTEXTO**
A plataforma centraliza o ciclo de vida previdenciário (adesão, gestão cadastral, rentabilidade e portabilidade) para participantes e beneficiários. O desafio central era o cenário regulatório de alta complexidade (leis de tributação, validação FATCA, Pessoa Politicamente Exposta), que precisava ser exposto de forma ética e clara para um público com níveis variados de familiaridade digital.

**PROBLEMA**
A versão anterior comprometia a operação da entidade gestora e frustrava os usuários finais:
• Fluxos fragmentados sem indicação de progresso, causando alto abandono.
• Terminologia regulatória abrupta e sem contexto.
• Ausência de hierarquia visual nos painéis financeiros (dificultando a leitura de saldo e rentabilidade).
• Muitas empresas faziam de modo muito manual, o que gerava muitos erros e sobrecarga de atendimento.

**MÉTODOS DE PESQUISA E PROCESSO DE DESIGN**
Devido ao alto rigor regulatório, a tomada de decisão dependeu de uma imersão profunda antes do design visual:
• **Imersão no Domínio:** Leitura sistemática de legislações e documentos institucionais para diferenciar o que era "exigência legal inegociável" do que era apenas "limitação de sistema legado".
• **Entrevistas Estruturadas:** Conversas com especialistas do domínio e stakeholders com perfil espelhado ao usuário final, mapeando atalhos operacionais e jargões que causavam ansiedade.
• **Benchmarking:** Análise de plataformas de gestão de benefícios para referenciar a apresentação de múltiplas variáveis financeiras.
• **Mapeamento de Fluxos:** Criação da arquitetura de informação detalhada para todas as rotas (Adesão, Cadastro, Empréstimos e Portabilidade), identificando gargalos lógicos.

**SOLUÇÃO**
• **Arquitetura de Componentes:** Invertemos o processo estabelecendo uma biblioteca modular primeiro (estados de input, abas, cards de dados), garantindo escalabilidade para a engenharia.
• **Adesão Progressiva:** Fluxo de entrada passo a passo com validação de dados pré-carregados, eliminando formulários intimidadantes.
• **Gestão Regulatória Guiada:** Inclusão de textos auxiliares diretamente na interface para explicar obrigações legais (como PEP e FATCA), devolvendo a segurança ao usuário.
• **Dashboard Financeiro Hierárquico:** Visualização focada no saldo e separação clara entre a contribuição do indivíduo e da empresa, com gráficos de rentabilidade facilmente alternáveis.

**RESULTADOS**
• Entrega de um protótipo navegável validado cobrindo todos os módulos vitais do ecossistema.
• Aprovação com stakeholders confirmou a eficácia na compreensão de dados sensíveis e na nova disposição do cadastro bancário.
• Adoção da nova arquitetura projeta uma redução agressiva na dependência de centrais de atendimento humano.

**APRENDIZADOS**
• Em sistemas altamente regulados, simplificar não significa omitir informações legais. O design atua como um facilitador de leitura e confiança.
• A imersão técnica no domínio do negócio evita quebras de compliance na interface.
• Construir o sistema de componentes antes das telas reduz drasticamente o débito técnico da equipe de tecnologia.
      `,
      en: `
**OVERVIEW**
• **Project:** Digital Private Pension Management Platform.
• **Role:** Product Designer.
• **Scope:** Contextual research, information architecture, UI/UX, component creation, and validation testing.
• **Methods:** Regulatory Domain Immersion, Structured Interviews, Benchmarking, and Flow Mapping.
• **Goal:** Reduce friction during onboarding and make financial/regulatory data accessible without undue simplification.

**CONTEXT**
The platform centralizes the pension lifecycle (enrollment, registration management, profitability, and portability) for participants and beneficiaries. The core challenge was the highly complex regulatory landscape (tax laws, FATCA validation, Politically Exposed Person rules), which needed to be presented ethically and clearly to an audience with varying digital literacy.

**PROBLEM**
The legacy version compromised the managing entity's operation and frustrated end users:
• Fragmented flows with no progress indication, causing high drop-off rates.
• Abrupt regulatory terminology lacking context.
• Poor visual hierarchy in financial dashboards (making balance and profitability hard to read).
• Many companies did it in a very manual way, which generated many errors and overloaded customer service.

**RESEARCH METHODS AND DESIGN PROCESS**
Due to strict regulatory requirements, decision-making required deep immersion before any visual design began:
• **Domain Immersion:** Systematic reading of legislation and institutional documents to differentiate "non-negotiable legal requirements" from mere "legacy system limitations."
• **Structured Interviews:** Conversations with domain experts and stakeholders mirroring the end-user profile to map operational shortcuts and anxiety-inducing jargon.
• **Benchmarking:** Analysis of benefit management platforms to reference the presentation of complex financial variables.
• **Flow Mapping:** Creation of detailed information architecture for all routes (Enrollment, Registration, Loans, Portability), identifying logical bottlenecks.

**SOLUTION**
• **Component Architecture:** We inverted the process by establishing a modular library first (input states, tabs, data cards), ensuring scalability for engineering.
• **Progressive Enrollment:** Step-by-step onboarding flow leveraging pre-loaded data validation, eliminating intimidating forms.
• **Guided Regulatory Management:** Inclusion of helper texts directly in the interface to explain legal obligations (such as PEP and FATCA), restoring user confidence.
• **Hierarchical Financial Dashboard:** Visualization focused on the core balance, clearly separating individual and company contributions, with easily toggleable profitability charts.

**RESULTS**
• Delivered a validated interactive prototype covering all vital modules of the ecosystem.
• Stakeholder approval confirmed effectiveness in understanding sensitive data and the new bank registration layout.
• Adoption of the new architecture projects an aggressive reduction in dependence on human call centers.

**KEY LEARNINGS**
• In highly regulated systems, simplifying does not mean omitting legal information. Design acts as a facilitator of readability and trust.
• Technical immersion in the business domain prevents compliance breaches in the interface.
• Building the component system before designing screens drastically reduces the tech team's technical debt.
      `,
    },
    imageUrl: "/prevmax-capa.png",
    category: "UX Strategy",
    tags: [
      "Pesquisa de UX",
      "Sistemas Complexos",
      "Design de Compliance",
      "Redução de Carga Cognitiva",
      "B2B SaaS",
    ],
    technologies: ["Figma", "Prototyping", "Component Architecture"],
    methods: [
      "Imersão em Domínio (Domain Immersion)",
      "Entrevistas Estruturadas (Interviews)",
      "Benchmarking",
      "Mapeamento de Fluxos (Flow Mapping)"
    ],
    principles: [
      "Acessibilidade da Informação",
      "Prevenção de Erros",
      "Transparência Regulatória"
    ],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    gallery: [
      {
        url: "/prevmax-processo.png",
        title: { pt: "Processo de Design e Metodologia", en: "Design Process and Methodology" },
      },
      {
        url: "/prevmax-benchmark.png",
        title: { pt: "Análise de Mercado (Benchmarking)", en: "Market Analysis (Benchmarking)" },
      },
      {
        url: "/prevmax-research.png",
        title: { pt: "Personas e Mapeamento de Histórias (User Story Map)", en: "Personas and User Story Mapping" },
      },
      {
        url: "/prevmax-flow.png",
        title: { pt: "Fluxo do Usuário e Arquitetura de Informação", en: "User Flow and Information Architecture" },
      },
      {
        url: "/prevmax-styleguide.png",
        title: { pt: "Style Guide: Tipografia e Cores Acessíveis", en: "Style Guide: Accessible Typography and Colors" },
      },
      {
        url: "/prevmax-components.png",
        title: { pt: "Biblioteca de Componentes e UI Kit", en: "Component Library and UI Kit" },
      },
    ],
  },

  // ========================================================================
  // PROJETOS FUTUROS (EM BREVE)
  // ========================================================================

  {
    id: "gestao-buffet",
    title: {
      pt: "Gestão de Buffet: Interface para configuração de layouts de rampas e gestão de recipientes gastronômicos.",
      en: "Buffet Management System: Interface for configuring ramp layouts and managing gastronomic containers.",
    },
    status: "coming-soon",
    description: {
      pt: "Sistema de Gestão de Buffet",
      en: "Buffet Management System",
    },
    imageUrl: "",
    category: "Tablet App",
    tags: ["UX Strategy", "User Flow"],
    technologies: [],
    methods: [],
    principles: [],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    fullDescription: { pt: "", en: "" },
  },
  {
    id: "sistema-pesagem",
    title: {
      pt: "Reserva de Restaurantes: Solução para agendamento de reservas e otimização de filas em restaurante.",
      en: "Restaurant Booking: Solution for scheduling reservations and optimizing restaurant queues.",
    },
    status: "coming-soon",
    description: {
      pt: "App de reserva de restaurante",
      en: "Restaurant Booking App",
    },
    imageUrl: "",
    category: "UI",
    tags: ["Research", "UX/UI Design"],
    technologies: [],
    methods: [],
    principles: [],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    fullDescription: { pt: "", en: "" },
  },
  {
    id: "dashboard-analytics",
    title: {
      pt: "Dashboard Analytics: Painel de controle para esteira de sessão e CNAB.",
      en: "Dashboard Analytics: Control panel for session and CNAB pipeline.",
    },
    status: "coming-soon",
    description: {
      pt: "Esteira de sessão e CNAB",
      en: "Session and CNAB Pipeline",
    },
    imageUrl: "",
    category: "UX/UI Design",
    tags: ["Dashboard", "UI Design"],
    technologies: [],
    methods: [],
    principles: [],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    fullDescription: { pt: "", en: "" },
  },
];
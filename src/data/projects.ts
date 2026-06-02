import { Project } from "../types";

export const projectsData: Project[] = [
  // ========================================================================
  // PROJETOS ATIVOS
  // ========================================================================
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
• **Meu papel:** Product Designer (Atuação end-to-end).
• **Escopo:** Discovery, user research, arquitetura da informação, fluxos, UX/UI e usabilidade.
• **Objetivo:** Centralizar a jornada de compras, reduzindo retrabalho e otimizando decisões de negócio.


**CONTEXTO**
O processo de compras dependia de ERP, planilhas e comunicação externa, tornando a operação lenta e difícil de auditar. A falta de precisão impactava diretamente a rentabilidade do negócio.

**PROBLEMA**
Identificamos cinco desafios críticos:
• Processo fragmentado entre múltiplas ferramentas.
• Dados descentralizados que impediam comparações precisas.
• Negociações externas sem rastreabilidade.
• Alto esforço manual e retrabalho constante.

**Impacto:** Ciclos de cotação longos, maior margem de erro e baixa visibilidade operacional.

**DISCOVERY E ESTRATÉGIA**
Realizamos uma análise profunda do sistema legado, mapeando regras de negócio e jornadas de usuários.
• **Pesquisa:** Conduzi entrevistas e testes de usabilidade para validar as dores.
• **Estratégia:** Centralizar a jornada para reduzir a carga cognitiva dos compradores.

**SOLUÇÃO**
• **Jornada Linear:** Fluxo unificado (Cotação → Negociação → Apuração → Ordem de Compra).
• **Centralização:** Preços, histórico e negociações em um único contexto.
• **Governança:** Rastreabilidade integrada ao banco de dados, eliminando processos paralelos.
• **Suporte à Decisão:** Hierarquia visual desenhada para facilitar análises complexas.

[IMG:1]

**RESULTADOS**
O redesign gerou ganhos de eficiência mensuráveis:
• 60% menos tempo na jornada de compra.
• 88% menos espera operacional.
• 62% menos cliques por tarefa.
• 88% mais eficiência na seleção de períodos.
• Eliminação total de modais de interrupção.

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

**Gestão de preços**
Organização de tabelas comerciais, regiões e regras operacionais.
[IMG:3]


[AI_NOTE] **Uso de IA:** Utilizei IA generativa para acelerar exploração de cenários, refinamento de fluxos e geração de alternativas durante o processo de design. As decisões finais permaneceram orientadas por pesquisa, contexto operacional e necessidades dos usuários.

**APRENDIZADOS**
• Simplificar fluxos complexos gera mais valor que adicionar novas funcionalidades.
• Decisões estratégicas dependem de dados organizados.
• Design é ferramenta de governança e confiança operacional.
      `,
      en: `
**CONFIDENTIALITY**
Project name, visual identity, and selected information were adapted to preserve confidentiality.

**OVERVIEW**
• **Project:** B2B purchasing and quotation platform.
• **Role:** Product Designer (End-to-end ownership).
• **Scope:** Discovery, user research, information architecture, user flows, UX/UI, and usability.
• **Goal:** Centralize the purchasing journey, reducing rework and increasing process visibility.

[IMG:1]

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

**SOLUTION**
• **Streamlined Workflow:** Unified process (Quotation → Negotiation → Evaluation → Purchase Order).
• **Centralization:** Pricing, history, and negotiations accessible in one context.
• **Traceability:** Integrated audit trails, eliminating the need for parallel manual processes.
• **Decision Support:** Designed information hierarchy to facilitate high-impact financial comparisons.

[IMG:1]

**RESULTS**
Our redesign significantly improved operational metrics:
• 60% reduction in journey completion time.
• 88% reduction in operational waiting time.
• 62% reduction in clicks.
• 88% efficiency gain in period selection.
• Total elimination of interruptive modals.

[AI_NOTE] **AI Usage:** Generative AI was used to accelerate ideation, workflow exploration, and concept refinement. Final decisions remained driven by research insights, business constraints, and user needs.

**KEY LEARNINGS**
• Simplifying complex processes creates more value than adding features.
• Better decisions depend on well-organized information.
• Design acts as a tool for governance and operational trust.
      `,
    },
    imageUrl: "/b2b-cotacao.png",
    category: "UX/UI Design",
    tags: [
      "Sistemas complexos",
      "Tomada de decisão",
      "Experiência B2B",
      "Simplificação de processos",
      "Organização da informação",
      "Fluxos operacionais",
      "Rastreabilidade"
    ],
    technologies: ["Figma", "Miro", "IA Generativa"],
    methods: [
      "Discovery",
      "User Research",
      "Usability Testing",
      "Arquitetura da Informação",
      "Handoff"
    ],
    principles: [
      "Redução de esforço mental",
      "Comparação facilitada",
      "Prevenção de erros",
      "Clareza das informações"
    ],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    gallery: [
      { url: "/b2b-login.png", title: { pt: "Portal de Acesso", en: "Access Portal" } },
      { url: "/b2b-cotacao.png", title: { pt: "Fluxo de Cotação e Comparação", en: "Quotation and Comparison Flow" } },
      { url: "/b2b-negociacao.png", title: { pt: "Interface de Negociação", en: "Negotiation Interface" } },
      { url: "/b2b-produtos-fornecedores.png", title: { pt: "Gestão de Preços e Fornecedores", en: "Price and Supplier Management" } },
      { url: "/b2b-cadastro-fornecedor.png", title: { pt: "Cadastro de Fornecedor", en: "Supplier Registration" } }
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
Fui até o hospital observar o uso real do sistema por nutricionistas. O foco da pesquisa foi entender os riscos físicos do uso do aplicativo.
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
I went to the hospital to observe the real use of the system by nutritionists. The research focused on understanding the physical risks of using the application.
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
    id: "smartsettlement-gestao-financeira",
    title: {
      pt: "Design sob restrição: como entregar impacto máximo sem tocar no Design System, e por que isso é a decisão certa.",
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
**CONTEXTO**
Necessidade crítica de mitigar riscos operacionais no sistema legado de Gestão de Conciliação Financeira. O projeto exigia intervenção rápida na interface para operadores financeiros, operando sob uma restrição técnica severa de engenharia que nos proibia de refatorar o Design System core da tabela.

**PROBLEMA**
Os operadores sofriam de "cegueira operacional", pois o sistema não fornecia retorno visual durante o processamento de grandes lotes. A incerteza gerava recarregamentos de página que resultavam em duplo processamento financeiro e em uma enxurrada de chamados para o time de suporte.

**SOLUÇÃO**
• **Visibilidade de Status:** Injeção de barras de progresso contínuas e status em texto apenas nas camadas sobrepostas (badges nativos do legado) para não atrasar as releases.
• **Prevenção de Erros (Fricção):** Inserção de modais de confirmação momentos antes de ações financeiras irreversíveis.

**PROCESSO DE TRABALHO**
Adotamos a metodologia Lean UX para entregar valor real focando no "Delivery under constraint". A pesquisa focou no mapeamento do fluxo de erro e métricas de tickets.
Os principais insights foram:
• A refatoração completa com novos componentes interativos era tecnicamente inviável e atrasaria o go-to-market.
• A insegurança visual gerava um modelo mental de "clicar novamente para garantir", o que causava o erro primário do sistema.
• A fricção cognitiva deliberada em botões de exclusão quebra o automatismo motor do usuário e salva a operação financeira.

**RESULTADO**
Intervenção visual enxuta que solucionou o vácuo de informação. Houve uma queda vertiginosa de 75% nos tickets de suporte e zeramos a ocorrência de execuções financeiras acidentais, provando o alto impacto de decisões alinhadas à capacidade de desenvolvimento.
      `,
      en: `
**CONTEXT**
Critical need to mitigate operational risks in the legacy Financial Reconciliation Management system. The project required rapid interface intervention for financial operators, operating under a severe technical engineering constraint that forbade us from refactoring the table's core Design System.

**PROBLEM**
Operators suffered from "operational blindness" because the system provided no visual feedback when processing large batches. The uncertainty led to page reloads that resulted in double financial processing and a flood of calls to the support team.

**SOLUTION**
• **Status Visibility:** Injection of continuous progress bars and text status only on overlapping layers (legacy native badges) to avoid delaying releases.
• **Error Prevention (Friction):** Insertion of confirmation modals moments before irreversible financial actions.

**WORKING PROCESS**
We adopted the Lean UX methodology to deliver real value focusing on "Delivery under constraint". Research focused on mapping the error flow with support ticket metrics.
The main insights were:
• Complete refactoring with new interactive components was technically unfeasible and would delay go-to-market.
• Visual insecurity generated a mental model of "clicking again to make sure", which caused the primary system error.
• Deliberate cognitive friction on deletion buttons breaks the user's motor automatism and saves the financial operation.

**RESULT**
Lean visual intervention that solved the information vacuum. There was a staggering 75% drop in support tickets and we zeroed out the occurrence of accidental financial executions, proving the high impact of decisions aligned with development capabilities.
      `,
    },
    imageUrl: "/smartsettlement-capa.png",
    category: "Fintech",
    tags: [
      "Decisions",
      "Lean UX",
      "Delivery under constraint",
      "System visibility",
      "Error prevention",
    ],
    technologies: ["Figma", "Redlining", "Information Architecture", "Lean UX"],
    methods: [],
    principles: [],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    gallery: [
      {
        url: "/smartsettlement-dados.png",
        title: { pt: "Interface Principal: Hierarquia de dados e ações rápidas.", en: "Main Interface: Data hierarchy and quick actions." },
      },
      {
        url: "/smartsettlement-loading.png",
        title: { pt: "Feedback de Sistema: Visibilidade do status de processamento.", en: "System Feedback: Processing status visibility." },
      },
      {
        url: "/smartsettlement-modal.png",
        title: { pt: "Prevenção de Erro: Modal de confirmação para ações críticas.", en: "Error Prevention: Confirmation modal for critical actions." },
      },
      {
        url: "/smartsettlement-fluxo.png",
        title: { pt: "Documentação de Fluxo: Mapeamento de interações e estados.", en: "Flow Documentation: Mapping of interactions and states." },
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
      "Decision fatigue",
      "Information hierarchy",
      "Risk-driven UX",
      "Discovery to architecture",
      "AML/compliance design",
    ],
    technologies: [
      "Miro",
      "Mapeamento de Fluxos",
      "Arquitetura de Informação",
      "UX Research",
    ],
    methods: [],
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
      "Behavioral heuristics",
      "Mental models",
      "Compliance by design",
      "Fitts's Law",
      "Jakob's Law",
    ],
    technologies: ["Figma", "Design System", "Prototyping"],
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
      pt: "Design Ops como alavanca: como uma arquitetura de tokens reduziu inconsistências e acelerou o ciclo de entrega do time.",
      en: "Design Ops as leverage: how a token architecture reduced visual debt and accelerated team delivery velocity.",
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
Atuei ativamente aplicando metodologias de Design Ops em Pair Design com a equipe residente. Focamos no alinhamento entre as especificações de tela e as variáveis CSS utilizadas pelo Front-end.
Os insights críticos que guiaram a evolução foram:
• Tokens isolados não funcionam sem adoção cultural. Era preciso criar rituais de mentoria técnica para o time entender o uso avançado.
• A separação semântica blindou o sistema contra quebras durante alterações globais (como temas escuros).
• Refatorar todo o legado de uma vez congelaria a squad. Optamos por criar as fundações para novas interfaces e tratar os componentes antigos como "Tech Debt" de longo prazo.

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
I actively applied Design Ops methodologies in Pair Design with the resident team. We focused on aligning screen specifications with CSS variables used by Front-end.
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
      "Design Ops",
      "Token architecture",
      "Scalability",
      "Team leverage",
      "Documentation strategy",
    ],
    technologies: ["Figma", "Tokens", "Documentation", "Mentorship"],
    methods: [],
    principles: [],
    client: "Confidencial",
    role: "Product Designer / UI",
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
      pt: "Confiança como variável de design: como traduzimos um produto financeiro de alta ansiedade para um público de baixo letramento digital.",
      en: "Trust as a design variable: making a high-anxiety financial product accessible to low digital-literacy users.",
    },
    status: "active",
    embedUrl:
      "https://embed.figma.com/proto/UowipTJL4ggqVwP828F6Eb/Portf%C3%B3lio-PLATAFORMA?page-id=0%3A1&node-id=4-4108&viewport=575%2C347%2C0.06&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A4094&embed-host=share",
    description: {
      pt: "Sistema de Previdência Complementar (Portal do Participante)",
      en: "Complementary Pension System (Participant Portal)",
    },
    fullDescription: {
      pt: `
**CONTEXTO**
Design do Portal do Participante de um Fundo de Previdência focado no público idoso. O sistema precisava lidar com regulamentos de altíssima complexidade atuarial lidando com as rendas e o futuro financeiro de centenas de pessoas.

**PROBLEMA**
Os usuários formados na maioria por pessoas 60+ com baixo letramento digital (Low digital literacy) possuíam alta fricção cognitiva para interpretar jargões financeiros nas jornadas online. A frustração gerava o abandono digital e a superlotação nos atendimentos presenciais e de telemarketing.

**SOLUÇÃO**
• **Simuladores de Impacto Linear:** Transformação de regras complexas em fluxos de simulação amigáveis ("O que acontece se eu me aposentar agora?").
• **Acessibilidade Institucional:** Componentes redesenhados focando nos critérios rigorosos da WCAG (contraste e tipografia legível), mantendo as exigências de identidade visual da marca.
• **Limitação Responsiva Estratégica:** Aplicação de fricção positiva direcionando o usuário ao uso do computador ou tablet ao invés de tentar espremer minúcias e tabelas de alta densidade no celular.

**PROCESSO DE TRABALHO**
O Research envolveu entrevistas quantitativas e a imersão completa na leitura dos pesados Manuais Legais do fundo de pensão. Conduzimos testes com a base de usuários finais para validar as lógicas financeiras.
Os principais insights foram:
• A complexidade do cruzamento de regras matemáticas deve ser absorvida pela máquina, não pelo cérebro do idoso.
• Gráficos absurdamente interativos e "tecnológicos" sobre portfólio paralisavam e assustavam os usuários na etapa de testes. A conversão exigia a troca por tabelas nominais cruas e explicações literais.
• O design financeiro exige premissas de Trust e Safety; componentes pequenos passavam a sensação visual de "golpe digital".

**RESULTADO**
O portal traduziu a burocracia pesada em autonomia para o público idoso, mitigando a ansiedade natural inerente a produtos monetários. Com maior adoção, foi projetada uma queda de 65% na dependência e volume de chamados das centrais de atendimento humano.
      `,
      en: `
**CONTEXT**
Design of the Participant Portal of a Pension Fund focused on the elderly audience. The system had to handle actuarial regulations of extremely high complexity dealing with the income and financial future of hundreds of people.

**PROBLEM**
Users, consisting mostly of 60+ individuals with low digital literacy, experienced high cognitive friction when trying to interpret financial jargon in online journeys. Frustration led to digital abandonment and overcrowding in face-to-face and telemarketing services.

**SOLUTION**
• **Linear Impact Simulators:** Transformation of complex rules into user-friendly simulation flows ("What happens if I retire now?").
• **Institutional Accessibility:** Redesigned components focusing on strict WCAG criteria (contrast and legible typography), maintaining the brand's visual identity requirements.
• **Strategic Responsive Limitation:** Application of positive friction directing the user to use a computer or tablet instead of trying to squeeze minutiae and high-density tables onto a mobile phone.

**WORKING PROCESS**
Research involved quantitative interviews and complete immersion in reading the pension fund's heavy Legal Manuals. We conducted tests with the end-user base to validate financial logic.
The main insights were:
• The complexity of crossing mathematical rules must be absorbed by the machine, not by the elderly brain.
• Absurdly interactive and "technological" portfolio charts paralyzed and frightened users in the testing phase. Conversion required swapping for raw nominal tables and literal explanations.
• Financial design requires Trust and Safety premises; small components conveyed the visual sensation of a "digital scam".

**RESULT**
The portal translated heavy bureaucracy into autonomy for the elderly audience, mitigating the natural anxiety inherent to monetary products. With higher adoption, a 65% drop in dependency and volume of calls to human call centers was projected.
      `,
    },
    imageUrl: "/prevmax-capa.png",
    category: "UX Strategy",
    tags: [
      "Trust e safety",
      "Inclusive design",
      "WCAG",
      "Anxiety reduction",
      "Low digital literacy",
    ],
    technologies: ["Figma", "Miro", "Microsoft Clarity", "Prototyping"],
    methods: [],
    principles: [],
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
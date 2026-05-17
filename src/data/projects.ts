import { Project } from "../types";

export const projectsData: Project[] = [
  // ========================================================================
  // PROJETOS ATIVOS
  // ========================================================================
  {
    id: "plataforma-b2b-compras",
    title: {
      pt: "Plataforma B2B de Compras e Cotações",
      en: "B2B Purchasing & Quotation Platform"
    },
    status: "active",
    embedUrl: "",
    description: {
      pt: "Como reduzimos a carga cognitiva em decisões de alto impacto financeiro, sem sacrificar a governança.",
      en: "Designing for high-stakes decisions: reducing cognitive load in B2B procurement without sacrificing governance."
    },
    fullDescription: {
      pt: `
**A TENSÃO DE NEGÓCIO**
O ecossistema de compras corporativas operava com alta fricção. A falta de uma plataforma centralizadora forçava os compradores a analisar dezenas de variáveis financeiras em sistemas fragmentados. O impacto não era apenas perda de tempo (Time-on-Task elevado), mas a alta probabilidade de erro humano em negociações milionárias e falhas na governança administrativa. 

**LÓGICA COMPORTAMENTAL E DISCOVERY**
A abordagem de **Systems thinking** e o **Pair Design** foram cruciais não apenas para desenhar telas, mas para destrinchar os **multi-agentes de fluxo**. Mapeamos as jornadas exclusivas de Compradores, Fornecedores e Administradores, justificando o comportamento de cada permissão no sistema para garantir que os interesses de auditoria não travassem a usabilidade da operação.

**DECISÕES DE INTERFACE E ARQUITETURA**
• **Combate à Carga Cognitiva Extrínseca:** A comparação de propostas exigia que os usuários memorizassem valores trocando de telas. Aplicamos a heurística de "Reconhecimento em vez de lembrança" criando grids densos de comparação lado a lado, transferindo o esforço da memória de trabalho do usuário para a interface.
• **Governança por design:** Implementamos automações para cálculos e preenchimentos, mas mantivemos o controle de aprovações ("automação controlada") estritamente humano, exigindo confirmações deliberadas para proteger a governança financeira da operação.

**IA GENERATIVA NO FLUXO DE TRABALHO**
Utilizei IA generativa como suporte à exploração estratégica de soluções, acelerando ciclos de ideação e validação sem comprometer a consistência da experiência e das decisões de produto.

**O QUE CONSIDERAMOS E DESCARTAMOS**
• **Descartado:** Automação total da escolha do fornecedor baseada apenas no menor preço.
• **Por quê:** O menor preço nem sempre atende a prazos urgentes corporativos. Optamos por fornecer a melhor visualização de dados para que o comprador contextualize a decisão e mantenha o poder de negociação.

**CONSEQUÊNCIAS E IMPACTO**
A plataforma elevou a maturidade do processo corporativo. A redução do esforço cognitivo na análise de dados acelerou o fechamento de cotações com maior assertividade de custo-benefício, garantindo 100% de rastreabilidade para auditorias internas.
      `,
      en: `
**THE BUSINESS TENSION**
The corporate purchasing ecosystem operated with high friction. The lack of a centralizing platform forced buyers to analyze dozens of financial variables across fragmented systems. The impact was not just lost time (high Time-on-Task), but the high probability of human error in million-dollar negotiations and failures in administrative governance.

**BEHAVIORAL LOGIC AND DISCOVERY**
The **Systems thinking** and **Pair Design** approaches were crucial not just to design screens, but to untangle **multi-actor flows**. We mapped the exclusive journeys of Buyers, Suppliers, and Administrators, behaviorally justifying each system permission to ensure audit interests wouldn't hinder operational usability.

**INTERFACE AND ARCHITECTURE DECISIONS**
• **Combating Extrinsic Cognitive Load:** Proposal comparison required users to memorize values while switching screens. We applied the "Recognition rather than recall" heuristic, creating dense side-by-side comparison grids, shifting the effort from the user's working memory to the interface (Information architecture).
• **Governance by design:** We implemented automation for calculations and data entry, but kept approval controls ("controlled automation") strictly human, requiring deliberate confirmations to protect the financial governance of the operation.

**GENERATIVE AI IN THE WORKFLOW**
I used generative AI to support the strategic exploration of solutions, accelerating ideation and validation cycles without compromising the consistency of the experience and product decisions.

**WHAT WE CONSIDERED AND DISCARDED**
• **Discarded:** Full automation of supplier choice based solely on the lowest price.
• **Why:** The lowest price doesn't always meet urgent corporate deadlines. We opted to provide the best data visualization so the buyer could contextualize the decision and retain negotiation power.

**CONSEQUENCES AND IMPACT**
The platform elevated the maturity of the corporate process. Reducing cognitive effort in data analysis accelerated the closing of quotes with greater cost-benefit assertiveness, ensuring 100% traceability for internal audits.
      `
    },
    imageUrl: "/cotacao.png",
    category: "UX/UI Design",
    tags: ["Systems thinking", "Information architecture", "Cognitive load", "Multi-actor flows", "Governança por design"],
    technologies: ["Figma", "Auto Layout", "Usability Testing", "Lovable", "Google Stitch"],
    client: "Confidencial",
    role: "UX/UI Designer",
    liveUrl: "#",
    gallery: [
      { url: "/negociacao.png", title: "Fluxo de Negociação: Gestão de status e termos entre partes." },
      { url: "/cadastro-precos-fornecedores.png", title: "Comparação de Propostas: Base de dados estruturada para análise de preços e fornecedores." },
      { url: "/cadastro-fornecedor.png", title: "Cadastro de Fornecedor: Estruturação de dados." },
      { url: "/perfil-edicao.png", title: "Edição de Perfil: Mapeamento de perfis e gestão de dados do usuário." },
      { url: "/login.png", title: "Portal de Acesso: Entrada do ecossistema B2B." }
    ]
  },
    
  {
    id: "healthdash-analise-usabilidade",
    title: {
      pt: "HealthDash: Análise de Usabilidade Hospitalar",
      en: "HealthDash: Hospital Usability Analysis"
    },
    status: "active",
    embedUrl: "", 
    description: {
      pt: "Quando a interface falha, o paciente paga o preço: como heurísticas de Nielsen se tornam questão de segurança operacional.",
      en: "Interface failure as clinical risk: applying behavioral heuristics to redesign a hospital nutrition system."
    },
    fullDescription: {
      pt: `
**A TENSÃO DE NEGÓCIO**
Em um sistema de gestão nutricional hospitalar, usabilidade ruim não é apenas um inconveniente é um risco clínico. Profissionais de saúde utilizavam a plataforma em tablets, muitas vezes se deslocando pelos corredores ou segurando o dispositivo com apenas uma mão. O layout "quebrava" frequentemente, ocultando dados vitais e gerando um ambiente altamente propenso a erros de prescrição dietética.

**LÓGICA COMPORTAMENTAL E CONTEXTO**
O design foi tratado estritamente como design orientado a riscos. O contexto físico (contexto de uso) guiou a minha avaliação heurística. Observamos que modais flutuantes cobrindo a tela inteira não eram apenas "feios"; quando o teclado virtual subia, ocultava o botão principal de salvar a dieta. Isso obrigava a nutricionista a fechar o teclado para salvar a prescrição, gerando falhas operacionais críticas na rotina.

**DECISÕES DE INTERFACE E ERGONOMIA**
• **Prevenção de Erros (Error prevention):** Ampliamos as áreas de toque para o padrão de 44x44px. Em um escritório calmo, isso é apenas seguir um manual de UI, mas no corredor de um hospital, onde o profissional digita andando e segurando o tablet com uma mão, essa adaptação ergonômica previne cliques acidentais e garante que a dieta não seja salva no prontuário do paciente errado.
• **Ergonomia e Fluxo Linear:** Substituímos modais obstrutivos por telas inteiras, garantindo um fluxo sequencial previsível que acomoda perfeitamente teclados virtuais, eliminando as quebras de responsividade.

**O QUE CONSIDERAMOS E DESCARTAMOS**
• **Descartado:** Scroll infinito para concentrar todos os dados médicos em uma única visão.
• **Por quê:** O scroll infinito aumentava a incidência de toques acidentais em elementos cruciais durante a movimentação da nutricionista pelo hospital. Optamos pela paginação por blocos de dados.

**CONSEQUÊNCIAS E IMPACTO**
A eliminação de barreiras arquitetônicas reduziu drasticamente a incidência de "misclicks" e o tempo por tarefa. O redesign provou que adequar a plataforma ao modelo mental e físico do usuário não é apenas estético, é uma camada vital de segurança de dados na saúde.
      `,
      en: `
**THE BUSINESS TENSION**
In a hospital nutritional management system, poor usability is not just an inconvenience—it's a clinical risk. Healthcare professionals used the platform on tablets, often moving through corridors or holding the device with just one hand. The layout frequently broke, hiding vital data and creating an environment highly prone to dietary prescription errors.

**BEHAVIORAL LOGIC AND CONTEXT**
The design was treated strictly as *Risk-driven design*. The physical context (*Context of use*) guided our *Heuristic evaluation*. We observed that floating modals covering the entire screen were not just "ugly"; when the virtual keyboard popped up, it hid the main "save diet" button. This forced the nutritionist to close the keyboard to save the prescription, generating critical operational failures in the routine.

**INTERFACE AND ERGONOMICS DECISIONS**
• **Error prevention:** We expanded touch areas to the 44x44px standard. In a quiet office, this is just following a UI manual; but in a hospital corridor, where the professional types while walking and holding the tablet with one hand, this ergonomic adaptation prevents accidental clicks and ensures the diet is not saved in the wrong patient's file.
• **Ergonomics and Linear Flow:** We replaced obstructive modals with full screens, ensuring a predictable sequential flow that perfectly accommodates virtual keyboards, eliminating responsive breaks.

**WHAT WE CONSIDERED AND DISCARDED**
• **Discarded:** Infinite scroll to concentrate all medical data in a single view.
• **Why:** Infinite scrolling increased the incidence of accidental touches on crucial elements while the nutritionist moved through the hospital. We opted for data block pagination.

**CONSEQUENCES AND IMPACT**
The elimination of architectural barriers drastically reduced the incidence of "misclicks" and time-on-task. The redesign proved that adapting the platform to the user's mental and physical model is not just aesthetic, it is a vital layer of healthcare data security.
      `
    },
    imageUrl: "/healthdash-capa.png",
    category: "UX Research",
    tags: ["Heuristic evaluation", "Ergonomics", "Error prevention", "Context of use", "Risk-driven design"],
    technologies: ["Figma", "UX Research", "Accessibility", "UI Design"],
    client: "HealthDash", 
    role: "UX/UI Designer",
    liveUrl: "#"
  },

  {
    id: "smartsettlement-gestao-financeira",
    title: {
      pt: "Gestão de Conciliação Financeira",
      en: "Financial Reconciliation Management"
    },
    status: "active",
    embedUrl: "", 
    description: {
      pt: "Design sob restrição: como entregar impacto máximo sem tocar no Design System, e por que isso é a decisão certa.",
      en: "Constrained design as strategy: maximum impact without breaking the system and the behavioral logic behind it."
    },
    fullDescription: {
      pt: `
**A TENSÃO DE NEGÓCIO**
Os operadores financeiros enfrentavam um fenômeno clássico de "cegueira operacional". Ao conciliar grandes lotes de dados financeiros, o sistema legado não oferecia retornos visuais sobre o processamento. Na dúvida, usuários recarregavam páginas e geravam reprocessamentos acidentais. O problema de negócio explodia em volume de chamados de suporte e risco financeiro de conciliação dupla. A barreira técnica: alterar a estrutura core do Design System estava fora de cogitação devido a prazos rigorosos da engenharia.

**LÓGICA COMPORTAMENTAL E ESTRATÉGIA**
Adotei uma abordagem de "**lean UX**" focada em "**delivery under constraint**". Restrições técnicas não são obstáculos de design são o contexto em que o design acontece. O foco mudou de "como criar a interface mais bonita" para "qual é a menor intervenção visual capaz de mitigar a insegurança do usuário e o risco de erro?".

**DECISÕES DE INTERFACE (DECISION LOG)**
• **System Visibility:** Implementei barras de progresso contínuas durante os uploads. Nomei e eliminei a "cegueira operacional" dando previsibilidade sistêmica ao cérebro do usuário. A revisão minuciosa permitiu justificar à engenharia exatamente onde o status precisava ser inserido para funcionar.
• **Error Prevention:** Inserimos modais de confirmação (fricção deliberada) momentos antes de ações financeiras irreversíveis, quebrando o automatismo motor do usuário.

**O QUE CONSIDERAMOS E DESCARTAMOS**
• **O Ideal:** Reescrever do zero a arquitetura da tabela de conciliações com novos componentes interativos.
• **O Possível:** Adicionar status via texto nas tabelas legadas.
• **O que escolhemos:** Intervir apenas nas camadas sobrepostas (modais nativos e Badges), garantindo impacto comportamental imediato sem atrasar os "**releases**" nem exigir refatoração do UI Kit atual.

**CONSEQUÊNCIAS E IMPACTO**
A intervenção enxuta solucionou o vácuo de informação. A consequência de negócio foi direta: os tickets de suporte exigindo "status do sistema" caíram drasticamente em 75% e execuções financeiras acidentais foram zeradas, provando o valor das "**trade-off decisions**" alinhadas ao desenvolvimento.
      `,
      en: `
**THE BUSINESS TENSION**
Financial operators faced a classic phenomenon of "operational blindness". When reconciling large batches of financial data, the legacy system offered no visual feedback on processing. In doubt, users reloaded pages and generated accidental reprocessing. The business problem exploded in volume of support tickets and financial risk of double reconciliation. The technical barrier: altering the core structure of the Design System was out of the question due to strict engineering deadlines.

**BEHAVIORAL LOGIC AND STRATEGY**
We adopted a *Lean UX* approach focused on **Delivery under constraint**. Technical constraints are not design obstacles—they are the context in which design happens. The focus shifted from "how to create the most beautiful interface" to "what is the smallest visual intervention capable of mitigating user insecurity and risk of error?".

**INTERFACE DECISIONS (DECISION LOG)**
• **System Visibility:** We implemented continuous progress bars during uploads. We named and eliminated "operational blindness" by giving systemic predictability to the user's brain. Thorough review allowed us to justify to engineering exactly where the status needed to be inserted to work.
• **Error Prevention:** We inserted confirmation modals (**deliberate friction**) moments before irreversible financial actions, breaking the user's motor automatism.

**TRADE-OFFS: WHAT WE CONSIDERED AND DISCARDED**
• **The Ideal:** Rewrite from scratch the architecture of the reconciliation table with new interactive components.
• **The Possible:** Add text status to legacy tables.
• **What we chose:** Intervene only in the overlapping layers (Native Modals and Badges), ensuring immediate behavioral impact without delaying releases or requiring refactoring of the current UI Kit.

**CONSEQUENCES AND IMPACT**
The lean intervention solved the information vacuum. The business consequence was direct: support tickets demanding "system status" dropped drastically, and accidental financial executions were zeroed out, proving the value of *Trade-off decisions* aligned with development.
      `
    },
    imageUrl: "/smartsettlement-capa.png", 
    category: "Fintech",
    tags: ["Trade-off decisions", "Lean UX", "Delivery under constraint", "System visibility", "Error prevention"],
    technologies: ["Figma", "Redlining", "Information Architecture", "Lean UX"],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    gallery: [
      { url: "/smartsettlement-dados.png", title: "Interface Principal: Hierarquia de dados e ações rápidas." },
      { url: "/smartsettlement-loading.png", title: "Feedback de Sistema: Visibilidade do status de processamento." },
      { url: "/smartsettlement-modal.png", title: "Prevenção de Erro: Modal de confirmação para ações críticas." },
      { url: "/smartsettlement-fluxo.png", title: "Documentação de Fluxo: Mapeamento de interações e estados." }
    ],
  },

  {
    id: "compliance-kyc",
    title: {
      pt: "Plataforma de Inteligência em Compliance e Fraudes",
      en: "Compliance & Fraud Intelligence Platform"
    },
    status: "active",
    embedUrl: "",
    description: {
      pt: "Visualização de risco como decisão de design: como estruturar informação para que analistas detectem fraudes mais rápido e com menos erro.",
      en: "Risk visualization as a design decision: structuring information to reduce false negatives in fraud detection."
    },
    fullDescription: {
      pt: `
**A TENSÃO DE NEGÓCIO**
Analistas de compliance e PLD (Prevenção à Lavagem de Dinheiro) processam informações cruciais e ambíguas sob pressão de tempo. O custo de um falso negativo como autorizar uma holding fraudulenta ou um Beneficiário Final (UBO) ilícito tem um impacto regulatório e financeiro altíssimo. A tensão estava na fadiga de decisão gerado por ferramentas fragmentadas que exibiam dados crus, deixando a correlação cognitiva a cargo do analista.

**LÓGICA COMPORTAMENTAL E ARQUITETURA**
A etapa de Discovery e imersão junto aos analistas (discovery to architecture) não visou apenas "entender dores", mas alterar ativamente a hierarquia da informação. O problema central diagnosticado não era a ausência de dados, mas a enorme carga cognitiva intrínseca de interpretá-los.

**DECISÕES DE INTERFACE E PREVENÇÃO DE RISCO**
• **Redução de Esforço Cognitivo:** Transformamos dados de vínculos societários, que antes habitavam densas tabelas textuais lineares, em uma arquitetura de organograma visual (UBO). A hierarquia visual resolve o "quem é dono do quê" em segundos.
• **Risk-driven UX:** Enquadramos as sinalizações de alerta ("red flags") e PEPs não como meras "features", mas como design deliberado para contexto de alto risco. O Dashboard destaca anomalias primárias forçando a atenção antes que a fadiga mental se instale, operando como prevenção direta de erros tipo 2 (falsos negativos).

**O QUE CONSIDERAMOS E DESCARTAMOS**
• **Descartado:** Uma IA que aprovasse ou rejeitasse entidades automaticamente.
• **Por quê:** O compliance exige julgamento humano crítico perante ambiguidades legais. Optamos por usar a tecnologia apenas para o agrupamento de evidências visuais (information hierarchy), garantindo a velocidade da auditoria humana sem remover o seu protagonismo.

**CONSEQUÊNCIAS E IMPACTO**
Ao assumir a visualização de risco como alicerce do *AML/compliance design*, o sistema acelerou drasticamente a localização de perfis fraudulentos, poupou horas de investigação braçal e aumentou o "**task Success Rate**" de analistas sob pressão.
      `,
      en: `
**THE BUSINESS TENSION**
Compliance and AML (Anti-Money Laundering) analysts process crucial and ambiguous information under time pressure. The cost of a false negative—authorizing a fraudulent holding or illicit Ultimate Beneficial Owner (UBO)—is regulatory, financial, and extremely high. The tension lay in the *Decision fatigue* generated by fragmented tools that displayed raw data, leaving cognitive correlation entirely to the analyst.

**BEHAVIORAL LOGIC AND ARCHITECTURE**
The Discovery phase and immersion with analysts (discovery to architecture) aimed not just to "understand pain points", but to actively alter the information hierarchy. The central problem diagnosed was not the absence of data, but the enormous intrinsic cognitive load of interpreting it.

**INTERFACE AND RISK PREVENTION DECISIONS**
• **Cognitive Effort Reduction:** We transformed corporate link data, which previously lived in dense linear text tables, into a visual organizational chart architecture (UBO). The visual hierarchy solves the "who owns what" in seconds.
• **Risk-driven UX:** We framed alert signals ("Red flags") and PEPs not as mere "features", but as deliberate design for a high-risk context. The Dashboard highlights primary anomalies, forcing attention before mental fatigue sets in, operating as direct prevention of type 2 errors (false negatives).

**TRADE-OFFS: WHAT WE CONSIDERED AND DISCARDED**
• **Discarded:** An AI that automatically approved or rejected entities.
• **Why:** Compliance requires critical human judgment in the face of legal ambiguities. We opted to use technology solely for the grouping of visual evidence (*Information hierarchy*), ensuring the speed of human auditing without removing its agency.

**CONSEQUENCES AND IMPACT**
By embracing risk visualization as the foundation of *AML/compliance design*, the system drastically accelerated the localization of fraudulent profiles, saved hours of manual investigation, and increased the Task Success Rate of analysts under pressure.
      `
    },
    imageUrl: "/compliance-capa.png",
    category: "UX/UI Design & Architecture",
    tags: ["Decision fatigue", "Information hierarchy", "Risk-driven UX", "Discovery to architecture", "AML/compliance design"],
    technologies: ["Miro", "Mapeamento de Fluxos", "Arquitetura de Informação", "UX Research"],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    gallery: [      
      { url: "/compliance-dores-ganhos.png", title: "Discovery: Levantamento de dores e ganhos dos operadores." },
      { url: "/compliance-personas.png", title: "Personas: Perfis detalhados do time de operação." },
      { url: "/compliance-hipoteses.png", title: "Hipóteses: Matriz de validação de problemas e soluções." },
      { url: "/compliance-arquitetura.png", title: "Arquitetura: Estrutura da plataforma e fases de entrega." },
      { url: "/compliance-fluxo-novo.png", title: "Novo Fluxo: Jornada otimizada para o analista." },
      { url: "/compliance-dashboard-geral.png", title: "Dashboard Geral: Monitoramento gerencial de volumes e cadastros." },
      { url: "/compliance-visao-geral.png", title: "Visão Geral UI: Mapeamento de telas, componentes e estados." },
      { url: "/compliance-monitoramento.png", title: "Monitoramento: Dashboard core com Score de Risco e alertas PEP." },
      { url: "/compliance-estrutura-societaria.png", title: "Estrutura Societária: Visualização hierárquica para identificação de UBO." },
      { url: "/compliance-gestao-cadastros.png", title: "Gestão de Cadastros: Listagem inteligente com status visuais." },
      { url: "/compliance-filtros.png", title: "Filtros Avançados: Otimização da busca e refinamento de dados." },
      { url: "/compliance-info-cnpj.png", title: "Informações CNPJ: Perfil detalhado organizado por módulos." },
      { url: "/compliance-documentos.png", title: "Documentos: Interface de gestão e validação documental." },
      { url: "/compliance-detalhes-doc.png", title: "Detalhes Documentais: Rastreabilidade e histórico de alterações." },
      { url: "/compliance-contratos.png", title: "Contratos: Organização de vigências e arquivos contratuais." }
    ]
  },

  {
    id: "redesign-navegacao-notificacoes",
    title: {
      pt: "Redesign de Navegação e Sistema de Notificações",
      en: "Navigation Redesign and Notification System"
    },
    status: "active",
    embedUrl: "",
    description: {
      pt: "Quando comunicação interna se torna risco de compliance: como redesenhamos um sistema de notificações para ser juridicamente rastreável.",
      en: "Notification design as legal infrastructure: building traceability into internal communication systems."
    },
    fullDescription: {
      pt: `
**A TENSÃO DE NEGÓCIO**
Mensagens regulatórias e atualizações de processos críticos (compliance by design) estavam sendo disparadas via e-mails corporativos soltos. A consequência? O sistema não garantia rastreabilidade documental de leitura. Se uma nova diretriz não fosse lida, o erro operacional ou jurídico gerado caía na "falta de aviso". O layout ineficiente do Header não era a causa matriz, mas um sintoma de uma comunicação não estruturada.

**LÓGICA COMPORTAMENTAL E HEURÍSTICAS**
Ao invés de inventar novos fluxos de alertas flutuantes, adotamos modelos mentais já validados de comunicação. Recorri à **Lei de Jakob**: os usuários já gerenciam comunicações de forma excelente em clientes de e-mail convencionais. A interface desenhada replicou essa familiaridade (Caixa de Entrada/Arquivados) eliminando a curva de aprendizado para uso imediato da nova feature de compliance.

**DECISÕES DE INTERFACE E RASTREABILIDADE**
• **Ergonomia Física:** Apliquei os preceitos da **Lei de Fitts**, alinhando as áreas de clique frequentes (como marcações em lote de "Lido") em zonas de interface que minimizam o esforço motor do mouse, tornando a limpeza da inbox indolor.
• **Ativo Jurídico:** Cada notificação no Header possui agora um registro de status sistêmico vinculando o usuário e seu aceite documental, blindando a governança contra o álibi de ignorância.

**O QUE CONSIDERAMOS E DESCARTAMOS**
• **Descartado:** Inserir todas as comunicações via Pop-ups/Modais interruptivos no login.
• **Por quê:** Interrupções sistêmicas diárias causariam "Banner Blindness" (Cegueira a alertas), onde os usuários fecham modais de forma automática antes de ler. Optamos por notificações passivas no Header, reservando alertas interruptivos estritamente para quebras de segurança.

**CONSEQUÊNCIAS E IMPACTO**
O projeto transcendeu a "modernização de interface", entregando um produto de **Legal infrastructure** para o negócio. Com a padronização via heurísticas, os comunicados críticos atingiram governança garantida com métricas de abertura quantificáveis, protegendo os passivos da empresa de forma invisível no fluxo diário do colaborador.
      `,
      en: `
**THE BUSINESS TENSION**
Regulatory messages and critical process updates (compliance by design) were being triggered via loose corporate emails. The consequence? The system couldn't guarantee documented reading traceability. If a new guideline went unread, the resulting operational or legal error fell into the "lack of notice" gap. The inefficient Header layout wasn't the root cause, but a symptom of unstructured communication.

**BEHAVIORAL LOGIC AND HEURISTICS**
Instead of inventing new floating alert flows, we adopted validated communication *Mental models*. We turned to *Jakob's Law*: users already manage communications excellently in conventional email clients. The designed interface replicated this familiarity (Inbox/Archived), eliminating the learning curve for immediate use of the new compliance feature.

**INTERFACE AND TRACEABILITY DECISIONS**
• **Physical Ergonomics:** We applied the precepts of *Fitts's Law*, aligning frequent click areas (such as batch "Mark as Read" actions) in interface zones that minimize motor effort of the mouse, making inbox clearing painless.
• **Legal Asset:** Every Header notification now has a systemic status record linking the user and their documented acknowledgment, shielding governance against the ignorance alibi.

**WHAT WE CONSIDERED AND DISCARDED**
• **Discarded:** Inserting all communications via interruptive Pop-ups/Modals at login.
• **Why:** Daily systemic interruptions would cause "Banner Blindness", where users automatically close modals before reading them. We opted for passive notifications in the Header, reserving interruptive alerts strictly for security breaches.

**CONSEQUENCES AND IMPACT**
The project transcended "interface modernization", delivering a product of *Legal infrastructure* for the business. With standardization via heuristics, critical communications achieved guaranteed governance with quantifiable open metrics, protecting company liabilities invisibly within the employee's daily flow.
      `
    },
    imageUrl: "/notificacoes-capa.png",
    category: "UI Design",
    tags: ["Behavioral heuristics", "Mental models", "Compliance by design", "Fitts's Law", "Jakob's Law"],
    technologies: ["Figma", "Design System", "Prototyping"],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    gallery: [
      { url: "/notificacoes-header.png", title: "Redesign do Header com Heurísticas de Nielsen" },
      { url: "/notificacoes-gestor.png", title: "Painel do Gestor: Segmentação e Rastreabilidade" },
      { url: "/notificacoes-user.png", title: "Painel do Usuário: Inbox e Preferências" }
    ]
  },

  {
    id: "evolucao-design-system",
    title: {
      pt: "Evolução e Escalabilidade de Design System",
      en: "Design System Evolution & Scalability"
    },
    status: "active",
    embedUrl: "",
    description: {
      pt: "Design Ops como alavanca: como uma arquitetura de tokens reduziu inconsistências e acelerou o ciclo de entrega do time.",
      en: "Design Ops as leverage: how a token architecture reduced visual debt and accelerated team delivery velocity."
    },
    fullDescription: {
      pt: `
**A TENSÃO DE NEGÓCIO**
À medida que a equipe crescia, percebemos um desafio natural: a falta de padronização técnica estava gerando retrabalho e atritos operacionais na nossa rotina. Não era sobre "organizar pastinhas no Figma", era sobre alavancar a capacidade do time. Como os componentes careciam de uma fundação matemática, as aprovações de design sofriam de dívida visual e os desenvolvedores reconstruíam a mesma margem múltiplas vezes, estagnando o ciclo de evolução do produto (*Scalability*).

**LÓGICA COMPORTAMENTAL E ARQUITETURA**
Trabalhando em estreita colaboração com outra profissional de design, que trouxe visões complementares e insights essenciais para o projeto, uni minha bagagem prévia com Design Ops para apoiar a equipe. Juntas, defendemos a premissa de que a padronização não se sustenta sem adoção cultural. Colaborei ativamente na estruturação do ecossistema para reduzir as interpretações manuais da interface, contribuindo para a implementação de uma Token architecture robusta utilizando Figma Variables.

**DECISÕES DE ARQUITETURA E MENTORIA**
• **Separação Primitiva x Semântica:** A separação dos tokens em lógicas estritas evitou o problema crônico de quebra sistêmica em Dark Modes ou refatorações de marca de grande impacto. O código agora entende a intenção funcional (ex: Button-Primary-Bg) e não apenas o Hex code bruto.
• **Documentation strategy & Mentoria:** Componentes invisíveis no código não geram valor. Foi elaborada documentação exaustiva com regras de UX e comportamentos acoplados. E a solução englobou ativamente a Mentoria do time sobre "como usar o ecossistema avançado", garantindo a adoção interna da nova tecnologia.

**O QUE CONSIDERAMOS E DESCARTAMOS**
• **Descartado:** Refatorar todos os componentes legados da biblioteca em uma só sprint.
• **Por quê:** Congelaria as entregas de produto do time. Priorizamos apenas construir a camada estrutural de Tokens (Fundações) para blindar as novas criações, deixando a migração de componentes legados para o modelo *Tech debt* a longo prazo.

**CONSEQUÊNCIAS E IMPACTO**
O impacto foi o ganho de escala exponencial: uma decisão tomada na raiz do Design System acelerou as prototipações de dezenas de interfaces. A consistência da implementação entre UI e Front-end solidificou a confiança e velocidade entre as squads, derrubando severamente o desperdício operacional.
      `,
      en: `
**THE BUSINESS TENSION**
As the team grew, we noticed a natural challenge: the lack of technical standardization was causing rework and operational friction in our routine.It wasn't about "organizing Figma folders", it was about *Team leverage*. Because components lacked a mathematical foundation, design approvals suffered from visual debt, and developers rebuilt the same margins multiple times, stagnating the product evolution cycle (*Scalability*).

**BEHAVIORAL LOGIC AND ARCHITECTURE**
Working in close collaboration with another design professional—who brought essential complementary perspectives and insights to the project—I combined my previous background in Design Ops to support the team. Together, we championed the premise that standardization cannot be sustained without cultural adoption. I actively collaborated in structuring the ecosystem to reduce manual interface interpretations, contributing to the implementation of a robust Token architecture using Figma Variables.

**ARCHITECTURE AND MENTORSHIP DECISIONS**
• **Primitive vs. Semantic Separation:** Separating tokens into strict logic prevented the chronic problem of systemic breaking during Dark Mode shifts or major brand refactoring. The code now understands functional intent (e.g., Button-Primary-Bg) rather than just raw Hex codes.
• **Documentation strategy & Mentorship:** Components invisible in code generate no value. Exhaustive documentation with UX rules and coupled behaviors was created. The solution actively included team Mentorship on "how to use the advanced ecosystem", ensuring internal adoption of the new technology.

**WHAT WE CONSIDERED AND DISCARDED**
• **Discarded:** Refactoring all legacy components in the library in a single sprint.
• **Why:** It would freeze the team's product deliveries. We prioritized building only the structural Token layer (Foundations) to shield new creations, leaving the migration of legacy components to a long-term *Tech debt* model.

**CONSEQUENCES AND IMPACT**
The impact was an exponential gain in scale: a decision made at the root of the Design System accelerated the prototyping of dozens of interfaces. Implementation consistency between UI and Front-end solidified trust and speed among squads, severely cutting down operational waste.
      `
    },
    imageUrl: "/ds-capa.png",
    category: "Design System",
    tags: ["Design Ops", "Token architecture", "Scalability", "Team leverage", "Documentation strategy"],
    technologies: ["Figma", "Tokens", "Documentation", "Mentorship"],
    client: "Confidencial",
    role: "Product Designer / UI",
    liveUrl: "#",
    gallery: [
           { url: "/ds-cores.png", title: "Inventário de Cores Primitivas e Escalas" },
      { url: "/ds-documentacao.png", title: "Documentação Funcional: Regras de UX e Anatomia de Componentes" }      
    ]
  },

 {
    id: "prevmax-previdencia",
    title: {
      pt: "Previdência Complementar",
      en: "Complementary Pension"
    },
    status: "active",
    embedUrl: "https://embed.figma.com/proto/UowipTJL4ggqVwP828F6Eb/Portf%C3%B3lio-PLATAFORMA?page-id=0%3A1&node-id=4-4108&viewport=575%2C347%2C0.06&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A4094&embed-host=share",
    description: {
      pt: "Confiança como variável de design: como traduzimos um produto financeiro de alta ansiedade para um público de baixo letramento digital.",
      en: "Trust as a design variable: making a high-anxiety financial product accessible to low digital-literacy users."
    },
    fullDescription: {
      pt: `
**A TENSÃO DE NEGÓCIO**
Fundos de pensão operam um produto de **alta ansiedade**: o futuro financeiro e de aposentadoria de pessoas reais. O desafio do projeto ia muito além da interface, pois o sistema é regido por regras regulatórias de extrema complexidade, com variáveis que mudam e se combinam de acordo com a situação trabalhista específica de cada participante. Descobrimos que os usuários (maioria 60+ com **Low digital literacy**) abandonavam as jornadas online devido à fricção cognitiva de tentar decifrar essas regras somadas ao jargão financeiro, recorrendo ao oneroso atendimento de call center.

**ARQUITETURA REGULATÓRIA E INCLUSÃO**
Para traduzir a burocracia em autonomia, conduzi uma investigação profunda na lógica de negócio. Além de realizar pesquisas com operadores de BPO, debrucei-me sobre diversos regulamentos de planos de previdência complementar fechada de grandes corporações clientes. O objetivo foi mapear as dezenas de matrizes e variáveis legais para garantir que o sistema e não o cérebro do usuário idoso absorvesse a complexidade computacional. Simplificar não significava esconder opções, mas usar a tecnologia para reduzir o esforço cognitivo. Sem essa fundação lógica aliada ao **trust & safety** visual, não haveria adoção do digital.

**DECISÕES DE INTERFACE E CONFIANÇA**
• **Acessibilidade aplicada na Arquitetura:** As diretrizes da **WCAG** guiaram a criação de componentes de alto contraste, botões estruturados com linguagem de ação clara e tipografia adaptada para mitigar o impacto da perda de visão temporal natural em usuários idosos (**inclusive design**). O grande desafio de produto foi equilibrar os critérios rigorosos de conformidade técnica da *WCAG* com a obrigatoriedade de preservar as cores institucionais da marca (**brand identity**).
• **Previsibilidade contra a Insegurança:** Fluxos simuladores baseados no modelo mental "O que acontece se...?" permitiram ao usuário enxergar impactos monetários concretos em vez de lidar com planilhas densas de cálculo atuarial.
• **Responsividade Estratégica:** O produto foi adaptado para mobile, garantindo o acesso rápido a resumos e ações cotidianas. No entanto, para a visualização de minúcias e tabelas financeiras densas, aplicamos uma fricção positiva: a interface orienta e condiciona o usuário a utilizar o desktop ou tablet. Essa decisão evitou a quebra de usabilidade ao não tentar "espremer" dados complexos em telas pequenas, protegendo a precisão da leitura.

**O QUE CONSIDERAMOS E DESCARTAMOS**
• **Descartado:** Dashboards interativos de altíssima densidade técnica sobre rendimentos de portfólios compostos.
• **Por quê:** Apesar de parecerem "modernos", testes indicaram que gráficos muito interativos paralisavam e assustavam esse perfil de usuário. Trocamos pela simplificação em dados nominais e tabelas com descrições altamente claras sobre movimentações.

**CONSEQUÊNCIAS E IMPACTO**
Ao transformar regras complexas em fluxos digeríveis e mitigar o medo inerente da interface financeira, o produto viabilizou maior **Task Success Rate** dos simuladores e estimou uma redução de **65%** nos chamados para os polos de atendimento humano. O design traduziu o respeito ao perfil do cliente gerando autonomia operacional.

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome "PrevMax", a identidade visual e o logotipo são elementos fictícios criados exclusivamente para fins de portfólio. Essa abordagem preserva rigorosamente a confidencialidade do cliente real, mantendo total fidelidade ao processo, aos desafios e às decisões estratégicas de design.
      `,
      en: `
**THE BUSINESS TENSION**
Pension funds operate a **high-anxiety** product: the financial and retirement future of real people. The project's challenge went far beyond the interface, as the system is governed by highly complex regulatory rules, with variables that change and combine according to each participant's specific labor situation. We discovered that users (mostly 60+ with **Low digital literacy**) abandoned online journeys due to the cognitive friction of trying to decipher these rules combined with financial jargon, resorting to costly call center support.

**REGULATORY ARCHITECTURE AND INCLUSION**
To translate bureaucracy into autonomy, I conducted a deep investigation into the business logic. In addition to researching with BPO operators, I immersed myself in various closed complementary pension plan regulations from large corporate clients. The goal was to map the dozens of matrices and legal variables to ensure the system—not the elderly user's brain—absorbed the computational complexity. Simplifying didn't mean hiding options, but using technology to reduce cognitive effort. Without this logical foundation combined with visual **Trust & safety**, there would be no digital adoption.

**INTERFACE DECISIONS AND TRUST**
• **Accessibility applied to Architecture:** *WCAG* guidelines guided the creation of high-contrast components, structured buttons with clear action language, and typography adapted to mitigate the impact of natural age-related vision loss (**Inclusive design**). The major product challenge was balancing strict technical *WCAG* compliance criteria with the mandatory preservation of the company's institutional brand identity.
• **Predictability against Insecurity:** Simulator flows based on the "What happens if...?" mental model allowed the user to see concrete monetary impacts instead of dealing with dense actuarial calculation spreadsheets.
• **Strategic Responsiveness:** The product was adapted for mobile, ensuring quick access to summaries and daily actions. However, for viewing minutiae and dense financial tables, we applied positive friction: the interface guides and nudges the user to switch to a desktop or tablet. This decision prevented usability breaks by not trying to squeeze complex data into small screens, protecting reading accuracy.

**WHAT WE CONSIDERED AND DISCARDED**
• **Discarded:** Highly interactive, technically dense dashboards showing composite portfolio yields.
• **Why:** Despite looking "modern", tests indicated that overly interactive charts paralyzed and frightened this user profile. We swapped them for simplifications in nominal data and tables with highly clear descriptions of movements.

**CONSEQUENCES AND IMPACT**
By transforming complex rules into digestible flows and mitigating the inherent fear of the financial interface, the product enabled a higher **Task Success Rate** for simulators and estimated a **65%** reduction in calls to human service centers. The design translated respect for the customer profile into operational autonomy.

**CONFIDENTIALITY NOTE**
This project was developed in a corporate context. The name "PrevMax", the visual identity, and the logo are fictional elements created exclusively for portfolio purposes. This approach strictly preserves the real client's confidentiality while maintaining total fidelity to the process, challenges, and strategic design decisions.
      `
    },
    imageUrl: "/prevmax-capa.png",
    category: "UX Strategy",
    tags: ["Trust & safety", "Inclusive design", "WCAG", "Anxiety reduction", "Low digital literacy"],
    technologies: ["Figma", "Miro", "Microsoft Clarity", "Prototyping"],
    client: "Confidencial",
    role: "Product Designer",
    liveUrl: "#",
    gallery: [
      { url: "/prevmax-processo.png", title: "Processo de Design & Metodologia" },
      { url: "/prevmax-benchmark.png", title: "Análise de Mercado (Benchmarking)" },
      { url: "/prevmax-research.png", title: "Personas e Mapeamento de Histórias (User Story Map)" },
      { url: "/prevmax-flow.png", title: "Fluxo do Usuário e Arquitetura de Informação" },
      { url: "/prevmax-styleguide.png", title: "Style Guide: Tipografia e Cores Acessíveis" },
      { url: "/prevmax-components.png", title: "Biblioteca de Componentes e UI Kit" }
    ]
  },
  
  // ========================================================================
  // PROJETOS FUTUROS (EM BREVE)
  // ========================================================================
  {
    id: "crm-financeiro",
    title: {
      pt: "Portal CRM",
      en: "CRM Portal"
    },
    status: "coming-soon",
    description: {
      pt: "Gestão de relacionamento com cliente focado em cashback e portais administrativos.",
      en: "Customer relationship management focused on cashback and administrative portals."
    },
    imageUrl: "",
    category: "Web",
    tags: ["Product Design", "B2B"],
    fullDescription: { pt: "", en: "" }
  },
  {
    id: "gestao-buffet",
    title: {
      pt: "Sistema de Gestão de Buffet",
      en: "Buffet Management System"
    },
    status: "coming-soon",
    description: {
      pt: "Interface para configuração de layouts de rampas e gestão de recipientes gastronômicos.",
      en: "Interface for configuring ramp layouts and managing gastronomic containers."
    },
    imageUrl: "",
    category: "Tablet App",
    tags: ["UX Strategy", "User Flow"],
    fullDescription: { pt: "", en: "" }
  },
  {
    id: "sistema-pesagem",
    title: {
      pt: "App de reserva de restaurante",
      en: "Restaurant Booking App"
    },
    status: "coming-soon",
    description: {
      pt: "Solução para agendamento de reservas e otimização de filas em restaurante.",
      en: "Solution for scheduling reservations and optimizing restaurant queues."
    },
    imageUrl: "",
    category: "UI",
    tags: ["Research", "UX/UI Design"],
    fullDescription: { pt: "", en: "" }
  },
  {
    id: "dashboard-analytics",
    title: {
      pt: "Esteira de sessão e CNAB",
      en: "Session and CNAB Pipeline"
    },
    status: "coming-soon",
    description: {
      pt: "Painel de controle para esteira de sessão e CNAB.",
      en: "Control panel for session and CNAB pipeline."
    },
    imageUrl: "",
    category: "UX/UI Design",
    tags: ["Dashboard", "UI Design"],
    fullDescription: { pt: "", en: "" }
  }
];
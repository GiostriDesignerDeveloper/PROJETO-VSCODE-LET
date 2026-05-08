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
      pt: "Estruturação end-to-end de um ecossistema de compras, otimizando negociações corporativas com foco na redução da carga cognitiva e eficiência operacional.",
      en: "End-to-end structuring of a purchasing ecosystem, optimizing corporate negotiations with a focus on reducing cognitive load and operational efficiency."
    },
    fullDescription: {
      pt: `
**PROBLEMA DE NEGÓCIO**
O ecossistema de compras corporativas era fragmentado e altamente burocrático. A falta de uma plataforma centralizadora para cotações e ordens de compra resultava em retrabalho, perda de dados e dificuldade em comparar propostas, prejudicando a governança e a agilidade nas negociações.

**OBJETIVO**
Centralizar o fluxo de compras de ponta a ponta (solicitação à ordem de compra) em um ambiente transparente e estruturado, garantindo o melhor custo-benefício e acelerando a tomada de decisão.

**DIAGNÓSTICO**
• **Descentralização:** Informações espalhadas em sistemas legados e planilhas.
• **Alta Carga Cognitiva:** Dificuldade na análise de variáveis complexas durante a comparação de propostas.
• **Falta de Governança:** Ausência de rastreabilidade clara sobre quem aprovou ou alterou os termos das negociações.
• **Fluxo não Orientado:** Processos que permitiam falhas e omissões por parte de compradores e fornecedores.

**IMPACTO DIRETO:**
• Baixa eficiência nas negociações (Time-on-Task elevado).
• Custos ocultos devido a dificuldade de auditar orçamentos.
• Risco de baixa adesão devido à complexidade da interface.

**HIPÓTESE**
Se mapearmos as jornadas e permissões de forma clara e criarmos interfaces focadas na comparação simultânea e visualização de dados, reduziremos a carga cognitiva e o retrabalho, aumentando a assertividade das compras e a governança do sistema.

**PROCESSO DE DISCOVERY**
Este projeto foi conduzido utilizando a metodologia de Pair Design em colaboração com a designer Amanda Guimarães, o que permitiu um nível mais profundo de investigação:
• **Mapeamento de Atores:** Definição da arquitetura de informação e jornadas exclusivas para os perfis de Compradores, Fornecedores e Administradores.
• **Co-criação Interdisciplinar:** Alinhamento contínuo com as equipes de Produto e Engenharia para garantir que as regras de negócio fossem blindadas sem sacrificar a usabilidade.
• **Estratégia de Validação:** Planejamento antecipado de testes de usabilidade, com definição de métricas e critérios de recrutamento, para validar a aderência do sistema pós-desenvolvimento.

**SOLUÇÃO DE DESIGN**
• **Redução de Carga Cognitiva:** Criação de padrões visuais claros e uma forte hierarquia de informação para permitir a análise lado-a-lado de variáveis e propostas.
• **Automação Controlada:** Desenho de fluxos que automatizam tarefas repetitivas (eliminando retrabalho), mas mantêm pontos críticos de validação humana para garantir a segurança da operação.
• **Ecossistema Integrado:** Estruturação end-to-end do produto, garantindo que a complexidade dos sistemas legados de fundo não transbordasse para a tela do usuário.

**MÉTRICAS CONSIDERADAS**
• **Eficiência Operacional (Time-on-Task):** Redução do tempo necessário para completar o ciclo de cotação.
• **Task Success Rate:** Aumento da assertividade na escolha de fornecedores devido à clareza na comparação de propostas.
• **Governança (Compliance):** Melhoria no nível de rastreabilidade e segurança documental das compras.
• **Adoção do Produto (Feature Adoption):** Transição bem-sucedida do modelo analógico/fragmentado para o digital centralizado.

**RESULTADO ESPERADO**
A plataforma eleva a maturidade do processo de compras da empresa, transformando uma atividade burocrática em uma operação estratégica. A solução garante conformidade legal e resulta em negociações mais rápidas e com maior custo-benefício (impactando o *bottom line* da companhia).

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins of portfolio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo, às decisões de design e aos desafios enfrentados.
      `,
      en: `
**BUSINESS PROBLEM**
The corporate purchasing ecosystem was fragmented and highly bureaucratic. The lack of a centralizing platform for quotes and purchase orders resulted in rework, data loss, and difficulty comparing proposals, harming governance and agility in negotiations.

**OBJECTIVE**
Centralize the end-to-end purchasing flow (from request to purchase order) in a transparent and structured environment, ensuring the best cost-benefit and accelerating decision-making.

**DIAGNOSIS**
• **Decentralization:** Information scattered across legacy systems and spreadsheets.
• **High Cognitive Load:** Difficulty analyzing complex variables while comparing proposals.
• **Lack of Governance:** Absence of clear traceability on who approved or altered negotiation terms.
• **Unguided Flow:** Processes that allowed failures and omissions by buyers and suppliers.

**DIRECT IMPACT:**
• Low negotiation efficiency (High Time-on-Task).
• Hidden costs due to the difficulty of auditing budgets.
• Risk of low adoption due to interface complexity.

**HYPOTHESIS**
If we map journeys and permissions clearly and create interfaces focused on simultaneous comparison and data visualization, we will reduce cognitive load and rework, increasing purchasing assertiveness and system governance.

**DISCOVERY PROCESS**
This project was conducted using the Pair Design methodology in collaboration with designer Amanda Guimarães, which allowed a deeper level of investigation:
• **Actor Mapping:** Definition of information architecture and exclusive journeys for Buyer, Supplier, and Administrator profiles.
• **Interdisciplinary Co-creation:** Continuous alignment with Product and Engineering teams to ensure business rules were shielded without sacrificing usability.
• **Validation Strategy:** Early planning of usability tests, with definition of metrics and recruitment criteria, to validate system adherence post-development.

**DESIGN SOLUTION**
• **Cognitive Load Reduction:** Creation of clear visual patterns and a strong information hierarchy to allow side-by-side analysis of variables and proposals.
• **Controlled Automation:** Design of flows that automate repetitive tasks (eliminating rework) but maintain critical human validation points to ensure operational security.
• **Integrated Ecosystem:** End-to-end product structuring, ensuring the complexity of back-end legacy systems didn't overflow to the user screen.

**METRICS CONSIDERED**
• **Operational Efficiency (Time-on-Task):** Reduction in the time required to complete the quotation cycle.
• **Task Success Rate:** Increased assertiveness in supplier choice due to clarity in proposal comparison.
• **Governance (Compliance):** Improvement in the level of traceability and documentary security of purchases.
• **Feature Adoption:** Successful transition from the analog/fragmented model to the centralized digital one.

**EXPECTED RESULT**
The platform elevates the maturity of the company's purchasing process, transforming a bureaucratic activity into a strategic operation. The solution ensures legal compliance and results in faster negotiations with greater cost-benefit (impacting the company's bottom line).

**CONFIDENTIALITY NOTE**
This project was developed in a corporate context. The product name, visual identity, and colors were adapted for portfolio purposes, preserving the company's confidentiality while maintaining fidelity to the process, design decisions, and challenges faced.
      `
    },
    imageUrl: "/cotacao.png",
    category: "UX/UI Design",
    tags: ["UX Strategy", "B2B", "Pair Design"],
    technologies: ["Figma", "Auto Layout", "Usability Testing"],
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
      pt: "Análise de Usabilidade e Interface Responsiva",
      en: "Usability Analysis & Responsive Interface"
    },
    status: "active",
    embedUrl: "", 
    description: {
      pt: "Análise heurística e proposta de redesign responsivo para um sistema de gestão nutricional hospitalar, focado em eficiência operacional e segurança do paciente.",
      en: "Heuristic analysis and responsive redesign proposal for a hospital nutritional management system, focused on operational efficiency and patient safety."
    },
    fullDescription: {
      pt: `
**PROBLEMA DE NEGÓCIO**
O sistema de gestão nutricional hospitalar, utilizado predominantemente em dispositivos móveis (tablets), apresentava barreiras de usabilidade que dificultavam o trabalho de nutricionistas e equipes de copa. Em um ambiente hospitalar de alta pressão, o acesso e o preenchimento de dados críticos dos pacientes ocorriam de forma lenta e propensa a erros.

**OBJETIVO**
Otimizar a interface móvel para garantir que os profissionais de saúde acessem e registrem informações dietéticas com rapidez e precisão, reduzindo a fricção e aumentando a segurança operacional.

**DIAGNÓSTICO**
• **Quebra de Responsividade:** O layout "desintegrava" ao alternar entre as orientações paisagem e retrato, ocultando botões críticos como "Salvar".
• **Falha de Acessibilidade (Ergonomia):** Ícones e botões possuíam áreas de toque inferiores ao padrão mínimo de 44x44px, gerando cliques acidentais.
• **Hierarquia Visual e Ruído:** Títulos e dados do paciente tinham o mesmo peso visual (baixa escaneabilidade), e imagens de fundo competiam com informações vitais, prejudicando o contraste.

**IMPACTO DIRETO:**
• Aumento do tempo de tarefa (Time on Task) devido a fluxos truncados e modais quebrados.
• Risco à segurança do paciente (Error Rate) gerado por toques acidentais e má interpretação de dados.

**HIPÓTESE**
Se realizarmos uma refatoração baseada em heurísticas de usabilidade, implementando um grid responsivo, touch targets adequados e uma hierarquia visual clara, reduziremos a carga cognitiva da equipe, minimizando erros operacionais e acelerando o fluxo de prescrição dietética.

**PROCESSO DE DISCOVERY**
O projeto foi conduzido através de uma rigorosa investigação técnica e comportamental:
• **Análise Heurística de Interface:** Avaliação minuciosa para identificar violações de usabilidade e acessibilidade na plataforma atual, baseada nos princípios de Nielsen.
• **Análise de Contexto de Uso:** Mapeamento do cenário de uso real (tablets operados muitas vezes com uma mão enquanto o profissional se movimenta pelo hospital).
• **Avaliação Ergonômica:** Verificação de áreas de toque, contraste e legibilidade, cruzando com diretrizes globais de acessibilidade para interfaces de toque.

**SOLUÇÃO DE DESIGN**
• **Grid Responsivo e Ergonômico:** Reconstrução da interface sobre um grid fluido, permitindo a navegação lateral facilitada para o alcance do polegar em tablets.
• **Otimização de Interações:** Substituição de modais centrais (que eram cobertos pelo teclado virtual) por páginas dedicadas, eliminando o bloqueio de fluxo.
• **Hierarquia Tipográfica e Feedback:** Estabelecimento de pesos variados (Bold para dados, Regular para rótulos) e implementação de estados visuais (Tags/Badges) para o status das prescrições.
• **Redução de Carga Cognitiva:** Padronização de ícones universais e remoção de ruídos de fundo para foco total nos dados do paciente.

**MÉTRICAS CONSIDERADAS**
• **Eficiência Operacional (Time-on-Task):** Redução do tempo de preenchimento ao eliminar a luta do usuário contra o teclado virtual e modais.
• **Segurança do Paciente (Error Rate):** Minimização de toques acidentais através do dimensionamento correto dos alvos de toque.
• **Taxa de Sucesso (Task Success Rate):** Conclusão fluida do processo de prescrição, independentemente da orientação da tela (paisagem/retrato).

**RESULTADO ESPERADO**
A nova proposta de interface reduz drasticamente o risco de erros médicos oriundos do software, melhora a ergonomia para o trabalhador da saúde e transforma um sistema engessado em uma ferramenta confiável e ágil para a operação da clínica ou hospital.

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins de portfólio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo, às decisões de design e aos desafios enfrentados.
      `,
      en: `
**BUSINESS PROBLEM**
The hospital nutritional management system, used predominantly on mobile devices (tablets), presented usability barriers that hindered the work of nutritionists and pantry teams. In a high-pressure hospital environment, accessing and entering critical patient data occurred slowly and was prone to errors.

**OBJECTIVE**
Optimize the mobile interface to ensure healthcare professionals access and record dietary information quickly and accurately, reducing friction and increasing operational safety.

**DIAGNOSIS**
• **Responsiveness Breakage:** The layout "disintegrated" when switching between landscape and portrait orientations, hiding critical buttons like "Save".
• **Accessibility Failure (Ergonomics):** Icons and buttons had touch areas below the minimum 44x44px standard, generating accidental clicks.
• **Visual Hierarchy and Noise:** Titles and patient data had the same visual weight (low scannability), and background images competed with vital information, impairing contrast.

**DIRECT IMPACT:**
• Increased Time on Task due to truncated flows and broken modals.
• Risk to patient safety (Error Rate) generated by accidental touches and misinterpretation of data.

**HYPOTHESIS**
If we perform a refactoring based on usability heuristics, implementing a responsive grid, adequate touch targets, and a clear visual hierarchy, we will reduce the team's cognitive load, minimizing operational errors and accelerating the dietary prescription flow.

**DISCOVERY PROCESS**
The project was conducted through rigorous technical and behavioral investigation:
• **Heuristic Interface Analysis:** Detailed evaluation to identify usability and accessibility violations in the current platform, based on Nielsen's principles.
• **Context of Use Analysis:** Mapping the real use scenario (tablets often operated with one hand while the professional moves around the hospital).
• **Ergonomic Evaluation:** Verification of touch areas, contrast, and readability, cross-referencing with global accessibility guidelines for touch interfaces.

**DESIGN SOLUTION**
• **Responsive and Ergonomic Grid:** Rebuilding the interface on a fluid grid, allowing easy lateral navigation for thumb reach on tablets.
• **Interaction Optimization:** Replacing central modals (which were covered by the virtual keyboard) with dedicated pages, eliminating flow blockage.
• **Typographic Hierarchy and Feedback:** Establishing varied weights (Bold for data, Regular for labels) and implementing visual states (Tags/Badges) for prescription status.
• **Cognitive Load Reduction:** Standardization of universal icons and removal of background noise for total focus on patient data.

**METRICS CONSIDERED**
• **Operational Efficiency (Time-on-Task):** Reduction of filling time by eliminating the user's struggle against the virtual keyboard and modals.
• **Patient Safety (Error Rate):** Minimization of accidental touches through correct sizing of touch targets.
• **Task Success Rate:** Fluid conclusion of the prescription process, regardless of screen orientation (landscape/portrait).

**EXPECTED RESULT**
The new interface proposal drastically reduces the risk of medical errors stemming from the software, improves ergonomics for the healthcare worker, and transforms a rigid system into a reliable and agile tool for clinic or hospital operations.

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins de portfólio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo, às decisões de design e aos desafios enfrentados.
      `
    },
    imageUrl: "/healthdash-capa.png",
    category: "UX Research",
    tags: ["UX Analysis", "Healthcare", "Responsive Design", "Heurísticas"],
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
      pt: "Refatoração ágil de fluxo de conciliação bancária, focando em visibilidade de processamento, redução de carga cognitiva e eficiência operacional sob restrições técnicas.",
      en: "Agile refactoring of bank reconciliation flow, focusing on processing visibility, cognitive load reduction, and operational efficiency under technical constraints."
    },
    fullDescription: {
      pt: `
**PROBLEMA DE NEGÓCIO**
O sistema de gestão financeira apresentava falhas críticas de usabilidade e falta de transparência no fluxo de Conciliação de Parcelas em Lote. A ausência de feedback do sistema gerava incerteza nos operadores financeiros durante o processamento de grandes volumes de dados. Além disso, a empresa enfrentava alta pressão por entregas rápidas, exigindo melhorias imediatas que não quebrassem o ecossistema legado.

**OBJETIVO**
Refatorar o fluxo de conciliação bancária com extrema agilidade para aumentar a visibilidade sistêmica e prevenir erros operacionais, garantindo uma implementação rápida e segura por parte da engenharia.

**DIAGNÓSTICO**
• **Cegueira Operacional:** Falta de clareza sobre o status de processamento de arquivos pesados.
• **Alta Carga Cognitiva:** Dificuldade para rastrear erros e sucessos em tabelas densas de dados financeiros.
• **Riscos de Compliance:** Operações financeiras de alto impacto sendo executadas sem fricção de segurança.
• **Restrição Técnica:** Impossibilidade de alterar o Design System ou UI Kit atual para não atrasar o cronograma.

**IMPACTO DIRETO:**
• Insegurança do usuário ao enviar arquivos (levando a interrupções indevidas).
• Aumento do volume de tickets de suporte solicitando status de processamentos.
• Risco financeiro (Error Rate) em conciliações acidentais.

**HIPÓTESE**
Se utilizarmos uma abordagem de Lean Design para inserir feedbacks claros de sistema (barras de progresso e modais de atenção) sem alterar a fundação do UI Kit, conseguiremos reduzir a incerteza do operador, diminuir chamados de suporte e entregar a melhoria em tempo recorde.

**PROCESSO DE DISCOVERY**
Para garantir uma entrega ágil sob alta restrição técnica, a fase de descoberta focou no mapeamento de atalhos viáveis para a engenharia:
• **Alinhamento de Restrições:** Decisão estratégica conjunta com Produto e Desenvolvimento de preservar o Design System para focar unicamente na solução funcional.
• **Auditoria de Fluxos Críticos:** Identificação exata dos momentos onde o usuário perdia a clareza sobre a ação do sistema.
• **Redlining e Especificação Ágil:** Substituição de protótipos interativos complexos por documentação direta nas interfaces (anotações de fluxo e sinalizações visuais), acelerando o hand-off e o entendimento técnico.

**SOLUÇÃO DE DESIGN**
• **Visibilidade e Feedback de Sistema:** Introdução de barras de progresso e mensagens de status (Aguardando, Processando) para blindar interrupções precoces.
• **Scanning Veloz na Interface:** Tabelas otimizadas com feedbacks visuais imediatos (ícones de sucesso/check verde e erro vermelho), permitindo identificar falhas rapidamente.
• **Prevenção de Erros:** Implementação de modais de confirmação como fricção deliberada antes de ações financeiras irreversíveis.
• **Navegação Orientada:** Reorganização do fluxo de conciliação com steppers lógicos ("Avançar" e "Voltar"), reduzindo a sobrecarga mental.

**MÉTRICAS CONSIDERADAS**
• **Time-to-Market (Agilidade):** Redução do ciclo de entrega do design para a engenharia.
• **Eficiência Operacional (Time-on-Task):** Centralização de ações (Enviar, Limpar, Relatórios) e flexibilidade de exportação (PDF/CSV) otimizando o tempo por sessão.
• **Taxa de Sucesso e Segurança (Error Rate):** Mitigação de execuções financeiras acidentais.
• **Redução de Suporte:** Queda esperada em chamados por dúvidas de processamento sistêmico.

**RESULTADO ESPERADO**
A adoção da metodologia de design direto para produção entrega um impacto massivo em pouquíssimo tempo. O colaborador ganha uma jornada segura e com feedbacks claros, enquanto a empresa reduz seus custos operacionais de suporte e otimiza o *time-to-market*.

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins de portfólio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo, às decisões de design e aos desafios enfrentados.
      `,
      en: `
**BUSINESS PROBLEM**
The financial management system had critical usability flaws and a lack of transparency in the Batch Installment Reconciliation flow. The absence of system feedback generated uncertainty among financial operators when processing large volumes of data. Furthermore, the company faced high pressure for quick deliveries, requiring immediate improvements that wouldn't break the legacy ecosystem.

**OBJECTIVE**
Refactor the bank reconciliation flow with extreme agility to increase systemic visibility and prevent operational errors, ensuring quick and safe implementation by engineering.

**DIAGNOSIS**
• **Operational Blindness:** Lack of clarity on the processing status of heavy files.
• **High Cognitive Load:** Difficulty tracking errors and successes in dense financial data tables.
• **Compliance Risks:** High-impact financial operations being executed without security friction.
• **Technical Constraint:** Inability to alter the current Design System or UI Kit to avoid delaying the schedule.

**DIRECT IMPACT:**
• User insecurity when sending files (leading to improper interruptions).
• Increased volume of support tickets requesting processing status.
• Financial risk (Error Rate) in accidental reconciliations.

**HYPOTHESIS**
If we use a Lean Design approach to insert clear system feedback (progress bars and attention modals) without altering the UI Kit foundation, we will be able to reduce operator uncertainty, decrease support calls, and deliver the improvement in record time.

**DISCOVERY PROCESS**
To ensure an agile delivery under high technical constraints, the discovery phase focused on mapping viable shortcuts for engineering:
• **Constraint Alignment:** Strategic joint decision with Product and Development to preserve the Design System to focus solely on the functional solution.
• **Critical Flow Audit:** Exact identification of moments where the user lost clarity on the system's action.
• **Redlining and Agile Specification:** Replacement of complex interactive prototypes with direct documentation on the interfaces (flow annotations and visual cues), accelerating hand-off and technical understanding.

**DESIGN SOLUTION**
• **System Visibility and Feedback:** Introduction of progress bars and status messages (Waiting, Processing) to shield early interruptions.
• **Fast Scanning Interface:** Optimized tables with immediate visual feedback (success icons/green check and red error), allowing rapid failure identification.
• **Error Prevention:** Implementation of confirmation modals as deliberate friction before irreversible financial actions.
• **Guided Navigation:** Reorganization of the reconciliation flow with logical steppers ("Next" and "Back"), reducing mental overload.

**METRICS CONSIDERED**
• **Time-to-Market (Agility):** Reduction in the design delivery cycle to engineering.
• **Operational Efficiency (Time-on-Task):** Centralization of actions (Send, Clear, Reports) and export flexibility (PDF/CSV) optimizing time per session.
• **Success and Security Rate (Error Rate):** Mitigation of accidental financial executions.
• **Support Reduction:** Expected drop in tickets regarding systemic processing doubts.

**EXPECTED RESULT**
Adopting the direct-to-production design methodology delivers a massive impact in very little time. The employee gains a safe journey with clear feedback, while the company reduces its operational support costs and optimizes time-to-market.

**NOTA DE CONFIDENCIALIDADE**
This project was developed in a corporate context. The product name, visual identity, and colors were adapted for portfolio purposes, preserving the company's confidentiality while maintaining fidelity to the process, design decisions, and challenges faced.
      `
    },
    imageUrl: "/smartsettlement-capa.png", 
    category: "Fintech",
    tags: ["Fintech", "UX Strategy", "Agile Design", "Finance"],
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
      pt: "Centralização de inteligência investigativa e automação de compliance para mitigar riscos de fraudes e reduzir a fadiga de decisão operacional.",
      en: "Centralization of investigative intelligence and compliance automation to mitigate fraud risks and reduce operational decision fatigue."
    },
    fullDescription: {
      pt: `
**PROBLEMA DE NEGÓCIO**
No cenário de expansão comercial e abertura de novos negócios, grandes empresas e holdings dependem de uma análise profunda de CPFs e CNPJs para mitigar riscos de fraudes e lavagem de dinheiro. O processo anterior era manual, lento e fragmentado, forçando analistas a consultarem múltiplas fontes isoladas, o que gerava um gargalo operacional crítico e alto risco de erro humano.

**OBJETIVO**
Transformar a investigação manual em uma plataforma de inteligência centralizada, reduzindo a carga cognitiva dos analistas e garantindo que o foco permaneça no julgamento estratégico e na detecção de anomalias, e não na coleta braçal de dados.

**DIAGNÓSTICO**
• **Dados Dispersos:** Dificuldade em identificar o "Beneficiário Final" (UBO) e status de PEP (Pessoa Exposta Politicamente).
• **Fadiga de Decisão:** Alta complexidade para cruzar informações de conformidade (PLD).
• **Impacto direto:**
  • Risco de aceitação de parcerias com entidades não idôneas.
  • Aumento do tempo de tarefa (Time on Task) e baixa previsibilidade do processo.

**HIPÓTESE**
Se centralizarmos a jornada de consulta em uma interface baseada em visualização de dados hierárquicos e indicadores de risco claros (red flags), reduziremos o tempo de análise e aumentaremos a precisão na detecção de fraudes, garantindo governança auditável.

**PROCESSO DE DISCOVERY**
A fase de descoberta foi fundamental para mapear a complexidade do sistema e as dores da operação:
• **Mapeamento de Processos (As-Is):** Identificação dos pontos de quebra no fluxo atual de trabalho dos operadores (Ver imagem: Fluxo Atual).
• **Imersão Qualitativa:** Levantamento estruturado das dores e ganhos reais da equipe de análise (Ver imagem: Discovery).
• **Definição de Personas:** Construção de perfis detalhados para direcionar a experiência às necessidades reais da operação (Ver imagem: Personas).
• **Matriz de Hipóteses:** Validação de problemas e oportunidades através da lógica "Acreditamos que / Acontece por conta de" (Ver imagem: Hipóteses).
• **Arquitetura de Informação:** Estruturação da plataforma unificada e definição das fases do roadmap estratégico (Ver imagem: Arquitetura).
• **Novo Fluxo do Usuário (To-Be):** Redesenho da jornada focada em automação e agilidade na tomada de decisão (Ver imagem: Novo Fluxo).

**SOLUÇÃO DE DESIGN**
• **Dashboard de Visão Geral:** Painel de monitoramento gerencial que resume o volume operado e o status dos cadastros, permitindo uma leitura rápida da saúde da operação de compliance (Ver imagem: Dashboard Geral).
• **Combate à Fadiga Mental:** Interface desenhada para priorizar alertas críticos e "red flags", reduzindo o ruído visual em dados exaustivos (Ver imagem: Monitoramento).
• **Estrutura Hierárquica:** Visualização em organograma para identificação intuitiva de vínculos societários e donos reais / UBO (Ver imagem: Estrutura Societária).
• **Gestão Unificada de Cadastros:** Centralização de perfis (PF/CNPJ), documentos e contratos em módulos integrados e auditáveis (Ver imagens: Gestão de Cadastros, Documentos, Contratos).
• **Eficiência na Busca:** Implementação de painéis de filtros avançados para otimizar a localização de perfis e históricos (Ver imagens: Filtros Avançados, Informações CNPJ).
• **Visão Sistêmica:** Entrega de um ecossistema completo, incluindo gestão de estados vazios e documentação técnica para engenharia (Ver imagem: Visão Geral UI).

**MÉTRICAS CONSIDERADAS**
• **Redução do Time-on-Task:** Diminuição do tempo médio para validar a idoneidade de parceiros.
• **Task Success Rate:** Aumento na assertividade da identificação de riscos sem suporte externo.
• **Adoção e Governança:** Melhoria nos níveis de conformidade e rastreabilidade das decisões.

**RESULTADO ESPERADO**
Uma operação de compliance mais ágil, segura e escalável, onde a tecnologia automatiza a coleta de evidências e o analista atua com precisão cirúrgica na mitigação de riscos.

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins de portfólio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo e às decisões de design.
      `,
      en: `
**BUSINESS PROBLEM**
In the scenario of commercial expansion and opening of new businesses, large companies and holdings depend on deep analysis of SSNs and EINs to mitigate fraud and money laundering risks. The previous process was manual, slow, and fragmented, forcing analysts to consult multiple isolated sources, which generated a critical operational bottleneck and a high risk of human error.

**OBJECTIVE**
Transform manual investigation into a centralized intelligence platform, reducing the cognitive load of analysts and ensuring the focus remains on strategic judgment and anomaly detection, not manual data collection.

**DIAGNOSIS**
• **Scattered Data:** Difficulty identifying the Ultimate Beneficial Owner (UBO) and PEP (Politically Exposed Person) status.
• **Decision Fatigue:** High complexity in crossing compliance information (AML).
• **Direct impact:**
  • Risk of accepting partnerships with non-reputable entities.
  • Increased Time on Task and low process predictability.

**HYPOTHESIS**
If we centralize the consultation journey in an interface based on hierarchical data visualization and clear risk indicators (red flags), we will reduce analysis time and increase precision in fraud detection, ensuring auditable governance.

**DISCOVERY PROCESS**
The discovery phase was fundamental to mapping the system's complexity and the operation's pain points:
• **Process Mapping (As-Is):** Identification of breaking points in the operators' current workflow (See gallery: Current Flow).
• **Qualitative Immersion:** Structured survey of the analysis team's real pains and gains (See gallery: Discovery).
• **Persona Definition:** Construction of detailed profiles to direct the experience to the operation's real needs (See gallery: Personas).
• **Hypothesis Matrix:** Validation of problems and opportunities using the "We believe that / Happens because of" logic (See gallery: Hypotheses).
• **Information Architecture:** Structuring the unified platform and defining strategic roadmap phases (See gallery: Architecture).
• **New User Flow (To-Be):** Redesign of the journey focused on automation and agility in decision making (See gallery: New Flow).

**DESIGN SOLUTION**
• **General Overview Dashboard:** Management monitoring panel that summarizes the operated volume and registration status, allowing a quick read of the compliance operation's health (See gallery: General Dashboard).
• **Combating Mental Fatigue:** Interface designed to prioritize critical alerts and red flags, reducing visual noise in exhaustive data (See gallery: Monitoring).
• **Hierarchical Structure:** Organizational chart visualization for intuitive identification of corporate links and real owners / UBO (See gallery: Corporate Structure).
• **Unified Registration Management:** Centralization of profiles (Individual/Corporate), documents, and contracts in integrated and auditable modules (See gallery: Registration Management, Documents, Contracts).
• **Search Efficiency:** Implementation of advanced filter panels to optimize the location of profiles and histories (See gallery: Advanced Filters, EIN Information).
• **Systemic Vision:** Delivery of a complete ecosystem, including empty states management and technical documentation for engineering (See gallery: General UI Overview).

**METRICS CONSIDERED**
• **Time-on-Task Reduction:** Decrease in average time to validate partner suitability.
• **Task Success Rate:** Increase in assertiveness of risk identification without external support.
• **Adoption and Governance:** Improvement in compliance levels and decision traceability.

**EXPECTED RESULT**
A more agile, secure, and scalable compliance operation, where technology automates evidence collection and the analyst acts with surgical precision in risk mitigation.

**CONFIDENTIALITY NOTE**
This project was developed in a corporate context. The product name, visual identity, and colors were adapted for portfolio purposes, preserving the company's confidentiality while maintaining fidelity to the process and design decisions.
      `
    },
    imageUrl: "/compliance-capa.png",
    category: "UX/UI Design & Architecture",
    tags: ["UX Strategy", "Discovery", "Compliance", "B2B"],
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
      pt: "Redesign estratégico de navegação e criação de um sistema de notificações para garantir conformidade corporativa e reduzir a carga cognitiva do usuário.",
      en: "Strategic navigation redesign and creation of a notification system to ensure corporate compliance and reduce user cognitive load."
    },
    fullDescription: {
      pt: `
**PROBLEMA DE NEGÓCIO**
O sistema legado apresentava uma falha crítica na entrega de comunicações vitais, como atualizações de conformidade e avisos técnicos. Essas informações eram perdidas em fluxos de e-mails externos ou ignoradas pelos usuários. Paralelamente, a navegação superior (Header) era visualmente datada e ineficiente, consumindo espaço operacional valioso sem entregar retorno funcional.

**OBJETIVO**
Centralizar a comunicação crítica dentro da plataforma, modernizar a navegação para otimizar a área de trabalho e implementar um sistema de rastreabilidade que garanta conformidade jurídica e administrativa.

**DIAGNÓSTICO**
• **Gap de Comunicação:** Informações sensíveis dispersas e sem garantia de recebimento.
• **Interface Ineficiente:** Header com alto ruído visual e baixa economia de escala.
• **Falta de Rastreabilidade:** Inexistência de métricas de leitura para mensagens obrigatórias.
• **Baixa Autonomia:** Usuários impossibilitados de gerenciar o volume de alertas recebidos.

**IMPACTO DIRETO:**
• Risco de descumprimento de normas (Compliance).
• Sobrecarga cognitiva devido à desorganização visual.
• Aumento de tickets de suporte por "falta de aviso".

**HIPÓTESE**
Se centralizarmos as comunicações em um sistema de notificações passivo no Header (usando feedbacks de status) e estruturarmos painéis de gestão segmentados, aumentaremos a taxa de abertura das mensagens e garantiremos a ciência documental dos usuários sobre avisos críticos.

**PROCESSO DE DISCOVERY**
• **Análise de Heurísticas:** Auditoria focada em Estética e Design Minimalista para identificar ruídos desnecessários na navegação antiga.
• **Mapeamento de Requisitos Legais:** Identificação da necessidade de segmentação granular (Quem, Onde, Quando) para validade jurídica das mensagens.
• **Estudo de Modelos Mentais:** Aplicação da Lei de Jakob para entender como usuários interagem com caixas de entrada tradicionais e replicar essa facilidade.
• **Análise Ergonômica:** Aplicação da Lei de Fitts para otimizar áreas de clique e menus de perfil, visando reduzir o esforço motor.

**SOLUÇÃO DE DESIGN**
• **Redesign do Header:** Limpeza visual e introdução da Heurística de Visibilidade do Status do Sistema através de badges de contagem.
• **Painel do Gestor (Hub de Governança):** Criação de fluxo segmentado por grupos e localização (UF), com dashboard de taxa de leitura em tempo real.
• **Painel do Usuário (Inbox Experience):** Interface baseada em padrões de e-mail (Inbox/Arquivados) e central de preferências para garantir Controle e Liberdade do Usuário.

**MÉTRICAS CONSIDERADAS**
• **Taxa de Abertura (Open Rate):** Aumento do engajamento com notificações centralizadas.
• **Índice de Conformidade:** Garantia de 100% de rastreabilidade para comunicados obrigatórios.
• **Satisfação do Usuário:** Percepção de modernização e limpeza do sistema.
• **Curva de Aprendizado:** Redução do tempo de adaptação à nova funcionalidade (pela adoção de padrões conhecidos).

**RESULTADO ESPERADO**
A solução transforma a comunicação do sistema em um ativo administrativo seguro, reduzindo o risco de conformidade. A interface modernizada melhora a eficiência operacional ao otimizar o Header e oferecer ao usuário o controle sobre sua própria jornada de informação.

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins de portfólio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo, às decisões de design e aos desafios enfrentados.
      `,
      en: `
**BUSINESS PROBLEM**
The legacy system had a critical flaw in delivering vital communications, such as compliance updates and technical notices. This information was lost in external email flows or ignored by users. Concurrently, the top navigation (Header) was visually outdated and inefficient, consuming valuable operational space without functional return.

**OBJECTIVE**
Centralize critical communication within the platform, modernize navigation to optimize the workspace, and implement a traceability system that ensures legal and administrative compliance.

**DIAGNOSIS**
• **Communication Gap:** Sensitive information dispersed with no guarantee of receipt.
• **Inefficient Interface:** Header with high visual noise and low economy of scale.
• **Lack of Traceability:** Absence of read metrics for mandatory messages.
• **Low Autonomy:** Users unable to manage the volume of received alerts.

**DIRECT IMPACT:**
• Risk of non-compliance.
• Cognitive overload due to visual disorganization.
• Increase in support tickets due to "lack of notice".

**HYPOTHESIS**
If we centralize communications in a passive notification system in the Header (using status feedback) and structure segmented management panels, we will increase the message open rate and ensure users' documented awareness of critical notices.

**DISCOVERY PROCESS**
• **Heuristic Analysis:** Audit focused on Aesthetics and Minimalist Design to identify unnecessary noise in the old navigation.
• **Legal Requirements Mapping:** Identification of the need for granular segmentation (Who, Where, When) for the legal validity of messages.
• **Mental Models Study:** Application of Jakob's Law to understand how users interact with traditional inboxes and replicate that ease.
• **Ergonomic Analysis:** Application of Fitts's Law to optimize click areas and profile menus, aiming to reduce motor effort.

**DESIGN SOLUTION**
• **Header Redesign:** Visual cleanup and introduction of the System Status Visibility Heuristic through count badges.
• **Manager Panel (Governance Hub):** Creation of a segmented flow by groups and location, with a real-time read rate dashboard.
• **User Panel (Inbox Experience):** Interface based on email standards (Inbox/Archived) and a preference center to ensure User Control and Freedom.

**METRICS CONSIDERED**
• **Open Rate:** Increased engagement with centralized notifications.
• **Compliance Index:** Guarantee of 100% traceability for mandatory communications.
• **User Satisfaction:** Perception of modernization and system cleanup.
• **Learning Curve:** Reduction in adaptation time to the new feature.

**EXPECTED RESULT**
The solution transforms system communication into a secure administrative asset, reducing compliance risk. The modernized interface improves operational efficiency by optimizing the Header and giving the user control over their own information journey.

**CONFIDENTIALITY NOTE**
This project was developed in a corporate context. The product name, visual identity, and colors were adapted for portfolio purposes, preserving the company's confidentiality while maintaining fidelity to the process, design decisions, and challenges faced.
      `
    },
    imageUrl: "/notificacoes-capa.png",
    category: "UI Design",
    tags: ["UI Design", "Heurísticas", "Information Architecture"],
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
      pt: "Estruturação de Design Ops e maturidade sistêmica através de Figma Variables e documentação funcional para acelerar o ciclo de entrega de produtos.",
      en: "Structuring Design Ops and systemic maturity through Figma Variables and functional documentation to accelerate the product delivery cycle."
    },
    fullDescription: {
      pt: `
**PROBLEMA DE NEGÓCIO**
A biblioteca de design existente era estática e básica, não acompanhando a velocidade de crescimento dos produtos. A falta de padronização em níveis profundos (tokens) e a ausência de documentação funcional geravam gargalos constantes no hand-off, resultando em retrabalho para o time de design e inconsistências na implementação pelo time de engenharia.

**OBJETIVO**
Transformar uma biblioteca visual limitada em um ecossistema de design vivo e escalável (Design Ops), otimizando a manutenção do sistema e acelerando a prototipação e o desenvolvimento sem interromper as entregas contínuas.

**DIAGNÓSTICO**
• **Dívida Técnica Visual:** Falta de padronização em níveis de tokens de design.
• **Gargalo de Hand-off:** Documentação inexistente ou insuficiente para desenvolvedores.
• **Inconsistência de Componentes:** Uso variado de elementos que deveriam ser globais.
• **Barreira Cultural:** Necessidade de aculturar o time sobre boas práticas de componentização avançada.

**IMPACTO DIRETO:**
• Aumento do retrabalho (Rework Rate).
• Lentidão no ciclo de vida do produto (Time-to-Market).
• Alta curva de aprendizado para novos membros da equipe.

**HIPÓTESE**
Se implementarmos uma arquitetura de tokens via Figma Variables e estruturarmos uma documentação funcional profunda de componentes, reduziremos o esforço cognitivo na criação de interfaces e garantiremos uma fidelidade de 1:1 entre design e código.

**PROCESSO DE DISCOVERY**
Para elevar a maturidade do sistema, o projeto seguiu uma investigação técnica rigorosa:
• **Auditoria de Interface:** Mapeamento de todos os componentes existentes para identificar inconsistências e redundâncias.
• **Entrevistas com Engenharia:** Diagnóstico dos principais pontos de atrito durante o hand-off para entender quais informações técnicas eram vitais na documentação.
• **Benchmarking de Design Ops:** Estudo de padrões de mercado para estruturação de coleções lógicas de variáveis (Espaçamentos, Border Radius e Cores Semânticas).
• **Mapeamento de Regras de Negócio:** Definição de tokens de suporte nativo a Light/Dark Mode alinhados à identidade da marca.

**SOLUÇÃO DE DESIGN**
• **Arquitetura de Variáveis e Tokens:** Estruturação de coleções lógicas e separação entre cores primitivas e semânticas, blindando o sistema contra quebras visuais.
• **Componentização Avançada:** Reestruturação de componentes complexos utilizando Auto Layout, Variants, Booleans e regras de acessibilidade.
• **Documentação Funcional:** Criação de guias exaustivos com anatomia, estados, comportamentos e princípios de UX atrelados a cada componente.
• **Mentoria e Cultura:** Repasse de conhecimento técnico para o time, garantindo a adoção correta e a sustentabilidade do ecossistema.

**MÉTRICAS CONSIDERADAS**
• **Redução de Design Debt:** Diminuição do tempo gasto corrigindo inconsistências visuais.
• **Velocidade de Entrega (Time-to-Market):** Agilidade na criação de novas telas utilizando a biblioteca otimizada.
• **Eficiência de Onboarding:** Redução do tempo de aprendizado de novos designers através da documentação viva.
• **Fidelidade de Implementação:** Consistência entre o protótipo e o produto final (Storybook/Chromatic).

**RESULTADO ESPERADO**
Um fluxo de trabalho otimizado onde o Design System atua como um acelerador estratégico, permitindo que o time foque em estratégia e experiência do usuário, enquanto a interface mantém consistência absoluta e escalabilidade técnica.

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins de portfólio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo, às decisões de design e aos desafios enfrentados.
      `,
      en: `
**BUSINESS PROBLEM**
The existing design library was static and basic, failing to keep up with the speed of product growth. The lack of standardization at deep levels (tokens) and the absence of functional documentation created constant bottlenecks in the hand-off, resulting in rework for the design team and implementation inconsistencies by the engineering team.

**OBJECTIVE**
Transform a limited visual library into a living, scalable design ecosystem (Design Ops), optimizing system maintenance and accelerating prototyping and development without interrupting continuous deliveries.

**DIAGNOSIS**
• **Visual Technical Debt:** Lack of standardization at design token levels.
• **Hand-off Bottleneck:** Non-existent or insufficient documentation for developers.
• **Component Inconsistency:** Varied use of elements that should be global.
• **Cultural Barrier:** Need to acculturate the team on advanced componentization best practices.

**DIRECT IMPACT:**
• Increased Rework Rate.
• Sluggishness in the product lifecycle (Time-to-Market).
• High learning curve for new team members.

**HYPOTHESIS**
If we implement a token architecture via Figma Variables and structure deep functional component documentation, we will reduce cognitive effort in interface creation and guarantee a 1:1 fidelity between design and code.

**PROCESSO DE DISCOVERY**
To elevate the system's maturity, the project followed rigorous technical investigation:
• **Interface Audit:** Mapping all existing components to identify inconsistencies and redundancies.
• **Engineering Interviews:** Diagnosis of main friction points during hand-off to understand which technical information was vital in the documentation.
• **Design Ops Benchmarking:** Study of market standards to structure logical variable collections (Spacing, Border Radius, and Semantic Colors).
• **Business Rules Mapping:** Definition of native support tokens for Light/Dark Mode aligned with the brand identity.

**SOLUÇÃO DE DESIGN**
• **Variables and Tokens Architecture:** Structuring logical collections and separating primitive and semantic colors, shielding the system against visual breaks.
• **Advanced Componentization:** Restructuring complex components using Auto Layout, Variants, Booleans, and accessibility rules.
• **Functional Documentation:** Creation of exhaustive guides with anatomy, states, behaviors, and UX principles tied to each component.
• **Mentorship and Culture:** Transfer of technical knowledge to the team, ensuring correct adoption and ecosystem sustainability.

**METRICS CONSIDERED**
• **Design Debt Reduction:** Decrease in time spent fixing visual inconsistencies.
• **Time-to-Market (Delivery Speed):** Agility in creating new screens using the optimized library.
• **Onboarding Efficiency:** Reduced learning time for new designers through living documentation.
• **Implementation Fidelity:** Consistency between the prototype and the final product (Storybook/Chromatic).

**EXPECTED RESULT**
An optimized workflow where the Design System acts as a strategic accelerator, allowing the team to focus on strategy and user experience, while the interface maintains absolute consistency and technical scalability.

**CONFIDENTIALITY NOTE**
This project was developed in a corporate context. The product name, visual identity, and colors were adapted for portfolio purposes, preserving the company's confidentiality while maintaining fidelity to the process, design decisions, and challenges faced.
      `
    },
    imageUrl: "/ds-capa.png",
    category: "Design System",
    tags: ["Design System", "Design Ops", "Figma Variables"],
    technologies: ["Figma", "Tokens", "Documentation", "Mentorship"],
    client: "Confidencial",
    role: "Product Designer / UI",
    liveUrl: "#",
    gallery: [
      { url: "/ds-variaveis.png", title: "Estruturação de Variáveis: Espaçamentos, Radius e Modos de Cor / Taxonomia e Organização Lógica do Repositório" },
      { url: "/ds-cores.png", title: "Inventário de Cores Primitivas e Escalas" },
      { url: "/ds-documentacao.png", title: "Documentação Funcional: Regras de UX e Anatomia de Componentes" },      
    ]
  },
   {
    id: "prevmax-previdencia",
    title: {
      pt: "PrevMax — Previdência Complementar",
      en: "PrevMax — Complementary Pension"
    },
    status: "active",
    embedUrl: "https://embed.figma.com/proto/UowipTJL4ggqVwP828F6Eb/Portf%C3%B3lio-PLATAFORMA?page-id=0%3A1&node-id=4-4108&viewport=575%2C347%2C0.06&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A4094&embed-host=share",
    description: {
      pt: "Plataforma de previdência complementar com foco em acessibilidade, clareza de informações financeiras e conformidade regulatória.",
      en: "Complementary pension platform focused on accessibility, clarity of financial information, and regulatory compliance."
    },
    fullDescription: {
      pt: `
**PROBLEMA DE NEGÓCIO**
Participantes de fundos de pensão enfrentavam dificuldades para gerir seus planos devido à alta complexidade das regras previdenciárias e interfaces pouco intuitivas. O cenário era agravado por um público majoritariamente maduro e com baixo letramento digital, gerando dependência de canais de suporte físico e baixa autonomia nas decisões financeiras.

**OBJETIVO**
Traduzir regras reguladas e sensíveis em uma jornada digital simples e inclusiva, promovendo a autonomia do usuário na gestão de seu futuro financeiro sem comprometer a conformidade legal.

**DIAGNÓSTICO**
• **Barreira Cognitiva:** Linguagem técnica e fluxos burocráticos que afastavam o usuário.
• **Baixo Letramento Digital:** Necessidade de interface extremamente acessível e intuitiva para o perfil etário.
• **Fragmentação de Informação:** Dados de saldo, contribuições e benefícios dispersos.

**Impacto direto:**
• Alta taxa de erro em simulações (Error Rate).
• Baixa confiança na plataforma digital (Trust & Safety).

**HIPÓTESE**
Se estruturarmos a arquitetura de informação com foco em clareza, acessibilidade (WCAG) e suporte à tomada de decisão (simuladores), aumentaremos a confiança e a adesão dos participantes ao canal digital, reduzindo custos operacionais de atendimento.

**PROCESSO DE DISCOVERY**
Para guiar a solução e validar as hipóteses, o projeto seguiu uma abordagem estruturada e orientada ao negócio:

**1. Levantamento de Requisitos:** Alinhamento com stakeholders sobre restrições legais, mapeamento de requisitos funcionais e priorização de transparência e acessibilidade.
**2. Pesquisa e Estratégia:** Pesquisa qualitativa com operadores, benchmarking de mercado, definição de personas (foco em letramento digital) e User Story Mapping para priorização de fluxos críticos.
**3. Ideação e Testes:** Prototipação orientada a regras de negócio (não apenas estética) e testes iterativos com usuários para ajustes contínuos baseados em feedback qualitativo.

**SOLUÇÃO DE DESIGN**
• **Fluxos Simplificados:** Redesenho ágil das jornadas de adesão, consulta de saldos e simulação de benefícios.
• **Design Inclusivo:** Aplicação de boas práticas de usabilidade voltadas especificamente para o público maduro.
• **Componentização Estratégica (Design System):** Desenvolvimento colaborativo com Front-end. Os componentes foram desenhados no Figma, implementados no Storybook e validados via Chromatic, garantindo fidelidade e eficiência.

**MÉTRICAS CONSIDERADAS**
• Taxa de conclusão do fluxo (Task Success Rate) em simulações de benefício.
• Redução de erros (Error Rate) em formulários de adesão.
• Tempo de tarefa (Time on Task) na consulta de extratos e saldos.
• Adoção da funcionalidade (Feature Adoption) nos canais digitais.

**RESULTADO ESPERADO**
A plataforma remove a fricção e o medo de lidar com finanças, transformando a previdência em um ativo compreensível. A solução reduz a carga operacional de suporte, garantindo retenção, engajamento e segurança jurídica para a empresa.

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins de portfólio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo, às decisões de design e aos desafios enfrentados.
      `,
      en: `
**BUSINESS PROBLEM**
Pension fund participants faced difficulties managing their plans due to the high complexity of pension rules and unintuitive interfaces. The scenario was aggravated by a mostly mature audience with low digital literacy, generating dependence on physical support channels and low autonomy in financial decisions.

**OBJECTIVE**
Translate highly regulated and sensitive rules into a simple and inclusive digital journey, promoting user autonomy in managing their financial future without compromising legal compliance.

**DIAGNOSIS**
• **Cognitive Barrier:** Technical language and bureaucratic flows that alienated the user.
• **Low Digital Literacy:** Need for an extremely accessible and intuitive interface for the age profile.
• **Information Fragmentation:** Dispersed balance, contribution, and benefit data.

**Direct Impact:**
• High error rate in simulations.
• Low trust in the digital platform (Trust & Safety).

**HYPOTHESIS**
If we structure the information architecture focusing on clarity, accessibility (WCAG), and decision-making support (simulators), we will increase participants' trust and feature adoption in the digital channel, reducing operational support costs.

**DISCOVERY PROCESS**
To guide the solution and validate hypotheses, the project followed a structured, business-oriented approach:

**1. Requirements Gathering:** Alignment with stakeholders on legal restrictions, functional requirements mapping, and prioritizing transparency and accessibility.
**2. Research & Strategy:** Qualitative research with operators, market benchmarking, persona definition (focusing on digital literacy), and User Story Mapping to prioritize critical flows.
**3. Ideation & Testing:** Prototyping oriented to business rules (not just aesthetics) and iterative user testing for continuous adjustments based on qualitative feedback.

**DESIGN SOLUTION**
• **Simplified Flows:** Agile redesign of enrollment journeys, balance inquiries, and benefit simulations.
• **Inclusive Design:** Application of usability best practices aimed specifically at the mature audience.
• **Strategic Componentization (Design System):** Collaborative development with Front-end. Components were designed in Figma, implemented in Storybook, and validated via Chromatic, ensuring fidelity and efficiency.

**METRICS CONSIDERED**
• Task Success Rate in benefit simulations.
• Error Rate reduction in enrollment forms.
• Time on Task for statement and balance inquiries.
• Feature Adoption across digital channels.

**EXPECTED RESULT**
The platform removes the friction and fear of dealing with finances, transforming pensions into a comprehensible asset. The solution reduces the operational support load, ensuring retention, engagement, and legal security for the company.

**CONFIDENTIALITY NOTE**
This project was developed in a corporate context. The product name, visual identity, and colors were adapted for portfolio purposes, preserving the company's confidentiality while maintaining fidelity to the process, design decisions, and challenges faced.
      `
    },
    imageUrl: "/prevmax-capa.png",
    category: "UX Strategy",
    tags: ["UX Research", "Design System", "Acessibilidade"],
    technologies: ["Figma", "Miro", "Microsoft Clarity", "Prototyping"],
    client: "PrevMax",
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
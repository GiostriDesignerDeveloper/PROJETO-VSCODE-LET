import { Project } from "../types";

export const projectsData: Project[] = [
  // ========================================================================
  // PROJETOS ATIVOS (Seus 2 projetos reais)
  // ========================================================================
{
    id: "prevmax-previdencia",
    title: "PrevMax — Previdência Complementar",
    status: "active",
    embedUrl: "https://embed.figma.com/proto/UowipTJL4ggqVwP828F6Eb/Portf%C3%B3lio-PLATAFORMA?page-id=0%3A1&node-id=4-4108&viewport=575%2C347%2C0.06&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A4094&embed-host=share",
    description: "Plataforma de previdência complementar com foco em acessibilidade, clareza de informações financeiras e conformidade regulatória.",
    fullDescription: `
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
      }
    ]
  },
  {
    id: "redesign-navegacao-notificacoes",
    title: "Redesign de Navegação e Sistema de Notificações",
    status: "active",
    embedUrl: "",
    description: "Redesign estratégico de navegação e criação de um sistema de notificações para garantir conformidade corporativa e reduzir a carga cognitiva do usuário.",
    fullDescription: `
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
      }
    ]
  },
// --- PROJETO 3: DESIGN SYSTEM (NOVO) ---
  {
    id: "evolucao-design-system",
    title: "Evolução e Escalabilidade de Design System",
    status: "active",
    embedUrl: "",
    description: "Estruturação de Design Ops e maturidade sistêmica através de Figma Variables e documentação funcional para acelerar o ciclo de entrega de produtos.",
    fullDescription: `
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
    imageUrl: "/ds-capa.png",
    category: "design",
    tags: ["Design System", "Design Ops", "Figma Variables"],
    technologies: ["Figma", "Tokens", "Documentação", "Mentoria"],
    client: "Confidencial",
    role: "Product Designer / UI",
    liveUrl: "#",
    githubUrl: "#",
    gallery: [
      {
        url: "/ds-variaveis.png",
        title: "Estruturação de Variáveis: Espaçamentos, Radius e Modos de Cor",
      },
      {
        url: "/ds-cores.png",
        title: "Inventário de Cores Primitivas e Escalas",
      },
      {
        url: "/ds-documentacao.png",
        title: "Documentação Funcional: Regras de UX e Anatomia de Componentes",
      },
      {
        url: "/ds-pastas.png",
        title: "Taxonomia e Organização Lógica do Repositório",
      }
    ]
  },
  // --- PROJETO 4: PLATAFORMA B2B DE COMPRAS (ATUALIZADO COM IMAGENS REAIS) ---
  {
    id: "plataforma-b2b-compras",
    title: "Plataforma B2B de Compras e Cotações",
    status: "active",
    embedUrl: "",
    description: "Estruturação end-to-end de um ecossistema de compras, otimizando negociações corporativas com foco na redução da carga cognitiva e eficiência operacional.",
    fullDescription: `
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
• Custos ocultos devido à dificuldade de auditar orçamentos.
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
• **Eficiência Operacional (Time-to-Task):** Redução do tempo necessário para completar o ciclo de cotação.
• **Task Success Rate:** Aumento da assertividade na escolha de fornecedores devido à clareza na comparação de propostas.
• **Governança (Compliance):** Melhoria no nível de rastreabilidade e segurança documental das compras.
• **Adoção do Produto (Feature Adoption):** Transição bem-sucedida do modelo analógico/fragmentado para o digital centralizado.

**RESULTADO ESPERADO**
A plataforma eleva a maturidade do processo de compras da empresa, transformando uma atividade burocrática em uma operação estratégica. A solução garante conformidade legal e resulta em negociações mais rápidas e com maior custo-benefício (impactando o *bottom line* da companhia).

**NOTA DE CONFIDENCIALIDADE**
Este projeto foi desenvolvido em contexto corporativo. O nome do produto, identidade visual e cores foram adaptados para fins de portfólio, preservando a confidencialidade da empresa e mantendo a fidelidade ao processo, às decisões de design e aos desafios enfrentados.
    `,
    imageUrl: "/cotacao.png",
    category: "design",
    tags: ["UX Strategy", "B2B", "Pair Design"],
    technologies: ["Figma", "Auto Layout", "Pair Design", "Testes de Usabilidade"],
    client: "Confidencial",
    role: "UX/UI Designer",
    liveUrl: "#",
    githubUrl: "#",
    gallery: [
      {
        url: "/negociacao.png",
        title: "Fluxo de Negociação: Gestão de status e termos entre partes.",
      },
      {
        url: "/cadastro-precos-fornecedores.png",
        title: "Comparação de Propostas: Base de dados estruturada para análise de preços e fornecedores.",
      },
      {
        url: "/cadastro-fornecedor.png",
        title: "Cadastro de Fornecedor: Estruturação de dados.",
      },
      {
        url: "/perfil-edicao.png",
        title: "Edição de Perfil: Mapeamento de perfis e gestão de dados do usuário.",
      },
      {
        url: "/login.png",
        title: "Portal de Acesso: Entrada do ecossistema B2B.",
      }
    ]
  },
  // --- PROJETO 5: HEALTHDASH (AUDITORIA UX) ---
  {
    id: "healthdash-analise-usabilidade",
    title: "Análise de Usabilidade e Interface Responsiva",
    status: "active",
    embedUrl: "", 
    description: "Análise heurística e proposta de redesign responsivo para um sistema de gestão nutricional hospitalar, focado em eficiência operacional e segurança do paciente.",
    fullDescription: `
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
    imageUrl: "/healthdash-capa.png",
    category: "design",
    tags: ["UX Analysis", "Healthcare", "Responsive Design", "Heurísticas"],
    technologies: ["Figma", "UX Research", "Acessibilidade", "UI Design"],
    client: "HealthDash", 
    role: "UX/UI Designer",
    liveUrl: "#",
    githubUrl: "#"
  },
  // --- PROJETO 6: SMARTSETTLEMENT (FINTECH / AGILIDADE) ---
 {
    id: "smartsettlement-gestao-financeira",
    title: "Gestão de Conciliação Financeira",
    status: "active",
    embedUrl: "", 
    description: "Refatoração ágil de fluxo de conciliação bancária, focando em visibilidade de processamento, redução de carga cognitiva e eficiência operacional sob restrições técnicas.",
    fullDescription: `
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

// ─────────────────────────────────────────────────────────────
// src/utils/analytics.ts
// Google Analytics 4 — portfólio Letícia Rodrigues
// Stack: React + Vite + TypeScript
// ─────────────────────────────────────────────────────────────

// Tipagem para o gtag (evita erro "does not exist on window")
declare global {
  interface Window {
    gtag: (
      type: 'event' | 'config' | 'js',
      action: string,
      params?: {
        platform?: string;
        event_category?: string;
        event_label?: string;
        project_name?: string;
        case_name?: string;
        case_category?: string;
        scroll_depth?: number;
        time_seconds?: number;
        file_name?: string;
        source_page?: string;
        contact_type?: string;
        prototype_tool?: string;
        image_label?: string;
        utm_source?: string;
        utm_medium?: string;
        utm_campaign?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

// Helper interno — evita repetir o guard "typeof window" em todo lugar
const sendEvent = (eventName: string, params: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
};

// ─────────────────────────────────────────────────────────────
// EXISTENTES (mantidos com a mesma assinatura)
// ─────────────────────────────────────────────────────────────

/**
 * Rastreia cliques em links de contato (LinkedIn, WhatsApp, Email, etc.)
 * Uso: trackContactClick('linkedin')
 */
export const trackContactClick = (platform: string) => {
  sendEvent('contact_click', {
    platform,
    event_category: 'Engagement',
    event_label: `Click to ${platform}`,
  });
};

/**
 * Rastreia cliques em botões de visualização de protótipos ou cases
 * Uso: trackProjectView('Painel de Produção')
 */
export const trackProjectView = (projectName: string) => {
  sendEvent('view_project_details', {
    project_name: projectName,
    event_category: 'Portfolio_Interactions',
    event_label: `Opened ${projectName}`,
  });
};

// ─────────────────────────────────────────────────────────────
// NOVOS EVENTOS
// ─────────────────────────────────────────────────────────────

/**
 * Rastreia abertura de um case study específico
 * Uso: trackCaseView('Painel de Produção', 'ERP')
 */
export const trackCaseView = (caseName: string, caseCategory: string) => {
  sendEvent('case_study_view', {
    case_name: caseName,
    case_category: caseCategory,
    event_category: 'Portfolio_Interactions',
  });
};

/**
 * Rastreia profundidade de scroll em um case (25 / 50 / 75 / 100)
 * Uso: initScrollTracker('Painel de Produção') — ver hook abaixo
 */
export const trackCaseScroll = (caseName: string, depth: 25 | 50 | 75 | 100) => {
  sendEvent('case_study_scroll', {
    case_name: caseName,
    scroll_depth: depth,
    event_category: 'Engagement',
    event_label: `${caseName} — ${depth}%`,
  });
};

/**
 * Rastreia download do currículo
 * Uso: trackCVDownload('homepage')
 */
export const trackCVDownload = (sourcePage: string = 'unknown') => {
  sendEvent('cv_download', {
    file_name: 'leticia-rodrigues-cv.pdf',
    source_page: sourcePage,
    event_category: 'Engagement',
    event_label: `CV downloaded from ${sourcePage}`,
  });
};

/**
 * Rastreia tempo gasto lendo um case (em segundos)
 * Chamada ideal: no evento beforeunload ou ao desmontar o componente
 * Uso: trackTimeOnCase('Painel de Produção', 142)
 */
export const trackTimeOnCase = (caseName: string, seconds: number) => {
  sendEvent('time_on_case', {
    case_name: caseName,
    time_seconds: Math.round(seconds),
    event_category: 'Engagement',
    event_label: `${caseName} — ${Math.round(seconds)}s`,
  });
};

/**
 * Rastreia clique em imagem/screenshot de projeto
 * Uso: trackImageClick('dashboard-principal', 'Painel de Produção')
 */
export const trackImageClick = (imageLabel: string, caseName: string) => {
  sendEvent('project_image_click', {
    image_label: imageLabel,
    case_name: caseName,
    event_category: 'Portfolio_Interactions',
  });
};

/**
 * Rastreia clique em link de protótipo externo (Figma, Framer, etc.)
 * Uso: trackPrototypeClick('Painel de Produção', 'figma')
 */
export const trackPrototypeClick = (caseName: string, tool: string = 'figma') => {
  sendEvent('prototype_link_click', {
    case_name: caseName,
    prototype_tool: tool,
    event_category: 'Portfolio_Interactions',
    event_label: `${caseName} — ${tool}`,
  });
};

// ─────────────────────────────────────────────────────────────
// HOOKS E UTILITÁRIOS REUTILIZÁVEIS
// ─────────────────────────────────────────────────────────────

/**
 * Hook: rastreia scroll depth automaticamente em páginas de case
 * Cole no componente da página do case:
 *
 *   useEffect(() => {
 *     const cleanup = initScrollTracker('Painel de Produção');
 *     return cleanup;
 *   }, []);
 */
export const initScrollTracker = (caseName: string): (() => void) => {
  const milestones: Array<25 | 50 | 75 | 100> = [25, 50, 75, 100];
  const reached = new Set<number>();

  const handleScroll = () => {
    const scrolled =
      ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100;

    milestones.forEach((milestone) => {
      if (scrolled >= milestone && !reached.has(milestone)) {
        reached.add(milestone);
        trackCaseScroll(caseName, milestone);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Retorna cleanup para usar no return do useEffect
  return () => window.removeEventListener('scroll', handleScroll);
};

/**
 * Hook: rastreia tempo gasto no case e dispara ao sair da página
 * Cole no componente da página do case:
 *
 *   useEffect(() => {
 *     const cleanup = initTimeTracker('Painel de Produção');
 *     return cleanup;
 *   }, []);
 */
export const initTimeTracker = (caseName: string): (() => void) => {
  const startTime = Date.now();

  const handleUnload = () => {
    const seconds = (Date.now() - startTime) / 1000;
    trackTimeOnCase(caseName, seconds);
  };

  window.addEventListener('beforeunload', handleUnload);

  // Também dispara ao desmontar o componente (navegação SPA)
  return () => {
    window.removeEventListener('beforeunload', handleUnload);
    const seconds = (Date.now() - startTime) / 1000;
    // Só rastreia se ficou mais de 3 segundos (evita ruído)
    if (seconds > 3) trackTimeOnCase(caseName, seconds);
  };
};

/**
 * Lê os parâmetros UTM da URL atual e retorna um objeto
 * Útil para logar a origem do visitante junto a outros eventos
 *
 * Uso:
 *   const utm = getUTMParams();
 *   // { utm_source: 'linkedin', utm_medium: 'social', utm_campaign: 'candidatura-ifood' }
 */
export const getUTMParams = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

  return utmKeys.reduce<Record<string, string>>((acc, key) => {
    const value = params.get(key);
    if (value) acc[key] = value;
    return acc;
  }, {});
};
// Tipagem para o Google Analytics (evita erro de 'gtag does not exist on window')
declare global {
  interface Window {
    gtag: (
      type: 'event',
      action: string,
      params: {
        platform?: string;
        event_category?: string;
        event_label?: string;
        project_name?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

/**
 * Rastreia cliques em links de contato (LinkedIn, WhatsApp, Email, etc)
 */
export const trackContactClick = (platform: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_click', {
      'platform': platform,
      'event_category': 'Engagement',
      'event_label': `Click to ${platform}`
    });
  }
};

/**
 * Rastreia cliques em botões de visualização de protótipos ou cases
 */
export const trackProjectView = (projectName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_project_details', {
      'project_name': projectName,
      'event_category': 'Portfolio_Interactions',
      'event_label': `Opened ${projectName}`
    });
  }
};
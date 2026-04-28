export interface TranslatedText {
  pt: string;
  en: string;
}

export interface Project {
  id: string;
  title: TranslatedText;
  description: TranslatedText;
  fullDescription: TranslatedText;
  client?: string;
  role?: string;
  status?: string;
  imageUrl: string;
  embedUrl?: string; // Para o protótipo interativo do Figma
  liveUrl?: string;
  category: string;
  tags: string[];
  technologies?: string[];
  gallery?: {
    url: string;
    title: string;
  }[];
}

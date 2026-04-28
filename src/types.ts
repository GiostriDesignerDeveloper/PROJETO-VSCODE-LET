// 1. Criamos esse tipo para facilitar
export interface TranslatedText {
  pt: string;
  en: string;
}

export interface Project {
  id: string;
  title: TranslatedText;       // Mudou de string para TranslatedText
  description: TranslatedText; // Mudou de string para TranslatedText
  fullDescription: TranslatedText; // Mudou de string para TranslatedText
  imageUrl: string;
  category: string;
  tags: string[];
  technologies: string[];
  client: string;
  role: string;
  liveUrl?: string;
  embedUrl?: string;
  gallery?: { url: string; title: string }[];
}

export interface TranslatedText {
  pt: string;
  en: string;
}

export interface Project {
  id: string;
  title: TranslatedText;
  status: "active" | "coming-soon";
  embedUrl?: string;
  description: TranslatedText;
  fullDescription: TranslatedText;
  imageUrl: string;
  category: string;
  tags: string[];
  technologies?: string[];
  methods?: string[];
  principles?: string[];
  client?: string;
  role?: string;
  liveUrl?: string;
  gallery?: { url: string; title: TranslatedText }[];
}
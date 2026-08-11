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
tags: string[] | { pt: string[]; en: string[] };
technologies?: string[] | { pt: string[]; en: string[] };
methods?: string[] | { pt: string[]; en: string[] };
principles?: string[] | { pt: string[]; en: string[] };
  client?: string;
  role?: string;
  liveUrl?: string;
  gallery?: { url: string; title: TranslatedText }[];
}